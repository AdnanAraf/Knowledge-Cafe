import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="lg:flex lg:justify-between m-[50px]">
          <div>
            <h1 className="lg:ml-[100px] text-2xl font-bold ml-[30px]">
              Programming Cafe
            </h1>
          </div>
          <div className="lg:mr-[100px] font-semibold lg:my-[0px] lg:ml-[0px] my-[30px] ml-[20px]">
            <a className="lg:m-[30px] " href="#">
              Home
            </a>
            <a className="m-[30px]" href="#">
              Contract
            </a>
            <a className="m-[30px]" href="#">
              Login
            </a>
          </div>
        </div>
        <hr className="lg:w-[1230px] h-[2px] bg-gray-300 lg:ml-[140px] "></hr>
      </div>
    </>
  );
};

export default Navbar;
