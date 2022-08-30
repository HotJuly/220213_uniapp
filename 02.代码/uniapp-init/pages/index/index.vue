<template>
<!-- 	<div>
		123
	</div> -->
	<view class="indexContainer">
		<view class="header">
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
		<scroll-view
			v-if="indexData.kingKongModule" 
			class="navScroll" 
			enable-flex="true" 
			scroll-x="true" 
		>
			<view 
			class="navItem" 
			:class="{
				active:currentIndex===-1
			}"
			@click="changeCurrentIndex(-1)"
			>
				推荐
			</view>
			<view 
			class="navItem" 
			:class="{
				active:currentIndex===index
			}" 
			v-for="(item,index) in indexData.kingKongModule.kingKongList" 
			:key="item.L1Id"
			@click="changeCurrentIndex(index)"
			>
				{{item.text}}
			</view>
		</scroll-view>
		
		<!-- 内容区域 -->
		<scroll-view class="contentScroll" scroll-y="true">
			<Recommend v-if="currentIndex===-1"></Recommend>
			<CateList :navIndex="currentIndex" v-else></CateList>
		</scroll-view>
	</view>
</template>

<script>
	import {mapState,mapActions} from 'vuex';
	import Recommend from '../../components/Recommend/Recommend.vue';
	import CateList from '../../components/CateList/CateList.vue';
	export default {
		// components:{
		// 	Cart
		// }
		data() {
			return {
				currentIndex:-1,
				
				// indexData:{}
			}
		},
		// onLoad() {
		// 	console.log('onLoad')
		// },
		// mounted(){
		// 	console.log('mounted')
		// },
		async created(){
			// console.log('created',window)
			// uni.request({
			// 	// url:"http://localhost:3001/getIndexData",
			// 	url:"/api/getIndexData",
			// 	success:(res)=>{
			// 		// console.log('res',res);
			// 		this.indexData = res.data;
			// 	}
			// })
			// 1.没有开启命名空间语法
			// this.$store.dispatch('getIndexData');
			
			// 2.开启命名空间语法
			// this.$store.dispatch('home/getIndexData');
			
			// 3.开启命名空间语法->mapActions早期版本
				// this["home/getIndexData"]();
			
			// 4.使用mapActions语法快捷引入
			// this.getIndexData()
			
			//	5.使用mapActions语法快捷引入->终极版
				this.cartGetIndexData();
		},
		methods:{
			changeCurrentIndex(index){
				this.currentIndex = index;
			},
			// getIndexData(){
			// 	this.$store.dispatch('home/getIndexData')
			// }
			// ...mapActions(["home/getIndexData"])
			// ...mapActions("home",["getIndexData"])
			...mapActions("home",{
				cartGetIndexData:"getIndexData"
			})
		},
		computed:{
			...mapState("home",["indexData"])
		},
		components:{
			CateList,
			Recommend
		}
	}
	
</script>

<style lang="stylus">
// tab向后缩紧,shift+tab向前缩进
.indexContainer
	.header
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
	.navScroll
		// display flex
		white-space nowrap
		.navItem
			// flex-shrink 0
			display inline-block
			width 140upx
			height 80upx
			text-align center
			line-height 80upx
			font-size 28upx
			&.active
				border-bottom 4upx solid red
	.contentScroll
	// 小程序高度计算  100vh = header高度 + nav高度 + content高度 
	// h5端高度计算  100vh = header高度 + nav高度 + content高度 + 导航栏高度 + tabBar高度
		height calc(100vh - 80upx - 84upx - var(--window-top) - var(--window-bottom))
		// /* #ifdef MP */
		// height calc(100vh - 80upx - 84upx)
		// /* #endif */
		// /* #ifdef H5 */
		// height calc(100vh - 80upx - 84upx - 88upx - 100upx)
		// /* #endif */
</style>
