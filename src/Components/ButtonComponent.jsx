export const ButtonComponent = ({ disabled, children, onClick }) => {
  return (
    <>
      <div
        onClick={!disabled ? onClick : undefined}
        className={`px-20 py-4 rounded-md font-semibold  text-white cursor-pointer ${
          disabled ? "bg-zinc-700" : "bg-emerald-600 hover:bg-emerald-500"
        }`}
      >
        {children}
      </div>
    </>
  );
};
