export const InputComponent = ({ type, placeholder, value, onChange }) => {
  return (
    <>
      <div className="px-20 py-4">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent px-8 py-2 border border-zinc-700 rounded-sm text-white"
        />
      </div>
    </>
  );
};
