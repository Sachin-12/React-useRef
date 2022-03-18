import React, { useEffect, forwardRef } from "react";

export const ButtonWithForwardRef = forwardRef((props, ref) => {
  useEffect(() => {
    console.log(ref.current);
  }, []);

  const handleBtnClick = () => {
    console.log(ref.current);
  };

  return (
    <button onClick={handleBtnClick} ref={ref}>
      Hey . I'm Button with forward ref
    </button>
  );
});

// You cannot access ref inside a child component like this. It will throw warning
export const ButtonWithoutForwardRef = (props) => {
  useEffect(() => {
    console.log(props.ref?.current); // This will be undefined
  }, []);

  const handleBtnClick = () => {
    console.log(props.ref?.current); // undefined
  };
  return (
    <button onClick={handleBtnClick} ref={props.ref}>
      Hey. I'm with without forward ref
    </button>
  );
};
