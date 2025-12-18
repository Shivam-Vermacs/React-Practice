import { useRef, useState, useEffect } from "react";
import { ButtonComponent } from "./ButtonComponent";

export const OtpComponent = ({ number }) => {
  const [otpValues, setOtpValues] = useState(Array(number).fill(""));
  const [disabled, setDisabled] = useState(true);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    const allFilled = otpValues.every((value) => value !== "");
    setDisabled(!allFilled);
  }, [otpValues]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtpValues = [...otpValues];

    newOtpValues[index] = value.substring(value.length - 1);
    setOtpValues(newOtpValues);

    if (value && index < number - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!otpValues[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }

      const newOtpValues = [...otpValues];
      newOtpValues[index] = "";
      setOtpValues(newOtpValues);
    }
  };

  const handleResend = () => {
    setTimer(60);
    setCanResend(false);
    setOtpValues(Array(number).fill(""));
    inputRefs.current[0]?.focus();
  };

  return (
    <>
      <div className="w-screen h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Verify Your Email
          </h1>
          <p className="text-gray-600 text-sm">
            We've sent a verification code to your email address. Please enter
            it below to continue.
          </p>
        </div>
        <div className="flex justify-center">
          {otpValues.map((value, index) => (
            <OtpInput
              key={index}
              value={value}
              reference={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <ButtonComponent disabled={disabled}>Continue</ButtonComponent>
        </div>
        <div className="text-center mt-4 text-sm text-gray-600">
          {canResend ? (
            <p>
              Didn't get the email?{" "}
              <button
                onClick={handleResend}
                className="text-blue-600 hover:text-blue-800 font-medium underline"
              >
                Resend
              </button>
            </p>
          ) : (
            <p>
              Didn't get the email? Resend in{" "}
              <span className="font-semibold text-gray-800">
                00:{timer.toString().padStart(2, "0")}
              </span>
            </p>
          )}
        </div>
        <div className="text-center mt-3">
          <button className="text-gray-600 text-sm hover:text-gray-800 flex items-center justify-center mx-auto">
            <span className="mr-1">←</span> back
          </button>
        </div>
      </div>
    </>
  );
};

const OtpInput = ({ value, reference, onChange, onKeyDown }) => {
  return (
    <div className=" m-2 rounded-lg">
      <input
        ref={reference}
        type="text"
        maxLength="1"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-[60px] h-[60px] p-6 m-2 rounded-[200px] outline-none text-white bg-gray-500 text-center text-xl font-semibold caret-white focus:bg-gray-600 transition-colors"
      />
    </div>
  );
};
