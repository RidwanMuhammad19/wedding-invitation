import React, { Fragment } from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';

/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import LocationSection from '@components/LocationSection';
// import StorySection from '@components/StorySection';
import WishesSection from '@components/WishesSection';
import FooterSection from '@components/FooterSection';
import FloatingMusic from '@components/FloatingMusic/Loadable';
import { useState } from 'react';

function Home({ location }) {
  const to = getQueryValue(location, 'to');
  const partner = getQueryValue(location, 'partner');
  const type = getQueryValue(location, 'type');
  const [showDetailContent, setShowDetailContent] = useState(false);
  const isAnonymGuest = to === '' && !type;

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };

  const renderDetailContent = () => {
    if (!showDetailContent) return null;

    return (
      <Fragment>
        <HelloSection type={type} />
        <WeddingSection type={type} />
        <LocationSection type={type} />
        {/* <StorySection /> */}
        <WishesSection />
        <FooterSection />
      </Fragment>
    );
  };

  return (
    <MainLayout>
      <WelcomeSection
        guestName={to}
        partner={partner}
        type={type}
        isAnonymGuest={isAnonymGuest}
        location={location}
        onClickDetail={handleClickDetail}
      />
      {renderDetailContent()}
      <FloatingMusic />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
