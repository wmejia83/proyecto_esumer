import { useState } from "react";

import initialProducts from "./data/products.js"

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import SearchBar from "./components/SearchBar.jsx";

import ProductGrid from "./components/ProductGrid.jsx";

import Footer from "./components/Footer.jsx";

import "./App.css";


function App() {

    const [cartCount,setCartCount] = 
        useState(0);

    // const [products, setProducts] =
    //     useState(initialProducts)
    const [products] =
        useState(initialProducts)


    const [search, setSearch] =
        useState("")


    const filteredProducts =
        products.filter(
            function(product){
                return product.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );
            }
        )
        

    function handleAddToCart() {

        setCartCount(
            cartCount + 1
        );

    }

    return (
        <>
            <Header
                cartCount={cartCount}
            />

            <main>
            <Hero />

            <SearchBar
                search= {search}

                onSearchChange={
                    setSearch
                }
            />

            <ProductGrid 

                products = {filteredProducts}

                onAddToCart={
                    handleAddToCart
                }

            />
            
            </main>
            <Footer />
        </>
    );
}

export default App
