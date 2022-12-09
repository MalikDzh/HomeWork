import React, { useState } from 'react';

const ProductItem = ( { addPost } ) => {
    const [title, setTitle] = useState("");
    const [property, setProperty] = useState("");
    let list = {
        title: "",
        property: "",
    };

    function addList() {
        list.title = title;
        list.property = property;
        addPost(list);
    };

    return (
        <div>
            <input type="text"
            placeholder='Название элемента'
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}/>

            <input type="text"
            placeholder='Свойство элемента'
            value={property}
            onChange={(e) => {setProperty(e.target.value)}}/>

            <button onClick={() => {
                addList()
            }}>Save</button>
        </div>
    );
};

export default ProductItem;