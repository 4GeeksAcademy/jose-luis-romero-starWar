import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center">
		<img src="https://lumiere-a.akamaihd.net/v1/images/tpm-spheres-hero-desktop_e6685499.jpeg?region=0,0,2048,878&width=1536"className="principal-img"/>
		<div className="img-star">
			<p>Bienvenidos al Mundo de :</p>
				<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"/>
		</div>
		<Link to="/demo">
			<button className="btns">Explorar</button>
		</Link>
	</div>
);
