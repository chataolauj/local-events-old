<template>
	<div id="search-bar">
		<div id="location" class="search-parameters">
			<span class="fa fa-search icon"></span>
			<input
				class="search-input"
				v-model="search_parameters.location"
				type="text"
				placeholder="Search location"
				@keyup.enter="setParameters"
				required
			/>
		</div>
		<div id="date" class="search-parameters">
			<span class="fas fa-calendar-alt icon"></span>
			<select class="search-select" v-model="search_parameters.date">
				<option value="All">All</option>
				<option value="Today">Today</option>
				<option value="This Week">This Week</option>
				<option value="Next Week">Next Week</option>
			</select>
		</div>
		<div id="distance" class="search-parameters">
			<span class="fa fa-road icon"></span>
			<select class="search-select" v-model="search_parameters.within">
				<option value="5">5 mi</option>
				<option value="10">10 mi</option>
				<option value="25">25 mi</option>
				<option value="50">50 mi</option>
			</select>
		</div>
		<button id="search-button" @click="setParameters">Search</button>
	</div>
</template>

<script>
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
		};
	},
	methods: {
		setParameters() {
			this.$store.dispatch("getEvents", this.search_parameters);
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
		margin-right: 5px;
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

	#location {
		width: 20%;
	}

	.search-input {
		width: 93%;
		padding: 5px;
		outline: none;
		border: 2px solid white;
		border-radius: 5px;
		margin-left: 30px;
	}

	.search-select {
		width: 93%;
		padding: 5px;
		outline: none;
		border: 2px solid white;
		border-radius: 5px;
		margin-left: 25px;
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
