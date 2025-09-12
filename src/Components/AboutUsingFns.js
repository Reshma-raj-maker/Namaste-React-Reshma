import { useState } from "react";


const AboutUsingFns = ({name}) => {
    const [count,setCount]=useState(0);
      const [count1,setCount1]=useState(1)
  return (
    <div className="about-body">

        <h1>count:{count}</h1>
        <h1>count:{count1}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
      <h1>Name: {name}</h1>
      <h2>Location:Venjaramood</h2>
      <h3>Contact:34554433</h3>
    </div>
  );
};
export default AboutUsingFns;
