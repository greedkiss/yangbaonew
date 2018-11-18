<template>
<div>
	<el-card class="box-card">
		<p>操作提醒:</p>
		<p style="margin-left: 55px">1.伊维菌素+阿苯达唑、吡奎酮，间隔10天灌服</p>
		<p style="margin-left: 55px">2.三联四防疫苗、口蹄疫疫苗，间隔10天分别注射</p>
		<p style="margin-left: 55px">3.母羊240天后进入空怀阶段调理期</p>
		<p style="margin-left: 55px">4.公羊育种300天后实时配种</p>
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
					{proName:"三联四防疫苗",markTag:"存栏管理"},
					{proName:"伊维菌素+阿苯达唑",markTag:"驱虫档案"},
					{proName:"口蹄疫疫苗",markTag:"免疫档案"},
					{proName:"吡奎酮",markTag:"驱虫档案"},
				],
				sumtext:"育种二阶段羊只总数"
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