<template>
	<div id="event-list">
		<h3
			class="no-results"
			v-if="
				!this.$store.state.loading &&
					!this.$store.state.events.length &&
					this.$store.state.isEventsNull
			"
		>
			Search for a location or postal code to obtain results.
		</h3>
		<CircleLoader v-else-if="this.$store.state.loading" />
		<h3
			class="no-results"
			v-else-if="
				!this.$store.state.loading && this.$store.state.isEventsNull
			"
		>
			Could not find events based on the search criteria(s).
		</h3>
		<ul v-else>
			<li
				:class="{ active: index == activeItem }"
				@click="setActive(index)"
				v-for="(event, index) in this.$store.state.events"
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
import CircleLoader from "./CircleLoader";

export default {
	name: "EventList",
	components: {
		CircleLoader,
	},
	computed: {
		activeItem() {
			return this.$store.state.activeItem;
		},
	},
	/*
        - addEventListener scroll to mounted hook
        - onScroll method
            - check to see if scrollbar is near bottom
                - if it is, make api call to eventful api and concat res.data to this.eventList
    */
	methods: {
		setActive(index) {
			this.$store.dispatch("setActive", index);
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
}
</style>
