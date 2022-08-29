<template>
<!-- 	<div>
		123
	</div> -->
	<view class="indexContainer">
		<image class="logo" src="../../static/images/logo.png" mode=""></image>
		<view class="search">
			<view class="iconfont icon-sousuo">
				
			</view>
			<input 
			class="searchInput" 
			type="text" 
			value="" 
			placeholder="搜索商品" 
			placeholder-class="placeholder" />
		</view>
		<button class="username">七月</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		}
		,
		onLoad() {
			
		}
		,
		methods:{
			
		}
	}
	
</script>

<style lang="stylus">
	// tab向后缩紧,shift+tab向前缩进
	.indexContainer
		display flex
		margin-top 20upx
		align-items  center
		.logo
			width 118upx
			height 40upx
			margin 0 20upx
		.search
			position relative
			height 60upx
			background #ccc
			flex-grow 1
			border-radius  10upx
			padding-left 60upx
			.iconfont
				position absolute
				top 50%
				left 20upx
				transform translateY(-50%)
			.searchInput
				height 100%
				.placeholder
					text-align center
					font-size 24upx
					text-indent -40upx
		.username
			width 140upx
			height 60upx
			border-radius  10upx
			color red
			font-size 24upx
			text-align  center
			line-height  60upx
			margin 0 20upx
</style>
