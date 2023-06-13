import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK, GOOGLE_MAPS_RESEPSI } from '@/constants';
import { styWrapper } from './styles';

function LocationSection({ type }) {
  return (
    <Fragment>
      {type === '18' || type === 'all' ? (
        <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2 className="main-font">Lokasi Acara Resepsi</h2>
                <p className="sub-title">
                  <a
                    href={GOOGLE_MAPS_RESEPSI}
                    title="Click untuk melihat peta di Google Maps"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#828282' }}
                  >
                    <strong>Mustika Jaya, Bekasi Kota</strong>
                  </a>{' '}
                  <br />
                  Perum. Kota Baru Cimuning Blok G no. 2 RT 04 RW 01, Cimuning, Mustikajaya, Bekasi
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.5265484403153!2d107.02743721476963!3d-6.325738895422079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTknMzIuNyJTIDEwN8KwMDEnNDYuNyJF!5e0!3m2!1sid!2sid!4v1686409529975!5m2!1sid!2sid"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: '0' }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps - Ridwan & Dewi Wedding Party"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {type === '25' || type === 'all' ? (
        <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <h2 className="main-font">Lokasi Acara Ngunduh Mantu</h2>
                <p className="sub-title">
                  <a
                    href={GOOGLE_MAPS_LINK}
                    title="Click untuk melihat peta di Google Maps"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#828282' }}
                  >
                    <strong>Kantor Desa Kraguman Jogonalan Klaten</strong>
                  </a>{' '}
                  <br />
                  Jl. Raya Jogjakarta Solo, Kraguman, Kec. Jogonalan, Kabupaten Klaten, Jawa Tengah 57452
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15814.47752080615!2d110.5580561!3d-7.7239224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a448d44cd0785%3A0x60cd2309a18fd6d4!2sKantor%20Kepala%20Desa%20Kraguman!5e0!3m2!1sid!2sid!4v1685215698277!5m2!1sid!2sid"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: '0' }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Maps - Ridwan & Dewi Wedding Party"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
}

export default React.memo(LocationSection);
