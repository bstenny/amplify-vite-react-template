import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';
import { TodoCreateForm } from '../ui-components';

function App() {
  const [formData, setFormData] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleFormSubmit(fields: any) {
    setFormData(fields);
    setIsSubmitted(true);
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Welcome, {user?.signInDetails?.loginId}</h1>
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
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
