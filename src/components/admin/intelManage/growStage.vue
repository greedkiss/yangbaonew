<template>
<div>
	<el-card class="box-card">
		<p>操作提醒:</p>
		<p style="margin-left: 55px">1.断奶、羔羊分栋和分栏，创建存栏档案</p>
		<p style="margin-left: 55px">2.第61天母羊分栋、分栏，创建存栏档案，母羊进入体况调理期</p>
		<p style="margin-left: 55px">3.运动放牧、自由饮清洁水</p>
		<p style="margin-left: 55px">4.70日注射小反疫苗</p>
		<p style="margin-left: 55px">5.第120天分出种羊和商品羊的同时修改羊只品类，分别建立存栏档案</p>
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
					{proName:"断奶母羊和羔羊分栏管理",markTag:"存栏管理"},
					{proName:"小反疫苗",markTag:"免疫档案"},
					{proName:"第120天选种分栏管理",markTag:"存栏管理"},
				],
				sumtext:"生长阶段羊只总数"
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