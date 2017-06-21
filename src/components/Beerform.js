import React, { Component } from 'react';
import BeerQuestion from './Beerquestion'



const BeerForm = (props) => {
    const questions = [{title: 'Are you drinking in the morning or the afternoon?',
                        options:{A: 'am', B: 'pm'},
                        parameter: 'pm',
                        status: props.params.pm
                        },
                        {title: 'Are you drinking in the weekend?',
                        options:{A: 'yes', B: 'no'},
                        parameter: 'weekend',
                        status: props.params.weekend
                        },
                        {title: 'Are you running tax reports?',
                        options:{A: 'yes', B: 'no'},
                        parameter: 'tax',
                        status: props.params.tax
                        }];

    return (
        <div className="App">
            <h3>Beer O'Clock </h3>
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
        </div>
    );
}

export default BeerForm;
