import { Link } from "react-router-dom";
import React from "react";
import "../../styles/Characters.css"
import { Card } from "./Card.jsx";



export const Characters =() =>{
	return(
		<div className="container">
				
		<div className="logo">
				<p>Star Wars</p>
				<p className="char">Characters</p>
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
							<Link to={"/single/1"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/1.jpg`}
							title={"Luke Skywalker"}
							content={""}/>
							</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/2"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/2.jpg`}
							title={"C-3PO"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/3"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/3.jpg`}
							title={"R2-D2"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/4"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/4.jpg`}
							title={"Darth Vader"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/5"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/5.jpg`}
							title={"Leia Organa"}
							content={""}/>
						</Link>
						</div>
					</div>
					
					<div className="row">
						<div className="col-2 mx-3">
						<Link to={"/single/6"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/6.jpg`}
							title={"Owen Lars"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/7"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/7.jpg`}
							title={"Beru W Lars"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/8"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/8.jpg`}
							title={"R5-D4"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/9"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/9.jpg`}
							title={"Biggs Darklighter"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/10"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/10.jpg`}
							title={"Obi-Wan Kenobi"}
							content={""}/>
						</Link>
						</div>
					
					</div>{/* aqui finalizael segundo row */}
		</div>

{/**aqui va los caracteres del 11 al 20 de star wars */}
		<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
			<div className="row">
						<div className="col-2 mx-3">
						<Link to={"/single/11"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/11.jpg`}
							title={"Anakin Skywalker"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
							<Link to={"/single/12"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/12.jpg`}
							title={"Wilhuff Tarkin"}
							content={""}/>
							</Link>
						</div>
						<div className="col-2 mx-3">
							<Link to={"/single/13"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/13.jpg`}
							title={"Chewbacca"}
							content={""}/>
							</Link>
						</div>
						<div className="col-2 mx-3">
							<Link to={"/single/14"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/14.jpg`}
							title={"Han Solo"}
							content={""}/>
							</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/15"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/15.jpg`}
							title={"Greedo"}
							content={""}/>
						</Link>
						</div>
					</div>
					
					<div className="row">
						<div className="col-2 mx-3">
							<Link to={"/single/16"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/16.jpg`}
							title={"Jabba Desilijic Tiure"}
							content={""}/>
							</Link>
						
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/18"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/18.jpg`}
							title={"Wedge Antilles"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/19"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/19.jpg`}
							title={"Jek Tono Porkins"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/20"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/20.jpg`}
							title={"Yoda"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
							<Link to={"/single/21"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/21.jpg`}
							title={"Palpatine"}
							content={""}/>
							</Link>
						</div>
					
					</div>{/* aqui finalizael segundo row */}
					
		</div>
	{/** aqui van los ultimos 10 caracteres de start wars */}
		<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
			
			<div className="row">
						<div className="col-2 mx-3">
						<Link to={"/single/22"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/22.jpg`}
							title={"Boba Fett"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/23"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/23.jpg`}
							title={"IG 88"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
							<Link to={"/single/24"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/24.jpg`}
							title={"Bossk"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
						<Link to={"/single/25"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/25.jpg`}
							title={"Lando Calrissian"}
							content={""}/>
						</Link>
						</div>
						<div className="col-2 mx-3">
							<Link to={"/single/26"}>
							<Card 
							imgurl={`https://starwars-visualguide.com/assets/img/characters/26.jpg`}
							title={"Lobot"}
							content={""}/>
							</Link>
						</div>
					</div>
					
					<div className="row">
						<div className="col-2 mx-3">
						<Link to={"/single/27"}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/27.jpg"}
							title={"Ackbar"}
							content={""}/>
						</Link>
						
						</div>
						<div className="col-2 mx-3">
							<Link to={"/single/28"}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/28.jpg"}
							title={"Mon Mothma"}
							content={""}/>
							</Link>
						</div>
						<div className="col-2 mx-3">
							<Link to={"/single/29"}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/29.jpg"}
							title={"Arvel Crynyd"}
							content={""}/>
							</Link>
						</div>
						<div className="col-2 mx-3">
							<Link to={"/single/30"}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/30.jpg"}
							title={"Wicket Systri"}
							content={""}/>
							</Link>
						</div>
						<div className="col-2 mx-3">
							<Link to={"/single/31"}>
							<Card 
							imgurl={"https://starwars-visualguide.com/assets/img/characters/31.jpg"}
							title={"Nien Nunb"}
							content={""}/>
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
	
}
    