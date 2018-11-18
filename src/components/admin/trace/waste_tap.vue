<template>
    <div>    
		<area-select></area-select>
        <div class="trace-charts">
            <div>
                <ve-line :data="chartData" :settings="chartSettings" width="500px" height="500px"></ve-line>
            </div>
        </div>
		<state-info :data="chartData.rows[0]['nh']" :state="state['nh']"  label="氨气浓度"></state-info>	
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
			prop="nh"
			label="氨气浓度"
			align="center"			
			>
			</el-table-column>
			<el-table-column
			prop="state"
			label="状态"
			align="center"			
			>
				<!-- <template slot-scope="scope">
					<el-tag :type="stateInfo( scope.row )">{{scope.row.info}}</el-tag>
				</template> -->
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
import StateInfo from './state_info'
import {getUserById , getTraceData} from '@/util/getdata'


export default {
    components: {
        VeLine, AreaSelect, StateInfo 
	},
	
	data () {
		return {
			tableData:[],
			total:0,
			chartData: {
				columns: ['date', 'nh'],
				rows: [
					// { date: '2018-01-03 21:33', 'nh':123, state: 0 },
					// { date: '2018-01-03 21:31', 'nh':173, state: 1},
					// { date: '2018-01-03 21:29', 'nh':153, state: 1},
					// { date: '2018-01-03 21:27', 'nh':153, state: 1},
					// { date: '2018-01-03 21:25', 'nh':163, state: 1},
					// { date: '2018-01-03 21:23', 'nh':153, state: 1}
				]
			},

			state: {
				"nh": {
					normal: [100, 200],
					warn: [200, 500],
				},
			},

			chartSettings: {
				legendName: {
					nh: '氨气浓度'
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
	        		  let nh = item.nh3
	        		  let state = item.nh3Return
	        		  let obj = {date , nh , state }
	        		  this.tableData.push(obj)
	        		  date = date.substring(5,19)
	       			  let object = {date , nh }
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
		current_change(currentPage){
    		this.page = currentPage -1 
    		this.tableData = []
    		this.chartData.rows = []	
            let {userFactory} = this.user
        	getTraceData(userFactory , this.page).then(res =>{
        		let datas = res.data.models
	        		this.total = res.data.size
	        		datas.forEach((item) => {
	        		  let date = item.time
	        		  let nh = item.nh3
	        		  let state = item.nh3Return
	        		  let obj = {date , nh , state }
	        		  this.tableData.push(obj)
	        		  date = date.substring(5,19)
	       			  let object = {date , nh }
	       			  this.chartData.rows.push(object)
       			  })
        	})
    	}
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
