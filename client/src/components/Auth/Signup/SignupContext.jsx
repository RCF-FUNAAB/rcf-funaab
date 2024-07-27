import React, { useState, useEffect } from "react";
import Signup from "./Signup";

export const multiStepContext = React.createContext();
const SignupContext = () => {
  useEffect(() => {
    document.title = "Get a Quote";
  }, []);

  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
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
        <Signup />
      </multiStepContext.Provider>
    </>
  );
};

export default SignupContext;
