import React from 'react';

const NewBlock = ({ properties }) => (
  <div>New Lowdefy block {properties.title && `with title: ${properties.title}`}</div>
);

export default NewBlock;
