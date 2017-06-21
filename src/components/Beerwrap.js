import React, { Component } from 'react';
import Beerform from './Beerform'

class BeerWrap extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parameters: {pm : true, tax: false, weekend: false},
            beerList: [{name:'Tiger'},{name: 'Asahi'}]
        }

       this.changeParameters = this.changeParameters.bind(this)
    }

    changeParameters(param){
        let newState = this.state.parameters
        newState[param] = !this.state.parameters[param]
        this.setState({...this.state, newState});

        // this.callApi()
}

    render(){
    return(
        <Beerform params={this.state.parameters}
                  onClick={(param) => this.changeParameters(param)}/>

    );
}
}

export default BeerWrap;
