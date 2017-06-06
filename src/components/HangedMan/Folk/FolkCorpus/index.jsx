import React from 'react';
import classNames from 'classnames';
import './styles';

const FolkCorpus = () => (
  <div
    className={classNames({
      'game__hanged-man__folk__corpus': true,
      'animated': true,
      'bounceIn': true,
    })}
  >
    <div className="game__hanged-man__folk__corpus__part--left" />
    <div className="game__hanged-man__folk__corpus__part--right" />
    <div className="game__hanged-man__folk__corpus__part--bottom" />
  </div>
);

export default FolkCorpus;