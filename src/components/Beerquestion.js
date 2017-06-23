import React from 'react'

const BeerQuestion = (props) => {
    return (
        <section className={props.status ? 'option_a' : 'option_b'}  onClick={() =>  props.onClick(props.parameter)}>
            <label>{props.title}</label>
            <span className="opt_a">{props.optionA}</span> <span>&nbsp;&nbsp;</span> <span className="opt_b">{props.optionB}</span>
        </section>
    );
}

export default BeerQuestion;

