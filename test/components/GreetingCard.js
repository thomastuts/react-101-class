import React from 'react';
import { shallow } from 'enzyme';

import GreetingCard from '../../src/components/GreetingCard';

/**
 * Add test logic for the following three tests to verify that the component works like it should.
 *
 * Hint: Enzyme exposes a `.text()` method on the rendered component that returns its entire text
 * content. Maybe you could use that to see if the text includes the strings we care about?
 */
describe('<GreetingCard />', () => {
  it('should render the name being passed in', () => {
    const wrapper = shallow(<GreetingCard name={'Thomas'} />);
  });

  it('should render in the language being passed in', () => {
    const wrapper = shallow(<GreetingCard name={'Thomas'} language={'NL'} />);
  });

  it('should render in English when there is no language specified', () => {
    const wrapper = shallow(<GreetingCard name={'Thomas'} />);
  });
});
