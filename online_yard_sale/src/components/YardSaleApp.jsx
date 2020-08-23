import React from "react";
import Header from "./Header";
import Middle from "./Middle";
import Footer from "./Footer";
import Searchbar from "./Searchbar"

function App() {
  return (
    <div>
      <div className="top">
        <Header />
        <Searchbar/>
      </div>
      <Middle />
      <Footer />
    </div>
  );
}

export default App;