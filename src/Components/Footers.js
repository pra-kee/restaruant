import React from "react";

function Footer (){
  const year = new Date()
  return (
    <footer style={{position:"fixed",marginTop:"275px"}}> <span>copy right {year.getFullYear()} </span></footer>
  )
}

export default Footer;