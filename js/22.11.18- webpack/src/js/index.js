import 'babel-polyfill';
import _ from 'lodash';
import {
  PI,
  calculate
} from './export';
import c from './export';
import './../sass/styles.scss';

const getHeader = () => {
  const helloWebpack = _.join(['Hello', 'webpack!'], ' ');
  console.log(helloWebpack);
  const element = document.createElement('h1');

  element.innerHTML = helloWebpack;

  return element;
};

document.body.appendChild(getHeader());

const o = {
  foo: {
    bar: null
  }
};

// console.log(o?.foo?.bar?.baz ?? 'default');
console.log('export PI', PI);
console.log('c', c);

console.log(calculate(6, 5));