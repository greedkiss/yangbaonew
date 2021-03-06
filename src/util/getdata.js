import fetch from './fetch'

/**
 * 登录注册，找回密码
 */
export const Login = data => fetch('/login', data, 'POST')

export const Register = data => fetch('/register', data, 'POST')

export const FindPass = data => fetch('/ensurequestion', data, 'POST')

export const GetQuestions = name => fetch('/question?name=' + name)

export const LogOut = id => fetch('/logout/' + id)

/**
 * 添加，展示留言
 */
export const CommentInsert = data => fetch('/messageBoard/insert', data, 'POST')

export const Comment = data => fetch('/messageBoard/search', data, 'POST')

export const deleteComment = data => fetch('/messageBoard/delete', data, 'DELETE')

export const getMessage = (size, page) => fetch(`/messages/?size=${size}&page=${page}`)

/**
 * 系谱档案CURD
 */
export const postGeneaRec = data => fetch('/gf', data, 'POST')

export const updateGeneaRec = (id, data) => fetch(`/gf/${id}`, data, 'PUT')

export const getGeneaRec = id => fetch(`/gf/find/${id}`)

export const deleteGeneaRec = id => fetch('/gf/' + id, null, 'DELETE')

// 获取羊的种类
export const getSheepTypes = id => fetch('/gf/types')

// 系谱档案多条件查询
export const queryGenea = data => fetch('/gf/findshow', data, 'POST')

export const getGeneas = (id, data) => fetch(`/gf/${id}`, data)

/**
 * 存栏档案CURD
 */

 // 获取羊的耳牌
// export const getEarTag = id => fetch('/gf/types')

/**
 * 权限CURD
 */
export const getPermission = _ => fetch('/user')

/**
 * 获取直播或者推流地址
 */

export const getChannelList = () => fetch('/liveBroadcast/getLiveStat')

export const getPushUrl = id => fetch(`/liveBroadcast/getPushUrl/${id}`)

// export const getVideoUrl = (id, type) => fetch(`/liveBroadcast/getPushUrl?userid=${id}&usertype=${type}`)

/**
 * 聊天模块
 */

// 专家匹配, 邀请专家
export const getExpert = agentid => fetch('/getExpert/' + agentid)

// 专家获取聊天好友
export const getClients = proid => fetch('/getClientList/' + proid)

// 获取所有聊天记录 用户传id 专家传talkid
export const getTalkRecord = id => fetch('/getTalkRecord/' + id)

// 保存常用语
export const postExpressions = data => fetch('/expression', data, 'POST')
// 获取常用语
export const getExpressions = expertid => fetch('/getExpression?expert_id=' + expertid)

// 获取好友
// export const getFellows = id => fetch('//' + id)

// 退出聊天评价专家
export const evalulateExpert = data => fetch('/evaluation', data, 'POST')

// 客户评价
export const evaluateChat = data => fetch('/evaluation', data, 'POST')

/**
 * 配种产子
 */
export const postBreeding = data => fetch('/breeding', data, 'POST')

export const updateBreeding = (id, data) => fetch(`/breeding/${id}`, data, 'PATCH')

export const getAllBreeding = (id, data) => fetch(`/breeding/${id}`, data)

export const getBreeding = (id, data) => fetch(`/breeding/find/${id}`, data)

export const findNutrition = data => fetch(`/breeding/findN`, data, 'POST')

export const deleteBreeding = id => fetch(`/breeding/${id}`, null, 'DELETE')

/**
 * 消毒RD
 */
export const getAllDisinfects = (id, data) => fetch(`/df/${id}`, data)

export const getDisinfect = (id, data) => fetch(`/df/find/${id}`, data)

export const deleteDisinfect = id => fetch(`/df/${id}`, null, 'DELETE')

/**
 * 免疫RD
 */
export const getAllImmune = (id, data) => fetch(`/ip/${id}`, data)

export const getImmune = (id, data) => fetch(`/ip/find/${id}`, data)

export const deleteImmune = id => fetch(`/ip/${id}`, null, 'DELETE')

/**
 * 驱虫RD
 */
export const getAllAntiscolic = (id, data) => fetch(`/rp/${id}`, data)

export const getAntiscolic = (id, data) => fetch(`/rp/find/${id}`, data)

export const deleteAntiscolic = id => fetch(`/rp/${id}`, null, 'DELETE')

/**
 * 发布系统CURD
 */
export const postRelease = data => fetch('/notice', data, 'POST')

