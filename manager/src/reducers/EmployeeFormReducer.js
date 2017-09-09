import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { prop : 'name', value:'Srivatsa'}
      //we are doing key interpolation this is not a array
      return { ...state, [action.payload.prop]: action.payload.value };

    default:
      return state;
  }
};
