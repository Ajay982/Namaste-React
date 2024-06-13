import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_API } from "../utils/constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(RES_API + resId);
    const json = await res.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div>
      {itemCards.map((item) => (
        <li key={item.card.info.id}>{item.card.info.name}</li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
