<template>
	<div id="event-list">
		<h3
			class="no-results"
			v-if="!this.loading && this.eventList == null && !this.nullEvent"
		>
			Search for a location or postal code to obtain results.
		</h3>
		<div class="loader" v-else-if="this.loading">
			<svg class="circular" viewBox="25 25 50 50">
				<circle
					class="path"
					cx="50"
					cy="50"
					r="20"
					fill="none"
					stroke-width="2"
					stroke-miterlimit="10"
				/>
			</svg>
		</div>
		<h3 class="no-results" v-else-if="!this.loading && this.nullEvent">
			Could not find events for the location or postal code you searched
			for.
		</h3>
		<ul v-else>
			<li
				:class="{ active: index == active_item }"
				@click="
					setMarkerIndex(index);
					setItemActive(index);
				"
				v-for="(event, index) in eventList"
				:item="event"
				:key="index"
			>
				<h4>{{ event.title }}</h4>
				<p>
					<i class="fas fa-map-marker-alt"></i>
					{{ event.venue_address }}, {{ event.city_name }},
					{{ event.region_abbr }}
				</p>
				<p>
					<i class="fas fa-calendar-day"></i>
					{{ event.start_time | formatDate(event.start_time) }}
				</p>
				<p>
					<i class="fas fa-clock"></i>
					{{ event.start_time | formatTime(event.start_time) }}
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "EventList",
	props: {
		events: Array,
		isLoading: Boolean,
		isEventsNull: Boolean,
	},
	data() {
		return {
			loading: null,
			nullEvent: null,
			eventList: null,
			active_item: null,
		};
	},
	methods: {
		setMarkerIndex(index) {
			//sends index to App.vue, then App.vue sends to GoogleMaps component
			this.$emit("markerIndex", index);
		},
		setItemActive(index) {
			this.active_item = index;
		},
	},
	filters: {
		formatDate(eventDate) {
			let date = new Date(eventDate);
			return (
				date.getMonth() +
				1 +
				"/" +
				date.getDate() +
				"/" +
				date.getFullYear()
			);
		},
		formatTime(eventDate) {
			let date = new Date(eventDate);
			let hour = date.getHours();
			let minutes = date.getMinutes();

			return (
				(hour > 12 ? hour - 12 : 12) +
				":" + //if false (hour = 0), then set to 12
				(minutes < 10 ? "0" + minutes : minutes) +
				(hour < 12 ? " AM" : " PM")
			);
		},
	},
	watch: {
		events() {
			this.eventList = this.events;
			this.$emit("loading", false);
		},
		isLoading() {
			this.loading = this.isLoading;
			this.active_item = null;
		},
		isEventsNull() {
			this.nullEvent = this.isEventsNull;
		},
	},
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css");

$width: 100px;
$primaryOne: #ff3b3f;
$primaryTwo: #51d0de;
$primaryThree: #e1e8f0;

#event-list {
	overflow: auto;
	display: flex;
	background: white;
	box-shadow: 5px 60px 15px 0px rgba(0, 0, 0, 0.3);

	.no-results {
		margin: auto;
		text-align: center;
		max-width: 90%;
	}

	ul {
		width: 100%;

		li {
			background-color: white;
			color: black;
			border-bottom: 1px solid rgba(0, 0, 0, 0.25);
			list-style: none;
			padding: 5px 15px 5px 15px;

			h4 {
				padding-top: 5px;
				margin-bottom: 20px;
			}

			p {
				padding-bottom: 5px;

				i {
					padding-right: 5px;
				}
			}

			.active {
				background-color: rgba(81, 208, 222, 0.5);
			}

			&:hover {
				cursor: pointer;
				background-color: $primaryThree;
				color: black;
			}
		}
	}

	.active {
		background-color: rgba(81, 208, 222, 0.5);

		&:hover {
			background-color: rgba(81, 208, 222, 0.5);
		}
	}

	.loader {
		position: relative;
		align-self: center;
		justify-self: center;
		margin: 0 auto;
		width: $width;
		&:before {
			content: "";
			display: block;
			padding-top: 100%;
		}
	}

	.circular {
		animation: rotate 2s linear infinite;
		height: 100%;
		transform-origin: center center;
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	.path {
		stroke-dasharray: 1, 200;
		stroke-dashoffset: 0;
		animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
		stroke-linecap: round;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes dash {
		0% {
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -35px;
		}
		100% {
			stroke-dasharray: 89, 200;
			stroke-dashoffset: -124px;
		}
	}

	@keyframes color {
		100%,
		0% {
			stroke: $primaryOne;
		}
		40% {
			stroke: $primaryOne;
		}
		66% {
			stroke: $primaryOne;
		}
		80%,
		90% {
			stroke: $primaryOne;
		}
	}
}
</style>
