import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function MyTitle(props) {
  return ce('div', null, ce('h2', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function MyFirstComponent() {
  return ce(
    'div',
    null,
    ce('h1', null, 'My first component'),
    ce(MyTitle, { title: 'Friends', color: 'peru' }),
    ce(MyTitle, { title: 'Breaking Bad', color: 'tomato' }),
    ce(MyTitle, { title: 'Big Bang Theory', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Sherlock', color: '#666' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
