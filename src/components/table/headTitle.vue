<template>
	<div>
		<p @click="hideMetro">{{titleName}}</p>
	</div>
</template>

<script>
    export default {
        data(){
            return {
           		
            }
        },
        props:{
        	titleName:String,
        	list:String,
        	titleShow:Boolean
        },
        methods:{
        	  hideMetro(){
                this.ifSeen=!this.titleShow;
                this.$emit("receiveSeen",this.ifSeen,this.list);
            }
        }
    }
</script>

<style scoped>
	/*div{
		display:flex;
		flex-wrap: wrap;
		width: 100%;
		margin: 0 auto;
	}*/
	div p{
		display:flex;
		justify-content: center;
		margin: 0 auto;
		font-size: 15px;
		cursor: pointer;
		color: #fff;
		background:#2891d1;
		width: 75%;
		height: 30px;
		line-height: 30px;
		transition: 0.5s;
	}
	div p:hover{
		color: #6aaf08;
	}
</style>