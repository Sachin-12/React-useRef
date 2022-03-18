import React, { useEffect, forwardRef } from "react";

export const ButtonWithForwardRef = forwardRef((props, ref) => {
  useEffect(() => {
    console.log(ref.current);
  }, []);
  return <button ref={ref}>Hey . I'm Button with Forward ref</button>;
});

export const ButtonWithoutForwardRef = (props, ref) => {
  return <button ref={props.ref}>Hey. I'm with without forward ref</button>;
};
