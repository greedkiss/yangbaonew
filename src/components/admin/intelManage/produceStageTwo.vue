<template>
<div>
	<el-card class="box-card">
		<p>操作提醒:</p>
		<p style="margin-left: 55px">1.产羔后的第六天至第10天结束</p>
		<p style="margin-left: 55px">2.母羊逐步恢复饲喂量（20天内）增至体重的1.5%</p>
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
					{proName:"母羊逐步恢复饲喂量",markTag:"阶段营养"},
				],
				sumtext:"产羔6-10日羊只总数"
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