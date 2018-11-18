<template>
    <div>
        <headTitle :titleName='titleName' list="1"></headTitle>
        <totalData :messageTotal="messageTotal"></totalData>
        <detailData v-on:receiveDetilMsg="receiveDetilMsg" :checkWhere="message" list="1"></detailData>

        <headTitle :titleName='titleName1' v-on:receiveSeen="receiveSeen"  v-show="isShow" list="2" :titleShow="titleShow2"></headTitle>
        <totalData v-show="isShow && titleShow2" :messageTotal="messageTotal1" titleShow></totalData>
        <detailData v-show="isShow  && titleShow2" v-on:receiveDetilMsg="receiveDetilMsg"  :checkWhere="message1" list="2"></detailData>

        <headTitle :titleName='titleName2' :titleShow="titleShow3" v-on:receiveSeen="receiveSeen"  v-show="isShow2" list="3"></headTitle>
        <totalData v-show="isShow2 && titleShow3" :messageTotal="messageTotal2"></totalData>
        <detailData v-show="isShow2  && titleShow3"   :checkWhere="message2" list="3"></detailData>

        <headTitle :titleName='titleName3' :titleShow="titleShow4" v-on:receiveSeen="receiveSeen"  v-show="isShow3" list="4"></headTitle>
        <totalData v-show="isShow3 && titleShow4" :messageTotal="messageTotal3"></totalData>
        <detailData v-show="isShow3  && titleShow4"   :checkWhere="message3" list="4"></detailData>

        <headTitle :titleName='titleName4' :titleShow="titleShow5" v-on:receiveSeen="receiveSeen"  v-show="isShow4" list="5"></headTitle>
        <totalData v-show="isShow4 && titleShow5" :messageTotal="messageTotal4"></totalData>
        <detailData v-show="isShow4  && titleShow5"   :checkWhere="message4" list="5"></detailData>
    </div>
