import React,{useEffect} from 'react';
import ProductStore from '../store/ProductStore';
import {useParams} from 'react-router-dom'
import Layout from '../components/Layout/layout';
import ProductList from '../components/product/product-list';


const ProductBykeyword = () => {
    const {ListByKeywordRequest}=ProductStore()
    const {keyword}=useParams()
    
    useEffect(() => {
        const fetchData = async () => {
            await ListByKeywordRequest(keyword)
        }; 
        fetchData();
    }, [keyword]);

    return (
        <Layout>
            <ProductList></ProductList>
        </Layout>
    );
};

export default ProductBykeyword