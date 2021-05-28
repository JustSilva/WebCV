import React, { Component } from "react";

function Header() {
    return <div class="sticky">
      <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-cv" href="">CV</a>
            <a class="nav-link" href="#contact">Contact</a>
            <a class="nav-link" href="#projects">Projects</a>
            <a class="nav-link" href="#skills">Skills</a>
            <a class="nav-link" href="#profile">Profile</a>
        </nav>
    </div>

}

export default Header;