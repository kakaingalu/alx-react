const Immutable = require('immutable');

function getImmutableObject(object) {
  return Immutable.fromJS(object);
}

export default getImmutableObject;
