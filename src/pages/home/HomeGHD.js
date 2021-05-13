import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import LayoutComingSoon from '../../layouts/LayoutComingSoon';
import HeroSliderOne from '../../wrappers/hero-slider/HeroSlider-ComingSoon';
import FeatureIcon from '../../wrappers/feature-icon/FeatureIcon-ComingSoon';
import TabProduct from '../../wrappers/product/TabProduct';
import BlogFeatured from '../../wrappers/blog-featured/BlogFeatured';

const HomeFashion = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>GHD | Gracious Heart Designs</title>
                <meta name='description' content='Gracious Heart Designs' />
            </MetaTags>
            <LayoutComingSoon
                headerContainerClass='container-fluid'
                headerPaddingClass='header-padding-1'
            >
                {/* hero slider */}
                <HeroSliderOne />

                {/* featured icon */}
                <FeatureIcon spaceTopClass='pt-100' spaceBottomClass='pb-60' />

                {/* tab product */}
                {/*<TabProduct spaceBottomClass='pb-60' category='fashion' />*/}

                {/* blog featured */}
                {/*<BlogFeatured spaceBottomClass='pb-55' />*/}
            </LayoutComingSoon>
        </Fragment>
    );
};

export default HomeFashion;
