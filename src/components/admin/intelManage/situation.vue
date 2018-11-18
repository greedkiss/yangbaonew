<template>
    <div class="situation">
        <el-table
            ref="table"
            tooltip-effect="dark"
            class="admin-table"
            :data="tableData"
            @cell-click="cellClick"
            @header-click="headerClick"
            >
            <el-table-column
                show-overflow-tooltip
                v-for="(th, i) in headers"
                :key="i"
                align='center'
                :prop="th.prop"
                :label="th.label"
                :width="220"
            >
            </el-table-column>
        </el-table>
        <p class="table-title">免疫情况一览</p>
        <el-table
            ref="table_2"
            tooltip-effect="dark"
            class="admin-table-2"
            :data="tableData_2"
            >
            <el-table-column
                show-overflow-tooltip
                v-for="(th, i) in headers_2"
                :key="i"
                align='center'
                :prop="th.prop"
                :label="th.label"
                :width="180"
            >
            </el-table-column>
        </el-table>
        <el-button type="primary"  @click="$router.back()">返回</el-button>
    </div>
</template>

<script>
// import { getBreeding, findNutrition, getUserById } from '@/util/getdata'
import { isReqSuccessful } from '@/util/jskit'
import Bus from '@/components/bus.js'

export default {

    data () {
        return {
			tableData: [
                {
                    sheepState : "引种阶段",
                    sheepBuilding : 1,
                    sheepCol : 1,
                    sheepEartag : 'M000001',
                    remark :null
                 }
			],
            tableData_2: [
                {
                    building: '1栏/1栋',
                    eartag : 'M000001',
                    immuneOne : '完成',
                    immuneTwo : '未完成',
                    immuneThree : '完成',
                    immuneFour : '未完成',
                }
            ],
            user: {

            },
            headers: [
                {prop: 'sheepState', label: '阶段'},
                {prop: 'sheepBuilding', label: '栋号'},
                {prop: 'sheepCol', label: '栏号'},
                {prop: 'sheepEartag', label: '耳牌号'},
                { label: '备注', prop: 'remark' }
            ],
            headers_2: [
                { label: '栏/栋', prop: 'building' },
                { label: '耳牌号', prop: 'eartag' },
                { label: '免疫1', prop: 'immuneOne' },
                { label: '免疫2', prop: 'immuneTwo' },
                { label: '免疫3', prop: 'immuneThree' },
                { label: '免疫4', prop: 'immuneFour' },
            ]
        }
	},

    methods: {
        cellClick( row, column, cell ) {
            
        },
        headerClick( column, event) {
            console.log( column)
        }
    },
    
	mounted() {	
       
    },

    created () {
        
    },
}
</script>

<style lang="stylus">
.situation
    .table-title
        text-align center
        margin-top 50px
    .admin-table-2 
        margin-top 20px
    .el-button
        display: block;
        margin: 20px auto;    
    .el-table
        .cell
            cursor pointer
</style>