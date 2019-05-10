<template>
	<header id="header">
		<h1>{{title}}</h1>
	</header>
</template>

<script>
	export default {
		name: "Header",
		props: {
			title: {
				type: String,
				default: '卖小孩的火柴'
			}
		},
		data() {
			return {

			}
		}
	};
</script>

<style scoped>
	#header{
		width: 100%;
		height: 80px;
		color: #fff;
		background:#55cbc4;
		border-bottom: 1px solid #55cbc4;
		position: relative;
	}
	#header h1{
		font-size: 18px;
		text-align: center;
		line-height: 80px;
		font-weight: normal;
	}
	#header i{
		position: absolute;
		left: 5px;
		top: 50%;
		margin-top: -13px;
		font-size: 26px;
	}
</style>
