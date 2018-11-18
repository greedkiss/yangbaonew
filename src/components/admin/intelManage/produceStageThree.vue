<template>
<div>
	<el-card class="box-card">
		<p>操作提醒:</p>
		<p style="margin-left: 55px">1.诱导羔羊吃鲜草</p>
		<p style="margin-left: 55px">2.给羔羊打耳标、建立系谱档案、建立存栏档案</p>
		<p style="margin-left: 55px">3.给羔羊接种三联四防疫苗</p>
		<p style="margin-left: 55px">4.种羊初选</p>
	</el-card>
	<Admintable
	:tableData1="tableData1"
	:tableData2="tableData2"
	:tableData3="tableData3"
	:sumtext="sumtext"
	:sumtext2="sumtext2">
	</Admintable>
</div>
</template>

<script>
import Admintable from '@/components/admin/intel_moretable'

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
				tableData3:[
					{buildingNu:"3栏",columnNu:"3栏" , earTagNu:"G1111111" ,totalNu:"5"},
					{buildingNu:"2栏",columnNu:"3栏" , earTagNu:"G1122222" ,totalNu:"2"},
				],
				tableData2:[
					{proName:"羔羊系谱档案",markTag:"系谱档案"},
					{proName:"羔羊存栏档案",markTag:"存栏档案"},
					{proName:"羔羊三联四防疫苗",markTag:"免疫营养"},
				],
				sumtext:"目前阶段母羊只总数",
				sumtext2:"目前阶段羔羊只总数"
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