export const updateRelease = (id, data) => fetch(`/notice/${id}`, data, 'PATCH')

export const getReleaseById = id => fetch(`/notice/find/${id}`)

export const getReleaseByName = name => fetch(`/notice/type/${name}`)

export const getAllRelease = (id, data) => fetch(`/notice`, data)

export const deleteRelease = id => fetch(`/notice/${id}`, null, 'DELETE')

/**
 * 专家审核
 */
export const getAllReviews = data => fetch('/diagnosis', data)

export const doReview = (id, data) => fetch(`/review/${id}`, data, 'PATCH')

/**
 * 阶段营养
 */
export const postStage = data => fetch('/nutrition', data, 'POST')

export const updateStage = (id, data) => fetch(`/nutrition/${id}`, data, 'PUT')

export const getStage = (id, data) => fetch(`/nutrition/find/${id}`, data)

export const getAllStages = (id, data) => fetch(`/nutrition/${id}`, data)

export const deleteStage = id => fetch(`/nutrition/${id}`, null, 'DELETE')

/**
 * 疾病防治
 */
export const postPrevention = data => fetch('/diagnosis', data, 'POST')

export const updatePrevention = (id, data) => fetch('/diagnosis/' + id, data, 'PATCH')

export const getAllPrevention = (id, data) => fetch('/diagnosis/' + id, data)

export const getPrevention = id => fetch('/diagnosis/find/' + id)

export const deletePrevention = id => fetch(`/diagnosis/${id}`, null, 'DELETE')

/**
 * 用户管理
 */
export const postUser = data => fetch('/user', data, 'POST')

export const getUserById = id => fetch('/user/detail/' + id)

export const getAdminUser = id => fetch('/user/find/' + id)

export const getUserByName = id => fetch('/user/id/' + id)

export const getUsers = (facid, data) => fetch('/user/' + facid, data)

export const updateUser = (id, data) => fetch('/user/' + id, data, 'PUT')

export const deleteUser = id => fetch('/user/' + id, null, 'DELETE')

export const getFactories = agentid => fetch('/factory/' + agentid)

export const getAgentUnit = () => fetch('/agent/fr')

export const getFactoryUnit = () => fetch('/factory/fr')

// 修改密码
export const updatePassword = (id, data) => fetch('/user/password/' + id, data, 'PATCH')

/**
 * 代理管理
 */
export const postAgent = data => fetch('/agent', data, 'POST')

export const updateAgent = (id, data) => fetch(`/agent/${id}`, data, 'PUT')

export const getAgents = (agentid, data) => fetch(`/agent/${agentid}`, data)

export const getAgent = id => fetch('/agent/find/' + id)

export const deleteAgent = id => fetch(`/agent/${id}`, null, 'DELETE')

/**
 * 羊场管理
 */
export const postFarm = data => fetch('/factory', data, 'POST')

export const updateFarm = (id, data) => fetch(`/factory/${id}`, data, 'PUT')

export const getFarms = (facid, data) => fetch(`/factory/${facid}`, data)

export const getFarmById = id => fetch(`/factory/find/${id}`)

export const getFarmByLocation = loc => fetch(`/factory/location`, {location: loc})

export const deleteFarm = id => fetch(`/factory/${id}`, null, 'DELETE')

/**
 * 动物福利
 */
export const postWelfare = data => fetch('/of', data, 'POST')

export const updateWelfare = (id, data) => fetch(`/of/${id}`, data, 'PUT')

export const getAllWelfare = (id, data) => fetch(`/of/${id}`, data)

export const getWelfare = id => fetch(`/of/find/${id}`)

export const deleteWelfare = id => fetch(`/of/${id}`, null, 'DELETE')

/**
 * 角色权限管理
 */

export const postRole = data => fetch('/role', data, 'POST')

export const getRoles = (rank, data) => fetch('/role/' + rank, data)

export const getRoleDetail = roleid => fetch('/role/find/' + roleid)

export const deleteRole = roleid => fetch('/role/' + roleid, null, 'DELETE')

export const updateRole = (roleid, data) => fetch('/role/' + roleid, data, 'PUT')

export const getFactoryUsers = (facid, data) => fetch('/user/' + facid, data)

export const updateUserRole = (uid, roleid) => fetch('/user/role/' + uid, {role: roleid}, 'PATCH')

/**
 * 短信平台
 */
export const postMessage = data => fetch('/psend', data, 'GET')

export const postWarningInfo = data => fetch('/gedit', data, 'GET')

/**
 * 专家课堂视频发布
 */
