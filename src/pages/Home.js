import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Home() {

    return (
        <Layout>
            <h1>Home</h1>
            <Link to="/products">List of products</Link><br />
            <Link to="/products/create">Create new product</Link>
        </Layout>
    )
}

export default Home;
