<template>
    <div class="containerDetail">
        <ul>
            <li style=" color: #fff;" v-for="(detailMessage,index) in detailMessage" :key="index" class="detail_title" @click="sendDetilMsg(detailMessage.fac,detailMessage.flag,detailMessage.name,detailMessage.rank)">{{detailMessage.name}}</li>
        </ul>
         <ul>
            <li v-for="(detailMessage,index) in detailMessage" :key="index" class="detail_deta">共有 {{detailMessage.municipaTotal}} 个市级平台、 {{detailMessage.countryTotal}} 直属县级平台 {{detailMessage.sheepTotal}} 在栏 {{detailMessage.sheepNumber}} 只,其中种公羊 {{detailMessage.ramTotal}} 只，种母羊 {{detailMessage.eweTotal}} 只;商品羊 {{detailMessage.commercialTotal}} 只，羔羊 {{detailMessage.lambTotal}} 只，后备种公羊 {{detailMessage.reserveRamTotal}} 只,后备种母羊 {{detailMessage.reserveEweTotal}} 只</li>
        </ul>
    <div class="block">
        <el-pagination layout="prev, pager, next" :total="total" @current-change="current_change">
        </el-pagination>
        </div>
    </div>
 
</template> 
<script >
    export default {
        data(){
            return{
                detailMessage:[],
                total:0,
            }
        },
        props:{
            checkWhere:Array,
            list:String
        },
        watch:{
            checkWhere:{
                handler(newMess,oldMess){
                    this.total=Math.ceil(this.checkWhere.length/4)*10;
                    this.detailMessage=this.checkWhere.slice(0,4);
                }
            }
        },
        methods:{
            sendDetilMsg(fac,flag,name,rank){
                this.$emit("receiveDetilMsg",fac,flag,name,rank,this.list);
            },
            current_change(currentPage){
                this.detailMessage=this.checkWhere.slice(4*currentPage-4,4*currentPage);
            }
        }
    }
</script>
<style scoped>

    .containerDetail{
        width: 84%;
        margin:0 auto; 
        font-size: 10px;
        color: #2891d1;
        margin-top: 20px;
    }
   .containerDetail ul {
        display: flex;
        flex-wrap: nowrap;
        list-style-type: none;
        margin: 0;
        padding: 0;
        margin-left: 5%;
        overflow: hidden;
        color:black;
    }
   .containerDetail ul li {
        border-right:1px solid #bbb;
        border-bottom: 1px solid #bbb;
    }
    .containerDetail ul .detail_title{
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        height:20px;
        width:20%;
        background-color: #2891d1;
        cursor: pointer;
        transition: 0.5s;
}
.containerDetail ul .detail_title:hover{
        background-color: #B0C4DE;
}
.containerDetail ul .detail_deta{
        display: block;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        height:150px;
        width:20%;
        border-top: 1px solid #bbb;
}
.containerDetail .block{
    margin-left: 100px;
}
</style>