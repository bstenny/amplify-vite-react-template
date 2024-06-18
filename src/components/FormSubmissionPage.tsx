import React, { useState } from 'react';
import { uploadData } from 'aws-amplify/storage';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { Card, Flex, Button } from '@aws-amplify/ui-react';

Amplify.configure(outputs);

const FormSubmissionPage = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      await uploadData({
        path: `picture-submissions/${file.name}`,
        data: file,
      });
      alert('File uploaded successfully');
    } else {
      alert('No file selected');
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" flex="1">
      <Card width="400px" padding="20px" boxShadow="small">
        <input type="file" onChange={handleChange} />
        <Button onClick={handleUpload}>Upload</Button>
      </Card>
    </Flex>
  );
};

export default FormSubmissionPage;