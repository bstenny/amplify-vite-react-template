/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
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
