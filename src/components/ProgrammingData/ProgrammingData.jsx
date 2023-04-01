import React, { useEffect, useState } from "react";
import ShowingData from "../ShowingData/ShowingData";
import SpentTime from "../Spent/SpentTime";
import BookMarks from "../BookMarks/BookMarks";
import Write from "../Write/Write";
import { ToastContainer, toast } from "react-toastify";
let cnt = 0,
  len = 0;
const ProgrammingData = () => {
  const [programData, setProgramData] = useState([]);

  const [cart, setNewcart] = useState([]);
  const [mark, setMark] = useState([]);
  // const [write, setwrite] = useState([]);

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setProgramData(data));
  }, []);

  const HandleClick = (product) => {
    const newcart = [...cart, product];
    setNewcart(newcart);
  };

  const BookmarkHandleClick = (product) => {
    cnt++;
    len++;

    // console.log(cnt);
    if (cnt > 1) {
      for (let i = 0; i < len; i++) {
        console.log(len);
        console.log(mark[i]);
        if (mark[i] == product) {
          toast("double Clicked !");
          if (len - 1 == i) {
            setMark((mark) => [...mark, product]);
          }
        } else {
          if (len - 1 == i) {
            setMark((mark) => [...mark, product]);
          }
        }
      }
    }
    if (cnt == 1) {
      setMark((mark) => [...mark, product]);
    }
    // const newmark = [...mark, product];

    // setMark(newmark);
  };

  return (
    <div className="lg:flex ">
      <div>
        {programData.map((itemdata) => (
          <ShowingData
            key={itemdata.id}
            itemdata={itemdata}
            HandleClick={HandleClick}
            BookmarkHandleClick={BookmarkHandleClick}
          ></ShowingData>
        ))}
      </div>
      <div>
        <div className=" h-[80px] w-[350px] border-2 my-[32px] text-center py-[21px] border-violet-300 rounded-lg bg-violet-50 font-bold text-violet-600">
          <SpentTime cart={cart}></SpentTime>
        </div>
        <div>
          <BookMarks mark={mark}></BookMarks>
          <ToastContainer></ToastContainer>

          <h1></h1>
          {/* <Write write={write}></Write> */}
        </div>
      </div>
    </div>
  );
};
export default ProgrammingData;
