/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPatientForm = /* GraphQL */ `
  mutation CreatePatientForm(
    $condition: ModelPatientFormConditionInput
    $input: CreatePatientFormInput!
  ) {
    createPatientForm(condition: $condition, input: $input) {
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
export const deletePatientForm = /* GraphQL */ `
  mutation DeletePatientForm(
    $condition: ModelPatientFormConditionInput
    $input: DeletePatientFormInput!
  ) {
    deletePatientForm(condition: $condition, input: $input) {
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
export const updatePatientForm = /* GraphQL */ `
  mutation UpdatePatientForm(
    $condition: ModelPatientFormConditionInput
    $input: UpdatePatientFormInput!
  ) {
    updatePatientForm(condition: $condition, input: $input) {
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
