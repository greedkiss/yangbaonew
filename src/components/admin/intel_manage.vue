<template>
        <el-table
            v-loading="load"
            ref="table"
            tooltip-effect="dark"
            class="admin-table"
            :data="tableData"
            >
            <el-table-column
                show-overflow-tooltip
                v-for="(th, i) in headers"
                :key="i"
                align='center'
                :prop="th.prop"
                :label="th.label"
            >
            </el-table-column>
            <el-table-column
                v-if="false"
                class="action"
                fixed="right"
                label="操作"
                align='center'
                width="160">
                <template slot-scope="scope">
                     <div class="opr" >
                        <span @click="cellClick(scope.row, scope.column)">查看免疫情况</span>
                       <!--  <template>
                            <span @click="edit(scope.$index)" v-if="showEdit">编辑</span>
                            <span @click="deleteItem(scope.$index)">删除</span>
                        </template> -->
                    </div>
                </template>
            </el-table-column>
        </el-table>

       <!--  <el-pagination
            layout="prev, pager, next"
            :total="total"
            @current-change="fetchData"
            :current-page.sync="page">
        </el-pagination> -->
    </div>
</template>

<script>
export default{
    props:{
        modpath:{
            type: String
        },
        
         headers: {
            type: Array
        },
        isCheck: {
            type: Boolean,
            default: false
        },
         releaseType: {
            type: String,
            default: ''
        },
        hideView: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return{
            tableData:[{
            sheepState : "引种阶段",
            sheepBuilding : 1,
            sheepCol : 1,
            sheepEartag : 'M000001',
            remark :null,
            sheepStateAll: '养只总数'
        }],
        }
    },
    methods :{
         cellClick(row , column) {
            let id = row.id
            let pathid = this.$route.params.id
            let path = `/admin/${pathid}/${this.modpath}/case?case=${id}`
            this.$router.push(path)
        },
    }
}



</script>







<style lang="stylus">
@import '~@/assets/css/color'
.el-table th
    border-left 2px solid #98c9e6
    color #fff
    background-color color-main !important
</style>