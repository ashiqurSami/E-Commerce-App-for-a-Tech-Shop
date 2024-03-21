import React,{useEffect} from 'react';
import ProductStore from '../store/ProductStore';
import {useParams} from 'react-router-dom'
import Layout from '../components/Layout/layout';
import ProductList from '../components/product/product-list';


const ProductByBrand = () => {
    const {ListByBrandRequest}=ProductStore()
    const {id}=useParams()
    
    useEffect(() => {
        const fetchData = async () => {
            await ListByBrandRequest(id)
        }; 
        fetchData();
    }, [id]);

    return (
        <Layout>
            <ProductList></ProductList>
        </Layout>
    );
};

export default ProductByBrand