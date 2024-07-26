import React, { useState, useEffect } from "react";
import Login from "./Login";

export const multiStepContext = React.createContext();
const QuoteContext = () => {
  useEffect(() => {
    document.title = "Get a Quote";
  }, []);

  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    termsAccepted: "",
  });

  return (
    <>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
        }}
      >
        <Login />
      </multiStepContext.Provider>
    </>
  );
};

export default QuoteContext;
