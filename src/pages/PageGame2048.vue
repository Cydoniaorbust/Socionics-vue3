<template>
	<main id="game" class="container">
		<div class="board">
			<div class="tile" :class="{ active: isActive }"
			@keydown.left="isActive"
			@keydown.right="!isActive"
			>
				
			</div>
			
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			ls: null,

			isActive: false,
		}
	},
	computed: {},
	methods: {},
	created() {
		this.ls = window.localStorage;
		// let propActive = this.ls.getItem('propActive');
		
		// if (!propActive) return;
		// try { this.propActive = JSON.parse(propActive); }
		// catch (e) { return; }
	},
	components: {},
}	
</script>
