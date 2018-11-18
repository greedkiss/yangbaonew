<template>
	<div class="livestock-list">
		<div class="header">
			<el-autocomplete
				  popper-class="my-autocomplete"
				  v-model="state1"
				  :fetch-suggestions="querySearch1"
				  placeholder="出售给厂名称"
				  @select="handleSelect1">
				  <i
				    class="el-icon-edit el-input__icon"
				    slot="suffix"
				   >
				  </i>
				  <template slot-scope="{ item }">
				    <div class="name">{{ item.breedName }}</div>
				  </template>
				</el-autocomplete>
			<el-button type="primary" @click="saleSheep">确定销售</el-button>
		</div>
		<p style="margin-left: 46px">
				(单击左侧的勾选框选择要出售羊只)
			</p>
		<el-table :data="tableData" :border="true" @selection-change="changeFun">
			<el-table-column label="出售" type="selection" width="55" ></el-table-column>
			<el-table-column
				label="商标耳牌号"
				width="120"
				prop="tradeMarkEartag"
			>
			</el-table-column>
			<el-table-column
				label="免疫耳牌号"
				width="120"
				prop="immuneEartag"
			>
			</el-table-column>
			<el-table-column
				label="栋号"
				width="120"
				prop="d"
			>
			</el-table-column>
			<el-table-column
				label="栏号"
				width="120"
				prop="l"
			>
			</el-table-column>
			<el-table-column
				label="羊只品类"
				width="120"
				prop="style"
			>
			</el-table-column>
			<el-table-column
				label="生产阶段"
				width="120"
				prop="stage"
			>
			</el-table-column>
			<el-table-column
				label="sheepid"
				width="120"
				prop="id"
				v-if="false"
			>
			</el-table-column>
			<el-table-column
				label="操作"
				width="250"
			>
				<template slot-scope="scope">
					<span
						size="small"
						style="cursor:pointer"
						@click="handleMove(scope.row)">移动
					</span>
					<span
						style="cursor:pointer"
						@click.native.prevent="deleteRow(scope.$index, tableData)"
						size="small"
						type="danger"
						@click="handleDead(scope.row)">死亡
					</span>
					<span
						style="cursor:pointer"
						size="small"
						type="primary"
						@click="handleUpdate(scope.row)">耳牌号更改
					</span>
					<span
						style="cursor:pointer"
						size="small"
						type="primary">阶段更改
					</span>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog :visible.sync="dialogMoveVisible" class="move">
			<el-form :model="form">
				<span>商标耳牌号: {{this.currentRow.tradeMarkEartag}}</span>
				<span>从栋号: {{this.currentRow.d}}</span>
				<span>栏号: {{this.currentRow.l}}</span>
				<span>移至</span><br/><br/>
				<span>(先填写栋号再填写栏号)</span><br/><br/>
				<span>栋号：</span>
			   <el-autocomplete
				  popper-class="my-autocomplete"
				  v-model="state3"
				  :fetch-suggestions="querySearch"
				  @select="handleSelect">
				  <i
				    class="el-icon-edit el-input__icon"
				    slot="suffix"
				   >
				  </i>
				  <template slot-scope="{ item }">
				    <div class="name">{{ item }}</div>
				  </template>
				</el-autocomplete>


				<span>栏号：</span>
				 <el-autocomplete
				  popper-class="my-autocomplete"
				  v-model="state2"
				  :fetch-suggestions="querySearch2"
				  @select="handleSelect2">
				  <i
				    class="el-icon-edit el-input__icon"
				    slot="suffix"
				   >
				  </i>
				  <template slot-scope="{ item }">
				    <div class="name">{{ item }}</div>
				  </template>
				</el-autocomplete>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogMoveVisible  = false" size="small">取 消</el-button>
				<el-button type="primary" @click="moveSheepFun" size="small">添 加</el-button>
			</div>
			
		</el-dialog>
		<el-dialog :visible.sync="dialogDeadVisible" class="dead">
			<el-form :model="form">
				<span>商标耳牌号: {{this.currentRow.tradeMarkEartag}}</span><br/>
				<span>死亡原因：</span>
				<el-autocomplete
                    :disabled="disableAll"
                     size="small"
                     v-model="form.reason"
                    :fetch-suggestions="fetchReason">
                </el-autocomplete>
				<span>处理方法：</span>
				<el-input v-model="form.method" size="small"></el-input>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogDeadVisible  = false" size="small">取 消</el-button>
				<el-button type="primary" @click="submitSheep" size="small">确 定</el-button>
			</div>
		</el-dialog>
		<el-dialog :visible.sync="dialogUpdateVisible" class="dead">
			<el-form :model="form">
				<span>商标耳牌号</span>
				<el-input v-model="upda.earTag" size="small"></el-input><br/>
				<span>免疫耳牌号</span>
				<el-input v-model="upda.immuTag" size="small"></el-input>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogUpdateVisible  = false" size="small">取 消</el-button>
				<el-button type="primary" @click="submitUp" size="small">确 定</el-button>
			</div>
		</el-dialog>
		<div class="block" style="margin-left: 46px">
        <el-pagination layout="prev, pager, next" :total="total" :page-size="10" @current-change="current_change">
        </el-pagination>
        </div>
	</div>
