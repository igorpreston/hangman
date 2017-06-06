import React from 'react';
import FolkHead from './FolkHead';
import FolkNeck from './FolkNeck';
import FolkCorpus from './FolkCorpus';
import FolkArms from './FolkArms';
import FolkArm from './FolkArms/FolkArm';
import FolkHands from './FolkHands';
import FolkHand from './FolkHands/FolkHand';
import FolkLegs from './FolkLegs';
import FolkLeg from './FolkLegs/FolkLeg';
import FolkFeet from './FolkFeet';
import FolkFoot from './FolkFeet/FolkFoot';
import './styles';

const Folk = ({ hanged }) => {
  return (
    <div className="game__hanged-man__folk">
      {hanged.includes('head') ?
        <FolkHead />
      : null}
      {hanged.includes('neck') ?
        <FolkNeck />
      : null}
      {hanged.includes('corpus') ?
        <FolkCorpus />
      : null}
      {hanged.includes('right-arm') || hanged.includes('left-arm') ?
        <FolkArms>
          {hanged.includes('right-arm') ? <FolkArm side="right" /> : null}
          {hanged.includes('left-arm') ? <FolkArm side="left" /> : null} 
        </FolkArms>
      : null}
      {hanged.includes('right-hand') || hanged.includes('left-hand') ?
        <FolkHands>
          {hanged.includes('right-hand') ? <FolkHand side="right" /> : null}
          {hanged.includes('left-hand') ? <FolkHand side="left" /> : null}
        </FolkHands>
      : null}
      {hanged.includes('right-leg') || hanged.includes('left-leg') ?
        <FolkLegs>
          {hanged.includes('right-leg') ? <FolkLeg side="right" /> : null}
          {hanged.includes('left-leg') ? <FolkLeg side="left" /> : null}
        </FolkLegs>
      : null}
      {hanged.includes('right-foot') || hanged.includes('left-foot') ?
        <FolkFeet>
          {hanged.includes('right-foot') ? <FolkFoot side="right" /> : null}
          {hanged.includes('left-foot') ? <FolkFoot side="left" /> : null}
        </FolkFeet>
      : null}
    </div>
  );
};

export default Folk;