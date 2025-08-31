
import { RES_URL } from "../utils/constants";
const ResCard = (props) => {
  const { resData } = props;
  const {name,cuisines,avgRating,costForTwo,sla}=resData.info
 

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          RES_URL +
          resData.info.cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h5>{costForTwo}</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

export default ResCard;