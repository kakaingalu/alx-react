import { Map, List } from 'immutable';

export function mergeDeep(map1, map2) {
  return map1.mergeWith((prev, next) => {
    if (Map.isMap(prev)) {
      return mergeDeep(prev, next);
    } if (List.isList(prev) && List.isList(next)) {
      return prev.concat(next);
    }
    return next;
  }, map2);
}

export function mergeDeeplyElements(page1, page2) {
  const mergedMap = mergeDeep(Map(page1), Map(page2));
  return List(mergedMap.values());
}
