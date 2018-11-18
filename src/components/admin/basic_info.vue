<template>
    <div class="border-main">
        <div class="form-summary">
            <template v-for="(item, i) in items">
                <el-input :placeholder="item.placeholder" :minlength="item.trade ? 15 : 1" :maxlength="item.trade ? 15 : 100" :class="{'double-width': item.doubleWidth, block: item.block, mr: item.mr}" :key="i" v-if="item.type === undefined || item.type === 'text' || item.type === 'password'" :type="item.type || 'text'" size="small" v-model="models[item.model]" :disabled="disableAll || item.disabled">
                    <template slot="prepend">{{ item.label }}:</template>
                </el-input>

                <el-input :placeholder="item.placeholder" :key="i" v-if="item.type==='add'" v-model="models[item.model][item.index]" >
                    <template slot="prepend">{{ item.label }}:</template>
                </el-input>

                <div :key="i" v-if="item.type === 'addTime'" class="time el-input-group" >
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span>
                    <el-date-picker
                        v-model="models[item.model][item.index]"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        size="small"
                        type="datetime">
                    </el-date-picker>
                </div>

                <el-input :placeholder="item.placeholder" :class="{block: item.block, mr: item.mr}" :key="i" v-else-if="item.type === 'file'" :value="holder" class="select-file" size="small" disabled @click.native="$refs.erpai[0].click()">
                    <template slot="prepend">{{ item.label || '免疫耳牌号文件:'}}
                        <input type="file" @change="selectFile(item)" hidden ref="erpai">
                    </template>
                </el-input>

                <div :key="i" v-else-if="item.type === 'time'" class="time el-input-group" :class="{'double-width': item.doubleWidth, mr: item.mr}">
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span>
                    <el-date-picker
                        v-model="models[item.model]"
                        format="yyyy-MM-dd HH:mm:ss"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        size="small"
                        type="datetime">
                    </el-date-picker>
                </div>

                <div :key="i" v-else-if="item.type === 'time_2'" class="time el-input-group" :class="{'double-width': item.doubleWidth, mr: item.mr}">
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span>
                    <el-date-picker
                        v-model="models[item.model]"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        size="small"
                        type="datetime">
                    </el-date-picker>
                </div>

                <div :class="{mr: item.mr}" :key="i" v-else-if="item.type === 'number'" class="time el-input-group">
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span>
                    <el-input-number :min="1" size="small" v-model="models[item.model]"></el-input-number>
                </div>

                <div :class="{mr: item.mr, block: item.block}" :key="i" v-else-if="item.type === 'select'" class="time el-input-group select">
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span><el-autocomplete
                        :disabled="disableAll"
                        size="small"
                        v-model="models[item.model]"
                        :fetch-suggestions="item.fetchSuggestions">
                    </el-autocomplete>
                </div>



                <div :class="{mr: item.mr, block: item.block}" :key="i" v-else-if="item.type === 'select3'" class="time el-input-group select">
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span>
                   <el-popover placement="right" width="auto" trigger="click" popper-class="trade-select"  ref="tradeSelect">
                        <el-checkbox-group v-model="ilist">
                        <el-checkbox v-for="city in immtag" :label="city" :key="city" @change="checkimmtag(item.model)">{{city}}</el-checkbox>
                        </el-checkbox-group>
                        <el-input slot="reference" style="width: 194px" v-model="models[item.model]" placeholder="请选择" @focus="getimmTag()" ></el-input>
                    </el-popover>
                </div>

                <div :class="{mr: item.mr, block: item.block}" :key="i" v-else-if="item.type === 'select2'" class="time el-input-group select">
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span>
                   <el-popover placement="right" width="auto" trigger="click" popper-class="trade-select"  ref="tradeSelect">
                        <el-checkbox-group v-model="elist">
                        <el-checkbox v-for="city in eartag" :label="city" :key="city" @change="checkeartag(item.model)">{{city}}</el-checkbox>
                        </el-checkbox-group>
                        <el-input slot="reference" style="width: 194px" v-model="models[item.model]" placeholder="请选择" @focus="getEarTag()" ></el-input>
                    </el-popover>
                </div>



                <div :class="{mr: item.mr, block: item.block}" :key="i" v-else-if="item.type === 'selectCrowd'" class="time el-input-group select">
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span>
                   <el-popover placement="right" width="auto" trigger="click" popper-class="trade-select"  ref="tradeSelect" @hide ="propHide">
                        <el-radio-group v-model="checkList">
                            <el-radio v-for="(d, index) in crowdD" :label="d" :key="index" @change="getls(d)">{{d}}栋</el-radio>
                        </el-radio-group>
                        <el-radio-group v-model="checkColList" :v-if="tradeDList">
                            <el-radio v-for="(d, index) in crowdL" :label="d" :key="index"  @change="getlc(item.model)">{{d}}栏</el-radio>
                        </el-radio-group>
                        <el-input slot="reference" style="width: 194px ;height:30px ; margin-bottom: 5px;" v-model="models[item.model]" placeholder="请选择" ></el-input>
                    </el-popover>
                </div>



                 <div :class="{mr: item.mr, block: item.block}" :key="i" v-else-if="item.type === 'selectOneCrowd'" class="time el-input-group select" >
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span>
                   <el-popover placement="right" width="auto" trigger="click" popper-class="trade-select"  ref="tradeSelect">
                        <el-radio-group v-model="checkOneList">
                            <el-radio v-for="(d, index) in crowdOneD" :label="d" :key="index" @change="getlsOne(d)">{{d}}栋</el-radio>
                        </el-radio-group>
                        <el-radio-group v-model="checkColListOne" :v-if="tradeDListOne">
                            <el-radio v-for="(d, index) in crowdOneL" :label="d" :key="index"  @change="getlcOne(item.model)">{{d}}栏</el-radio>
                        </el-radio-group>
                        <el-input slot="reference" style="width: 295px " v-model="models[item.model]" placeholder="请选择" ></el-input>
                    </el-popover>
                </div>










                 <div :class="{mr: item.mr, block: item.block}" :key="i" v-else-if="item.type === 'selcetThreeTag'" class="time el-input-group select" >
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span>
                   <el-popover placement="right" width="auto" trigger="click" popper-class="trade-select"  ref="tradeSelect" @hide ="propThreeHide">
                        <el-radio-group v-model="checkThreeList">
                            <el-radio v-for="(d, index) in crowdOneD" :label="d" :key="index" @change="getlsThree(d)">{{d}}栋</el-radio>
                        </el-radio-group>
                        <el-radio-group v-model="checkColListThree" :v-if="tradeDListThree">
                            <el-radio v-for="(d, index) in crowdOneL" :label="d" :key="index"  @change="getlcThree(item.model)">{{d}}栏</el-radio>
                        </el-radio-group>
                        <el-radio-group v-model="checktag" :v-if="tradeEarTag">
                            <el-radio v-for="(d, index) in crowdtag" :label="d" :key="index"  @change="geteartag(item.model)">{{d}}</el-radio>
                        </el-radio-group>
                        <el-input slot="reference" style="width: 195px " v-model="models[item.model]" placeholder="请选择" ></el-input>
                    </el-popover>
                </div>

                <div :class="{mr: item.mr}" :key="i" v-else-if="item.type === 'radio'" class="time el-input-group radio">
                    <span class="ellipse" :title="item.label" v-text="item.label + ':'"></span>
                    <div class="radios-el">
                        <el-radio v-model="models[item.model]" :label="0">{{ ['公', '否', '种羊'][radioIndex] }}</el-radio>
                        <el-radio v-model="models[item.model]" :label="1">{{ ['母', '是', '商品羊'][radioIndex] }}</el-radio>
                    </div>
                </div>

                <div :class="{mr: item.mr}" :key="i" v-else-if="item.type === 'address'" class="time el-input-group address">
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span>
                    <area-cascader type='text' v-model="models[item.model]" :level='item.level === undefined ? 1 : item.level' :data="pcaa"></area-cascader>
                </div>

                <div :class="{mr: item.mr}" :key="i" v-else-if="item.type === 'address-select'" class="time el-input-group address">
                    <span class="time-span ellipse" :title="item.label" v-text="item.label + ':'"></span>
                    <area-select type='text' :level='0' v-model="models[item.model]" :data="pcaa"></area-select>
                </div>

                <span class="cursor-p"  ref="del" @click="deleteItem(item, i)" v-if="item.type === 'addTime' && i !== 10"><i class="el-icon-caret-right"></i>删除</span>
                <span class="cursor-p"  ref="add" @click="addItem(item, i)" v-if="item.type === 'addTime' && count === i-10 "><i class="el-icon-caret-right"></i>增加</span>
            </template>

            <div v-if="updateSubmitter" class="time el-input-group select">
                <span class="time-span ellipse">上级代理</span>
                <el-select size="small" v-model="models.factoryNum">
                    <el-option
                        v-for="(item, i) in options"
                        :label="item.label"
                        :value="item.value"
                        :key="i">
                    </el-option>
                </el-select>
            </div>
        </div>
    </div>
