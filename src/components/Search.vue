<template>
	<div id="search-bar">
		<div id="autocomplete">
			<div class="search-parameters">
				<span class="fa fa-search icon"></span>
				<input
					class="search-input"
					v-model="search_parameters.location"
					@focus="isFocused = true"
					@blur="isFocused = false"
					type="text"
					placeholder="Search location"
					@keyup.enter="setParameters"
					required
				/>
			</div>
			<ul id="ac-list" v-show="isFocused">
				<li
					v-for="(location, index) in acResults"
					:item="location"
					:key="index"
				>
					{{ location.place_name }}
				</li>
				<li v-if="!acResults.length">
					No results...
				</li>
			</ul>
		</div>
		<button id="search-button" @click="setParameters">Search</button>
	</div>
</template>

<script>
import { fwdGeo } from "../lib/mapbox.js";

export default {
	name: "Search",
	data() {
		return {
			search_parameters: {
				location: "",
				date: "",
				within: "",
				pageNumber: 1,
			},
			isFocused: false,
			isSelected: false,
			acResults: [],
			timeout: null,
		};
	},
	methods: {
		setParameters() {
			this.$store.dispatch("getEvents", this.search_parameters);
		},
		searchLocation() {
			if (this.timeout) {
				clearTimeout(this.timeout);
			}

			this.timeout = setTimeout(async () => {
				await fwdGeo(this.search_parameters.location)
					.then((res) => {
						this.acResults = res.body.features;

						console.log(res);
					})
					.catch((err) => {
						console.log(err);
					});
			}, 500);
		},
	},
	watch: {
		"search_parameters.location"() {
			if (this.search_parameters.location.length > 2) {
				this.searchLocation();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css");

$primaryOne: #ff3b3f;
$primaryTwo: #51d0de;
$primaryThree: #e1e8f0;

#search-bar {
	background-color: $primaryOne;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	.search-parameters {
		position: relative;
		background-color: white;
		border: 1px solid white;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;

		&:hover {
			box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
			transition: 0.2s ease-in-out;
		}

		&:focus-within {
			box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
		}
	}

	#autocomplete {
		position: relative;
		width: 30%;
		margin-right: 5px;
	}

	#ac-list {
		z-index: 1000;
		position: absolute;
		width: 100%;
		list-style: none;
		margin-top: 5px;
		color: black;
		background-color: white;
		border: 2px solid white;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);

		li {
			padding: 5px;

			&:last-child {
				border-bottom: none;
			}

			&:hover {
				cursor: pointer;
				color: white;
				background-color: rgba(0, 0, 0, 0.3);
				border-radius: 5px;
			}
		}
	}

	.search-input {
		width: 100%;
		padding: 5px;
		outline: none;
		border: 2px solid white;
		border-radius: 5px;
		margin-left: 30px;
	}

	#search-button {
		padding: 6.7px;
		border: 2px solid $primaryThree;
		background-color: $primaryThree;
		border-radius: 5px;
		outline: none;

		&:hover,
		&:focus {
			cursor: pointer;
			background-color: $primaryTwo;
			border-color: $primaryTwo;
		}

		&:active {
			background-color: $primaryTwo;
			border-color: $primaryOne;
		}
	}

	.icon {
		position: absolute;
		font-size: 15px;
		color: $primaryOne;
		background: none;
		outline: none;
		border: none;
		left: 10px;
	}
}
</style>
