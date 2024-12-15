import React, { useState } from 'react'
import  '../../src/index.css'
import { useEffect } from 'react'
import axios from 'axios'

const Navbar = () => {

    const [list,setList] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:8000/navitem');
                console.log("Full Response:", response.data);
                const menuItem = response.data.data?.menuItem.split(","); // ক
                console.log("Menu Item:", menuItem);
                setList(menuItem); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

  return (
       <nav id='Navbar'>
        <div className="container">
            <div className="nav_wrapper">
                <a href="#" className="logo">
                    <img src="./images/logo.png" alt="logo"/>
                </a>
                <ul className="menu">
                    {list && list.length > 0 ? (
                    list.map((item, index) => (
                        <li key={index}> <a href="#">{item}</a> </li>
                    ))
                    ) : (
                    <p> </p> 
                    )}
                  
                </ul>
                <button className="common_btn">contact us</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar