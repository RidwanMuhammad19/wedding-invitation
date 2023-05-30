import React, { Fragment } from 'react';

function FooterSection() {
  return (
    <Fragment>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2023 Ridwan & Dewi Wedding. All Rights Reserved.</small>
                <small className="block">
                  Song by{' '}
                  <a href="https://www.youtube.com/watch?v=Wu05rtqCNWc" target="_blank" rel="noreferrer">
                    Payng Teduh - Akad
                  </a>
                </small>
                <small className="block">
                  Original Template from{' '}
                  <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">
                    FREEHTML5.co
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default React.memo(FooterSection);
