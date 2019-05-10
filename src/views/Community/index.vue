<template>
	<div id="main">
		<Header title="社区"></Header>
		<div class="container" :style="'height:'+divHeight +'px'">
			<div class="news_infos" >
				<div class="content whisper-content leacots-content">
					<div class="cont w1000">
						<div class="whisper-list">
							<div class="item-box">
								<div class="review-version">
									<div class="form-box">
										<img class="banner-img" src="../../../public/img/liuyan.jpg">
										<div class="form">
											<form class="layui-form" action="/pmessage" method="post">
												<div class="layui-form-item layui-form-text">
													<div class="layui-input-block">
														<textarea name="content" placeholder="既然来了，就说几句" class="layui-textarea"></textarea>
													</div>
												</div>
												<div class="layui-form-item">
													<div class="layui-input-block" style="text-align: right;">
														<button class="layui-btn definite">留言</button>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div class="volume">
										全部留言 <span>11</span>
									</div>
									<div class="list-cont" v-for="(o,index) in 4" :key="o">

										<div class="cont" >
											<div class="img">
												<img src="../../../public/img/wx1.png" alt="">
											</div>
											<div class="text">
												<p class="tit">
													<span class="name">火柴</span>
													<span class="data">2019-05-10</span>
												</p>
												<p class="ct">请问这个怎么做</p>
											</div>
										</div>


									</div>

								</div>
							</div>
						</div>
						<div id="demo" style="text-align: center;"></div>
					</div>
				</div>
			</div>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import TabBar from '@/components/TabBar';
	export default {
		name: 'Home',
		components: {
			Header,
			TabBar
		},
		data() {
			return {
				data: [],
				divHeight: 0,
			};
		},
		mounted() {
			this.divHeight = document.documentElement.clientHeight - 150
			console.log(this.divHeight)
		}
	}
</script>

<style scoped>
	.container {
		margin-top: 20px;
		overflow: scroll;
	}

	.t_nav {
		font-size: 12px;
	}
	.list-cont{
		padding-top: 0px;
		padding-bottom: 0px;
		border-radius: 5px;
		box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.1)
	}
	.cont {
		width: 100%;
		overflow: hidden;
		padding-top: 0px;
		padding-bottom: 0px;
	}

	/* .cont .text .tit {
		margin-bottom: 18px;
	} */
	.form{
		margin-top: 0px;
		margin-bottom: 0px;
	}
	.form-box{
		height: 278px;
	}
	.text{
		float: inherit;
		width: 100%;
		/* margin-right: px; */
		padding: 0;
	}
	.img{
		float: left;
	}
	.img img{
		 width: 100%;
		 height: 100%;
		 border-radius: 50%;
	}
	/* .image{
		float: left;
		margin-left: 20px;
	} */
	.volume{
		margin-bottom: 10px;
	}
</style>
