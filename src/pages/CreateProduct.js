import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createProduct } from '../actions/productAction';


import Layout from '../components/Layout';

function CreateProduct() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [inputs, setInputs] = useState({
        name: '',
        price: '',
        description: '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        dispatch(createProduct(inputs))
            .then((id) => {
                history.push('/products');
            });
    }

    function handleInput(e) {
        setInputs({ ...inputs, [e.target.name]: e.target.value});
    }

    return (
        <Layout>
            <h1>Create New Product</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="input-name" className="form-label">Product Name</label>
                    <input type="text" name="name" className="form-control" id="input-name" value={inputs.name} onChange={(e) => handleInput(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-price" className="form-label">Product Price</label>
                    <input type="number" name="price" className="form-control" id="input-price"  value={inputs.price} onChange={(e) => handleInput(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-description" v="form-label">Product Description</label>
                    <textarea name="description" className="form-control" id="input-description" rows="3" value={inputs.description} onChange={(e) => handleInput(e)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
                <button type="button" className="btn btn-light" onClick={() => history.goBack()}>Cancel</button>
            </form>
        </Layout>
    )
}

export default CreateProduct
