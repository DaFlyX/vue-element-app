<template>
	<div id="main">
		<Header title="文章"></Header>
<<<<<<< HEAD
		<Column></Column>
		<AList></AList>
=======
		<Column ref="aaa"></Column>
		<AList ref="AlistCom"></AList>
>>>>>>> 文章页面样式完成
		<TabBar></TabBar>
	</div>
</template>

<script>
	import Header from '@/components/Header';
	import TabBar from '@/components/TabBar';
	import Column from '@/components/Column';
	import AList from '@/components/AList';
	export default {
		name: 'Home',
		components: {
			Header,
			TabBar,
			Column,
			AList
		},
		
	}
</script>

<style scoped>
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
