import './App.css';
import"./Tasks/Task1.css";
import Task1 from './Tasks/Task1';
import Task2 from './Tasks/Task2';
import { useState } from 'react';
import axios from "axios";
import ProductList from './Tasks/Task3/ProductList';
import ProductItem from './Tasks/Task3/ProductItem';

function App() {

  const API = "http://localhost:8000/posts";
  const [post, setPost] = useState([]);

  async function get() {
    const res = await axios.get(API);
    console.log(res.data);
    setPost(res.data)
  }

  const addPost = async (product) => {
    await axios.post(API, product);
    get();
  }

  async function delProd(id) {
    await axios.delete(`${API}/${id}`);
    get();
  };
  
  const [age, setAge] = useState("");

  function Age() {
    if (age >= 18) {
      alert("Добро пожаловать!")
    } else {
      alert("Вход запрещён")
    }
    setAge(age)
  }
  return (
    <div className="App">
     <Task1 />
     <Task2 
     age={age}
     setAge={setAge}
     Age={Age}/>
     <ProductItem addPost={addPost} />
     <ProductList post={post} delProd={delProd} get={get} />
    </div>
  );
}

export default App;
