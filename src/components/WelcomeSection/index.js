import React, { Fragment, useState } from 'react';
import { object, string, bool, func } from 'prop-types';
import WeddingImg from '@assets/images/wedding-logo.png';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground } from './styles';
import CountContainerResepsi from './CountContainerResepsi';

const DELAY_TIME = 1500;

function WelcomeSection({ guestName, type, partner, isAnonymGuest, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  const renderGuestSection = () => {
    if (isAnonymGuest) return <h2 className="to-dearest-name">Dear Friends,</h2>;

    return (
      <Fragment>
        <h3 className="to-dearest">To our Dearest</h3>
        <h2 className="to-dearest-name">{`${guestName} ${partner ? `& ${partner}` : ''}`}</h2>
      </Fragment>
    );
  };

  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <img src={WeddingImg} alt="wedding-ridwan-dewi" />
              <h4 className="sub-title">The Wedding of</h4>
              <h1 className="title">Ridwan &amp; Dewi</h1>
              <div className={isAnonymGuest ? 'margin__bottom' : ''}>
                {type === '18' && <CountContainerResepsi />}
                {type === '25' && <CountContainer />}
                {type === 'all' && (
                  <>
                    <span className="sub-title sub-title__wedding">Resepsi </span>
                    <CountContainerResepsi />
                    <span className="sub-title sub-title__wedding">dan Ngunduh Mantu</span>
                    <CountContainer />
                  </>
                )}
              </div>
              {renderGuestSection()}
            </div>
          </div>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isAnonymGuest: bool.isRequired,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
