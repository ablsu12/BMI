import React, { memo, useContext } from "react";

const customContext = React.createContext();
export const CustomContext = memo(({ children, value }) => {
  return (
    <customContext.Provider value={value}>{children}</customContext.Provider>
  );
});

const useCustomContext = () => {
  return useContext(customContext);
};
export default useCustomContext;
