import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [counter, setCounter] = useState(0)

    setTimeout(
        () => setCounter(counter + 1),
        1000
    )

    console.log('rendering...', counter)

    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
            <div>{counter}</div>
        </div>
    );
}

const Header = props => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = props => {
    return (
        <>
            {props.part} {props.exercises}
        </>
    )
}

const Content = props => {
    console.log(props);
    return (
        <>
            <p>
                <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
            </p>
            <p>
                <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
            </p>
            <p>
                <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
            </p>
        </>
    )
}

const Total = props => {
    return (
        <>
            <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))