export const getVideo = data => fetch('/video/find', data, 'POST')

export const deleteVideo = id => fetch('/video/' + id, null, 'DELETE')

// 审核，监督执行七个生产档案
export const patchWelfare = (id, data) => fetch('/of/s/' + id, data, 'PATCH')
export const patchBreeding = (id, data) => fetch('/breeding/s/' + id, data, 'PATCH')
export const patchPrevention = (id, data) => fetch('/diagnosis/s/' + id, data, 'PATCH')
export const patchDisinfect = (id, data) => fetch('/df/s/' + id, data, 'PATCH')
export const patchImmune = (id, data) => fetch('/ip/s/' + id, data, 'PATCH')
export const patchAntiscolic = (id, data) => fetch('/rp/s/' + id, data, 'PATCH')
export const patchStage = (id, data) => fetch('/nutrition/s/' + id, data, 'PATCH')

export const patchProWelfare = (id, data) => fetch('/of/p/' + id, data, 'PATCH')
export const patchProPrevention = (id, data) => fetch('/diagnosis/p/' + id, data, 'PATCH')
export const patchProBreeding = (id, data) => fetch('/breeding/p/' + id, data, 'PATCH')
export const patchProDisinfect = (id, data) => fetch('/df/p/' + id, data, 'PATCH')
export const patchProImmune = (id, data) => fetch('/ip/p/' + id, data, 'PATCH')
export const patchProAntiscolic = (id, data) => fetch('/rp/p/' + id, data, 'PATCH')
export const patchProStage = (id, data) => fetch('/nutrition/p/' + id, data, 'PATCH')

// 可视系统
export const diagnoseUp = data => fetch('/uploadFile/upload', data, 'POST')

export const diaSearchAll = data => fetch('/searchfile/searchAll', data, 'POST')

export const diaSearchByExpert = data => fetch('/searchfile/searchByExpert', data, 'POST')

export const diaSearchByDate = data => fetch('/searchfile/searchByDate', data, 'POST')

export const diaSearchByBrand = data => fetch('/searchfile/searchByBrand', data, 'POST')

export const diaSearchByVaccine = data => fetch('/searchfile/searchByVaccine', data, 'POST')

export const diaSearchBySymptom = data => fetch('/searchfile/searchBySymptom', data, 'POST')

export const diaSearchByUploader = data => fetch('/searchfile/searchByUploader', data, 'POST')

export const deleteDiagnose = id => fetch('/pic/delete/' + id, null, 'DELETE')

export const getTableDetail = (id , flag) => fetch('/client/' + id + '/role/' + flag, 'GET')

// 存档档案

// 栏栋管理
export const getYangNum = (id ) => fetch ('/bc/getSheepBase/' + id , 'GET')

export const createBC = data => fetch ('/bc/batchCreateBC', data, 'POST')

export const createBCL = (old,data) => fetch ('/bc/batchUpdateBC/' + old, data, 'POST')

export const getDeadSheep = (id, data) => fetch('/ds/d/' + id, data)

export const getSaleSheep = (id, data) => fetch('/ds/s/' + id, data)

export const getBuySheep = (id, data) => fetch('/ds/b/' + id, data)

export const getAllSheep = (id, data) => fetch('/ds/a/' + id, data)

export const makeDeadSheep = (data) => fetch(`/ds/d/d`, data, 'PATCH')

export const getSheepBuilding = (id) => fetch('/bc/b/' + id, 'GET')

export const getSheepCol = (id,data) => fetch('/bc/b/' + id + '/' + data, 'GET')

export const moveSheep = (id, data) => fetch('/bc/changeBC/' + id, data, 'POST')

export const getSaleFac = (id) => fetch('/factory/in/' + id, 'GET')

export const makeSaleFac = (data) => fetch('/ds/ds', data,'POST')

export const getSheepBCT = (data) => fetch('/s/sp',data,'POST')

export const getSheepTog = (id) => fetch('/s/n/' + id,'GET')

export const submitSheepTog = (data) => fetch('/s/s',data ,'POST')

export const updateSheepTog = (data) => fetch('/s/u',data ,'POST')

export const deleteCol = (id) => fetch('/bc/d/' + id , null , 'DELETE')

//卫生疫控


export const getSheepimmTag = (data) => fetch('/s/i' ,data ,'POST')

export const getSheepEarTag = (data) => fetch('/s/t' ,data ,'POST')


//有机养殖环境追溯


export const getTraceData = (id , page) => fetch('/e/g/' + id + '/' + page  , 'GET' )