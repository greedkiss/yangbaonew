<template>
	<div class="livestock-sale">
		<el-table :data="tableData" :border="true">
			<el-table-column
				label="耳牌号"
				width="150"
				prop="tag"
			>
			</el-table-column>
			<el-table-column
				label="死亡原因"
				width="200"
				prop="reason"
			>
			</el-table-column>
			<el-table-column
				label="处理方法"
				width="150"
				prop="way"
			>
			</el-table-column>
			<el-table-column
				label="时间"
				width="150"
				prop="time"
			>
			</el-table-column>
		</el-table>
		 <div class="block">
        <el-pagination layout="prev, pager, next" :total="total" :page-size="10" @current-change="current_change">
        </el-pagination>
        </div>
	</div>
</template>
<script>
import { isReqSuccessful } from '@/util/jskit'
import { getUserById , getDeadSheep } from '@/util/getdata'
export default {
	mounted(){
		let id = this.$route.params.id
         getUserById(id).then(res => {
            if (isReqSuccessful(res)) {
                this.user = res.data.model;
            }
         }).then(this.fetchData) 
	},
	data() {
		return {
			tableData:[],
			total:0,
			page:1,
		}
	},
	methods: {
		async fetchData(){
			let {userFactory } = this.user
			let param = {
                			start: (this.page - 1)*10,
               				size: 10
           				} 
           	this.tableData = []
			getDeadSheep (userFactory , param).then(res => {
                if (isReqSuccessful(res)) {
               		 this.total = Math.ceil(res.data.number/param.size)*10
               		 let data = res.data.dead
               		 data.forEach((v) => {
               		   	 let {trademarkEarTag , reason , method ,date} = v
               		   	 let tag = trademarkEarTag
               		   	 let way = method
               		   	 let index = date.indexOf(" ")
               		   	 let time = date.substring(0,index)
               		   	 console.log(index)
               		   	 let obj = {tag , reason, way , time}
               		   	 this.tableData.push(obj)
               		 })
                }
            })
			
		},
		current_change(currentPage){
            this.page=currentPage;
            let id = this.$route.params.id
         getUserById(id).then(res => {
            if (isReqSuccessful(res)) {
                this.user = res.data.model;
            }
         }).then(this.fetchData) 
        }
	}
}
</script>
<style lang="stylus">
.livestock-sale
	padding 10px 0 0 30px
	.el-table
		display table-caption
</style>