</template>

<script>
import { isReqSuccessful } from '@/util/jskit'
import { getUserById , getAllSheep , makeDeadSheep, getSheepBuilding ,getSheepCol ,moveSheep ,getSaleFac ,makeSaleFac ,updateSheepTog} from '@/util/getdata'
export default {
	mounted(){
		let id = this.$route.params.id
        getUserById(id).then(res => {
            if (isReqSuccessful(res)) {
                this.user = res.data.model
                let {userFactory} = this.user
         		getSaleFac(userFactory).then(res =>{
	         		if (isReqSuccessful(res)) {
	         	 		this.restaurants3 = res.data.data
	            	}
         		})
            }
         }).then(this.fetchData)

	},

	data() {
		return {
			user:{},
			restaurants:[],
			restaurants1:[],
			restaurants3:[],
       		state3:'',
       		state2:'',
       		state1:'',
       		salesheepid:0,
			checkBuilding:[],
			total:0,
			page:1,
			multipleSelection:[],
			tableData:[],
			checked: 1,
			id: 1,
			sheepid:0,
			dialogMoveVisible: false,
			dialogDeadVisible: false,
			dialogUpdateVisible:false,
			form: {
				reason:'',
				method:'',
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			upda:{
				earTag:'',
				immuTag:''
			},
			currentRow: {},
		}
	},

	methods: {
		fetchReason(qu ,cb){
			let diease =[
		        {value : '布病'},
		        {value : '小反刍'},
		        {value : '口蹄疫'},
		        {value : '三联四防'},
		        {value : '传胸'},
		        {value : '山羊痘'},
   		 	]
    		cb(diease)
		},
		showFac(){
			
				
		},
		async fetchData(){
			let {userFactory } = this.user
			let param = {
                			start: (this.page - 1)*10,
               				size: 10
           				} 
           	this.tableData = []
			getAllSheep(userFactory , param).then(res => {
                if (isReqSuccessful(res)) {
               		 this.total = Math.ceil(res.data.number/param.size)*10
               		 let data = res.data.all
               		 data.forEach((v) => {
               		   	 let {building , col , immuneEarTag , trademarkEarTag ,id} = v
               		   	 let d = building
               		   	 let l = col
               		   	 let tradeMarkEartag=trademarkEarTag
               		   	 let immuneEartag = immuneEarTag
               		   	 let obj = {tradeMarkEartag , immuneEartag,  d , l , id}
               		   	 this.tableData.push(obj)
               		 })
                }
            })
			
		},
		deleteRow(index,rows){
			//rows.splice(index, 1)
		},
		changeFun(val){
			this.multipleSelection = val;
		},
		handleMove( row ) {
			this.currentRow = row
			this.sheepid=row.id
			this.dialogMoveVisible = true
			let {userFactory } = this.user
			getSheepBuilding(userFactory).then(res=>{
				if (isReqSuccessful(res)) {
             		this.restaurants=res.data.data
            	}
			})
		},
		handleDead( row ) {
			this.currentRow = row
			this.dialogDeadVisible = true	
			this.sheepid=row.id	
		},
		handleUpdate(row){
			let tag = row.tradeMarkEartag
			let t = tag.substring(0 ,1)
			this.currentRow = row
			if(t == 'S'){
				this.dialogUpdateVisible = true
				this.sheepid=row.id	
			}
			else{
				  this.$alert('只能对羔羊进行编辑', '错误', {
		          confirmButtonText: '确定',    
		        });
			}
		},
		current_change(currentPage){
            this.page=currentPage;
            let id = this.$route.params.id
         	getUserById(id).then(res => {
            if (isReqSuccessful(res)) {
                this.user = res.data.model;
            }
         }).then(this.fetchData) 
        },
        submitSheep(){
        	this.dialogDeadVisible = false
        	let param = {
				id: this.sheepid,
				reason: this.form.reason,
				method: this.form.method
			}
			makeDeadSheep(param).then(res=>{
				if (isReqSuccessful(res)) {
					this.fetchData()
				}
			})
        },
        submitUp(){
        	this.dialogUpdateVisible = false
        	let sheepid = this.sheepid
			let {userFactory } = this.user
			let factory = userFactory
			let tradeMarkEartag = this.upda.immuTag
			let breedingSheepBase =this.upda.earTag
			let data ={factory ,sheepid ,tradeMarkEartag ,breedingSheepBase}
			updateSheepTog(data).then(res =>{
				if (isReqSuccessful(res)) {
					this.fetchData()
				}
			})
        },
        saleSheep(){
        	let array = this.multipleSelection
        	let {userFactory , factoryName } = this.user
        	let sheep=[]
        	for(let i=0;i<array.length;i++){
        		let ob ={trademarkEarTag:array[i].tradeMarkEartag ,immuneEarTag:array[i].immuneEartag ,id:array[i].id}
        		sheep.push(ob)
        	}
        	let startFactory = userFactory
        	let startName = factoryName
        	let endFactory = this.salesheepid
        	let endName = this.state1
        	let obj = {startFactory ,startName ,endFactory ,endName ,sheep}
			makeSaleFac(obj).then(res =>{
				if (isReqSuccessful(res)) {
					this.fetchData()
				}
			})

        },
        querySearch(queryString, cb) {
	        let restaurants = this.restaurants
	        let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
	        cb(results);
      	},
     	createFilter(queryString) {
	        return (restaurant) => {
	          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
	        }
		},
		querySearch1(queryString, cb) {
	        let restaurants = this.restaurants3
	        let results = queryString ? restaurants.filter(this.createFilter1(queryString)) : restaurants
	        cb(results)
      	},
     	createFilter1(queryString) {
	        return (restaurant) => {
	        	console.log(restaurant)
	          return (restaurant.value.toLowerCase().indexOf(queryString) === 0)
	        }
		},
		querySearch2(queryString, cb) {
	        let restaurants = this.restaurants1
	        let results = queryString ? restaurants.filter(this.createFilter2(queryString)) : restaurants
	        cb(results)
      	},
     	createFilter2(queryString) {
	        return (restaurant) => {
	          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
	        }
		},
		handleSelect(item){
			this.state3=item.toString()
			let {userFactory} = this.user
			// let data = userFactory.toString()+ '/' +this.state3 
			getSheepCol(userFactory,item).then(res =>{
			if (isReqSuccessful(res)) {
               this.restaurants1 = res.data.data
            }
			})
		},
		handleSelect2(item){
			this.state2=item.toString()
		},
		handleSelect1(item){
			this.state1 = item.breedName.toString()
			this.salesheepid = item.id
		},
		moveSheepFun(){
			this.dialogMoveVisible  = false
			let {userFactory}= this.user
			let building = Number(this.state3)
			let colNum =Number(this.state2)
			let factory = userFactory
			let param = {
				factory,
				building,
				colNum
			}
			moveSheep(this.sheepid, param).then(res =>{
				if (isReqSuccessful(res)) {  
					this.fetchData()   
            	}
			})

		}
}
}
</script>

<style lang="stylus">
.livestock-list
	.header
	    display flex
		justify-content space-evenly
		width 50%
		margin 10px 0px 30px 0px
		.el-input
			margin-left 50px
			width 250px
	.el-table
		display table-caption
		margin-left 51px
	.el-dialog
		width 400px		
	.move 
		.el-input
			width 100px
	.dead
		.el-input
			width 277px		
			padding: 5px 0 5px 0
</style>


