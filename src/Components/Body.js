import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listofResturant, setListofResturant] = useState([]);
  const [filteredListOfRes,setFilterdListOfRes]=useState([])
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListofResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
setFilterdListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //const json = await data.json();
  };

  if (listofResturant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-btn">
        <input
          type="text"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        ></input>
        <button
          className="search"
          onClick={() => {
            const datatofilter = listofResturant.filter((res) =>
              res.info.name.toUpperCase().includes(searchData.toUpperCase())
            );
            setFilterdListOfRes(datatofilter)
          }}
        >
          Search
        </button>

        <button
          className="search-btn"
          onClick={() => {
            const filteredDta = listofResturant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterdListOfRes(filteredDta);
          }}
        >
          Search By Rating
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRes?.map((resturant) => (
         <Link key={resturant.info.id} to={"/resturant/"+resturant.info.id}><ResCard key={resturant.info.id} resData={resturant} /></Link> 
        ))}
      </div>
    </div>
  );
};
export default Body;
