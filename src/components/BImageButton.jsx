import { memo } from "react";

const BImageButton = memo(({ children, clickHandler }) => {
  return (
    <button
      className={`w-full h-full flex justify-center items-center`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
});
export default BImageButton;
