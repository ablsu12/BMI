import {useContext} from "react";
<<<<<<< HEAD
import {Context} from "./BmiApp";

const BInput = ({ inputType, inputPlaceholder, inputHandler }) => {
    const { username } = useContext(Context);
=======
import {MyContext} from "./BmiApp";

const BInput = ({ inputType, inputPlaceholder, inputHandler }) => {
    const value = useContext(MyContext)
>>>>>>> origin/feature
  return (
    <>
      <input
        type={inputType}
<<<<<<< HEAD
        value={username}
=======
        value={value}
>>>>>>> origin/feature
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
