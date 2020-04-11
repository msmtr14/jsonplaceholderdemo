import { GET_USERS, GET_POSTS } from "../actions/types";

export default function userReducer(
  state = {},
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };

    case GET_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
}
