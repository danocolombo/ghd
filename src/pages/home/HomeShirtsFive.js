import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutSix from "../../layouts/LayoutSix";
import TabProductShirts from "../../wrappers/product/TabProductShirts";
import Newsletter from "../../wrappers/newsletter/Newsletter";
import BannerShirts from "../../wrappers/banner/BannerShirts";
import HeroSliderThirteen from "../../wrappers/hero-slider/HeroSliderThirteen";
import HeroSliderShirts from "../../wrappers/hero-slider/HeroSliderShirts";

const HomeShirtsFive = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>GHD | Shirts</title>
        <meta
          name="description"
          content="Custom shirt fashions to meet your desires."
        />
      </MetaTags>
      <LayoutSix>
        {/* hero slider */}
        <HeroSliderShirts />
        {/* banner */}
        <BannerShirts spaceTopClass="pt-10" spaceBottomClass="pb-85" />
        {/* tab product */}
        <TabProductShirts
          spaceBottomClass="pb-100"
          category="accessories"
          containerClass="container-fluid"
          extraClass="hm4-section-padding"
        />
        {/* newsletter */}
        {/*
          <Newsletter
          spaceBottomClass="pb-100"
          spaceLeftClass="pl-30"
          spaceRightClass="pr-30"
        />
        */}
      </LayoutSix>
    </Fragment>
  );
};

export default HomeShirtsFive;
