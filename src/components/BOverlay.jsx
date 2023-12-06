export const BOverlay = ({ children }) => {
  return (
    <>
      <div
        className={
          "w-full h-screen flex justify-center items-start fixed top-0 left-0 bg-black opacity-90 z-50"
        }
      >
        {children}
      </div>
    </>
  );
};