</template>
<script>
import pcaa from 'area-data/pcaa'
import { getAgents, getUserById, getSheepBuilding, getSheepCol ,getSheepimmTag,getSheepEarTag } from '@/util/getdata'
import { isReqSuccessful } from '@/util/jskit'

export default {
    props: {
        disableAll: {
            type: Boolean,
            default: false
        },
        items: {
            type: Array,
            default () {
                return []
            }
        },
        models: {
            type: Object,
            dafault () {
                return {}
            }
        },
        radioIndex: {
            type: Number,
            default: 0
        },
        updateSubmitter: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            holder: '上传文件',
            pcaa,
            options: [],
            count: 0, // 增加次数
            selectD: '', // 上传栏栋
            checkColList: '',
            crowdtag:'',
            checkColListOne:'',
            checkColListThree:'',
            checkThreeList:'',
            checktag:'',
            checkList: '',
            crowdOneD:[],
            checkOneList: '',
            user:null,
            tradeDList:false,
            tradeDListOne:false,
            crowdD: [],
            crowdL:[],
            crowdOneL:[],
            buildings: [],
            eartagList: [],
            eartag: [],
            immtag: [],
            earlist:"",
            elist:[],
            ilist:[],
            immlist:""
        }
    },

    computed: {
        // crowdD() {
        //     return this.crowd.map( ele => ele.ds )
        // }
    },

    mounted () {
        if (this.updateSubmitter) {
            let id = this.$route.params.id
            getUserById(id).then(res => {
                if (isReqSuccessful(res)) {
                    this.user = res.data.model
                }
            }).then(_ => {
                getAgents(this.user.userFactory).then(res => {
                    if (isReqSuccessful(res)) {
                        let arr = []
                        res.data.List.forEach(v => {
                            arr.push({label: v.agentName, value: v.id})
                        })
                        this.options = arr
                    }
                })
            })
        }
        let id = this.$route.params.id
            getUserById(id).then(res => {
                if (isReqSuccessful(res)) {
                    this.user = res.data.model
                }
            }).then(_ =>{
                getSheepBuilding(this.user.userFactory).then(res => {
                    let ds=res.data.data  
                    this.crowdD = ds
                    this.crowdOneD = ds
                })
            })
    },

    methods:{
        getEarTag(){
            let factory = this.user.userFactory
            let arr = this.selectD.split(';')
            arr.forEach((item) => {
            if(item !==""){
              let build = item.substring(item.indexOf("/") + 1 , item.indexOf("栋"))
              let building = parseInt(build)
              let col =item.substring(0 , item.indexOf("栏"))
              let column =parseInt(col)
              let obj = {building , column }
              this.buildings.push(obj)
            }
            })
            let buildings = this.buildings
            let data = {factory , buildings}
            getSheepimmTag(data).then(res =>{
                this.eartag = res.data.models 
            })
        },
        getimmTag(){
            let factory = this.user.userFactory
            let arr = this.selectD.split(';')
            arr.forEach((item) => {
            if(item !==""){
              let build = item.substring(item.indexOf("/") + 1 , item.indexOf("栋"))
              let building = parseInt(build)
              let col =item.substring(0 , item.indexOf("栏"))
              let column =parseInt(col)
              let obj = {building , column }
              this.buildings.push(obj)
            }
            })
            let buildings = this.buildings
            let data = {factory , buildings}
            getSheepEarTag(data).then(res =>{
                this.immtag = res.data.models 
            })
        },
        propHide(){
            this.checkList = null
            this.checkColList = null
            this.crowdL = null
        },
        propThreeHide(){
            this.checkThreeList = null
            this.checkColListThree = null
            this.crowdOneL = null
            this.checktag = null
            this.crowdtag = null
        },
        checkeartag(d){
            this.models[d] = this.elist.join(";")
        },
        checkimmtag(d){
            this.models[d] = this.ilist.join(",")
        },
        getls (d) {
             getSheepCol(this.user.userFactory , d ).then(res =>{                     
                    let ls = res.data.data
                    this.crowdL = ls                    
            })
            this.tradeDList= true          
        },
        getlc (d) { 
            let res = this.checkColList + "栏/" + this.checkList + "栋;"
            if(this.models[d] == null){
                this.models[d] = res
                this.selectD = res
            }else{
                this.models[d] = this.models[d] + res
                this.selectD = this.selectD + res
            }
        },
        getlsOne(d) {
             getSheepCol(this.user.userFactory , d ).then(res =>{                     
                    let ls = res.data.data
                    this.crowdOneL = ls                    
            })
            this.tradeDListOne= true          
        },
        getlcOne (d) { 
            let res = this.checkColListOne + "栏/" + this.checkOneList + "栋"
            this.models[d] = res
        },
        getlsThree(d){
            getSheepCol(this.user.userFactory , d ).then(res =>{                     
                    let ls = res.data.data
                    this.crowdOneL = ls                    
            })
            this.tradeDListThree= true 
        },
        getlcThree(d){
            let factory = this.user.userFactory
            let building = parseInt(this.checkThreeList)
            let column =parseInt(this.checkColListThree)
            let obj = {building , column}
            let buildings =[]
            buildings.push(obj);
            let data = {factory , buildings}
            getSheepimmTag(data).then(res =>{
                this.crowdtag = res.data.models 
            })
            this.tradeEarTag = true
        },
        geteartag(d){
            this.models[d] = this.checktag
        },
        selectFile (item) {
            let file = this.$refs.erpai[0].files[0]
            this.models[item.model] = file
            this.holder = file.name
        },

        addItem ( item, i ) {
            this.items.splice(i + 1, 0, {label: '产前免疫种类(产前10|20天)', model: 'prenatalImmunityType', type: 'add', index: 1+this.count/2 });
            this.items.splice(i + 2, 0, {label: item.label, model: item.model, type: item.type, index: 1+this.count/2 });     
            this.count += 2 ;  
            if ( this.count === 4 ) {
                this.count = 6;
            }
        },

        deleteItem( item, i ) {
            this.items.splice(i , 1);
            this.items.splice(i - 1 , 1);
            if ( this.count === 6 ) {
                this.count = 4;
            }
            this.count -= 2 ;              
        }
    },
} 
</script>

<style lang="stylus">
.radios-el
    display inline-block
    vertical-align middle 
.cursor-p
    display block   
    font-size 16px
    color #2891d1 
    margin-top: 9px;
    font-weight: bold;
.el-radio-group
     display flex
     flex-wrap wrap
     justify-content space-around
.el-radio
     margin-top 13px
     margin-left 0px !important
     width 30% !important
.trade-select
    padding-top 29px
    display flex
    top 0px
    left 590px
    .el-radio-group
        display flex
        flex-wrap wrap
        flex-direction column
        margin 0 20px
    .el-radio
        margin 2px auto !important
        text-align: center;
</style>