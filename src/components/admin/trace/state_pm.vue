<template>
	<div class="state-info">
		<p>{{label}}</p>
		<div>
			<el-tag>当前值</el-tag>{{data}}
			<!-- <el-tag :type="checkState( chartData.rows[0]['质量'] )">{{info}}</el-tag> -->
		</div>		
		<div>
			<el-tag>优</el-tag> <{{state.warn[0]}}
			<i class="state-icon" :class="{ 'state-icon-1': checkState( data ) === 1 }"></i>
		</div>
		<div>			
			<el-tag>良</el-tag>>{{state.warn[0]}} ,  <{{state.warn[1]}}
			<i class="state-icon" :class="{ 'state-icon-2': checkState( data ) === 2  }"></i>		
		</div>
		<div>
			<el-tag>轻度污染</el-tag> >{{state.warn[1]}} ,  <{{state.warn[2]}}
			<i class="state-icon" :class="{ 'state-icon-3': checkState( data ) === 2  }"></i>	
		</div>	
		<div>
			<el-tag>中度污染</el-tag> >{{state.warn[2]}} ,  <{{state.warn[3]}}
			<i class="state-icon" :class="{ 'state-icon-3': checkState( data ) === 2  }"></i>	
		</div>	
		<div>
			<el-tag>重度污染</el-tag> >{{state.warn[3]}} ,  <{{state.warn[4]}}
			<i class="state-icon" :class="{ 'state-icon-3': checkState( data ) === 2  }"></i>	
		</div>
		<div>
			<el-tag>严重污染</el-tag> >{{state.warn[4]}}
			<i class="state-icon" :class="{ 'state-icon-3': checkState( data ) === 2  }"></i>	
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Number,
            default () {
                return {}
            }
		},
		state: {
			type: Object,
            default () {
                return {}
            }
		},
		label: {
			type: String,
            default () {
                return ""
            }
		}
	},

	data () {
		return {

		}
	},

	methods: {
		checkState( data ) {
			let warn = this.state.warn			
			if (  data <= warn[1] ) {
				return 1
			} else if ( data > warn[1] && data < warn[3] ) {
				return 2							
			} else if(data >= warn[3]){
				return 3
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.state-info
	display inline-block
	margin-left 10px
	p
		margin-left 12px
	>div
		margin-bottom 10px
		.el-tag
			margin-left 12px
			margin-right 12px
	.state-icon
		width: 24px
		height: 24px
		background: #666666a6
		border-radius: 12px
		display: inline-block
		vertical-align: middle
		margin-left: 20px	
	.state-icon-1	
		background:#67C23A
	.state-icon-2
		background:#E6A23C
	.state-icon-3
		background:#F56C6C	
</style>


