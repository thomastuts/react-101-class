import React from 'react';
import { shallow } from 'enzyme';

import ClickCounter from '../../src/components/ClickCounter';

/**
 * Add test logic for the following two tests to verify that the component works like it should.
 * 
 * Hint: the component contains a button (that can be used to simulate a click), as well as a span
 * with a `.timer-clicked-count` class that contains just the amount of times the button has been
 * clicked. Take a look at `.find()` and `.simulate()` in Enzyme.
 */
describe('<ClickCounter />', () => {
  it('should render the initial state with 0 times clicked', () => {
    const wrapper = shallow(<ClickCounter />);
  });

  it('should update the counter when the button is clicked', () => {
    const wrapper = shallow(<ClickCounter />);
  });
});
