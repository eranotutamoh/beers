import React from 'react';
import Beer from './Beer'

const BeerList = (props) => {
    const heading = (props.loading) ? '... loading beers' : `${props.beers.length} beers for your perusal`
    return (
        <div className="beer_list">
            <h2>{heading}</h2>
            {props.beers.map((beer) =>

            <Beer
                key={beer.id}
                name={beer.name}

            />


            )}
        </div>
    );
}

export default BeerList
