import React from 'react';
import Beer from './Beer'
import PropTypes from 'prop-types'


const BeerList = (props) => {
    const heading = (props.loading) ? '... loading beers' : `${props.beers.length} beers for your perusal`
    return (
        <div className="beer_list">
            <h2>{heading}</h2>
            {props.beers.map((beer) =>
                <Beer
                    key={beer.id}
                    name={beer.name}
                    img={beer.image_url}
                    tag={beer.tagline}
                    desc={beer.description}
                    foods={beer.food_pairing}
                    abv={beer.abv}
                    ibu={beer.ibu}
                    ebc={beer.ebc}
                    ph={beer.ph}
                    ingredients={beer.ingredients}
                    tips={beer.brewers_tips}
                />
            )}
        </div>
    );
}

BeerList.propTypes = {
    loading: PropTypes.bool,
    beers: PropTypes.array
};

export default BeerList
