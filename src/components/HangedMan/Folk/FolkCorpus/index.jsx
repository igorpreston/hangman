import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const FolkCorpus = () => (
  <div
    className={classNames.bind(styles)({
      corpus: true,
      animated: true,
      bounceIn: true,
    })}
  >
    <div 
      className={classNames.bind(styles)({
        corpusLeft: true,
      })}  
    />
    <div 
      className={classNames.bind(styles)({
        corpusRight: true,
      })}  
    />
    <div 
      className={classNames.bind(styles)({
        corpusBottom: true,
      })}  
    />
  </div>
);

export default FolkCorpus;