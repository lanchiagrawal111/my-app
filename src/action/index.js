import { CHANGE_FALSE, TOG} from './action-type';

export function toggle(mainIndex, index) {
  return {
    type: TOG,
    data: {
      mainIndex,
      index,
    },
  };
}

export function makeFalse(mainIndex, index) {
  return {
    type: CHANGE_FALSE,
    data: {
      mainIndex,
      index,
    },
  };
}