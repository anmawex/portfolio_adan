import React from "react";
import "./Projects.css";
import { MdWeb } from "react-icons/md";
import Footer from "./Footer";

const Projects = () => {
	return (
		<>
			<div className="projects-container">
				<h2>
					<MdWeb /> Interactive Projects
				</h2>
				<div className="projects-container_content">
					<div className="projects_items">
						<h3>El espejo socrático</h3>
						<p>
							Investigación doctoral aumentada: guías, modelo y prompts para usar IA agéntica sin ceder la agencia epistémica.
						</p>
						<a className="project-btn" target="_blank" rel="noreferrer noopener" href="/espejo-socratico/">
							Open Project
						</a>
					</div>
					{/* Add more interactive projects here */}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Projects;
