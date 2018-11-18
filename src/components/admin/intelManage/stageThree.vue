<template>
<div>
	<el-card class="box-card">
		<p>操作提醒:</p>
		<p style="margin-left: 55px">1.产前疫苗三联四防、口疮疫苗</p>
		<p style="margin-left: 55px">2.云羊宝有机中药保健</p>
		<p style="margin-left: 55px">3.第五个月的第20天，精料减少1/3至产羔后5天</p>
		<p style="margin-left: 55px">4.产羔时录入产羔记录、并人工确定平均产羔时间</p>
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
					{proName:"三联四防疫苗",markTag:"免疫档案"},
					{proName:"口疮疫苗",markTag:"免疫档案"},
					{proName:"云羊宝有机中药保健（精料配方里面的其他显示）",markTag:"阶段营养"},
					{proName:"精料减少1/3至产羔后5天",markTag:"阶段营养"},
				],
				sumtext:"妊娠第五个月羊只总数"
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