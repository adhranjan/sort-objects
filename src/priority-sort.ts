import * as dot from "dot-object";
interface CastKeyToDifferentType {
  key: string;
  cast: Function;
}

const compare = (...args) => {
  let properies = args[0];
  let order = args[1];
  let first = args[2];
  let second = args[3];
  let ret = 1;
  for (let i of properies) {
    let a, b;
    if (i.key && i.cast) {
      a = i.cast(dot.pick(i.key, first));
      b = i.cast(dot.pick(i.key, second));
    } else {
      a = dot.pick(i, first);
      b = dot.pick(i, second);
    }

    if (a === b) {
      continue;
    } else if (a > b) {
      ret = 1;
    } else {
      ret = -1;
    }
    break;
  }
  if (order === "desc") {
    ret = -ret;
  }
  return ret;
};

export const prioritySort = (
  properties: (CastKeyToDifferentType | string)[],
  order?: "asc" | "desc"
) => {
  if (!order) {
    order = "asc";
  }
  return compare.bind(null, properties, order);
};
