import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:5000/books',
    headers:{
      "Access-Control-Allow-Origin": "*"
    }
  });


export function getPosts(){
    return instance.get(`/posts`)
}
export function getBooks(){
  return instance.get(`/`)
}