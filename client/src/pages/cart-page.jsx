import React from 'react';
import Layout from '../components/Layout/layout';
import CartList from '../components/Cart/cart-list';
import Categories from './../components/product/categories.jsx';


const CartPage = () => {
    return (
        <Layout>
            <CartList></CartList>
            <Categories> </Categories>
        </Layout>
    );
};

export default CartPage;