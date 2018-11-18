<template>
    <div>    
		<area-select></area-select>
        <div class="trace-charts">
            <div>
                <ve-line :data="chartData" :settings="chartSettings" width="500px" height="500px"></ve-line>
            </div>
        </div>
		<state-info :data="chartData.rows[0].pm" :state="state.pm"  label="质量"></state-info>	
		 <el-table
			:data="tableData"
			:stripe="true"
			>
			<el-table-column
			prop="date"
			label="日期"
			align="center"
			>
			</el-table-column>
			<el-table-column
			prop="pm"
			label="PM2.5"
			align="center"			
			>
			</el-table-column>
			<el-table-column
			prop="state"
			label="状态"
			align="center"			
			>
			</el-table-column>
		</el-table>
		<div class="block">
        <el-pagination layout="prev, pager, next" :total="total" :page-size="5" @current-change="current_change">
        </el-pagination>
        </div>
    </div>
</template>

<script>
import VeLine from  'v-charts/lib/line'
import AreaSelect from './area_select'
import StateInfo from './state_pm'
import {getUserById , getTraceData} from '@/util/getdata'


export default {
    components: {
        VeLine, AreaSelect, StateInfo 
	},
	
	data () {
		return {
			total:0,
			tableData:[],
			chartData: {
				columns: ['date', 'pm'],
				rows: [
					
				]
			},

			state: {
				pm: {
					warn: [35, 75 ,115 ,150 ,250],
				},
			},

			chartSettings: {
				legendName: {
					pm: 'PM2.5'
				},
				label: {
					normal: {
						show: true
					}
				}
			},
		}
	},
	mounted(){
		let id = this.$route.params.id
		this.page = 0
        getUserById(id).then(res => {  
            this.user = res.data.model
            let {userFactory} = this.user
        	getTraceData(userFactory , this.page).then(res =>{
        		let datas = res.data.models
        		this.total = res.data.size
        		datas.forEach((item) => {
        		  let date = item.time
        		  let pm = item.pm
        		  let state = item.pmReturn
        		  let obj = {date , pm , state}
        		  this.tableData.push(obj)
        		  date = date.substring(5,19)
       			  let object = {date , pm }
       			  this.chartData.rows.push(object)
        		})
        	})
        })    
	},
    created () {
		this.chartData.rows.forEach( val => {
			this.$set( val, "info", '正常状态');
		});
    },  

    methods: {
		// stateInfo( data ) {
		// 	if ( data.state === 0 ) {
		// 		data.info = "正常状态"
		// 		return 'success'
		// 	} else {
		// 		data.info = "警告状态"		
		// 		return 'warning'				
		// 	}
		// }
		current_change(currentPage){
    		this.page = currentPage -1 
    		this.tableData = []
    		this.chartData.rows = []	
            let {userFactory} = this.user
        	getTraceData(userFactory , this.page).then(res =>{
        		let datas = res.data.models
        		datas.forEach((item) => {
        		  let date = item.time
        		  let pm = item.pm
        		  let state = item.pmReturn
        		  let obj = {date , pm , state}
        		  this.tableData.push(obj)
        		  date = date.substring(5,19)
       			  let object = {date , pm }
       			  this.chartData.rows.push(object)
       			  })
        	})
        },
    }
}
</script>

<style lang="stylus" scoped>
.trace-charts
	display inline-block
	margin-left 80px
	font-size 0
	>div
		display inline-block
		width 50%
		font-size 14px
		>*
			display inline-block
			vertical-align middle

.el-table 
	margin 0 auto	
	width 90%	
</style>
