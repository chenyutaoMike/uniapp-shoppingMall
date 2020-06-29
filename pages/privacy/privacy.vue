<template>
	<view >
		<h1 class="text-center">隐私政策</h1>
			<view class="px-2">【广州布奇数码科技有限公司】（以下简称“我们”）深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。同时，我们承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。
请在使用我们的产品（或服务）前，仔细阅读并了解本《隐私权政策》。</view>
		<h2 class="text-center">我们如何收集和使用您的个人信息</h2>
		<view class="px-2">
			个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。
			我们仅会出于本政策所述的以下目的，收集和使用您的个人信息：
		</view>
		<h3 class="text-center">注册成为用户</h3>
		<view class="px-2">
			为完成创建账号，您需提供以下信息：您的姓名、电子邮箱地址、创建的用户名和密码等信息。
			在注册过程中，如果您提供以下额外信息，将有助于我们给您提供更好的服务和体验：手机号、姓名。但如果您不提供这些信息，将不会影响使用本服务的基本功能。
			您提供的上述信息，将在您使用本服务期间持续授权我们使用。在您注销账号时，我们将停止使用并删除上述信息。
			上述信息将存储于中华人民共和国境内。如需跨境传输，我们将会单独征得您的授权同意。
		</view>
		<view class="iKnow" @click="goUser">我知道了</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goUser(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
.iKnow{
	margin: 50upx auto;
	// padding: 20upx;
	background-color: $Theme-color;
	color: #fff;
	width: 160upx;
	height: 80upx;
	line-height: 80upx;
	border-radius: 8upx;
	text-align: center;
}
</style>
