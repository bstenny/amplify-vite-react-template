import { Card, Heading, Text } from '@aws-amplify/ui-react';

const Home = () => {
  return (
    <Card width="100%" padding="20px" boxShadow="small">
      <Heading level={2}>Welcome to ReferNow</Heading>
      <Text>
        ReferNow is a platform that allows patients to fill out forms for medical referrals.
        Doctors can review the forms and upload approval documents for patients to schedule
        appointments for physical therapy. Our goal is to streamline the referral process and
        improve the patient experience.
      </Text>
    </Card>
  );
};

export default Home;