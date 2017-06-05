import { Record, List } from 'immutable';

export const WordRecord = Record({
  letters: List(),
});

export class Word extends WordRecord {
  constructor(props) {
    super(props);
  }
};