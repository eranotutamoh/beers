import React from 'react';
import { shallow } from 'enzyme';
import BeerWrap from './Beerwrap';
import BeerForm from './Beerform';
import BeerList from './beerlist/'

it('renders without crashing', () => {
    shallow(<BeerWrap />);
});

it('should render a nav', () => {
    const wrapper = shallow(
        <nav><a href="#top">Choose your beer!!!</a></nav>
    );
    expect(wrapper).toMatchSnapshot();
});



it('should render a beer form', () => {
    const wrapper = shallow(
        <BeerForm params={{am: false, tax: false, weekend: true, food: ''}}
                  onClick={(param) => this.changeParameters(param)}
                  onChange={(foodvalue) => this.changeParameters('food', foodvalue)}
                  clearFood={() => this.changeParameters('food', '')}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render a beer list', () => {
    const wrapper = shallow(
        <BeerList beers={[]}
                  loading={{loading: false}}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

