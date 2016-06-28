import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends  React.Component{
  constructor(){
    super();
    this.state =  {
    title: 'Welcome...',
    }
  }
  render(){
  setTimeout(()=>{
    this.setState({title: "Welcome Kizyah!!!"}, 2000);
});
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
