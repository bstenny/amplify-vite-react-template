// src/components/Navbar.tsx

import { Flex, Heading, Button } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  user: any; // Replace 'any' with the specific user type if known
  signOut: () => void;
}

const Navbar = ({ user, signOut }: NavbarProps) => {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      padding="10px 20px"
      backgroundColor="#f7f7f7"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}
    >
      <Heading level={3}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>ReferNow</Link>
      </Heading>
      <Flex direction="row" alignItems="center">
        <Link to="/submit-form" style={{ marginRight: '20px', textDecoration: 'none' }}>Submit Form</Link>
        <h1 style={{ marginRight: '20px' }}>Welcome, {user?.signInDetails?.loginId}</h1>
        <Button onClick={signOut} variation="link">Sign out</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;