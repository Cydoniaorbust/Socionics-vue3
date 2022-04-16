<template>
	<div id="app">
		<Header />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
import Header from './parts/PageHeader.vue'
import Footer from './parts/PageFooter.vue'

export default {
	data() {
		return { v: '0.017a' }
	},
	components: {
		Header, Footer
	}
}
</script>
