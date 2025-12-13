import { useState } from "react";

export const TextCounter = () => {
  const maxLimit = 50;
  const warning = 30;
  const danger = 40;

  const [text, setText] = useState("");

  const getCounterColor = () => {
    const len = text.length;

    if (len > danger) {
      return "bg-red-500 text-white shadow-red-500/50 shadow-sm";
    }
    if (len > warning) {
      return "bg-yellow-500 text-black shadow-yellow-500/50 shadow-sm";
    }
    return "bg-gray-500 text-white";
  };

  const handleChange = (e) => {
    const val = e.target.value;
    if (val.length <= maxLimit) {
      setText(val);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB] p-4">
      
      <div className="w-full max-w-md bg-[#FFFFFF] rounded-xl shadow-2xl overflow-hidden border border-[#E5E7EB]">
        
        <div className="p-4 border-b border-slate-700">
          <h2 className="text-slate-900 font-semibold">Message Input</h2>
        </div>

        
        <div className="p-6 relative">
          <textarea
            value={text}
            onChange={handleChange}
            placeholder="Type your message here..."
            className="w-full h-32 p-4 bg-[#F9FAFB] text-[#111827] rounded-lg border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-[#3B82F6] outline-none resize-none transition-all duration-200"
          ></textarea>

          <div className="flex justify-end mt-3">
            <div
              className={`px-3 py-1 text-xs font-bold rounded-full transition-colors duration-300 ${getCounterColor()}`}
            >
              {text.length} / {maxLimit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
