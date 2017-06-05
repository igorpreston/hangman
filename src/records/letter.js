import { Record } from 'immutable';

export const LetterRecord = Record({
  name: null,
  placeholder: false,
  guessed: false,
});

export class Letter extends LetterRecord {
  constructor(props) {
    super(props);
  }
};