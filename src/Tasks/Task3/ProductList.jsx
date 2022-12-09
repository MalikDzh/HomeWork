import React from 'react';

const ProductList = ( { post, delProd } ) => {
    return (
        <div>
            {post.map((item, index) => (
                <div key={index}>
                    <span>{item.title} {item.property}</span>
                    
                    <button onClick={() => delProd(item.id)}>x</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;