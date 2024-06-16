import React from 'react';
import { PatientFormCreateForm } from '../ui-components'; // Adjust the import path as necessary

const PatientFormPage: React.FC = () => {
  return (
    <div>
      <h1>Fill Out Your Patient Form</h1>
      <PatientFormCreateForm />
    </div>
  );
};

export default PatientFormPage;