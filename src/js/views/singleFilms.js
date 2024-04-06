import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const SingleFilms = () => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();

	useEffect(()=>{
		actions.getSingleFilms(id);	
	},[])
	
	return (
		<div className="jumbotron">
			<div className="container d-flex">
			<img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} className="picture" alt=""/>
			<hr className="my-4" />
			<div className="info text-light">
				<ul>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Creada:</p>
						<p>{store.contactoFilms.created}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Creada:</p>
						<p>{store.contactoFilms.edited}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Producidad por:</p>
						<p>{store.contactoFilms.producer}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Titulo del Filme:</p>
						<p>{store.contactoFilms.title}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Director:</p>
						<p>{store.contactoFilms.director}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Fecha del Lanzamiento:</p>
						<p>{store.contactoFilms.release_date}</p>
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

SingleFilms.propTypes = {
	match: PropTypes.object
};


