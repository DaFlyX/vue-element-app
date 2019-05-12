<template>
	<div class="articleMain" :style="'height:'+divHeight +'px'">
		<el-row>
			<el-col v-for="(o, index) in 10" :key="o">
				<el-card>
<<<<<<< HEAD
					<el-image :src='"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"' class="image" :fit="scale-down"></el-image>
					<div>
						<div><span>标题</span></div>
						<div><span>简介</span></div>
						<div><span>分类</span></div>
						<div><span>时间</span></div>	
=======
					<el-image :src='"https://www.django.cn/media/article_img/2019/04/17/mingling.jpg"' class="image"></el-image>
					<div class="articleMainDesc">
						<div class="title"><span>Django常用命令介绍，新手建议阅读</span></div>
						<div class="desc"><span>django里的django-admin和manege.py都是Django的命令工...</span></div>
						<div class="bottomBody">
							<div class="footerLeft">
								<div class="category"><span>Django</span></div>
								<div class="date"><span>2019年04月17日 点击:677</span></div>
							</div>
<!--							<span>2019年04月17日 点击:677</span>-->
							<div class="footerRight"><i class="el-icon-chat-round"><span>10</span></i></div>
						</div>
>>>>>>> 文章页面样式完成
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
<<<<<<< HEAD
				currentDate: new Date()
			};
		},
		mounted() {
			this.divHeight = document.documentElement.clientHeight - 180
=======
				currentDate: new Date(),
				cid: ''
			};
		},
		mounted() {
			console.log(this.$parent.$refs.aaa.cid);
			this.cid = this.$parent.$refs.aaa.cid;

			this.divHeight = document.documentElement.clientHeight - 180
		},
		methods: {
			getCid (cid) {
				console.log(cid)
			}
>>>>>>> 文章页面样式完成
		}
	}
</script>

<style>
	#main {
		display: block;
	}
<<<<<<< HEAD
	
=======

>>>>>>> 文章页面样式完成
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
<<<<<<< HEAD
=======
	.articleMain .el-card__body{
		padding: 0;
		border: 1px solid #eaeaea;
		border-radius: 3px;
		overflow: hidden;
		margin: 10px;
	}
	.articleMain .articleMainDesc{
		padding: 2em;
	}
	.articleMainDesc .title{
		color: #343434;
		font-size: 1.5em;
		line-height: 1.35;
		margin-bottom: 1em;

	}
	.articleMainDesc .desc{
		color: #747474;
		margin-bottom: .5em;
	}

	.bottomBody{
		overflow: hidden;
	}
	.footerLeft{
		float: left;
	}
	.footerRight{
		float: right;
	}
	.footerLeft .category{
		color: #3dd07d;
		font-size: 14px;
		font-weight: 700;
		line-height: 1.42857143;
	}
	.footerLeft .date{
		font-size: .8em;
		color: #bababa;

	}
	.footerRight i{
		font-size: 34px;
		transform: rotateY(180grad);
		display: inline-block;
		position: relative;
		color: #bababa;
	}
	.footerRight i span{
		transform: rotateY(180grad);
		display: inline-block;
		font-size: 14px;
		position: absolute;
		color: #747474;
		left: 50%;
		top: 50%;
		margin-left: -7px;
		margin-top: -7px;
		font-weight: 700;
		text-transform: uppercase;
	}
>>>>>>> 文章页面样式完成
</style>
