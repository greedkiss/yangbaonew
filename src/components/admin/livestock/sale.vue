<template>
	<div class="livestock-sale">
		<el-table :data="tableData" :border="true">
			<el-table-column
				label="商标耳牌号"
				width="150"
				prop="tag"
			>
			</el-table-column>
			<el-table-column
				label="销售目的养殖厂"
				width="200"
				prop="factory"
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
import { isReqSuccessful } from '@/util/jskit';
import { getUserById , getSaleSheep } from '@/util/getdata'
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
			getSaleSheep (userFactory , param).then(res => {
                if (isReqSuccessful(res)) {
               		 this.total = Math.ceil(res.data.number/param.size)*10
               		 let data = res.data.all
               		 data.forEach((v) => {
               		   	 let {trademarkEarTag , endName , salesTime} = v
               		   	 let tag = trademarkEarTag
               		   	 let factory = endName
               		   	 let index = salesTime.indexOf(" ")
               		   	 let time = salesTime.substring(0,index)
               		   	 let obj = {tag , factory,  time}
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
	// data() {
	// 	return {
	// 		// tableData:[
	// 		// 	{
	// 		// 		tag: 'G165418',
	// 		// 		factory: 'daa',
	// 		// 		time: '2018-07-09'
	// 		// 	},
	// 		// 	{
	// 		// 		tag: 'G161548',
	// 		// 		factory: 'aadaa',
	// 		// 		time: '2018-07-09'
	// 		// 	},
	// 		// 	{
	// 		// 		tag: 'G165148',
	// 		// 		factory: 'aaaa',
	// 		// 		time: '2018-07-09'
	// 		// 	},
	// 		// 	{
	// 		// 		tag: 'G116548',
	// 		// 		factory: 'aaaa',
	// 		// 		time: '2018-07-09'
	// 		// 	},
	// 		// ]
	// 		tableData:[],


</script>
<style lang="stylus">
.livestock-sale
	padding 10px 0 0 30px
	.el-table
		display table-caption
</style>

