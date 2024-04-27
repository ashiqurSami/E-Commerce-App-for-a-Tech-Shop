import React, { useEffect } from 'react';
import Layout from './../components/Layout/layout';
import Brands from './../components/product/brands';
import ProductStore from '../store/ProductStore';
import { useParams } from 'react-router-dom';
import NoData from '../components/Layout/NoData';
import Details from '../components/product/details';

const ProductDetails = () => {

    const{BrandList,DetailsRequest,BrandListRequest,ReviewListRequest}=ProductStore()
    const {id} =useParams()

    useEffect(()=>{
        const fetchData=async()=>{
            await DetailsRequest(id)
            await ReviewListRequest(id)
            await BrandList===null?await BrandListRequest():null
        }
        fetchData()
    },[])

    return (
        
        <Layout>
            <Details />
            <Brands />
        </Layout>
        
    );
};

export default ProductDetails