<template>
    <div>
        <admin-table
            class="breed-table"
            modpath="intelManage"
            :headers="headers">            
        </admin-table>
    </div>
</template>

<script>
import AdminTable from '@/components/admin/intel_manage'
//import { getAllBreeding, deleteBreeding } from '@/util/getdata'

export default {
    components: {
        AdminTable
    },

    data () {
        return {
            headers: [
                {prop: 'sheepState', label: '阶段' ,width: '160'},
                {prop: 'sheepBuilding', label: '栋号',width: '160'},
                {prop: 'sheepCol', label: '栏号',width: '160'},
                {prop: 'sheepEartag', label: '耳牌号',width: '160'},
                { label: '备注', prop: 'remark' ,width: '160'}
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>

