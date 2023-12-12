const BInfoBox = ({ children, size, clickHandler }) => {
  const computedSize = () => {
    if (size === "sm") {
      return "w-36 h-36";
    } else if (size === "md") {
      return "w-60 h-60";
    } else if (size === "lg") {
      return "w-80 h-28";
    } else {
      return "w-40 h-40";
    }
  };
  return (
    <div
      onClick={clickHandler}
      className={`flex flex-col justify-around items-center 
      shadow-xl ${computedSize()}
       bg-blue-100 m-4 rounded`}
    >
      {children}
    </div>
  );
};
export default BInfoBox;
