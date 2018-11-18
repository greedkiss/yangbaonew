<template>
    <div>
    <el-card>
      <span style="color:#2891d1;padding-right: 10px">提示：</span>
      <span style="color:#2891d1">点击该列所在表头跳转具体生产环节界面</span>
    </el-card>
    <el-table
    @header-click = "tononpregnantOne"
    :data="tableData"
    style="width: 100%">
    <el-table-column
        prop="stageall"
        label="生产环节"
        width="100">
      </el-table-column>
    <el-table-column label="空怀阶段" width="200">
      <el-table-column

        prop="nonpregnantOne"
        label="引种应激期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="nonpregnantTwo"
        label="体况调理期"
        width="100">
      </el-table-column>
    </el-table-column>
    <el-table-column label="妊娠阶段" width="300">
      <el-table-column
        prop="pregnantStageOne"
        label="妊娠前三月"
        width="100">
      </el-table-column>
      <el-table-column
        prop="pregnantStageTwo"
        label="妊娠第四月"
        width="100">
      </el-table-column>
      <el-table-column
        prop="pregnantStageThree"
        label="妊娠第五月"
        width="100">
      </el-table-column>
    </el-table-column>
    <el-table-column label="哺乳阶段" width="700">
      <el-table-column
        prop="produceStageOne"
        label="产羔0-5日"
        width="100">
      </el-table-column>
      <el-table-column
        prop="produceStageTwo"
        label="产羔6-10日"
        width="100">
      </el-table-column>
      <el-table-column
        prop="produceStageThree"
        label="产羔11-20日"
        width="100">
      </el-table-column>
      <el-table-column
        prop="produceStageFour"
        label="产羔21-30日"
        width="100">
      </el-table-column>
      <el-table-column
        prop="produceStageFive"
        label="产羔31-40日"
        width="100">
      </el-table-column>
      <el-table-column
        prop="produceStageSix"
        label="产羔41-50日"
        width="100">
      </el-table-column>
      <el-table-column
        prop="produceStageSeven"
        label="产羔51-60日"
        width="100">
      </el-table-column>
    </el-table-column>
    <el-table-column label="妊娠阶段" width="300">
          <el-table-column
            prop="pregnantStageOne"
            label="妊娠前三月"
            width="100">
          </el-table-column>
          <el-table-column
            prop="pregnantStageTwo"
            label="妊娠第四月"
            width="100">
          </el-table-column>
          <el-table-column
            prop="pregnantStageThree"
            label="妊娠第五月"
            width="100">
          </el-table-column>
    </el-table-column>
    <el-table-column
            prop="growStage"
            label="生长阶段"
            width="100">
    </el-table-column>
    <el-table-column label="种羊育种阶段" width="200">
          <el-table-column
            prop="breedStageOne"
            label="育种一期"
            width="100">
          </el-table-column>
          <el-table-column
            prop="breedStageTwo"
            label="育种二期"
            width="100">
          </el-table-column>
    </el-table-column>
    <el-table-column label="商品羊育肥阶段" width="200">
          <el-table-column
            prop="unfatStage"
            label="育肥前期"
            width="100">
          </el-table-column>
          <el-table-column
            prop="growfatStage"
            label="直线育肥期"
            width="100">
          </el-table-column>
    </el-table-column>
  </el-table>
</div>
</template>

<script>


export default {
    
    data () {
        return {
            tableData:[{
                stageall:'栏栋号'
            },
            {
                stageall: '羊只数'
            },{
                stageall: '工作进度',
                nonpregnantOne:'未完成'

            }],
        }
    },
    methods:{
        tononpregnantOne(column, event){
          let pathid = this.$route.params.id
          if(column.label=="引种应激期"){           
              let path = `/admin/${pathid}/intelManage/shin`
              this.$router.push(path)
          }
          if(column.label=="体况调理期"){
              let path = `/admin/${pathid}/intelManage/bochan`
              this.$router.push(path)
          }
          if(column.label=="妊娠前三月"){
              let path = `/admin/${pathid}/intelManage/stageOne`
              this.$router.push(path)
          }
          if(column.label=="妊娠第四月"){
              let path = `/admin/${pathid}/intelManage/stageTwo`
              this.$router.push(path)
          }
          if(column.label=="妊娠第五月"){
              let path = `/admin/${pathid}/intelManage/stageThree`
              this.$router.push(path)
          }
          if(column.label=="产羔0-5日"){
              let path = `/admin/${pathid}/intelManage/pdeStageOne`
              this.$router.push(path)
          }
          if(column.label=="产羔6-10日"){
              let path = `/admin/${pathid}/intelManage/pdeStageTwo`
              this.$router.push(path)
          }
          if(column.label=="产羔11-20日"){
              let path = `/admin/${pathid}/intelManage/pdeStageThree`
              this.$router.push(path)
          }
          if(column.label=="产羔21-30日"){
              let path = `/admin/${pathid}/intelManage/pdeStageFour`
              this.$router.push(path)
          }
          if(column.label=="产羔31-40日"){
              let path = `/admin/${pathid}/intelManage/pdeStageFive`
              this.$router.push(path)
          }
          if(column.label=="产羔41-50日"){
              let path = `/admin/${pathid}/intelManage/pdeStageSix`
              this.$router.push(path)
          }
          if(column.label=="产羔51-60日"){
              let path = `/admin/${pathid}/intelManage/pdeStageSeven`
              this.$router.push(path)
          }
          if(column.label=="生长阶段"){
              let path = `/admin/${pathid}/intelManage/gstage`
              this.$router.push(path)
          }
          if(column.label=="育种一期"){
              let path = `/admin/${pathid}/intelManage/bStageOne`
              this.$router.push(path)
          }
          if(column.label=="育种二期"){
              let path = `/admin/${pathid}/intelManage/bStageTwo`
              this.$router.push(path)
          }
          if(column.label=="育肥前期"){
              let path = `/admin/${pathid}/intelManage/unfatStage`
              this.$router.push(path)
          }
          if(column.label=="直线育肥期"){
              let path = `/admin/${pathid}/intelManage/gfStage`
              this.$router.push(path)
          }
        }
    }
}
</script>

<style lang="stylus">
@import '~@/assets/css/color'
.el-table thead.is-group th
    background #2891d1
    cursor pointer
</style>

