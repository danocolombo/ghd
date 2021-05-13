import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import HeaderOne from '../wrappers/header/HeaderComingSoon';
import FooterOne from '../wrappers/footer/FooterGHD';
import '../assets/scss/_ghd.scss';

const LayoutOne = ({
    children,
    headerContainerClass,
    headerTop,
    headerPaddingClass,
}) => {
    return (
        <Fragment>
            <HeaderOne
                layout={headerContainerClass}
                top={headerTop}
                headerPaddingClass={headerPaddingClass}
            />
            <div className='ghd-title'>Gracious Heart Designs</div>
            {children}
            <FooterOne
                backgroundColorClass='bg-gray'
                spaceTopClass='pt-100'
                spaceBottomClass='pb-70'
            />
        </Fragment>
    );
};

LayoutOne.propTypes = {
    children: PropTypes.any,
    headerContainerClass: PropTypes.string,
    headerPaddingClass: PropTypes.string,
    headerTop: PropTypes.string,
};

export default LayoutOne;
