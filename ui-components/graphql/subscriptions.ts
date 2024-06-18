/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePatientForm = /* GraphQL */ `
  subscription OnCreatePatientForm(
    $filter: ModelSubscriptionPatientFormFilterInput
    $owner: String
  ) {
    onCreatePatientForm(filter: $filter, owner: $owner) {
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
export const onDeletePatientForm = /* GraphQL */ `
  subscription OnDeletePatientForm(
    $filter: ModelSubscriptionPatientFormFilterInput
    $owner: String
  ) {
    onDeletePatientForm(filter: $filter, owner: $owner) {
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
export const onUpdatePatientForm = /* GraphQL */ `
  subscription OnUpdatePatientForm(
    $filter: ModelSubscriptionPatientFormFilterInput
    $owner: String
  ) {
    onUpdatePatientForm(filter: $filter, owner: $owner) {
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
