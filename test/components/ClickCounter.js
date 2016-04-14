import React from 'react';
import { shallow } from 'enzyme';

import ClickCounter from '../../src/components/ClickCounter';

describe('<ClickCounter />', () => {
  it('should render the initial state with 0 times clicked', () => {
    const wrapper = shallow(<ClickCounter />);
    wrapper.find('.timer-clicked-count').text().should.equal('0');
  });

  it('should update the counter when the button is clicked', () => {
    const wrapper = shallow(<ClickCounter />);
    wrapper.find('button').simulate('click');
    wrapper.find('.timer-clicked-count').text().should.equal('1');
  });
});
