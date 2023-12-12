import useCustomContext from "./context/customContext";

const BInput = ({ inputType, inputPlaceholder, inputHandler }) => {
  const { userInfo } = useCustomContext();

  return (
    <>
      <input
        type={inputType}
        value={userInfo.username}
        placeholder={inputPlaceholder}
        onInput={inputHandler}
        className={"w-72 h-10 text-sm px-4 rounded-full border-2 outline-none"}
      />
    </>
  );
};

export default BInput;
