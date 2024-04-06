const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacto:{},
			contactoFilms:{},
			contactoSpecies:{},

		},
		actions: {
			// Use getActions to call a function within a fuction
			getSingleCharacter: (id)=>{
				fetch(`https://www.swapi.tech/api/people/${id}`,{
					method:"GET",
				})
				.then(response => response.json())
				.then(data => 
					setStore({ contacto:data.result.properties})
				)
				.catch(error => console.log('error:', error));
			}, 

			getSingleFilms: (id)=>{
				fetch(`https://www.swapi.tech/api/films/${id}`,{
					method:"GET",
				})
				.then(response => response.json())
				.then(data => 
					setStore({ contactoFilms:data.result.properties})
				)
				.catch(error => console.log('error:', error));
			},

			getSingleSpecies: (id)=>{
				fetch(`https://www.swapi.tech/api/species/${id}`,{
					method:"GET",
				})
				.then(response => response.json())
				.then(data => 
					setStore({ contactoSpecies:data.result.properties})
				)
				.catch(error => console.log('error:', error));
			},
		
			
		}
	};
};

export default getState;
