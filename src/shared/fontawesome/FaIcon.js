import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Higher-Order Component
// Component yang me-return component lainnya.
// jumlah (1) (1);
// connect (mapStateToProps, mapDispatchToProps) (GuestBook)
function FaIcon(props) {
  const { icon: iconString, ...faProps } = props;
  const icon = iconString.split(" ");

  return <FontAwesomeIcon icon={icon} { ...faProps } />
}

export default FaIcon;
