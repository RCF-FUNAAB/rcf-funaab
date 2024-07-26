import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";

export const multiStepContext = React.createContext();
const StepContext = () => {
  useEffect(() => {
    document.title = "RCF Network";
  }, []);

  const [optionType, setOptionType] = useState(null); // Updated

  return (
    <>
      <multiStepContext.Provider
        value={{
          optionType,
          setOptionType,
        }}
      >
        <Dashboard />
      </multiStepContext.Provider>
    </>
  );
};

export default StepContext;
