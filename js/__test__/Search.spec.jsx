import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on search term', () => {
  const searchTerm = 'black';
  const component = shallow(<Search />);
  component.find('input').simulate('change', { target: { value: searchTerm } });
  const showCount = preload.shows.filter(show =>
    `${show.title} ${show.description}`.toUpperCase().includes(searchTerm.toUpperCase())
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
