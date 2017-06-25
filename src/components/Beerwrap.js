import React, { Component } from 'react';
import BeerForm from './beerform/'
import BeerList from './beerlist/'
import API from '../service/beersApi'

class BeerWrap extends Component {

    constructor(props) {
        super(props)
        this.state = {
            parameters: {am : false, tax: false, weekend: true, food: ''},
            beerList: [],
            loading: false
        }
       this.changeParameters = this.changeParameters.bind(this)
       this.apiError = ''
    }

    componentDidMount() {
        this.initApp();
    }

    initApp() {
        const dateNow = new Date();
        const dayOfWeek =  dateNow.getDay()
        const hourOfDay = dateNow.getHours()
        if(dayOfWeek !== 0 && dayOfWeek < 6 ) this.changeParameters('weekend')
        if(hourOfDay < 12 ) this.changeParameters('am')
        // if initial parameters not altered then call first api call
        if(!this.state.parameters.am && this.state.parameters.weekend) this.getBeerList()
    }

    render(){
        return(
            <div className="wrap">
                <h1>Beer O Clock </h1>
                <nav><a href="#top">Choose your beer</a></nav>
                <BeerForm params={this.state.parameters}
                          onClick={(param) => this.changeParameters(param)}
                          onChange={(foodvalue) => this.changeParameters('food', foodvalue)}
                          clearFood={() => this.changeParameters('food', '')}
                />
                {this.apiError ||
                <BeerList beers={this.state.beerList}
                          loading={this.state.loading}
                />
                }
            </div>
        );
    }

    changeParameters(param, foodvalue){
        let newState = this.state.parameters
        newState[param] = (param === 'food') ? foodvalue :  !this.state.parameters[param]
        this.setState({...this.state, loading: true, parameters: newState})
        this.getBeerList()
    }


    getBeerList() {
        const query = this.queryString()
        API.getBeers(query, data => {
            if('Error' in data) this.apiError = (<h2 className='error'>{data.Error}</h2>)
            this.setState({beerList: data, loading: false})
        })
    }

    queryString() {
        const food = (this.state.parameters.food)
        const ebc = (this.state.parameters.am) ? 'ebc_lt=10' : 'ebc_gt=30'
        const ibu = (this.state.parameters.tax) ? '&ibu_gt=50' : ''
        const abv = (this.state.parameters.weekend) ? 'abv_gt=6' : 'abv_lt=4'
        const foodQuery = (food) ? `&food=${food}` : ''
        return `${ebc}&${abv}${ibu}${foodQuery}`
    }

}

export default BeerWrap;
