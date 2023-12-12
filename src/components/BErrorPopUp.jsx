import { BOverlay } from "./BOverlay";

const BErrorPopUp = ({ message, onClose }) => {
  const imagePath = `${process.env.PUBLIC_URL}/Icon/close-icon.png`;
  return (
    <>
      <BOverlay>
        <div className="modal bg-white w-80 h-20 mt-16 shadow-xl text-center relative">
          <button
            onClick={onClose}
            className={"close-btn absolute right-1 px-3 pt-1 mt-2"}
          >
            <img src={imagePath} alt={"close"} />
          </button>
          <div className={"p-6"}>
            <p
              className={
                "error-message font-bold row-span-1 col-span-2 text-lg text-center text-red-500"
              }
            >
              {message}
            </p>
          </div>
        </div>
      </BOverlay>
    </>
  );
};
export default BErrorPopUp;
