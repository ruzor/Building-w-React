import React from 'react'

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
    return (
        <>
            {
                props.parts.map(part =>
                    <p>
                        <Part key={part.id} part={part.name} exercises={part.exercises} />
                    </p>
                )
            }
        </>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Total = props => {
    const total = props.parts.reduce((init, acc) => init + acc.exercises, 0);

    return (
        <>
            <b>total of {total} exercises</b>
        </>
    )
}

export default Course