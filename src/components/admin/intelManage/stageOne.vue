<template>
<div>
	<el-card class="box-card">
		<p>操作提醒:</p>
		<p style="margin-left: 55px">1.完成未完成的免疫和驱虫保健</p>
		<p style="margin-left: 55px">2.如果免疫和驱虫档案完整，则观察母羊发情并适时配种（羔羊出生错过冬天最冷的时节）</p>
		<p style="margin-left: 55px">3.分群、分栏、分批次管理并录入配种管理档案，配种时间约1月内为一个批次，确定该批次平均配种日</p>
		<p style="margin-left: 55px">4.饲喂云羊宝有机山羊空怀阶段（或妊娠前期）饲料</p>
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
					{proName:"妊娠前期饲料",markTag:"阶段营养"},
				],
				sumtext:"妊娠前三月羊只总数"
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