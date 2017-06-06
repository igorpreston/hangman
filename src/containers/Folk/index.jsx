import React from 'react';
import { connect } from 'react-redux';
import { getHangedBodyParts } from '../../reducers/folk';
import Folk from '../../components/HangedMan/Folk';

const mapStateToProps = state => ({
  hanged: getHangedBodyParts(state),
});

const FolkContainer = connect(
  mapStateToProps,
)(Folk);

FolkContainer.displayName = 'FolkContainer';

export default FolkContainer;