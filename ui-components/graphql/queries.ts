/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      address
      city
      content
      country
      createdAt
      email
      id
      name
      owner
      phone
      state
      updatedAt
      zip
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        address
        city
        content
        country
        createdAt
        email
        id
        name
        owner
        phone
        state
        updatedAt
        zip
        __typename
      }
      nextToken
      __typename
    }
  }
`;
