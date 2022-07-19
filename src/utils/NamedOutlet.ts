import React from 'react';
import { useOutlet } from 'react-router-dom';

export const NamedOutlet = ({ name }: { name: string }) => {
  const outlet = useOutlet();

  if (!outlet) {
    return null;
  }

  const { children } = outlet.props;

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      outletName: name,
    });
  });
};
