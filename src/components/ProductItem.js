import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../actions/productAction';



function ProductItem({ product }) {
    const dispatch = useDispatch();

    function handleDeleteProduct(id) {
        dispatch(deleteProduct(id))
    }

    return (
        <tr>
            <td width="220">{ product.id }</td>
            <td>{ product.name }</td>
            <td>{ product.price }</td>
            <td>{ product.description }</td>
            <td width="200">{ (new Date(product.createdAt * 1000).toLocaleString()) }</td>
            <td width="220" className="text-end">
                <Link to={'/products/' + product.id} className="btn btn-sm btn-light">View</Link> 
                <Link to={'/products/update/' + product.id} className="btn btn-sm btn-primary">Update</Link> 
                <button className="btn btn-sm btn-danger" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default ProductItem;
