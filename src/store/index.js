import Vue from "vue";
import Vuex from "vuex";
import eventful from "../lib/eventful";

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		searchParams: {},
		loading: false,
		events: [],
		isEventsNull: true,
		maxPage: null,
		activeItem: null,
		markerIndex: null,
		loadingMore: false,
	},
	mutations: {
		setSearchParams(state, params) {
			state.searchParams = params;
		},
		setLoading(state, isLoading) {
			state.loading = isLoading;
		},
		setEvents(state, events) {
			state.events = events;
		},
		setIsEventsNull(state, isEventsNull) {
			state.isEventsNull = isEventsNull;
		},
		setMaxPage(state, pageNumber) {
			state.maxPage = pageNumber;
		},
		setActiveItem(state, index) {
			state.activeItem = index;
		},
		setMarkerIndex(state, index) {
			state.markerIndex = index;
		},
		setLoadingMore(state, isLoading) {
			state.loadingMore = isLoading;
		},
	},
	actions: {
		// eslint-disable-next-line
		filterEvents(context, events) {
			return new Promise((resolve, reject) => {
				if (!Array.isArray(events)) {
					reject("Invalid argument: is not of type Array.");
				}

				let filtered = events.filter((event) => {
					let now = new Date();
					let event_stop = new Date(event.stop_time);

					if (event_stop >= now || event_stop == null) {
						return event;
					}
				});

				resolve(filtered);
			});
		},
		getEvents({ state, commit, dispatch }, searchParams) {
			commit("setLoading", true);
			commit("setActiveItem", null);
			commit("setMarkerIndex", null);
			console.log(state.searchParams);

			searchParams.pageNumber = 1;

			commit("setSearchParams", searchParams);
			console.log(state.searchParams);

			eventful
				.getEvents(searchParams)
				.then(async (res) => {
					try {
						commit("setLoading", false);

						commit("setMaxPage", res.data.page_count);

						console.log(res.data);

						await dispatch(
							"filterEvents",
							res.data.events.event
						).then((events) => {
							console.log(events);
							commit("setEvents", events);
						});

						state.events.length
							? commit("setIsEventsNull", false)
							: commit("setIsEventsNull", true);
					} catch (err) {
						console.log(err);
						commit("setLoading", false);
						commit("setIsEventsNull", true);
					}
				})
				.catch((err) => {
					console.log(err);
					commit("setLoading", false);
					commit("setIsEventsNull", true);
				});
		},
		async loadMoreEvents({ state, commit, dispatch }) {
			commit("setLoadingMore", true);

			console.log(this.state.searchParams.pageNumber);
			console.log(this.state.maxPage);

			if (state.searchParams.pageNumber < state.maxPage) {
				await eventful
					.loadMoreEvents()
					.then(async (res) => {
						console.log(state.searchParams);
						console.log(res.data);

						await dispatch(
							"filterEvents",
							res.data.events.event
						).then((events) => {
							setTimeout(() => {
								commit("setLoadingMore", false);
							}, 5000);

							state.events.push(...events);
						});
					})
					.catch((err) => {
						console.log(err);

						setTimeout(() => {
							commit("setLoadingMore", false);
						}, 2000);
					});
			}

			commit("setLoadingMore", false);
		},
		setActive({ commit }, index) {
			commit("setActiveItem", index);
			commit("setMarkerIndex", index);
		},
	},
	getters: {},
});

export default store;
