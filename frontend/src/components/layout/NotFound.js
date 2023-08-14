import React from "react";

const NotFound = () => {
  return (
    <section className='container'>
      <h1 className='xlbig text-primary'>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </h1>
      <p className='big'>Sorry, this page does not exist</p>
    </section>
  );
};

export default NotFound;
