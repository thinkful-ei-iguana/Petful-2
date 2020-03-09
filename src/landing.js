import React from 'react';
import { Link } from 'react-router-dom';

const landing = () => {
    return (
        <section>
            <h2> @@ @@ @@ </h2>
            <h3>A Petful animal shelter for cats and dogs!</h3>
            <div id='buttonContainer'>
                <Link
                    id='startButton'
                    to='/adopt'>Start adopting!</Link>
            </div>
            <p id='landingText'>
                We're so glad that you're considering rescuing a pet today! Here's what to expect when using our site to find a pet:
                <br />
                Click the button above to get started. On the next page, enter your name to join the line of people waiting to adopt. Each person in line will have 15 seconds to choose either the available dog or cat before the next person is called.
                <br />
                While you're waiting, you can see who else is waiting in line with you, view recent adoptions, and of course, read up on the available pets.
                <br />
                Once it's your turn, you'll see "Adopt me!" buttons appear beneath the available pets. Make your selection and leave with a new friend!
                <br />
                Thank you for your willingness to give new "pawsibilities" to these animals!
            </p>

        </section>
    )
}

export default landing;