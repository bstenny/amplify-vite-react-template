/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatientForm = /* GraphQL */ `
  query GetPatientForm($id: ID!) {
    getPatientForm(id: $id) {
      address
      age
      city
      country
      createdAt
      email
      id
      injury
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
export const listPatientForms = /* GraphQL */ `
  query ListPatientForms(
    $filter: ModelPatientFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        address
        age
        city
        country
        createdAt
        email
        id
        injury
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
