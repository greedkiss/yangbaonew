<template>
    <div>    
		<area-select></area-select>
        <div class="trace-charts">
            <div>
                <ve-histogram :data="chartData" :settings="chartSettings" :extend="chartExtend"  width="400px" height="400px"></ve-histogram>
            </div>
        </div>
		<state-info :data="chartData.rows[0].temp" :state="state.temp"  label="温度"></state-info>
		<state-info :data="chartData.rows[0].damp" :state="state.damp"  label="湿度"></state-info>	
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
			prop="temp"
			label="温度"
			align="center"			
			>
			</el-table-column>
			<el-table-column
			label="温度状态"
			align="center"
			prop ="tempstate"			
			>
				<!-- <template slot-scope="scope">
					<el-tag :type="stateInfo( scope.row.temp.state )">{{scope.row.temp.info}}</el-tag>
				</template> -->
			</el-table-column>
			<el-table-column
			prop="damp"
			label="湿度"
			align="center"			
			>
			</el-table-column>
			<el-table-column
			label="湿度状态"
			align="center"	
			prop="dampstate"		
			>
				<!-- <template slot-scope="scope">
					<el-tag :type="stateInfo( scope.row.damp.state )">{{scope.row.damp.info}}</el-tag>
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
			total:0,
			tableData:[],
			chartData: {
				columns: ['date', 'temp', 'damp'],
				rows: [
					
				]
			},

			state: {
				temp: {
					normal: [10, 30],
					warn: [5 ,10,30, 35],
				},
				damp: {
					normal: [0, 0.7],
					warn: [0, 0.1],					
				}
			},

			chartSettings: {
				axisSite: {
					right: ['damp']
				},
				labelMap: {
					temp: '温度',
					damp: '湿度'
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
	        		datas.forEach((item) => {
	        		  let date = item.time
	        		  let temp = item.tempSoil
	        		  let tempstate = item.tempSoilReturn
	        		  let damp = item.humSoil
	        		  let dampstate = item.humSoilReturn
	        		  let obj = {date , temp , tempstate , damp ,dampstate}
	        		  this.tableData.push(obj)
	        		  date = date.substring(5,19)
	       			  let object = {date , temp ,damp}
	       			  this.chartData.rows.push(object)
	        		})
	        	})
	        })    
		},
    created () {
		let state = this.state	
		this.chartData.rows.forEach( val => {	
			for ( let key in val ) {
				if ( key !== 'date' ) {
					let normal = state[key].normal;
					let warn = state[key].warn;
					let vaule = val[key];
					val[key] = {};
					this.$set(val[key], "value", vaule);
					 console.log( normal[0] )														
					if ( vaule >= normal[0] && vaule <= normal[1] ) {
						this.$set( val[key], "state", 1);					
						this.$set( val[key], "info", '正常状态');
					} else if ( vaule >= warn[0] && vaule <= warn[1] ) {	
						this.$set( val[key], "state", 2);					
						this.$set( val[key], "info", '警告状态');							
					} else {
						this.$set( val[key], "state", 3);					
						this.$set( val[key], "info", '异常状态');
					}	
				}
			}
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
        		datas.forEach((item) => {
        		  let date = item.time
	        		let temp = item.tempSoil
	        		let tempstate = item.tempSoilReturn
	        		let damp = item.humSoil
	        		let dampstate = item.humSoilReturn
	        		let obj = {date , temp , tempstate , damp ,dampstate}
	        		this.tableData.push(obj)
	        		date = date.substring(5,19)
	       			let object = {date , temp ,damp}
	       			this.chartData.rows.push(object)
       			  })
        	})
        },
		// stateInfo( data ) {
		// 	if ( data === 1 ) {
		// 		return 'success'
		// 	} else {	
		// 		return 'warning'				
		// 	}
		// }
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

