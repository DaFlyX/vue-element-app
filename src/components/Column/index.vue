<template>
	<div id="content">
		<ul v-bind:data="data">
			<li v-on:click="selectColumn(0)">
				<p>全部</p>
			</li>
			<li v-on:click="selectColumn(1)">
				<p>Python</p>
			</li>
			<li v-on:click="selectColumn(2)">
				<p>Golang</p>
			</li>
			<li v-on:click="selectColumn(3)">
				<p>推荐工具</p>
			</li>
			<li v-on:click="selectColumn(4)">
				<p>其他</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Column',
		data(){
			return{
				data:[],
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	#content {
		flex: inherit;
		overflow: auto;
		height: 50px;
		margin-bottom: 0;
	}

	#content ul {
		display: flex;
		text-align: center;
		height: 50px;
		align-items: center;
		border-bottom: 1px solid #55cbc4;
	}

	#content ul li {
		flex: 1;
		height: 25px;
	}
	#content ul li.active{
		color: #42B983;
	}
	#content ul p {
		font-size: 12px;
		line-height: 18px;
	}
</style>
