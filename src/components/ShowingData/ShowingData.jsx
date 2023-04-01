import React from "react";

const ShowingData = (props) => {
  const HandleClick = props.HandleClick;
  const BookmarkHandleClick = props.BookmarkHandleClick;

  return (
    <div>
      <div>
        {/* *****************************************COVER IMAGE**********************************************/}
        <div className="lg:ml-[140px] my-[32px] lg:m-[] m-[35px]">
          <img
            src={props.itemdata?.coverimg ?? ""}
            className="lg:h-[450px] lg:w-[845px] rounded-lg w-[300px] h-[300px]"
          ></img>
        </div>
        {/****************************Author Image and puslishDate & name & readTime**********************/}
        <div className="flex lg:gap-[350px]">
          <div className="flex lg:mx-[140px] lg:gap-[24px] mx-[35px]">
            <div>
              <img
                className="lg:h-[60px] lg:w-[60px] w-[30px] h-[30px] rounded-full"
                src={props.itemdata?.authorimg}
              ></img>
            </div>
            <div>
              <h1 className="font-bold lg:text-[24px]">
                {props.itemdata?.name}
              </h1>
              <p className="text-gray-500 lg:text-[16px] text-[14px]">
                {props.itemdata?.publishdate}
              </p>
            </div>
          </div>
          {/********************************* Book Mark ICON , Title and READ Time ****************************************/}
          <div className="flex gap-[8px]">
            <h1 className="text-gray-600">
              {props.itemdata?.readtime} min read
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => BookmarkHandleClick(props.itemdata.title)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
        </div>

        <h1 className="lg:ml-[140px] lg:mt-[] mt-[16px] font-bold lg:text-[40px] lg:w-[720px] font-serif text-[20px] ml-[35px]">
          {props.itemdata?.title}
        </h1>

        <div className="flex lg:my-[16px] lg:mt-[] mt-[16px] ml-[35px] lg:mx-[140px] gap-[15px] text-gray-600">
          <p>#beginners</p>
          <p>#programming</p>
        </div>
        {/************************************ MARK READ***********************************************************/}
        <a
          className="underline text-blue-700 lg:mx-[140px] mx-[35px] lg:mt-[] mt-[16px]"
          onClick={() => HandleClick(props.itemdata)}
          href="#"
        >
          Mark as read
        </a>
      </div>
    </div>
  );
};

export default ShowingData;
