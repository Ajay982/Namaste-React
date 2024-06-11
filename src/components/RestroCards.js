import { MdStars } from "react-icons/md";
import { CDN_URL } from "../utils/constant";

const RestroCards = (props) => {
  const { resData } = props;   
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-image "
        src={CDN_URL + cloudinaryImageId}
        alt="food image"
      />
      <h3 className="res-content">{name}</h3>
      <div className="res-content rating">
        <MdStars color="green" size="20px" />
        <h3>{avgRating} stars</h3>
      </div>
      <h4 className="res-content">{cuisines.join(", ")}</h4>
      <h4 className="res-content">{deliveryTime} min</h4>
    </div>
  );
};

export default RestroCards;
