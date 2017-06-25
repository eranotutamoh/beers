import React from 'react';
import { shallow } from 'enzyme';
import BeerQuestion from './Beerquestion';


describe('BeerQuestion', () => {
    let beerQuestion
    let onClick

    beforeEach(() => {
        onClick = jest.fn();
        beerQuestion = shallow(<BeerQuestion
            title={'Question title'}
            parameter={'pm'}
            optionA={'am'}
            optionB={'pm'}
            status={true}
            onClick={(parameter) =>  onClick(parameter)}
        />);
    });

    it('List renders table', () => {
        expect(beerQuestion.find('label').text()).toEqual('Question title');
    });

    it('BeerQuestion requires onClick prop', () => {
        expect(beerQuestion.props().onClick).toBeDefined();
    });

    it('Section click calls onClick', () => {
        const section = beerQuestion.find('section')
        section.simulate('click');
        expect(onClick).toBeCalledWith('pm');
    });

});
