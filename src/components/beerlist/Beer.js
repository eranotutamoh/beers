import React, { Component } from 'react';
import BrewingNotes from './Brewingnotes'
import PropTypes from 'prop-types'

class Beer extends Component {

    constructor(props) {
        super(props)
        this.state = { reveal: false  }
        this.updateView = this.updateView.bind(this)
    }

    render(props){
        const image = {backgroundImage: `url(${this.props.img})`}
        const foods = this.props.foods.map((food) => <li key={food}>{food}</li>)
        return(
            <section>
                <div className="img" style={image} ></div>
                <article>
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.tag}</h4>
                    <p>{this.props.desc}</p>
                    <h5>Food pairings:</h5>
                    <ol>{foods}</ol>
                    <button onClick={this.updateView}>View technical notes</button>

                    <div className="recipe" >
                        <BrewingNotes
                            reveal={this.state.reveal}
                            abv={this.props.abv}
                            ibu={this.props.ibu}
                            ebc={this.props.ebc}
                            ph={this.props.ph}
                            malts={this.props.ingredients.malt}
                            hops={this.props.ingredients.hops}
                            tips={this.props.tips}
                            yeast={this.props.ingredients.yeast}
                        />
                    </div>
                </article>
            </section>
        );
    }

    updateView() {
        this.setState({reveal: !this.state.reveal})
    }
}

Beer.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    desc: PropTypes.string,
    abv: PropTypes.number,
    ibu: PropTypes.number,
    ebc: PropTypes.number,
    ph: PropTypes.number,
    foods: PropTypes.array,
    malts: PropTypes.array,
    hops: PropTypes.array,
    tips: PropTypes.string,
    yeast: PropTypes.string,
};


export default Beer