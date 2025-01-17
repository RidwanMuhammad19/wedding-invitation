import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/ridwan.jpg';
import Groom from '@assets/images/dika.jpg';

import { styWrapper } from './styles';

function HelloSection({ type }) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Assalamualaikum Wr. Wb</h2>
              <p className="info">
                Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
                rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
                keberkahan.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Muhammad Ridwan, S.Kom.</h3>
                <p className="parent-name parent-name__top">
                  Putra Kedua Bapak H Suroyo <br />& Ibu Hj Solikhah Sri Lestari
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Andika Invari Candra Dewi, S.Kom.</h3>
                <p className="parent-name">
                  Putri Pertama Bapak Budianto <br />& Ibu Kartini
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  type: bool.isRequired,
};

export default HelloSection;
