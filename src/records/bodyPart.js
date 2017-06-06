import { Record } from 'immutable';

export const BodyPartRecord = Record({
  name: null,
  hanged: false,
});

export class BodyPart extends BodyPartRecord {
  constructor(props) {
    super(props);
  }
};