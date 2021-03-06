import { CHANGE_FALSE, TOG } from '../action/action-type';
import { data } from '../helper/data';

export default function (state = data, action) {
  switch (action.type) {
    case TOG: {
      let newArray = [...state];

      newArray[action.data.mainIndex].values[
        action.data.index
      ].checked = !state[action.data.mainIndex].values[action.data.index]
        .checked;
      return newArray;
    }
    case CHANGE_FALSE: {
      let newArray1 = [...state];
      console.log('false', action);

      newArray1[action.data.mainIndex].values[
        action.data.index
      ].checked = false;
      console.log(
        newArray1[action.data.mainIndex].values[action.data.index].checked
      );

      return newArray1;
    }
    default:
      return [...state];
  }
}