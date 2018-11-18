import Vue from 'vue'
import Router from 'vue-router'

// 用户模块
import Index from '@/components/Index'
import Login from '@/components/login/login'
import Register from '@/components/login/register'
import FindPass from '@/components/login/findpass'
import Genea from '@/components/genea/genealogic'
import GeneaDetail from '@/components/genea/genea_detail'
import Course from '@/components/course'
const SearchRes = () => import('@/components/search_res')

// 管理员模块首页
const Admin = () => import('@/components/admin/index')
// 专家在线咨询
const Chat = () => import('@/components/admin/user/chat')
const ProChat = () => import('@/components/admin/user/prochat')
// 发布
const ReleaseIndex = () => import('@/components/release')
const CourseIntro = () => import('@/components/admin/professorCourseVideo/intro')
// 个人信息
const UserInfo = () => import('@/components/admin/user/user')
const PasswordModify = () => import('@/components/admin/user/pass')
// 审核
const Review = () => import('@/components/admin/review/index')
// 留言
const CommentSummary = () => import('@/components/admin/comment/index')
const AcountComment = () => import('@/components/admin/comment/accountComment')
const CommentResult = () => import('@/components/admin/comment/commentResults')
// 用户权限
const AuthRole = () => import('@/components/admin/auth/role')
const Account = () => import('@/components/admin/account/index')
// 系谱档案
const Genealogic = () => import('@/components/admin/genealogic/index')
const GenealogicList = () => import('@/components/admin/genealogic/list')
// 卫生疫控
const DisinfectPrac = () => import('@/components/admin/health/disinfect_prac')
const DisinfectList = () => import('@/components/admin/health/disinfect_list')
const ImmunePlan = () => import('@/components/admin/health/immune_plan')
const ImmunePrac = () => import('@/components/admin/health/immune_prac')
const ImmuneList = () => import('@/components/admin/health/immune_list')
const AntiscolicPlan = () => import('@/components/admin/health/antiscolic_plan')
const AntiscolicPrac = () => import('@/components/admin/health/antiscolic_prac')
const AntiscolicList = () => import('@/components/admin/health/antiscolic_list')

// 存栏档案
const LivestockPrac = () => import('@/components/admin/livestock/index')
const LivestockList = () => import('@/components/admin/livestock/list')
const LivestockSale = () => import('@/components/admin/livestock/sale')
const LivestockDead = () => import('@/components/admin/livestock/dead')
const LivestockAdd = () => import('@/components/admin/livestock/add')
const LivestockBuy = () => import('@/components/admin/livestock/buy')

// 智能管理

const intelManage = () => import('@/components/admin/intelManage/totalSeen')
const NonpregnantOne = () => import('@/components/admin/intelManage/sheepIn')
const nonpregnantTwo = () => import('@/components/admin/intelManage/bodyChange')
const pregnantStageOne = () => import('@/components/admin/intelManage/stageOne')
const pregnantStageTwo = () => import('@/components/admin/intelManage/stageTwo')
const pregnantStageThree = () => import('@/components/admin/intelManage/stageThree')
const produceStageOne = () => import('@/components/admin/intelManage/produceStageOne')
const produceStageTwo = () => import('@/components/admin/intelManage/produceStageTwo')
const produceStageThree = () => import('@/components/admin/intelManage/produceStageThree')
const produceStageFour = () => import('@/components/admin/intelManage/produceStageFour')
const produceStageFive = () => import('@/components/admin/intelManage/produceStageFive')
const produceStageSix = () => import('@/components/admin/intelManage/produceStageSix')
const produceStageSeven = () => import('@/components/admin/intelManage/produceStageSeven')
const growStage = () => import('@/components/admin/intelManage/growStage')
const breedStageOne = () => import('@/components/admin/intelManage/breedStageOne')
const breedStageTwo = () => import('@/components/admin/intelManage/breedStageTwo')
const unfatStage = () => import('@/components/admin/intelManage/unfatStage')
const growfatStage = () => import('@/components/admin/intelManage/growfatStage')



// 营养生产
const StagePlan = () => import('@/components/admin/nutrition/stage_plan')
const StagePrac = () => import('@/components/admin/nutrition/stage_prac')
const StageList = () => import('@/components/admin/nutrition/stage_list')
const BreedPlan = () => import('@/components/admin/nutrition/breed_plan')
const BreedPrac = () => import('@/components/admin/nutrition/breed_prac')
const BreedList = () => import('@/components/admin/nutrition/breed_list')
const BreedMore = () => import('@/components/admin/nutrition/breed_more')