</template>
<script>
//引入子组件对象
import totalData from '@/components/table/totalData.vue';
import detailData from '@/components/table/detailData.vue';
import headTitle from '@/components/table/headTitle.vue';
import AdminTable from '@/components/admin/table';
import { getUserById , getTableDetail} from '@/util/getdata';
import { isReqSuccessful } from '@/util/jskit';
    export default {
        data(){
            return { 
                run:0,
                role:0,
                list:"0",
                factory:0,
                rankList:5,
                getTableDetail,
                getUserById,
                titleName:"云羊宝直属平台",
                titleName1:"",
                titleName2:"",
                titleName3:"",
                titleName4:"",
                isShow:false,
                isShow2:false,
                isShow3:false,
                isShow4:false,
                titleShow:false,
                titleShow2:false,
                titleShow3:false,
                titleShow4:false,
                titleShow5:false,
                message:[],
                message1:[],
                message2:[],
                message3:[],
                message4:[],
                messageTotal:{},
                messageTotal1:{},
                messageTotal2:{},
                messageTotal3:{},
                messageTotal4:{}
            }
        },
        mounted () {
          let id = this.$route.params.id
          getUserById(id).then(res => {
              if (isReqSuccessful(res)) {
                  this.user = res.data.model;
                  this.role = res.data.role;
                  let { userFactory, userRealname, id, factoryName } = this.user    
                  // 代理 工厂 游客
                  if (userFactory !== undefined) {
                      this.factory = userFactory
                  } else if (id !== undefined) {
                      this.factory = id
                  }
              }
          }).then(this.fetchData)

        },
        methods:{
            receiveDetilMsg(factory,flag,name,rank,list){                
                    this.run=1;         
                    this.role=flag;
                    this.factory=factory;
                    // alert(this.factory)
                    this.rankList=rank;
                    this.list=list;
                    if(list=="1"){
                      this.message1=[];
                      this.message2=[];
                      this.message3=[];
                      this.message4=[];
                      this.titleName1=name;
                      this.isShow=true;
                      this.titleShow2=true;
                      this.isShow2=false;
                      this.isShow3=false;
                      this.isShow4=false;
                    }else if(list=="2"){
                      this.titleName2=name;
                      this.titleShow3=true;
                      this.isShow2=true;
                      this.isShow3=false;
                      this.isShow4=false;
                      this.message2=[];
                      this.message3=[];
                      this.message4=[];
                    }else if(list=="3"){
                      this.titleName3=name;
                      this.isShow3=true;
                      this.titleName4=true;
                      this.isShow4=false;
                      this.message3=[];
                      this.message4=[];
                    }
                    else if(list=="4"){
                      this.titleName4=name;
                      this.titleShow5=true;
                      this.isShow4=true;
                      this.message4=[];
                    }
                    this.fetchData();
            },
            receiveSeen(ifSeen,list){
                if(list==2){this.titleShow2=ifSeen;}
                if(list==3){this.titleShow3=ifSeen;}
                if(list==4){this.titleShow4=ifSeen;}
                if(list==5){this.titleShow5=ifSeen;}
            },
            async fetchData(){              
                  // let { userFactory, userRealname, id, factoryName } = this.user    
                  // 代理 工厂 游客
                  // if (userFactory !== undefined) {
                  //     this.factory = userFactory
                  // } else if (id !== undefined) {
                  //     this.factory = id
                  // }
                  this.load = true              
              if (!this.releaseType) {
                  this.getTableDetail(this.factory, this.role).then(res => {
                      if (isReqSuccessful(res)) {
                          let agents = res.data.detail.agents
                          let factories =res.data.detail.factories
                          let itself=res.data.detail.itself
                          agents.forEach((v) => {
                            let{ provincialPlatform , municipaTotal , countryTotal , sheepTotal , sheepNumber , ramTotal ,eweTotal ,commercialTotal, lambTotal , reserveRamTotal , reserveEweTotal, factory ,rank}=v
                            let name=provincialPlatform
                            let flag=1
                            let fac=factory
                            let messageObj={name, municipaTotal , countryTotal , sheepTotal , sheepNumber , ramTotal ,eweTotal ,commercialTotal, lambTotal , reserveRamTotal , reserveEweTotal, flag, fac, rank}
                            if(this.list=="0"){this.message.push(messageObj)}
                            else if(this.list=="1"){this.message1.push(messageObj)}
                            else if(this.list=="2"){this.message2.push(messageObj)}
                            else if(this.list=="3"){this.message3.push(messageObj)}
                            else if(this.list=="4"){this.message4.push(messageObj)}
                          })
                          factories.forEach((v) => {
                            let{ provincialPlatform , municipaTotal , countryTotal , sheepTotal , sheepNumber , ramTotal ,eweTotal ,commercialTotal, lambTotal , reserveRamTotal , reserveEweTotal,factory,rank}=v
                            let name=provincialPlatform
                            let flag=0
                            let fac=factory
                            let messageObj={name, municipaTotal , countryTotal , sheepTotal , sheepNumber , ramTotal ,eweTotal ,commercialTotal, lambTotal , reserveRamTotal , reserveEweTotal, flag, fac, rank}
                            if(this.list=="0"){this.message.push(messageObj)}
                            else if(this.list=="1"){this.message1.push(messageObj)}
                            else if(this.list=="2"){this.message2.push(messageObj)}
                            else if(this.list=="3"){this.message3.push(messageObj)}
                            else if(this.list=="4"){this.message4.push(messageObj)}
                           
                          })
                         itself.forEach((v) => {
                            let{ provincialTotal , municipaTotal , countryTotal , sheepTotal , sheepNumber , ramTotal ,eweTotal ,commercialTotal, lambTotal , reserveRamTotal , reserveEweTotal}=v
                            let messageObj={provincialTotal , municipaTotal , countryTotal , sheepTotal , sheepNumber , ramTotal ,eweTotal ,commercialTotal, lambTotal , reserveRamTotal , reserveEweTotal}
                            if(this.list=="0"){this.messageTotal=messageObj}
                            else if(this.list=="1"){this.messageTotal1=messageObj}
                            else if(this.list=="2"){this.messageTotal2=messageObj}
                            else if(this.list=="3"){this.messageTotal3=messageObj}
                            else if(this.list=="4"){this.messageTotal4=messageObj}
                           
                          })
                      }
                  })
              }
            }
          },
        components:{
          totalData, //简写
          detailData,
          headTitle,
          AdminTable
        }
    }
</script>
<style>

</style>