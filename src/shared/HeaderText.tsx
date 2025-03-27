import React from "react";

type Props = {
  children: React.ReactNode;
};

const HeaderText = ({ children }: Props) => {
  return (
    <h1 className="w-fit basis-3/5 font-monotserrat text-5xl font-bold bg-gradient-to-r from-primary-300  to-primary-500 text-transparent bg-clip-text">{children}</h1>
  );
};

export default HeaderText;