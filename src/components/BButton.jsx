const BButton = ({ buttonValue, buttonHandler }) => {
  return (
    <>
      <button
        className={
          "w-60 h-10 mt-8 bg-primary-color text-amber-50 rounded-full xs:w-72 "
        }
        onClick={buttonHandler}
      >
        {buttonValue}
      </button>
    </>
  );
};

export default BButton;
