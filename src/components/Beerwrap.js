import React, { Component } from 'react';
import BeerForm from './Beerform'
import BeerList from './Beerlist'
import API from '../service/beersApi'

class BeerWrap extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parameters: {pm : true, tax: false, weekend: false, food: ''},
            beerList: [],
            loading: false
        }
       this.changeParameters = this.changeParameters.bind(this)
    }

    render(){
        return(
            <div className="wrap">
                <h1>Beer O'Clock </h1>
                <nav><a href="#top">Choose your beer</a></nav>
                <BeerForm params={this.state.parameters}
                          onClick={(param) => this.changeParameters(param)}
                          onChange={(foodvalue) => this.changeParameters('food', foodvalue)}
                          clearFood={() => this.changeParameters('food', '')}
                />
                <BeerList beers={this.state.beerList}
                          loading={this.state.loading}
                />
            </div>
        );
    }

    changeParameters(param, foodvalue){
        let newState = this.state.parameters
        newState[param] = (param === 'food') ? foodvalue :  !this.state.parameters[param]
        this.setState({...this.state, loading: true, newState})
        this.getBeerList()
    }


    getBeerList() {
        const query = this.queryString()
        API.getBeers(query, data => this.refreshBeerList(data))
    }

    refreshBeerList(data) {
        let newState = this.state
        newState.beerList = data
        this.setState({...this.state, loading: false, newState})
    }

    queryString() {
        const food = (this.state.parameters.food)
        const ebc = (this.state.parameters.pm) ? 'ebc_gt=30' : 'ebc_lt=10'
        const ibu = (this.state.parameters.tax) ? '&ibu_gt=50' : ''
        const abv = (this.state.parameters.weekend) ? 'abv_gt=6' : 'abv_lt=4'
        const foodQuery = (food) ? `&food=${food}` : ''
        return `${ebc}&${abv}${ibu}${foodQuery}`
    }

}

export default BeerWrap;
