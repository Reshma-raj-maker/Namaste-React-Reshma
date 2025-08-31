import { useState } from "react";
import resList from "../utils/mockData";
import ResCard from "./ResCard";
const Body = () => {
  const [listofResturant, setListofResturant] = useState(resList
  );
  let restLists = [
    {
      info: {
        id: "151649",
        name: "Hotel Sai Nath & Sai Restaurant",
        cloudinaryImageId: "vkhcohhmqfczycw9vsar",

        costForTwo: "₹200 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts",
        ],
        avgRating: 4.2,

        sla: {
          slaString: "60-65 mins",
        },
      },
    },
    {
      info: {
        id: "151651",
        name: "KFC",
        cloudinaryImageId: "vkhcohhmqfczycw9vsar",

        costForTwo: "₹200 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts",
        ],
        avgRating: 3.2,

        sla: {
          slaString: "60-65 mins",
        },
      },
    },
    {
      info: {
        id: "151650",
        name: "ZyanS",
        cloudinaryImageId: "vkhcohhmqfczycw9vsar",

        costForTwo: "₹200 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts",
        ],
        avgRating: 4.1,

        sla: {
          slaString: "60-65 mins",
        },
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="fil-btn"
          onClick={() => {
            const filteredData = listofResturant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListofResturant(filteredData)
            console.log(filteredData);
          }}
        >
          Search By Rating
        </button>
      </div>
      <div className="res-container">
        {listofResturant.map((resturant) => (
          <ResCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
