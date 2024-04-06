import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const SingleSpecies = () => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();

	useEffect(()=>{
		actions.getSingleSpecies(id);	
	},[])
	
	return (
		<div className="jumbotron">
			<div className="container d-flex">
			<img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} className="picture" alt=""/>
			<hr className="my-4" />
			<div className="info text-light">
				<ul>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3"> Clasificacion: </p>
						<p>{store.contactoSpecies.classification}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Designacion:</p> 
						<p>{store.contactoSpecies.designation}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Altura promedio:</p> 
						<p>{store.contactoSpecies.average_height}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Nombre: </p>
						<p>{store.contactoSpecies.name}</p>
					</li>
					
				</ul>
			
			
			</div>
				
			
		</div>
			
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SingleSpecies.propTypes = {
	match: PropTypes.object
};


