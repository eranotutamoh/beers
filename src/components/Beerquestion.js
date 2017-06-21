import React from 'react'

const BeerQuestion = (props) => {
    return (
        <button className={props.status ? 'option-a' : 'option-b'}  onClick={() =>  props.onClick(props.parameter)}>
            <p>{props.title}</p>
            <span>{props.optionA}</span> <span>{props.optionB}</span>
        </button>
    );
}

export default BeerQuestion;

