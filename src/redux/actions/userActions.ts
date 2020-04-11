import { GET_USERS, GET_POSTS } from "./types";
import axios from "axios";
const BASE_URL = `https://jsonplaceholder.typicode.com`;

export function getUsers() {
  const users = axios
    .get(`${BASE_URL}/users`)
    .then((res) => res.data)
    .catch((err) => console.error(err.response));
  return {
    type: GET_USERS,
    payload: users,
  };
}

export function getUserPosts(userId: number) {
  const posts = axios
    .get(`${BASE_URL}/posts?userId=${userId}`)
    .then((res) => res.data)
    .catch((err) => console.error(err.response));
  return {
    type: GET_POSTS,
    payload: posts,
  };
}
