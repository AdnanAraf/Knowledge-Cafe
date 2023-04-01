import React from "react";

const BookMarks = (props) => {
  // console.log(props.mark);
  const mark = props.mark;
  // console.log(mark);
  return (
    <>
      <div className=" bg-gray-100 rounded-lg py-[20px]">
        <div>
          {
            <h1 className=" mx-[30px] font-bold font-mono text-[24px]">
              Bookmarked Blogs:{mark.length}
            </h1>
          }
          {mark.map((item) => (
            <div className="">
              <p className="font-bold  h-[80px] w-[321px] bg-white mx-[30px] my-[16px] p-[20px] rounded-lg ">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookMarks;
