import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    console.log({where: 'reducer Value',
    value : state.concat(action.payload.data , state)
  });
      return state.concat(action.payload.data , state);
  }
  return state
}
