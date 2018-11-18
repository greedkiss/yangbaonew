<template>
<div>
	<el-card class="box-card">
		<p>操作提醒:</p>
		<p style="margin-left: 55px">1.1小时内吃饱初乳，人工辅助喂奶3天</p>
		<p style="margin-left: 55px">2.手动录入产羔记录</p>
	</el-card>
	<Admintable
	:tableData1="tableData1"
	:tableData2="tableData2"
	:sumtext="sumtext">
	</Admintable>
</div>
</template>

<script>
import Admintable from '@/components/admin/intel_table'

export default{
	components:{
		Admintable
	},
	data(){
			return{
				tableData1:[
					{buildingNu:"3栏",columnNu:"3栏" , earTagNu:"G1111111" ,totalNu:"5"},
					{buildingNu:"2栏",columnNu:"3栏" , earTagNu:"G1122222" ,totalNu:"2"},
				],
				tableData2:[
		
				],
				sumtext:"产羔0-5日羊只总数"
			}
		},
}
</script>

<style lang="stylus">
.box-card
	p
	   color #2891d1
	   font-size 15px
</style>