// src/App.tsx

import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './components/Home'; // Import Home component
import FormSubmissionPage from './components/FormSubmissionPage'; // Import FormSubmissionPage component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <Authenticator>
        {({ signOut, user }) => (
          <Router>
            <Navbar user={user} signOut={signOut || (() => {})} /> {/* Pass user and signOut to Navbar */}
            <main style={{ padding: '20px', marginTop: '70px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/submit-form" element={<FormSubmissionPage />} />
              </Routes>
            </main>
          </Router>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;