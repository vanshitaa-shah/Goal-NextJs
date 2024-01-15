"use client";
import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <>
      <main className="error">
        <h1>An error occured!!</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
};

export default ErrorPage;
