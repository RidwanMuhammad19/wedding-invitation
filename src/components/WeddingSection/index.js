import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';
import { WeddingEvent } from '../../constants';

function WeddingSection({ type }) {
  let data;
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">
                {type === '18' ? 'Resepsi' : type === '25' ? 'Unduh Mantu' : 'Resepsi dan Unduh Mantu'}
              </h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            {type && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Akad Nikah"
                  time="09:00 WIB"
                  date="Minggu, 18 Juni 2023"
                  description="Rumah Mempelai <br/>Mustika Jaya, Kota Bekasi"
                />
                <WeddingInfoBox
                  title="Unduh Mantu"
                  time="09:00 WIB"
                  date="Minggu, 25 Juni 2023"
                  description="Gedung Balai Desa Kraguman <br/>Jogonalan , Klaten"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  type: bool.isRequired,
};

export default React.memo(WeddingSection);
