import React from "react";

type Props = {
  children: React.ReactNode;
};

const SubHeaderText = ({ children }: Props) => {
  return (
    <h2 className="w-fit basis-3/5 font-monotserrat text-lg font-bold bg-gradient-to-r from-primary-300  to-primary-500 text-transparent bg-clip-text">{children}</h2>
  );
};

export default SubHeaderText;