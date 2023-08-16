/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
const { Map, fromJS } = require('immutable');

function getImmutableObject (object) {
  if (typeof object !== 'object' || object === null) {
    throw new Error('Input must be a valid object');
  }
  return fromJS(object);
}

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const results = getImmutableObject(obj);
console.log(results.toString());
