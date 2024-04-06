import { Link } from "react-router-dom";
import React from "react";

import { Card } from "./Card.jsx";

export const Species =() =>(
    <div className="container">
				
		<div className="logo">
				<p>Star Wars</p>
				<p className="char">Species</p>
			</div>

			<nav>
		<div className="nav nav-tabs mb-5" id="nav-tab" role="tablist">
			<button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#pag1" type="button" role="tab" aria-controls="pag1" aria-selected="true"> 1</button>
			<button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"> 2</button>
			<button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"> 3</button>
			
		</div>
		</nav>
		<div className="tab-content" id="nav-tabContent">
			{/** aqui va los primeros 10 caracteres de star wars */}
		<div className="tab-pane fade show active" id="pag1" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
			<div className="row">
						<div className="col-2 mx-3">
						<Link to={`/singleSpecies/1`}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/1.jpg"}
							title={"Humans"}
							content={""}/>
						</Link>
							
						</div>
						<div className="col-2 mx-3">
						<Link to={`/singleSpecies/2`}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/2.jpg"}
							title={"Droid"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={`/singleSpecies/3`}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/3.jpg"}
							title={"Wookie"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={`/singleSpecies/4`}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/4.jpg"}
							title={"Rodian"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={`/singleSpecies/5`}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/5.jpg"}
							title={"Hutt"}
							content={""}/>
						</Link>
						</div>
					</div>
					
					<div className="row">
						<div className="col-2 mx-3">
						<Link to={`/singleSpecies/6`}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/6.jpg"}
							title={"Yoda's Species"}
							content={""}/>
						</Link>
						
						</div>
						<div className="col-2 mx-3">
						<Link to={`/singleSpecies/7`}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/7.jpg"}
							title={"Trandoshan"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={`/singleSpecies/8`}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/8.jpg"}
							title={"Mon Calamari"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={`/singleSpecies/9`}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/9.jpg"}
							title={"Ewok"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={`/singleSpecies/10`}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/10.jpg"}
							title={"Sullustan"}
							content={""}/>
						</Link>
						</div>
					
					</div>{/* aqui finalizael segundo row */}
		</div>

{/**aqui va los caracteres del 11 al 20 de star wars */}
		<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
			<div className="row">
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/11.jpg"}
							title={"Neimodian"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/12.jpg"}
							title={"Gungan"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/13.jpg"}
							title={"Toydarian"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/14.jpg"}
							title={"Dug"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/15.jpg"}
							title={"Twi'lek"}
							content={""}/>
						</div>
					</div>
					
					<div className="row">
						<div className="col-2 mx-3">
							
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/16.jpg"}
							title={"Aleena"}
							content={""}/>
						
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/17.jpg"}
							title={"Vulptereen"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/18.jpg"}
							title={"Xexto"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/19.jpg"}
							title={"Toong"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/species/20.jpg"}
							title={"Cerean"}
							content={""}/>
						</div>
					
					</div>{/* aqui finalizael segundo row */}
					
		</div>
	{/** aqui van los ultimos 10 caracteres de start wars */}
		<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
			
			<div className="row">
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/22.jpg"}
							title={"Nautolan"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/23.jpg"}
							title={"Zabrak"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/24.jpg"}
							title={"Tholothian"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/25.jpg"}
							title={"Iktotchi"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/26.jpg"}
							title={"Quermian"}
							content={""}/>
						</div>
					</div>
					
					<div className="row">
						<div className="col-2 mx-3">
							
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/27.jpg"}
							title={"Kel Dor"}
							content={""}/>
						
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/28.jpg"}
							title={"Chagrian"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/29.jpg"}
							title={"Geonosian"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/30.jpg"}
							title={"Mirialan"}
							content={""}/>
						</div>
						<div className="col-2 mx-3">
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/31.jpg"}
							title={"Clawdite"}
							content={""}/>
						</div>
					
					</div>{/* aqui finalizael segundo row */}
				

		</div>
		
	</div>

	<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
</div> 
);