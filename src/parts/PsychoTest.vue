<template>
	<div class="psycho-test"></div>
</template>

<script>
export default {
	name: "PsychoTest",
	data() {
		return {
			answers: {},
			currentTab: 'test',
		};
	},
	mounted() {
		this.loadAnswers();
	}
};
</script>

<style scoped>

</style>