<template>
<div>
	<el-card class="box-card">
		<p>操作提醒:</p>
		<p style="margin-left: 55px">1.40日后母羊精料降至体重的1%</p>
		<p style="margin-left: 55px">2.母羊、羔羊分别接种羊痘疫苗</p>
		<p style="margin-left: 55px">3.羔羊驱虫：吡喹酮</p>
		<p style="margin-left: 55px">4.母羊驱虫：吡喹酮</p>
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
					{proName:"母羊山羊痘疫苗",markTag:"免疫档案"},
					{proName:"羔羊山羊痘疫苗",markTag:"免疫档案"},
					{proName:"母羊精料降至体重的1%",markTag:"阶段营养"},
					{proName:"母羊驱虫吡喹酮",markTag:"驱虫档案"},
					{proName:"羔羊驱虫吡喹酮",markTag:"驱虫档案"},

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