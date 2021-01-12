<template>
	<div id="app">
		<Search id="search-bar" />
		<div id="content">
			<div
				id="hover-panel"
				:style="{
					width:
						showPanel && !isWindowSmall
							? ''
							: isWindowSmall
							? '100%'
							: 'auto',
				}"
			>
				<transition name="slide-out">
					<EventList v-show="showPanel" />
				</transition>
				<button
					@click="showPanel = !showPanel"
					:class="[
						'toggle-button',
						'fas',
						showPanel && !isWindowSmall
							? 'fa-caret-left'
							: !showPanel && !isWindowSmall
							? 'fa-caret-right'
							: showPanel && isWindowSmall
							? 'fa-caret-down'
							: 'fa-caret-up',
					]"
					aria-label="Collapse side panel"
				></button>
			</div>
			<GoogleMaps />
		</div>
	</div>
</template>

<script>
import Search from "./components/Search.vue";
import EventList from "./components/EventList.vue";
import GoogleMaps from "./components/GoogleMaps.vue";

export default {
	name: "app",
	components: {
		Search,
		EventList,
		GoogleMaps,
	},
	data() {
		return {
			isWindowSmall: null,
			showPanel: true,
		};
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener("resize", this.onResize);
			this.onResize();
		});
	},
	methods: {
		onResize() {
			if (window.innerWidth <= 640) {
				this.isWindowSmall = true;
			} else {
				this.isWindowSmall = false;
			}
		},
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

::-webkit-scrollbar {
	width: 7px;

	&-track {
		background: #f1f1f1;
	}

	&-thumb {
		background: #888;

		&:hover {
			background: #555;
		}
	}
}

#app {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: grid;
	grid-template-rows: auto auto;
	grid-template-areas:
		"search"
		"content";
}

#search-bar {
	grid-area: "search";
	width: 100vw;
	height: 10vh;
}

#content {
	position: relative;
	width: 100vw;
	height: 90vh;
	grid-area: content;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas: "map";

	#hover-panel {
		z-index: 1;
		position: absolute;
		height: 100%;
		width: 28%;
		display: flex;

		#event-list {
			height: 100%;
			width: 100%;
		}

		.toggle-button {
			margin-top: 8px;
			width: 23px;
			height: 48px;
			background-color: rgba(255, 255, 255, 0.9);
			border: none;
			border-left: 1px solid #d4d4d4;
			box-shadow: 3px -1px 7px 0px rgba(0, 0, 0, 0.3);
			outline: none;

			&:hover {
				cursor: pointer;
			}
		}
	}

	#google-map {
		grid-area: map;
	}
}

.slide-out-enter-active {
	animation: slide-out 0.25s ease-in-out reverse;
}

.slide-out-leave-active {
	animation: slide-out 0.25s ease-in-out;
}

@keyframes slide-out {
	0% {
		margin-left: 0;
	}
	100% {
		margin-left: -100%;
	}
}

@media screen and (max-width: 960px) {
	#content {
		#hover-panel {
			width: 40%;
		}
	}
}

/* Small Screens */
@media screen and (max-width: 640px) {
	#content {
		#hover-panel {
			bottom: 0;
			width: 100%;
			height: 50%;
			flex-direction: column-reverse;

			.toggle-button {
				width: 100%;
				height: 23px;
				margin-top: 0px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.25);
				box-shadow: 0px -5px 10px -2px rgba(0, 0, 0, 0.3);
			}
		}
	}

	@keyframes slide-out {
		0% {
			margin-bottom: 0;
		}
		100% {
			margin-bottom: -100%;
		}
	}
}
</style>
