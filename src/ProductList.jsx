import React, { useState } from 'react';
import Product from './product';

function ProductList({ addToCart }) {
    const [products] = useState([
        { id: 1, name: 'Product 1', description: 'Description 1', price: 10, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', description: 'Description 2', price: 20, image: 'https://via.placeholder.com/150' }
    ]);

    return (
        <div className="product-list">
            {products.map((product) => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductList;
