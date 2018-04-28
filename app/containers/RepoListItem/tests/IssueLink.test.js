import React from 'react';
import { shallow, mount } from 'enzyme';

import IssueLink from '../IssueLink';

describe('<IssueLink />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = mount(<IssueLink />);
    expect(renderedComponent.find('a')).toHaveLength(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<IssueLink />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<IssueLink id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<IssueLink attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
