import {
    useState
} from "react";


import initialProducts
    from "./data/products.js";

import initialCategories
    from "./data/categories.js";


import Header
    from "./components/Header.jsx";

import Hero
    from "./components/Hero.jsx";

import CategoryFilter
    from "./components/CategoryFilter.jsx";

import SearchBar
    from "./components/SearchBar.jsx";

import ProductGrid
    from "./components/ProductGrid.jsx";

import Footer
    from "./components/Footer.jsx";


import "./App.css";


function App() {

    const [products] =
        useState(
            initialProducts
        );


    const [categories] =
        useState(
            initialCategories
        );


    const [cartCount, setCartCount] =
        useState(0);


    const [search, setSearch] =
        useState("");


    const [
        selectedCategory,
        setSelectedCategory
    ] =
        useState(null);


    const filteredProducts =
        products.filter(
            function(product) {

                if (!product.active) {

                    return false;

                }


                const searchValue =
                    search
                        .trim()
                        .toLowerCase();


                const matchesSearch =
                    searchValue === ""
                    ||
                    product.name
                        .toLowerCase()
                        .includes(
                            searchValue
                        )
                    ||
                    product.description
                        .toLowerCase()
                        .includes(
                            searchValue
                        );


                const matchesCategory =
                    selectedCategory === null
                    ||
                    product.category_id
                    === selectedCategory;


                return (
                    matchesSearch
                    && matchesCategory
                );

            }
        );


    function handleAddToCart() {

        setCartCount(
            function(currentCount) {

                return (
                    currentCount + 1
                );

            }
        );

    }


    return (
        <>

            <Header
                cartCount={cartCount}
            />


            <main>

                <Hero />


                <CategoryFilter
                    categories={categories}
                    selectedCategory={
                        selectedCategory
                    }
                    onCategoryChange={
                        setSelectedCategory
                    }
                />


                <section className="catalog-shell">

                    <SearchBar
                        search={search}
                        onSearchChange={
                            setSearch
                        }
                        total={
                            filteredProducts.length
                        }
                    />


                    <ProductGrid
                        products={
                            filteredProducts
                        }
                        onAddToCart={
                            handleAddToCart
                        }
                    />

                </section>

            </main>


            <Footer />

        </>
    );

}

export default App;
