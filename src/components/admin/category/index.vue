<template>
    <div>
        <data-cur
            title="品种管理"
            modpath="category"
            :update-submitter="$route.query.edit > 0"
            :models.sync="models"
            :items="items">
        </data-cur>
    </div>
</template>

<script>
import dataCur from '@/components/admin/common/dataCUR'
// import { postFarm, updateFarm, getFarmById } from '@/util/getdata'

export default {
    components: {
        dataCur
    },

    data () {
        return {
            items: [
                {label: '品种名', model: 'categoryName'},
                {label: '品种产地', model: 'categoryPla'},
            ],
            models: {
                cteName: null,
                ctePlace: null,
            }
        }
    }
}
</script>
