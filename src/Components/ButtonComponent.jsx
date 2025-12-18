export const ButtonComponent = ({ disabled, children, onClick }) => {
  return (
    <>
      <div
        onClick={!disabled ? onClick : undefined}
        className={`px-[100px] py-4 rounded-2xl font-semibold  text-white cursor-pointer ${
          disabled ? "bg-zinc-700" : "bg-violet-600 hover:bg-violet-900"
        }`}
      >
        {children}
      </div>
    </>
  );
};
