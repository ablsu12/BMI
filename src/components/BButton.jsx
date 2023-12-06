const BButton = ({ buttonValue, buttonHandler }) => {
  return (
    <>
      <button
        className={"w-72 h-10 mt-8 bg-primary-color text-amber-50 rounded-full md:w-1/2"}
        onClick={buttonHandler}
      >
        {buttonValue}
      </button>
    </>
  );
};

export default BButton;
