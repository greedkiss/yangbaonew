<template>
<div>
	<el-card class="box-card">
		<p >操作提醒:</p>
		<p style="margin-left: 55px">1.母羊精料降至体重的0.7%饲喂空怀期饲料，添加云羊宝有机中药，提高发情率、配种率</p>
		<p style="margin-left: 55px">2.羔羊：50日至断奶后1月添加云羊宝有机中药提高存活率</p>
		<p style="margin-left: 55px">3.后备种羊二选</p>
		<p style="margin-left: 55px">4.母羊、羔羊分别接种口蹄疫</p>
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
					{proName:"母羊精料降至体重的0.7%饲喂空怀期饲料，添加云羊宝有机中药",markTag:"阶段营养	"},
					{proName:"50日至断奶后1月添加云羊宝有机中药提高存活率",markTag:"阶段营养"},
					{proName:"母羊口蹄疫疫苗",markTag:"免疫档案"},
					{proName:"羔羊口蹄疫疫苗",markTag:"免疫档案"},

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