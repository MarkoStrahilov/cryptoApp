import React from 'react';
import PropTypes from 'prop-types'

const Container = ({children}) => {
  return (
    <div className='children-container'>
        {children}
    </div>
  );
};

Container.protoTypes = {
    children: PropTypes.node.isRequired,
}

export default Container;
