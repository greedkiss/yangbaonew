<template>
<div>
<el-card>
	 <el-table
    :data="tableData1"
    border
    :summary-method="getSummaries"
    show-summary
    :sum-text="sumtext"
    style="width: 100%;
    margin-top: 20px">
    <el-table-column
    	prop="buildingNu"
    	label ="栋号"
    	width="256"
    >
   	</el-table-column>
   	<el-table-column
    	prop="columnNu"
    	label ="栏号"
    	width="256"
    >
   	</el-table-column> 
   	<el-table-column
    	prop="earTagNu"
    	label ="母羊耳牌号"
    	width="256"
    >
   	</el-table-column> 
   	<el-table-column
    	prop="totalNu"
    	label ="数量"
    	width="256"
    >
   	</el-table-column>    
  </el-table>
</el-card>


<el-card>
   <el-table
    :data="tableData3"
    border
    :summary-method="getSummaries"
    show-summary
    :sum-text="sumtext2"
    style="width: 100%;
    margin-top: 20px">
    <el-table-column
      prop="buildingNu"
      label ="栋号"
      width="256"
    >
    </el-table-column>
    <el-table-column
      prop="columnNu"
      label ="栏号"
      width="256"
    >
    </el-table-column> 
    <el-table-column
      prop="earTagNu"
      label ="羔羊耳牌号"
      width="256"
    >
    </el-table-column> 
    <el-table-column
      prop="totalNu"
      label ="数量"
      width="256"
    >
    </el-table-column>    
  </el-table>
</el-card>


<el-card style="width: 100%;
    margin-top: 20px">
	<el-table
	border
        v-loading="load"
        ref="table"
        tooltip-effect="dark"
        class="admin-table"
        :data="tableData2"
        style="width: 100%;
    	margin-top: 20px"
    >
    <el-table-column
    	prop="proName"
    	label ="项目名称"
    	width="205"
    >
   	</el-table-column>
   	<el-table-column
    	prop="comSituation"
    	label ="完成情况"
    	width="205"
    >
   	</el-table-column> 	
   	<el-table-column
    	prop="deadline"
    	label ="疫苗免疫到期时间"
    	width="205"
    >
   	</el-table-column>
   	<el-table-column
    	prop="operation"
    	label ="操作"
    	width="205"
    >
    <template slot-scope="scope">
                     <div class="opr" >
                        <span @click="cellClick()">点击进入</span>
                    </div>
     </template>
   	</el-table-column> 	
   	<el-table-column
    	prop="markTag"
    	label ="备注"
    	width="205"
    >
   	</el-table-column> 	
	</el-table>
	 <!-- <el-button type="primary" @click="addPro" style="margin-top: 20px">添加项目</el-button> -->
</el-card>
<el-button size="small" @click="returnTotal()" type="primary">返回生产环节一览表</el-button>
</div>
</template>

<script >
	export default{
    props:{
      tableData1: {
        type: Array
      },
      tableData2: {
        type: Array
      },
      tableData3: {
        type: Array
      },
      sumtext:{
        type: String
      },
      sumtext2:{
        type: String
      },
    },
		data(){
      return{

      }
			// return{
			// 	tableData1:[{buildingNu:"3栏",columnNu:"3栏" , earTagNu:"G1111111" ,totalNu:"5"},
			// 				{buildingNu:"2栏",columnNu:"3栏" , earTagNu:"G1122222" ,totalNu:"2"},
			// 	],
			// 	tableData2:[{proName:"妊娠前期饲料",
				
			// 	},		
			// 	]
			// }
		},
		methods:{
			//添加项目
			// addPro(){
			// 	this.tableData2.push({proName:"项目名称",
			// 	})
			// },
			returnTotal(){
				let pathid = this.$route.params.id
	            let path = `/admin/${pathid}/intelManage/total`
	            this.$router.push(path)
			},
			cellClick() {
            let pathid = this.$route.params.id
            let path = `/admin/${pathid}/nutrition/stage/prac`
            this.$router.push(path)
        },
		}
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/color'
.el-table th
    border-left 2px solid #98c9e6
    color #fff
    background-color color-main !important

.el-button
	margin-top 20px
</style>