import React from 'react';
import BeerQuestion from './Beerquestion'

const BeerForm = (props) => {
    let foodString
    const questions = [{title: 'A beer for AM or PM?',
        options:{A: 'am', B: 'pm'},
        parameter: 'am',
        status: props.params.am
    },
        {title: 'A beer for weekend or week-day?',
            options:{A: 'weekend', B: 'week-day'},
            parameter: 'weekend',
            status: props.params.weekend
        },
        {title: 'Are you running tax reports?',
            options:{A: 'yes', B: 'no'},
            parameter: 'tax',
            status: props.params.tax
        }];

    return (
        <div className="beer_form">
            {questions.map((question) =>

                <BeerQuestion
                    key={question.parameter}
                    title={question.title}
                    parameter={question.parameter}
                    optionA={question.options.A}
                    optionB={question.options.B}
                    status={question.status}
                    onClick={(parameter) =>  props.onClick(parameter)}
                />
            )}
            <section className="food">
                <label>Enter a food</label>
                <input type="text" ref={node => foodString = node} placeholder="enter a food to match" value={props.params.food} onChange={handleChange} />
                <button onClick={() => clear()}>Clear</button>
            </section>
        </div>
    );

    function handleChange(event)  {
        props.onChange(event.target.value);
    }

    function clear() {
        foodString.value = ''
        foodString.focus()
        props.clearFood()
    }

}

export default BeerForm;
