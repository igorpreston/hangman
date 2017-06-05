import React from 'react';
import './styles';

const MissedLetterBar = ({ children }) => (
  <div className="game__missed-letters__list__letter-bar animated bounceIn">
    <span className="game__missed-letters__list__letter-bar__typography">
      {children}
    </span>
  </div>
);

export default MissedLetterBar;