import React from "react";

const page = ({ params }) => {
  console.log(params);
  return <div>{params.slug}</div>;
};

export default page;
