<template>
	<footer id="footer">
		<ul>
			<router-link tag="li" to="/" exact>
				<i class="el-icon-s-home"></i>
				<p>首页</p>
			</router-link>
			<router-link tag="li" to="/article">
				<i class="el-icon-reading"></i>
				<p>文章</p>
			</router-link>
			<router-link tag="li" to="/tutorial">
				<i class="el-icon-reading"></i>
				<p>教程</p>
			</router-link>
			<router-link tag="li" to="/community">
				<i class="el-icon-chat-line-square"></i>
				<p>社区</p>
			</router-link>
			<router-link tag="li" to="/mine">
				<i class="el-icon-user"></i>
				<p>我的</p>
			</router-link>
		</ul>
	</footer>
</template>

<script>
export default {
  name: "TabBar"
  
}
</script>

<style scoped>
	#footer{
		width: 100%;
		height: 50px;
		background: white;
		border-top: 2px solid #ebe8e3;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	#footer ul{
		display: flex;
		text-align: center;
		height: 50px;
		align-items: center;
	}
	#footer ul li{flex: 1;height: 40px;}
	#footer ul li.active{color: #55cbc4;}
	#footer ul li.router-link-active{color: #55cbc4;}
	#footer ul i{font-size: 20px;}
	#footer ul p{font-size: 12px;line-height: 18px;}

</style>
