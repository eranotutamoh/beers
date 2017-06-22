import React from 'react'

const BeerQuestion = (props) => {
    return (
        <section className={props.status ? 'option_a' : 'option-b'}  onClick={() =>  props.onClick(props.parameter)}>
            <label>{props.title}</label>
            <span>{props.optionA}</span> <span>{props.optionB}</span>
        </section>
    );
}

export default BeerQuestion;

