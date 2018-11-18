<template>
    <div>
        <admin-table
            modpath="health/disinfect"
            hide-eartag-filter
            has-common-header
            has-common-tail-header
            :get-data="getAllDisinfects"
            :delete-data="deleteDisinfect"
            :headers="headers">
        </admin-table>
    </div>
</template>

<script>
import AdminTable from '@/components/admin/table'
import { getAllDisinfects, deleteDisinfect } from '@/util/getdata'

export default {
    components: {
        AdminTable
    },

    data () {
        return {
            getAllDisinfects,
            deleteDisinfect,
            headers: [
                {prop: 'disinfectTime', label: '日期', width: 200},
                {prop: 'disinfectEartag', label: '商标耳牌号'},
                {prop: 'place', label: '消毒栏/栋'},
                {prop: 'disinfectName', label: '消毒药名称'},
                {prop: 'dose', label: '用药剂量'},
                {prop: 'disinfectWay', label: '消毒方法'},
                {prop: 'remark', label: '备注', width: '200'},
            ]
        }
    }
}
</script>
