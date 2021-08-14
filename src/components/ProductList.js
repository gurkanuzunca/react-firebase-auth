import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {

    return (
        
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Created At</th>
                        <th className="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products && products.map((product, index) => {
                        return (
                            <ProductItem key={index} product={product} />
                        )
                    }) }
                    
                </tbody>
            </table>
    
    )
}

export default ProductList
