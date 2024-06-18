import { useState } from 'react';
import { Card, Flex } from '@aws-amplify/ui-react';
import { TodoCreateForm } from '../../ui-components';
import { uploadData } from 'aws-amplify/storage';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

Amplify.configure(outputs);

const FormSubmissionPage = () => {
  const [formData, setFormData] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = async (fields: any) => {
    setFormData(fields);
    setIsSubmitted(true);

    const fileName = `forms/${new Date().toISOString()}.json`;

    // Upload form data to S3
    await uploadData({
      path: fileName,
      data: JSON.stringify(fields),
    });

    return fields;
  };

  return (
    <Flex justifyContent="center" alignItems="center" flex="1">
      <Card width="400px" padding="20px" boxShadow="small">
        {!isSubmitted ? (
          <TodoCreateForm
            onSubmit={(fields) => {
              handleFormSubmit(fields);
              return fields;
            }}
          />
        ) : (
          <div>
            <h2>Form Submission</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
            <p>Thank you for submitting this form. Our team will get back to you ASAP.</p>
          </div>
        )}
      </Card>
    </Flex>
  );
};

export default FormSubmissionPage;