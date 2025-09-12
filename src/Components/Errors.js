import { useRouteError } from "react-router-dom";
const Errors = () => {

    const routeEror=useRouteError()
    console.log(routeEror);
    
  return (
    <div>
      <h1>Oops!{routeEror.status}</h1>
      <h2>{routeEror.statusText}</h2>
    </div>
  );
};
export default Errors;
