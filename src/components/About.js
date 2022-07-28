import React from 'react';
import profile from './profile.JPG';

function About() {

    return(
        <section className="container">
            <h2 className="top-title">Rebecca Yu</h2>
            <hr></hr>
            <div className="d-flex">
                <img className="mb-5" id="avatar" src={profile} alt="Rebecca Yu" />
                <div>
                    <p>
                    Skills: Javascript, Node, CSS, MongoDB, Bootstrap, React.js
                    </p>

                    <p>
                    A front end web developer recently graduated from the Full-Stack Web Development Certifcate Program at University of Washington who is passionate about building the client side of web development.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;