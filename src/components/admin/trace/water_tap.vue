<template>
    <div>    
		<area-select></area-select>
        <div class="trace-charts">
            <div>
                <ve-histogram :data="chartData" :settings="chartSettings" :extend="chartExtend" width="400px" height="400px"></ve-histogram>
            </div>
        </div>
		<state-info :data="chartData.rows[0].quality" :state="state.quality"  label="温度"></state-info>
		<state-info :data="chartData.rows[0].ph" :state="state.ph"  label="PH值"></state-info>		
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
			prop="quality"
			label="温度"
			align="center"			
			>
			</el-table-column>
			<el-table-column
			label="温度状态"
			align="center"	
			prop ="tmpstate"		
			>
			</el-table-column>
			<el-table-column
			prop="ph"
			label="PH值"
			align="center"			
			>
			</el-table-column>
			<el-table-column
			label="ph值状态"
			align="center"
			prop ="phstate"			
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
import VeHistogram from 'v-charts/lib/histogram'
import AreaSelect from './area_select'
import StateInfo from './state_info'
import {getUserById , getTraceData} from '@/util/getdata'


export default {
    components: {
        VeHistogram, AreaSelect, StateInfo 
	},
	
	data () {
		return {
			chartData: {
				columns: ['date', 'quality', 'ph'],
				rows: [
					// { date: '2018-01-03 21:33', ph:5.0, quality: 20},
					// { date: '2018-01-03 21:31', ph:6.0, quality: 123},
					// { date: '2018-01-03 21:29', ph:8.0, quality: 2123},
					// { date: '2018-01-03 21:27', ph:6.0, quality: 4123},
				]
			},
			tableData :[],
			user:null,
			page:null,
			total:null,
			state: {
				quality: {
					normal: [20, 30],
					warn: [10, 20, 30, 35],
				},
				ph: {
					normal: [6.0, 8.0],
					warn: [4.0,6.0,8.0, 9.0],					
				}
			},

			chartSettings: {
				axisSite: {
					right: ['ph']
				},
				labelMap: {
					quality: '温度',
					ph: 'PH值'
				}
			},			
			chartExtend : {
				series (v) {
					v.forEach(i => {
						i.barWidth = 20
					})
					return v
				}
			}
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
        		console.log(this.total)
        		datas.forEach((item) => {
        		  let date = item.time
        		  let quality = item.tempWater
        		  let tmpstate = item.tempWaterReturn
        		  let ph = item.ph
        		  let phstate = item.phReturn
        		  let obj = {date , quality , tmpstate ,ph ,phstate}
        		  this.tableData.push(obj)
        		  date = date.substring(5,19)
       			  let object = {date , quality ,ph}
       			  this.chartData.rows.push(object)
        		})
        	})
        })
       
	},

    methods: {
    	current_change(currentPage){
    		this.page = currentPage -1 
    		this.tableData = []
    		this.chartData.rows = []
            let {userFactory} = this.user
        	getTraceData(userFactory , this.page).then(res =>{
        		let datas = res.data.models
        		datas.forEach((item) => {
        		  let date = item.time
        		  let quality = item.tempWater
        		  let tmpstate = item.tempWaterReturn
        		  let ph = item.ph
        		  let phstate = item.phReturn
        		  let obj = {date , quality , tmpstate ,ph ,phstate}
        		  this.tableData.push(obj)
        		  date = date.substring(5,19)
       			  let object = {date , quality ,ph}
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
	margin-left 50px
	margin-right 10px
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
