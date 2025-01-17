import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection({ type }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">
                {type === '18' ? 'Resepsi' : type === '25' ? 'Ngunduh Mantu' : 'Resepsi dan Ngunduh Mantu'}
              </h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            {type === 'all' && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Resepsi"
                  time="10:00 WIB - Selesai"
                  date="Minggu, 18 Juni 2023"
                  description="Rumah Mempelai <br/>Mustika Jaya, Kota Bekasi"
                />
                <WeddingInfoBox
                  title="Ngunduh Mantu"
                  time="09:00 WIB"
                  date="Minggu, 25 Juni 2023"
                  description="Gedung Balai Desa Kraguman <br/>Jogonalan , Klaten"
                />
              </div>
            )}
            {type === '18' && (
              <div className="col-md-8 col-md-offset-4">
                <WeddingInfoBox
                  title="Resepsi"
                  time="10:00 WIB - Selesai"
                  date="Minggu, 18 Juni 2023"
                  description="Rumah Mempelai <br/>Mustika Jaya, Kota Bekasi"
                />
              </div>
            )}
            {type === '25' && (
              <div className="col-md-8 col-md-offset-4">
                <WeddingInfoBox
                  title="Ngunduh Mantu"
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
