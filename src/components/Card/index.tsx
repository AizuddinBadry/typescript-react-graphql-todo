import React, { FC } from "react";

interface ICard {
  children: any;
  justify?: "center" | "start" | "end";
}

const Card = (props: ICard) => {
  const { children, justify } = props;
  return (
    <div
    className={`
      bg-white shadow-md w-full md:w-1/2
      rounded px-8 pt-6 
      pb-8 mb-4 flex 
      flex-col text-left 
      space-y-3 justify-${justify}`}
    >
      {children}
    </div>
  );
};

export default Card;
