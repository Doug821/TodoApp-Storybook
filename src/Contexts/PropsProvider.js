import React from 'react';

const PropsContext = React.createContext(props => props);

export const useProps = props => {
  const propFn = React.useContext(PropsContext);
  if (propFn) {
    return propFn(props);
  }
  return props;
};

export default PropsProvider = ({propFn = props => props, children}) => {
  return (
    <PropsContext.Provider value={propFn}>{children}</PropsContext.Provider>
  );
};
