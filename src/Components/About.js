
import React from "react";
import AboutUsingFns from "./AboutUsingFns";
import AboutUsingClass from "./AboutUsingClass";

class About extends React.Component {
  constructor(){
    super()
    console.log("parent constructor is called")
  }
componentDidMount(){
  console.log("parent component did mount")
}

  render(){

    console.log("parent rendered")
return (
    <div>
     {/* <AboutUsingFns  name="Reshmaraj"/> */}
    <AboutUsingClass name={"First"} place={"nlnd"}/>
    <AboutUsingClass name={"Second"} place={"nlnd"}/>
     <AboutUsingClass name={"third"} place={"nlnd"}/>
    </div>
  );
  }
  
}

export default About;
