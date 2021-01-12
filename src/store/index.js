import Vue from "vue";
import Vuex from "vuex";
import eventful from "../lib/eventful";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		loading: false,
		events: [],
		isEventsNull: true,
		activeItem: null,
		markerIndex: null,
	},
	mutations: {
		setLoading(state, isLoading) {
			state.loading = isLoading;
		},
		setEvents(state, events) {
			state.events = events;
		},
		setIsEventsNull(state, isEventsNull) {
			state.isEventsNull = isEventsNull;
		},
		setActiveItem(state, index) {
			state.activeItem = index;
		},
		setMarkerIndex(state, index) {
			state.markerIndex = index;
		},
	},
	actions: {
		getEvents({ commit }, search_params) {
			commit("setLoading", true);
			commit("setActiveItem", null);
			commit("setMarkerIndex", null);

			eventful.getEvents(search_params).then((res) => {
				try {
					commit("setLoading", false);

					console.log(res.data);

					let events = res.data.events.event.filter((event) => {
						let now = new Date();
						let event_start = new Date(event.start_time);

						if (event_start >= now) {
							return event;
						}
					});

					commit("setEvents", events);

					this.state.events.length
						? commit("setIsEventsNull", false)
						: commit("setIsEventsNull", true);
				} catch (error) {
					console.log(error);
					commit("setLoading", false);
					commit("setIsEventsNull", true);
				}
			});
		},
		setActive({ commit }, index) {
			commit("setActiveItem", index);
			commit("setMarkerIndex", index);
		},
	},
	getters: {},
});

export default store;
