<template>
<div>
	<el-card class="box-card">
		<p>操作提醒:</p>
		<p style="margin-left: 55px">1.录入系谱档案、存栏档案、免疫档案等生产管理档案，按公母、大小、健康进行分栏</p>
		<p style="margin-left: 55px">2.羊只下车第1天应激营养调理（见方案）</p>
		<p style="margin-left: 55px">3.第2-4天羊应激营养、饲喂（见方案）</p>
		<p style="margin-left: 55px">4.第5天后羊应激营养、饲喂（见方案）</p>
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
					{proName:"妊娠前期饲料",markTag:"系谱档案"},
					{proName:"第1天羊只下车应激营养调理",markTag:"阶段营养档案"},
					{proName:"第1天羊只下车应激营养调理",markTag:"阶段营养档案"},
					{proName:"第2-4天羊应激营养、饲喂"},
					{proName:"第5天后羊应激营养、饲喂"},
				],
				sumtext:"引种期羊只总数"
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