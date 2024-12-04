<template>
	<main id="test2" class="container">

		<div class="center">
			<div class="icons">
				<button v-for="type, i in typeNames" :key="i"
					:class="[{ 
						active: selectType(i) === true,
						pressed: typePress[i] === 1,
						jazz:
							typePress[i] === 1
							&& selectType(i) !== null
							&& selectType(i) === false,
					}]"
					@click="pressType(i)"> {{ type }} 
				</button>
			</div>
			<div class="props">
				<div class="props-head">
					<div class="tumbler" @click="switchProp(1)">
						<div class="slider" :class="{ active: propActive[1] }"></div>
					</div>
					<span> Функции </span></div>
				<div class="prop-half">
					<div class="prop" v-for="(a, i) in aspHalvesB" :key="i" v-show="propActive[1]">
						<span> {{ a.name }} </span>
						<div class="options">
							<Option name="" :optionList="a.cont"
								:active="selectProp(a)"
								:press="propPress" :pressId="i*2"
								:callback="pressProp"/>
						</div>
					</div>
				</div>
				<div class="prop-half">
					<div class="prop" v-for="(a, i) in aspHalvesW" :key="i" v-show="propActive[1]">
						<span> {{ a.name }} </span>
						<div class="options">
							<Option name="" :optionList="a.cont"
								:active="selectProp(a)"
								:press="propPress" :pressId="4+i*2"
								:callback="pressProp"/>
						</div>
					</div>
				</div>
			</div>
		</div>

	</main>
</template>

<script>
import text from '@/store/text.js'
import mock from '@/store/mock.js'
import Option from '@/parts/PageOption.vue'

export default {
	data() {
		return {
			ls: null,

			propActive: [1, 1, 1, 1],

			aspHalvesB: text.aspHalvesB,
			aspHalvesW: text.aspHalvesW,

			typeNames: mock.Socionics.names,

			typePress: [
				0, 0, 0, 0,
				0, 0, 0, 0,
				0, 0, 0, 0,
				0, 0, 0, 0,
			],
			propPress: [
				0, 0,	//
				0, 0,	//
				0, 0,	//
				0, 0,	//
			]
		}
	},
	computed: {
	},
	methods: {
		switchProp(id) {
			console.log(id);
			console.log(this.propActive);

			this.propActive[id] == 0
			? this.propActive.splice(id, 1, 1)
			: this.propActive.splice(id, 1, 0);

			console.log(this.propActive);

			this.ls.setItem('propActive', JSON.stringify(this.propActive));
		},
		selectType(select) {
			let propsPressed = 0;

			for (let i = 0; i < 2; i++) {
				if (this.propPress[i*2] == 1) {
					propsPressed++;
					if (this.propPress[i*2+1] != this.aspHalvesB[i].seq[select]) return false;
				}
			}
			for (let i = 0; i < 2; i++) {
				if (this.propPress[4+i*2] == 1) {
					propsPressed++;
					if (this.propPress[4+i*2+1] != this.aspHalvesW[i].seq[select]) return false;
				}
			}


			return propsPressed == 0 ? null : true;
		},
		selectProp(select) {
			let value = null;

			for (let i = 0; i < 16; i++) {
				if (this.typePress[i] == 1) {
					if (value === null) value = select.seq[i];
					else if (select.seq[i] != value) return null;
				}
			}

			return value;
		},
		pressType(pressId) {
			this.typePress[pressId] == 0
			? this.typePress.splice(pressId, 1, 1)
			: this.typePress.splice(pressId, 1, 0);
		},
		pressProp(pressId, whichValue) {
			let whichId = pressId + 1;

			this.propPress[pressId] == 0
			? this.propPress.splice(pressId, 2, 1, whichValue)
			: this.propPress[whichId] == whichValue
				? this.propPress.splice(pressId, 1, 0)
				: this.propPress.splice(whichId, 1, whichValue);
		},
		resetAll() {
			for (let i = 0; i < this.typePress.length; i++) { this.typePress.splice(i, 1, 0) }
			for (let i = 0; i < this.propPress.length; i++) { this.propPress.splice(i, 1, 0) }
		}
	},
	created() {
		this.ls = window.localStorage;
		let propActive = this.ls.getItem('propActive');
		
		if (!propActive) return;
		try { this.propActive = JSON.parse(propActive); }
		catch (e) { return; }
	},
	components: {
		Option
	},
}	
</script>
