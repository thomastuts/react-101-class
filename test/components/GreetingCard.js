import React from 'react';
import { shallow } from 'enzyme';

import GreetingCard from '../../src/components/GreetingCard';

describe('<GreetingCard />', () => {
  it('should render the name being passed in', () => {
    const wrapper = shallow(<GreetingCard name={'Thomas'} />);
    wrapper.text().includes('Thomas').should.be.true();
  });

  it('should render in the language being passed in', () => {
    const wrapper = shallow(<GreetingCard name={'Thomas'} language={'NL'} />);
    wrapper.text().includes('mijn naam is').should.be.true();
  });

  it('should render in English when there is no language specified', () => {
    const wrapper = shallow(<GreetingCard name={'Thomas'} />);
    wrapper.text().includes('my name is').should.be.true();
  });
});
