import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import "../../styles/demo.css";


export const Demo = () => {

	return (
		<div className=" container menu">
			<div className="logo">
				<p>Star Wars</p>
				<p className="char">Menu</p>
			</div>
			<div className="row">
				
				<div className="col-4">
					<Link to ="/Characters">
						<img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" className="img-thumbnail" alt="..."/>
					</Link>
				</div>
				
				<div className="col-4">
					<Link to ="/Films">
						<img src="https://starwars-visualguide.com/assets/img/categories/films.jpg" class="img-thumbnail" alt="..."/>
					</Link>
				</div>
				<div className="col-4">
					<Link to ="/species">
						<img src="https://starwars-visualguide.com/assets/img/categories/species.jpg" class="img-thumbnail" alt="..."/>
					</Link>	
				</div>
				
			</div>

			<div className="row">
				
				<div className="col-4">
					<Link to ="/#">
						<img src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" className="img-thumbnail" alt="..."/>
					</Link>
				</div>
				
				<div className="col-4">
					<Link to ="/#">
						<img src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" class="img-thumbnail" alt="..."/>
					</Link>
				</div>
				<div className="col-4">
					<Link to ="/#">
						<img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" class="img-thumbnail" alt="..."/>
					</Link>	
				</div>
				
			</div>
		</div>
	);
};
