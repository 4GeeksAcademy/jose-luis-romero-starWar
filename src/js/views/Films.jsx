import { Link } from "react-router-dom";
import React from "react";

import { Card } from "./Card.jsx";

export const Films =() =>(
    <div className="container">
				
		<div className="logo">
				<p>Star Wars</p>
				<p className="char">Films</p>
			</div>

			<nav>
		<div className="nav nav-tabs mb-5" id="nav-tab" role="tablist">
			<button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#pag1" type="button" role="tab" aria-controls="pag1" aria-selected="true"> 1</button>
		</div>
		</nav>
		<div className="tab-content" id="nav-tabContent">
			{/** aqui va los primeros 10 caracteres de star wars */}
		<div className="tab-pane fade show active" id="pag1" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
			<div className="row">
						<div className="col-2 mx-3">
						<Link to="/singleFilms/4">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/films/4.jpg"}
							title={"Episode I:"}
							content={" The Phantom Menace"}/>
						</Link>
						</div>

						<div className="col-2 mx-3">
						<Link to="/singleFilms/5">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/films/5.jpg"}
							title={"Episode II:  "}
							content={"Attack of the Clones"}/>
						</Link>
						</div>

						<div className="col-2 mx-3">
						<Link to="/singleFilms/6">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/films/6.jpg"}
							title={"Episode III:"}
							content={"Revenge of the Sith"}/>
						</Link>
						</div>

						<div className="col-2 mx-3">
						<Link to="/singleFilms/1">
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/films/1.jpg`}
							title={"Episode IV"}
							content={"A New Hope"}/>
						</Link>
						</div>

						<div className="col-2 mx-3">
						<Link to="/singleFilms">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/films/2.jpg"}
							title={"Episode V:"}
							content={"The Empire Strikes Back"}/>
						</Link>
						</div>
					</div>
					
					<div className="row">
						<div className="col-2 mx-3">
						<Link to="/singleFilms/">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/films/3.jpg"}
							title={"Episode VI"}
							content={"Return of the Jedi"}/>
						</Link>
						</div>
					
					</div>{/* aqui finalizael segundo row */}
		</div>	
	</div>

	<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
</div> 
);