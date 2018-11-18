<template>
    <div>
        <admin-table
            modpath="category"
            :has-unpass="false"
            :has-sup="false"
            :no-prac="true"
            :hide-filter="true">
        </admin-table>
    </div>
</template>

<script>
import AdminTable from '@/components/admin/table'
// import { getFarms, deleteFarm } from '@/util/getdata'

export default {
    components: {
        AdminTable
    },

    data () {
        return {
            headers: [
                {prop: 'cateName', label: '品种名'},
                {prop: 'cateIntr', label: '品种介绍'},
                {prop: 'cateplace', label: '品种产地'},
                {prop: 'mark', label: '备注'},
            ]
        }
    }
}
</script>
