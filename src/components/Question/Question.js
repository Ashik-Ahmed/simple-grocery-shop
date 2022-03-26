import React from 'react';

const Question = () => {
    return (
        <div className='mt-5 text-start p-4'>
            <div>
                <h3 className='text-danger'>1. Props VS State: </h3>
                <p>Props are used to send data from one component to another. But State is limited to the current component. Props are immutable, which means props cannot be changed. But states can be changed by events. We can pass callback functions and also states as props. Both can get initial values from the parent component. Stateless components have only props but stateful components have both props and state.</p>
            </div>
            <div>
                <h3 className='text-danger'>2. How useState() works?</h3>
                <p>useState() is a built-in React hook that allows adding React state to functional components. It takes an argument for the initial state. It returns a state variable and a function to set the state by events. We can use multiple useSate() hook in a single component. Previously when we wanted to add a state to a functional component, we need to convert it to a class. But we can now use hook like useState() to add a state inside the functional component. </p>
            </div>
        </div>
    );
};

export default Question;