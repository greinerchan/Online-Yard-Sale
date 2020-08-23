import React from "react";

function Header() {
  return (
   <div className="navbar">
     <header>
       <h1>MyYardSale</h1>
     </header>
      <span className="nav-contents">
          <a href="##" target="blank" rel="noopener noreferrer">Homepage</a>
          <a href="##" target="blank" rel="noopener noreferrer">Mycart</a>
          <a href="/login.html" target="_blank" rel="noopener noreferrer">Login</a>
          <a href="/register.html" target="blank" rel="noopener noreferrer">Register</a>
          <a href="##" target="_blank" rel="noopener noreferrer">Logout</a>
      </span>
   </div>
  );
}

export default Header;