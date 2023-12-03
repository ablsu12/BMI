import {useContext} from "react";
import {Context} from "./BmiApp";

const BInput = ({ inputType, inputPlaceholder, inputHandler }) => {
    const { username } = useContext(Context);
  return (
    <>
      <input
        type={inputType}
        value={username}
        placeholder={inputPlaceholder}
        onInput={inputHandler}
        className={
          "w-72 h-10 text-sm px-4 rounded-full border-2 " +
          "outline-none md:w-1/2"
        }
      />
    </>
  );
};

export default BInput;
