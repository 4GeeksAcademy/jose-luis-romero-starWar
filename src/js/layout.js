import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Characters } from "./views/Characters.jsx";
import { Films } from "./views/Films.jsx";
import { Species } from "./views/Species.jsx";
import { SingleFilms } from "./views/singleFilms.js";
import { SingleSpecies } from "./views/singleSpecies.js";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="bg-black">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/Characters" element={<Characters />} />
						<Route path="/Films/" element={<Films />} />
						<Route path="/Species" element={<Species />} />
						<Route path="/single/:id" element={<Single />} />
						<Route path="/singleFilms/:id" element={<SingleFilms />} />
						<Route path="/singleSpecies/:id" element={<SingleSpecies />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
