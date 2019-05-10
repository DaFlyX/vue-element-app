<template>
	<div class="articleMain" :style="'height:'+divHeight +'px'">
		<el-row>
			<el-col v-for="(o, index) in 10" :key="o">
				<el-card>
					<el-image :src='"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"' class="image" :fit="scale-down"></el-image>
					<div>
						<div><span>标题</span></div>
						<div><span>简介</span></div>
						<div><span>分类</span></div>
						<div><span>时间</span></div>	
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name:'AList',
		data() {
			return {
				data:[],
				divHeight:0,
				currentDate: new Date()
			};
		},
		mounted() {
			this.divHeight = document.documentElement.clientHeight - 180
		}
	}
</script>

<style>
	#main {
		display: block;
	}
	
	.time {
		font-size: 12px;
		color: #999;
	}
	
	.button {
		padding: 0;
		float: right;
	}
	
	.image {
		width: 100%;
		height: 200px;
		display: block;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	/* #main .el-col-11:nth-child(2n) {
		margin-left: 8.33333%;
	} */
	.articleMain{
		overflow: scroll;
	}
</style>
