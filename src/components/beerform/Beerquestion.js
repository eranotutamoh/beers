import React from 'react'
import PropTypes from 'prop-types'

const BeerQuestion = (props) => {
    return (
        <section className={props.status ? 'option_a' : 'option_b'}  onClick={() =>  props.onClick(props.parameter)}>
            <label>{props.title}</label>
            <span className="opt_a">{props.optionA}</span> <span>&nbsp;&nbsp;</span> <span className="opt_b">{props.optionB}</span>
        </section>
    );
}

BeerQuestion.propTypes = {
    status: PropTypes.bool.isRequired,
    parameter: PropTypes.string.isRequired,
    optionA: PropTypes.string.isRequired,
    optionB: PropTypes.string.isRequired
};

export default BeerQuestion;

