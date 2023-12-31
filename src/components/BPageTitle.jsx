import { memo } from "react";

const BPageTitle = memo(({ title }) => {
  return (
    <>
      <div className={"w-full h-20 flex justify-center items-center"}>
        <h1
          className={
            "text-2xl text-center text-primary-color font-bold md:text-3xl"
          }
        >
          {title}
        </h1>
      </div>
    </>
  );
});
export default BPageTitle;
