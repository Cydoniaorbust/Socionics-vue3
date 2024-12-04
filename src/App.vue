<template>
	<Header />
	<router-view></router-view>
	<Footer />
</template>

<script>
import Header from './parts/PageHeader.vue'
import Footer from './parts/PageFooter.vue'

export default {
	data() {
		return { v: '0.019' }
	},
	components: {
		Header, Footer
	}
}
</script>
