
const BImageButton = ({ children, Gender, clickHandler }) => {

  return (
    <button
      className={`w-full h-full flex justify-center items-center`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};
export default BImageButton;