// 疫病防治
const PreventionPlan = () => import('@/components/admin/prevention/prevention_plan')
const PreventionPrac = () => import('@/components/admin/prevention/prevention_prac')
const PreventionList = () => import('@/components/admin/prevention/prevention_list')
// 可视系统
const Diagnose = () => import('@/components/admin/visual/diagnose')
const DiagnoseList = () => import('@/components/admin/visual/diagnose_list')
const ProductionVisual = () => import('@/components/admin/visual/production')
// 有机养殖环境追溯
const TraceCharts = () => import('@/components/admin/trace/index')
// 动物福利
const Welfare = () => import('@/components/admin/welfare/index')
const WelfareList = () => import('@/components/admin/welfare/list')
const WelfarePlan = () => import('@/components/admin/welfare/plan')
// 有机监管
const Nation = () => import('@/components/admin/supervise/nation')
const Audit = () => import('@/components/admin/supervise/audit')
const Capture = () => import('@/components/admin/supervise/capture')
const RecoveryIndex = () => import('@/components/admin/supervise/recovery_index')
// 羊场管理
const Farm = () => import('@/components/admin/farm/index')
const FarmList = () => import('@/components/admin/farm/list')
// 代理管理
const Agent = () => import('@/components/admin/agent/index')
const AgentList = () => import('@/components/admin/agent/list')

//品种录入
const category = () => import('@/components/admin/category/index')
const categoryList = () => import('@/components/admin/category/list')

// 发布系统
const Release = () => import('@/components/admin/release/index')
const ReleaseList = () => import('@/components/admin/release/list')
// 短信平台
const Message = () => import('@/components/admin/message/index')
// 专家课堂视频发布
const ProfessorCourseVideo = () => import('@/components/admin/professorCourseVideo/index')

const NotFound = () => import('@/components/not_found')

const TableFound = () => import('@/components/table/app')
Vue.use(Router)

