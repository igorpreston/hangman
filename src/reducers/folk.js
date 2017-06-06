import { fromJS, List } from 'immutable';
import { createSelector } from 'reselect';
import { BodyPart } from '../records/bodyPart';
import * as types from '../actionTypes/folk';
import { GAME_RESTART } from '../actionTypes/game';

const bodyParts = [
  'head',
  'neck',
  'corpus',
  'right-arm',
  'left-arm',
  'right-hand',
  'left-hand',
  'right-leg',
  'left-leg',
  'right-foot',
  'left-foot',
];

export const initialState = fromJS(bodyParts.map(name => new BodyPart({ name })));

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.FOLK_HANGED:
      return state.setIn(
        [payload.index, 'hanged'], 
        true,
      );
    case GAME_RESTART:
      return initialState;
    default:
      return state;
  };
};

export const getFolk = state => state.get('folk');

export const getRemainingTries = createSelector(
  getFolk,
  folk => folk.filter(part => !part.hanged).size,
);

export const getHangedBodyParts = createSelector(
  getFolk,
  folk => folk.reduce((hanged, part) => part.hanged ? hanged.push(part.name) : hanged, List()),
);