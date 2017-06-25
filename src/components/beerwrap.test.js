import React from 'react';
import { shallow } from 'enzyme';
import BeerWrap from './Beerwrap';
import BeerForm from './Beerform';
import BeerList from './beerlist/'

let beerWrapApp

beforeEach(() => beerWrapApp = shallow(<BeerWrap />))

it('renders without crashing', () => {
    shallow(<BeerWrap />)
});

it('should render a nav with text', () => {
    expect(beerWrapApp.find('nav a').text()).toEqual('Choose your beer');
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
                  loading={false}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

/*it('handleNameInput', () => {
    let wrapper = shallow(<MyComponent/>);
    wrapper.instance().searchDish = jest.fn();
    wrapper.update();
    wrapper.instance().handleNameInput('BoB');
    expect(wrapper.searchDish).toBeCalledWith('BoB');
})*/

