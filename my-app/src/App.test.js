import React from 'react';
import { queryByAttribute } from '@testing-library/react';
import App from './App';
import { getCarsAndFilters
       } from './actions/cars'

const getById = queryByAttribute.bind(null, 'id');

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, render, mount} from 'enzyme'
configure({ adapter: new Adapter() });
jest.mock('./actions/cars')

test('fetches cars from server & renders as a flipcard', () => {
  const wrapper = shallow(<App />);

  setTimeout(()=>{
  	wrapper.update();

  	const flipCards = wrapper.find('.flip-horizontal');
  	expect(flipCards).to.have.lengthOf(3);
  })

});
