import React from "react";

const Question = () => {
  return (
    <div className="my-[20px] text-center ">
      <div className="border-2 ">
        <h1 className="font-bold text-[30px] border-2 bg-gray-300">
          Props vs state
        </h1>
        <p className="font-semibold">
          props is an object of arbitrary inputs a React function component
          accepts as the first argument. state is data that changes over the
          lifetime of a specific instance of a React component.
        </p>
      </div>

      <div className="m-[40px] border-2 ">
        <h1 className="font-bold text-[30px] border-2 bg-gray-300">
          How does React Works?
        </h1>
        <p className="font-semibold">
          ReactJS is an open-source, component-based front-end library that
          solely handles the view layer of an application. It uses a declarative
          development style that makes reasoning about the application
          straightforward while yet focusing on flexibility and efficiency. It
          creates basic views for each project state and updates and renders the
          relevant component in response to data changes.
        </p>
      </div>
      <div className="m-[40px] border-2 ">
        <h1 className="font-bold text-[30px] border-2 bg-gray-300">
          How does useState() Works?
        </h1>
        <p className="font-semibold">
          The useState hook is a one-of-a-kind function that receives the
          initial state as an input and returns a two-element array. The first
          element represents the original state, and the second is the function
          that was used to update the state. We may also pass a function as an
          input if the initial state has to be determined. The function's return
          value will be used to set the starting state.
        </p>
      </div>
      <div className="m-[40px] border-2 ">
        <h1 className="font-bold text-[30px] border-2 bg-gray-300">
          Purpose of useEffect other than fetching data.
        </h1>
        <p className="font-semibold">
          useEffect allows us to easily separate logic over several functions,
          instead of placing all the logic in a single function
        </p>
      </div>
    </div>
  );
};

export default Question;
