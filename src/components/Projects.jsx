import React, {useState} from "react";

function Caroussel() {
    const [current, setCurrent] = React.useState(0);
}


function Projects() {
    return <div class="projects" id="projects">
        <img class="cyclops" src="images/cyclops.png" alt="cyclops" width="200px"></img>
        <h2>Hello.</h2>
        <p class="intro">Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna. Non auctor, montes nulla distinctio.</p>
        <hr></hr>
    </div>
}

export default Projects;