/* eslint-disable object-property-newline */
export default new Router({
    routes: [
        // 用户模块
        {path: '/', name: 'index', component: Index},
        {path: '/login', name: 'login', component: Login},
        {path: '/register', name: 'register', component: Register},
        {path: '/findpass', name: 'findpass', component: FindPass},
        {path: '/genea', name: 'genea', component: Genea},
        {path: '/geneadetail/:id', name: 'geneadetail', component: GeneaDetail},
        {path: '/course', name: 'course', component: Course},
        {path: '/search', name: 'search', component: SearchRes},
        // 集团
        {path: '/company', name: 'company', component: ReleaseIndex},
        // 产品
        {path: '/product', name: 'product', component: ReleaseIndex},
        // 有机
        {path: '/organic', name: 'organic', component: ReleaseIndex},
        // 效益
        {path: '/benefit', name: 'benefit', component: ReleaseIndex},
        // 加盟
        {path: '/league', name: 'league', component: ReleaseIndex},
        // 新闻
        {path: '/news', name: 'news', component: ReleaseIndex},
        // 联系我们
        {path: '/contact', name: 'contact', component: ReleaseIndex},

        // 管理员模块
        {path: '/admin/:id', component: Admin, meta: {requireAuth: true}, children: [
            {path: '', name: 'userinfo', component: UserInfo},
            // 在线聊天
            {path: 'chat', name: 'chat', component: Chat},
            {path: 'prochat', name: 'prochat', component: ProChat},
            // 留言
            {path: 'message', name: 'message', component: Message},
            {path: 'comment/account', name: 'comment', component: AcountComment},
            {path: 'comment/result', name: 'commentres', component: CommentResult},
            {path: 'comment/summary', name: 'commentsum', component: CommentSummary},
            {path: 'passmod', name: 'passmod', component: PasswordModify},
            // 审核
            {path: 'review', name: 'review', component: Review},
            // 动物福利
            {path: 'welfare/prac', name: 'welfareprac', component: Welfare},
            {path: 'welfare/list', name: 'welfarelist', component: WelfareList},
            {path: 'welfare/plan', name: 'welfareplan', component: WelfarePlan},
            {path: 'authrole', name: 'authrole', component: AuthRole},
            {path: 'genealogic/prac', name: 'genealogic', component: Genealogic},
            {path: 'genealogic/list', name: 'genealogiclist', component: GenealogicList},
            // 存栏档案
            {path: 'livestock/prac', name: 'livestock', component: LivestockPrac},
            {path: 'livestock/list', name: 'livestockList', component: LivestockList},
            {path: 'livestock/sale', name: 'livestockSale', component: LivestockSale},
            {path: 'livestock/dead', name: 'livestockDead', component: LivestockDead},
            {path: 'livestock/add', name: 'livestockAdd', component: LivestockAdd},
            {path: 'livestock/buy', name: 'livestockBuy', component: LivestockBuy},
            //智能管理



            
            {path: 'intelManage/total', name: 'intelManage', component: intelManage},
            {path: 'intelManage/shin', name: 'nonpregnantOne', component: NonpregnantOne},
            {path: 'intelManage/bochan', name: 'nonpregnantTwo', component: nonpregnantTwo},
            {path: 'intelManage/stageOne', name: 'pregnantStageOne', component: pregnantStageOne},
            {path: 'intelManage/stageTwo', name: 'pregnantStageTwo', component: pregnantStageTwo},
            {path: 'intelManage/stageThree', name: 'pregnantStageThree', component: pregnantStageThree},
            {path: 'intelManage/pdeStageOne', name: 'produceStageOne', component: produceStageOne},
            {path: 'intelManage/pdeStageTwo', name: 'produceStageTwo', component: produceStageTwo},
            {path: 'intelManage/pdeStageThree', name: 'produceStageThree', component: produceStageThree},
            {path: 'intelManage/pdeStageFour', name: 'produceStageFour', component: produceStageFour},
            {path: 'intelManage/pdeStageFive', name: 'produceStageFive', component: produceStageFive},
            {path: 'intelManage/pdeStageSix', name: 'produceStageSix', component: produceStageSix},
            {path: 'intelManage/pdeStageSeven', name: 'produceStageSeven', component: produceStageSeven},
            {path: 'intelManage/gstage', name: 'growStage', component: growStage},
            {path: 'intelManage/bStageOne', name: 'breedStageOne', component: breedStageOne},
            {path: 'intelManage/bStageTwo', name: 'breedStageTwo', component: breedStageTwo},
            {path: 'intelManage/unfatStage', name: 'unfatStage', component: unfatStage},
            {path: 'intelManage/gfStage', name: 'growfatStage', component: growfatStage},


            // 卫生疫控
            {path: 'health/disinfect/prac', name: 'disinfectprac', component: DisinfectPrac},
            {path: 'health/disinfect/list', name: 'disinfectlist', component: DisinfectList},
            {path: 'health/immune/plan', name: 'immuneplan', component: ImmunePlan},
            {path: 'health/immune/prac', name: 'immuneprac', component: ImmunePrac},
            {path: 'health/immune/list', name: 'immunelist', component: ImmuneList},
            {path: 'health/antiscolic/plan', name: 'antiscolicplan', component: AntiscolicPlan},
            {path: 'health/antiscolic/prac', name: 'antiscolicprac', component: AntiscolicPrac},
            {path: 'health/antiscolic/list', name: 'antiscoliclist', component: AntiscolicList},
            // 营养生产
            {path: 'nutrition/breed/plan', name: 'breedplan', component: BreedPlan},
            {path: 'nutrition/breed/prac', name: 'breedprac', component: BreedPrac},
            {path: 'nutrition/breed/list', name: 'breedlist', component: BreedList},
            {path: 'nutrition/breed/more', name: 'breedmore', component: BreedMore},
            {path: 'nutrition/stage/plan', name: 'stageplan', component: StagePlan},
            {path: 'nutrition/stage/prac', name: 'stageprac', component: StagePrac},
            {path: 'nutrition/stage/list', name: 'stagelist', component: StageList},
            // auth, comment, account
            {path: 'account', name: 'account', component: Account},
            // 疾病防治
            {path: 'prevention/plan', name: 'preventionplan', component: PreventionPlan},
            {path: 'prevention/prac', name: 'preventionprac', component: PreventionPrac},
            {path: 'prevention/list', name: 'preventionlist', component: PreventionList},
            // 可视系统
            {path: 'visual/diagnose', name: 'diagnose', component: Diagnose},
            {path: 'visual/diagnose/list', name: 'diagnose_list', component: DiagnoseList},
            {path: 'visual/production', name: 'production', component: ProductionVisual},
            // 追溯图表
            {path: 'trace', name: 'trace', component: TraceCharts},
            // 有机监管
            {path: 'supervise/nation', name: 'nation', component: Nation},
            {path: 'supervise/capture', name: 'capture', component: Capture},
            {path: 'supervise/audit', name: 'audit', component: Audit},
            {path: 'supervise/recovery_index', name: 'recovery_index', component: RecoveryIndex},
            // 代理，羊场，发布系统
            {path: 'agent', name: 'agent', component: Agent},
            {path: 'agent/list', name: 'agentlist', component: AgentList},
            {path: 'farm', name: 'farm', component: Farm},
            {path: 'farm/list', name: 'farmlist', component: FarmList},
            {path: 'release', name: 'release', component: Release},
            {path: 'release/list', name: 'releaselist', component: ReleaseList},

            //品种录入
            {path: 'category', name: 'category', component: category},
            {path: 'category/list', name: 'categorylist', component: categoryList},
            // 专家课堂视频发布
            {path: 'professorCourseVideo', name: 'professorCourseVideo', component: ProfessorCourseVideo},
            {path: 'courseintro', name: 'courseintro', component: CourseIntro},
            //客户关系一览表
            {path: 'table', name: 'table', component: TableFound}
        ]},
        {path: '*', name: 'notfound', component: NotFound}
    ]
})
