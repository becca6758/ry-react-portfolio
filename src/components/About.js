import React from 'react';
import profile from './profile.JPG';

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Rebecca Yu</h2>
            <hr></hr>
            <div className="d-flex">
                <img class="mb-5" id="avatar" src={profile} alt="Rebecca Yu" />
                <div>
                    <p>
                    Welcome to my portfolio! I am currently a student paticipiating in a bootcamp for a full-stack web development course hosted by University of Washington. I am an avid reader who enjoys watching and listening to various forms of media and loves food, especially sweet potatoes. I hope that you enjoy taking a look around! And thank you for visiting!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;