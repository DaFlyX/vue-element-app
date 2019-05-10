<template>
	<div id="main">
		<Header title="首页"></Header>
		<div class="carousel">
			<el-carousel :interval="5000" arrow="always" height="100px">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3>{{ item }}</h3>

				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="tj">
			<ul>
				<li>
					<p>推荐</p>
				</li>
				<li>
					<p>查看更多<i class="el-icon-arrow-right"></i></p>
				</li>
			</ul>
		</div>
		<div class="blogsbox" :style="'height:'+divHeight +'px'">
			<ul>
				<li v-for="data in tableData">
					<div>
						<span>{{data.title}}</span>
						<span>Hot</span>
					</div>
					<div class="abstract">
						<span>{{data.abstract}}</span>
					</div>
					<div class="info">
						<div><i class="el-icon-user"></i>{{data.nickname}}</div>
						<div><i class="el-icon-pie-chart"></i>{{data.name}}</div>
						<div><i class="el-icon-alarm-clock"></i>{{data.update_time}}</div>
						<div><i class="el-icon-thumb"></i>{{data.views}}</div>
						<div><i class="el-icon-chat-round"></i>{{data.likes}}</div>
					</div>
				</li>
			</ul>
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
				tableData: [],
				divHeight: 0,
			};
		},
		mounted() {
		    this.axios({
		    	url: 'http://127.0.0.1:8010/api/v1/articles',
		    	method: 'get',
		    	// params: {
		    		// page: this.cur_page
		    	// }
		    }).then((res) => {
		    	this.tableData = res.data.data[0];
		    	console.log(this.tableData)
		    	// this.$message.success(res.data.msg);
		    }),
			this.divHeight = document.documentElement.clientHeight - 261
		}
	
	}
</script>

<style scoped>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 80px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.carousel {
		height: 100px;
	}

	.tj {
		flex: inherit;
		overflow: auto;
		height: 31px;
		margin-bottom: 0;
	}

	.tj ul {
		display: flex;
		height: 30px;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #E4E7ED;
	}

	.tj ul li {
		padding-left: 10px;
		padding-right: 10px;
		height: 25px;
	}

	.tj ul li.active {
		color: #42B983;
	}

	.tj ul p {
		font-size: 12px;
		line-height: 20px;
	}

	.blogsbox {
		flex: 1;
		overflow: auto;
	}

	.blogsbox ul {
		padding: 20px;
	}

	.blogsbox li {
		border-bottom: 1px solid #e6e6e6;
		margin-bottom: 10px;
	}

	.blogsbox div {
		margin-bottom: 10px;
		margin-right: 10px;
	}

	.blogsbox .abstract {
		font-size: 13px;
		color: #666;
	}

	.blogsbox .abstract span:nth-of-type(2) {
		float: right;
	}

	.blogsbox .info {
		display: flex;
	}

	.blogsbox .info div {
		/* padding: 0 10px; */
		height: 15px;
		line-height: 15px;
		border-radius: 2px;
		color: #666;
		border: 1px solid #42B983;
		font-size: 12px;
	}

	.blogsbox .info div.or {
		color: #f90;
		border: 1px solid #f90;
	}

	.blogsbox .info div.bl {
		color: #589daf;
		border: 1px solid #589daf;
	}
</style>
