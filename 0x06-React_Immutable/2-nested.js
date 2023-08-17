export default function accessImmutableObject(object, array) {
  if (!object) {
    return undefined;
  }

  const [key, ...remainingPath] = array;

  if (object instanceof Map) {
    return accessImmutableObject(object.get(key), remainingPath);
  } if (typeof object === 'object' && object !== null) {
    return accessImmutableObject(object[key], remainingPath);
  }

  return object;
}
