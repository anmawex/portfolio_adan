import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe"; // Asegúrate de importar el componente
import Experience from "./Experience";
import Publications from "./Publications";
import Software from "./Software";
import Projects from "./Projects";
import "./App.css";
const App = () => {
	return (
		<div className="app-container">
			<Navbar />
			<Routes>
				<Route path="/" element={<AboutMe />} /> {/* Ruta para About Me */}
				<Route path="/experience" element={<Experience />} />
				<Route path="/publications" element={<Publications />} />
				<Route path="/software" element={<Software />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</div>
	);
};

export default App;
