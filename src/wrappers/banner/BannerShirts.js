import React from "react";
import bannerData from "../../data/banner/banner-shirts.json";
import BannerShirtSingle from "../../components/banner/BannerShirtSingle.js";

const BannerTen = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`banner-area banner-area-2 ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container-fluid">
        <div className="custom-row-2">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerShirtSingle
                  spaceBottomClass="mb-10"
                  data={single}
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BannerTen;
