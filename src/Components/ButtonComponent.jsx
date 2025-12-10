export const ButtonComponent = ({ disabled, children, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`px-20 py-4 rounded-md font-semibold  text-white cursor-pointer ${
          disabled ? "bg-gray-600" : "bg-green-900"
        }`}
      >
        {children}
      </div>
    </>
  );
};
