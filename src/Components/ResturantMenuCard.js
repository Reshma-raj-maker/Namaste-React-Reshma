import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/constants.js";

const ResturantMenuCard = () => {
  const [resMenuData, setResMenuData] = useState(null);
  const params = useParams();
  const { rid } = useParams();
  console.log(rid);
  useEffect(() => {
    getResturantMenuData();
  }, []);
  const getResturantMenuData = async () => {
    const data = await fetch(
      RES_MENU_URL + rid + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResMenuData(json.data);
    console.log(json.data);
  };
  if (resMenuData === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resMenuData?.cards[2]?.card?.card?.info;
  {
    console.log(
      resMenuData.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
        .itemCards
    );
  }
  //  const {cardItems}=resMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
  //  console.log(cardItems)
  const cardItems =
    resMenuData.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
      .itemCards;
  console.log(cardItems);
  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h4>Avg Rating: {avgRatingString}</h4>
      <h4>Menu Items</h4>
      <ul>
        {/* {console.log(cardItems[0],'ci')} */}
        {cardItems.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default ResturantMenuCard;
