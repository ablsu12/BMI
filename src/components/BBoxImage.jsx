const BBoxImage = ({ path, isIcon }) => {
  return (
    <img src={path} alt={"ax"} className={`${isIcon ? "w-24" : "w-8"} `} />
  );
};
export default BBoxImage;
