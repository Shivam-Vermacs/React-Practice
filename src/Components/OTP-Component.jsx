import { useRef, useState } from "react";
import { ButtonComponent } from "./ButtonComponent";

export const OtpComponent = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <div className="flex justify-center bg-blue-900">
        <OtpInput reference={ref1} onDone={() => ref2.current.focus()} />
        <OtpInput reference={ref2} onDone={() => ref3.current.focus()} />
        <OtpInput reference={ref3} onDone={() => ref4.current.focus()} />
        <OtpInput reference={ref4} onDone={() => ref5.current.focus()} />
        <OtpInput reference={ref5} onDone={() => ref6.current.focus()} />
        <OtpInput reference={ref6} />
      </div>
      <div className="flex justify-center mt-4">
        <ButtonComponent disabled={!disabled}>Continue</ButtonComponent>
      </div>
    </>
  );
};

const OtpInput = ({ reference, onDone }) => {
  return (
    <>
      <div className="bg-green-500">
        <input
          ref={reference}
          type="text"
          maxLength="1"
          className="w-[40px] h-[40px] m-2 rounded-lg outline-none text-white bg-gray-500 text-center text-xl font-semibold caret-white"
        />
      </div>
    </>
  );
};
