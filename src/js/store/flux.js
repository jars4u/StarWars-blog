import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {

			URLBASE: "https://www.swapi.tech/api",
			people: [],
			vehicles: [],
			planets: [],
			favorites: [],

		},


		actions: {
			// Use getActions to call a function within a fuction

			getItems: () => {
				const store = getStore();
				const natures = ['people', 'planets', 'vehicles'];

				natures.forEach(async (nature) => {
					const url = `${URLBASE}/${nature}`;

					try {
						const response = await fetch(`${url}`)
						const data = await response.jason()

						data.result.forEach(async (item) => {
							const responseTwo = await fetch(`${url}/${item.id}`)
							const dataTwo = await responseTwo.json()

							setStore({
								[nature]: [...store[nature], dataTwo.result]
							})
						})

					} catch (error) {
						console.log(error)

					}
				})
			},

			addFavorite: (item) => {
				const store = getStore();
				const { favorites } = store

				setStore({
					favorites: [...favorites, item]
				})
			},

			deleteFavorite: (item) => {
				const store = getStore();
				const { favorites } = store;
				const unfavorite = favorites.filter(item => item.properties.name != element.properties.name);

				setStore({
					favorites: unfavorite
				})
			}

		}
	}
};

export default getState;
