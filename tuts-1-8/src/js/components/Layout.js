import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends  React.Component{
  render(){
  const title = 'Guinsly Mondésir';
    return (
      <div>
        <Header title={title} />
        <Header title={"Other Title"} />
        <Footer />
      </div>
    );
  }
}
