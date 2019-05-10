<template>
	<div id="app">
		111111111111
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return{
				activeIndex2:'1',
			};
		},
		methods:{
			handleSelect(key,keyPath){
				console.log(key,keyPath);
			}
		},
		components: {

		}
	}
</script>

<style scoped>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
