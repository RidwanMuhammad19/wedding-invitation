import React from 'react';
import CountItem from './CountItem';
import { styMargin } from './styles';
import useDateCountdownResepsi from '../../hooks/useDateCountdownResepsi';

function CountContainerResepsi() {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver } = useDateCountdownResepsi();
  const finalText = isEventOver ? 'SUDAH' : 'SEDANG';

  if (timeHasRunOut)
    return (
      <>
        <div className="row">
          <div className="col-md-12" style={{ fontSize: '20px' }}>
            {`ACARA ${finalText} BERLANGSUNG!`}
          </div>
        </div>
      </>
    );

  return (
    <div className="col-md-12" css={styMargin('0 0 16px 0')}>
      <CountItem text="Days" number={days} />
      <CountItem text="Hours" number={hours} />
      <CountItem text="Minutes" number={minutes} />
      <CountItem text="Seconds" number={seconds} />
    </div>
  );
}

export default CountContainerResepsi;
