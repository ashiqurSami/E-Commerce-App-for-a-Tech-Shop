import React from 'react';
import Layout from './../components/Layout/layout';
import WishList from '../components/wish/wish-list';
import Brands from '../components/product/brands'


const WishPage = () => {
    return (
        <Layout>
            <WishList></WishList>
            <Brands></Brands>
        </Layout>
    );
};

export default WishPage;