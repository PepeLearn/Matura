'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
//import '../navbar/navbar.css'

const Products = ({ }) => {
    let bruh = 0;
    const [catalog, setCatalog] = useState([])
    console.log("products loaded");
    useEffect(() => { // 
        console.log("useffect dela")
        const fetchData = async () => {
            const url = "http://127.0.0.1/matura-backend/database/database.php?getProductCatalog=true"; // url za store
            const response = await (
                await fetch(url)
            ).json();
            setCatalog(response);
            console.log(response);
        }
        fetchData();
        // nastavi podatkex
    }, []);
    var i = 0;
    console.log(catalog)
    return (
        <div>{catalog.map((item) => (
            <li>
            <Link href={`/blog/${encodeURIComponent(item)}`}>
                <div id="product_div_img">
                </div>
                <div id="products_desc">{item.Name}</div>
                <div id="products_price">{item.Price}  €</div>
            </Link>
            </li>
        ))}</div>
    )
}

export default Products;