import React, { useState } from 'react';
import { uploadData } from '@aws-amplify/storage';
// Import any additional UI components from your project (e.g., Button, Card)

const FormSubmissionPage = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        await uploadData({
          path: `picture-submissions/${file.name}`, // Use key for file path
          data: file, // Include file data within options
        });
        alert('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('File upload failed'); // Update error message for user
      }
    } else {
      alert('No file selected');
    }
  };

  // ... rest of your FormSubmissionPage component's JSX (replace with your existing JSX)

  return (
    <div>
      {/* Your existing form elements */}
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FormSubmissionPage;
