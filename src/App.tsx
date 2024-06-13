import { Authenticator, ThemeProvider, Card, Flex, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';
import { TodoCreateForm } from '../ui-components';

function App() {
  const [formData, setFormData] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleFormSubmit(fields: any) {
    setFormData(fields);
    setIsSubmitted(true);
    return fields;
  }

  return (
    <ThemeProvider>
      <Authenticator>
        {({ signOut, user }) => (
          <main style={{ padding: '20px' }}>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              padding="10px 20px"
              backgroundColor="#f7f7f7"
              style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
            >
              <h1>Welcome, {user?.signInDetails?.loginId}</h1>
              <Button onClick={signOut} variation="link">Sign out</Button>
            </Flex>
            <Flex justifyContent="center" alignItems="center" flex="1" style={{ marginTop: '70px' }}>
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
          </main>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;
