import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const {id} = useParams();

	useEffect(()=>{
		actions.getSingleCharacter(id);	
	},[])
	
	return (
		<div className="jumbotron">
			<div className="container d-flex">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg` } className="picture" alt=""/>
			<hr className="my-4" />
			<div className="info text-light">
				<ul>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Nombre:</p>
						<p>{store.contacto.name}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Genero:</p>
						<p>{store.contacto.gender}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Altura:</p>
						<p>{store.contacto.height}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Color de Cabello:</p>
						<p>{store.contacto.hair_color}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Color de Piel:</p>
						<p>{store.contacto.skin_color}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Color de Ojos:</p>
						<p>{store.contacto.eye_color}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Fecha Nacimiento:</p>
						<p>{store.contacto.birth_year}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Fecha Creacion:</p>
						<p>{store.contacto.created}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Fecha Editada:</p>
						<p>{store.contacto.edited}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Masa:</p>
						<p>{store.contacto.mass}</p>
					</li>
					<li className="display-4 mx-5 d-flex">
						<p className="mx-3">Planeta:</p>
						<p>{store.contacto.homeworld}</p>
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

Single.propTypes = {
	match: PropTypes.object
};


