import { fromJS } from 'immutable';
// const { fromJS } = require('immutable');

const getImmutableObject = (object) => fromJS(object);

// console.log(getImmutableObject())
export default getImmutableObject;
