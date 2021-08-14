import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/productAction';
import ProductList from '../components/ProductList';


import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function Products() {
    const products = useSelector(state => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <Layout>
            <div>
                <h1 className="d-flex">Products</h1>
                <Link  className="d-flex" to="/products/create">Create New</Link>
            </div>
            
            <ProductList products={products} />
        </Layout>
    )
}

export default Products;
