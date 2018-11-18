/**
 * el-select下拉框数据
 */
export const getMedicines = (q, cb) => {
    let medicines = [
        {value: '伊维菌素+阿苯达唑', key: 0},
        {value: '伊维菌素注射液', key: 1},
        {value: '阿维菌素片', key: 2},
        {value: '硝氯酚片', key: 3},
        {value: '吡喹酮片', key: 4},
        {value: '双甲脒溶液', key: 5},
        {value: '氯氰菊酯', key: 6}  
    ]
    cb(medicines)
}

export const getWays = (q, cb) => {
    let ways = [
        {value: '皮下注射', key: 0},
        {value: '口服', key: 1},
        {value: '药浴', key: 2},
        {value: '圈舍环境喷洒', key: 3}
    ]
    cb(ways)
}

export const getDoses = (q, cb) => {
    let doses = [
        {value: '0.3mg/kg', key: 0},
        {value: '4mg/kg', key: 1},
        {value: '35mg/kg', key: 2},
        {value: '1000倍稀释', key: 3},
        {value: '500倍稀释', key: 4}
    ]
    cb(doses)
}

export const getRegion = (q, cb) => {
    let regions = [
        {value: '省级代理'},
        {value: '市级代理'},
        {value: '县级代理'}
    ]
    cb(regions)
}

export const getStages = (q, cb) => {
    let stages = [
        {value: '引种应激期', key: 0},
        {value: '体况调理期', key: 1},
        {value: '妊娠前三月', key: 2},
        {value: '妊娠第四月', key: 3},
        {value: '妊娠第五月', key: 4},
        {value: '产羔0-5日', key: 5},
        {value: '产羔6-10日', key: 6},
        {value: '产羔11-20日', key: 7},
        {value: '产羔21-30日', key: 8},
        {value: '产羔31-40日', key: 9},
        {value: '产羔41-50日', key: 10},
        {value: '产羔51-60日', key: 11},
        {value: '生长阶段', key: 12},
        {value: '育种一阶段', key: 13},
        {value: '育种二阶段', key: 14},
        {value: '育肥前期', key: 15},
        {value: '直线育肥期', key: 16},
    ]
    cb(stages)
}

export const getConFeedA = (q, cb) => {
    let conFeed = [
        {value: '预混料'},
        {value: '浓缩料'}
    ]
    cb(conFeed)
}

export const getConFeed = (q, cb) => {
    let conFeed = [
        {value: '玉米'},
        {value: '豆粕'},
        {value: '麸皮'},
        {value: '全价料'}
    ]
    cb(conFeed)
}

export const getDryFeed = (q, cb) => {
    let dryFeed = [
        {value: '干草'},
        {value: '青草'}
    ]
    cb(dryFeed)
}

export const getTypeName = (q, cb) => {
    let typeName = [
        {value: '大黑羊'},
        {value: '努比亚山羊'},
        {value: '努比亚山羊1号'}
    ]
    cb(typeName)
}
