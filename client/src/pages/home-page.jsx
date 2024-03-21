import React,{useEffect} from 'react';
import Layout from '../components/Layout/layout.jsx'
import Brands from '../components/product/brands.jsx'
import ProductStore from '../store/ProductStore.js'
import Categories from '../components/product/categories.jsx';
import Features from '../components/features/features.jsx';
import Slider from '../components/product/slider.jsx';
import Products from '../components/product/products.jsx';


const HomePage = () => {
    const {BrandListRequest,CategoryListRequest,SliderListRequest,ListByRemarkRequest}=ProductStore()

    useEffect(() => {
        const fetchData = async () => {
            // await FeatureListRequest()
            await SliderListRequest() 
            await CategoryListRequest() 
            await ListByRemarkRequest('new')
            await BrandListRequest()
        };
    
        fetchData();
    }, []);

    return (
        <div>
            <Layout>
                <Slider></Slider>
                <Features></Features>
                <Categories></Categories>
                <Products></Products>
                <Brands></Brands>
            </Layout>
        </div>
    );
};

export default HomePage;