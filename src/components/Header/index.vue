<template>
	<div id="coco-index">
		<div class="header">
			
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1"><span>卖小孩的火柴</span></el-menu-item>
				<el-menu-item index="2">文章</el-menu-item>
				<el-menu-item index="3">教程</el-menu-item>
				<el-menu-item index="4">社区</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header"
	};
</script>

<style scoped>
	#coco-index {
		width: 100%;
		margin: 0 auto;
		border-bottom: 1px solid #42B983;
	}

	.header {
		width: 1000px;
		margin: 0 auto;
		height: 80px;
	}

	.header .el-menu.el-menu--horizontal {
		border: none;
	}

	.el-menu-item {
		font-size: 16px;
		color: #474747;
	}
	.el-menu-item span{
		font-size: 16px;
		color: #474747;
	}
</style>
