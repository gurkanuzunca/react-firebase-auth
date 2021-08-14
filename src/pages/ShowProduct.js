import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getProduct } from '../actions/productAction';


import Layout from '../components/Layout';

function ShowProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(state => state.product.productDetail);

    useEffect(() => {
        dispatch(getProduct(id));
    }, [ id ]);


    return (
        <Layout>
            <h1>Product Detail</h1>
            <dl className="row">
                <dt className="col-sm-3">Name</dt>
                <dd className="col-sm-9">{ product.name }</dd>

                <dt className="col-sm-3">Price</dt>
                <dd className="col-sm-9">{ product.price }</dd>

                <dt className="col-sm-3">Description</dt>
                <dd className="col-sm-9">{ product.description }</dd>

                <dt className="col-sm-3">Created At</dt>
                <dd className="col-sm-9">{ (new Date(product.createdAt * 1000).toLocaleString()) }</dd>
            </dl>
            <p>
                <a href="#/" onClick={() => history.goBack()}>Go back</a>
            </p>
        </Layout>
    )
}

export default ShowProduct;
