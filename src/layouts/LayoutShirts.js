import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderShirts from "../wrappers/header/HeaderShirts";
import FooterOne from "../wrappers/footer/FooterGHD";

const LayoutSix = ({ children }) => {
  return (
    <Fragment>
      <HeaderShirts />
      <div className="home-sidebar-right">
        {children}
        <FooterOne
          backgroundColorClass="bg-gray"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          containerClass="container-fluid"
          extraFooterClass="hm4-footer-padding"
          sideMenu={true}
        />
      </div>
    </Fragment>
  );
};

LayoutSix.propTypes = {
  children: PropTypes.any,
};

export default LayoutSix;
