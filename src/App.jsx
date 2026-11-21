import {
    useState
} from "react";


import initialProducts
    from "./data/products.js";

import initialCategories
    from "./data/categories.js";


import PremiumHeader
    from "./components/PremiumHeader.jsx";

import PremiumHero
    from "./components/PremiumHero.jsx";

import CategoryShowcase
    from "./components/CategoryShowcase.jsx";

import EditorialBanner
    from "./components/EditorialBanner.jsx";

import SearchBar
    from "./components/SearchBar.jsx";

import ProductGrid
    from "./components/ProductGrid.jsx";

import PremiumClosing
    from "./components/PremiumClosing.jsx";

import CartDrawer
    from "./components/CartDrawer.jsx";

import CheckoutModal
    from "./components/CheckoutModal.jsx";

import PremiumFooter
    from "./components/PremiumFooter.jsx";


import "./App.css";
import "./Premium.css";


function App() {

    const [products] =
        useState(initialProducts);


    const [categories] =
        useState(initialCategories);


    const [cartItems, setCartItems] =
        useState([]);


    const [isCartOpen, setIsCartOpen] =
        useState(false);


    const [isCheckoutOpen, setIsCheckoutOpen] =
        useState(false);


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


                const description =
                    product.description
                    || "";


                const matchesSearch =
                    searchValue === ""
                    ||
                    product.name
                        .toLowerCase()
                        .includes(searchValue)
                    ||
                    description
                        .toLowerCase()
                        .includes(searchValue);


                const matchesCategory =
                    selectedCategory === null
                    ||
                    Number(product.category_id)
                    === Number(selectedCategory);


                return (
                    matchesSearch
                    && matchesCategory
                );

            }
        );


    function handleAddToCart(product) {

        setCartItems(
            function(currentItems) {

                const existingItem =
                    currentItems.find(
                        function(item) {
                            return item.id === product.id;
                        }
                    );


                if (existingItem) {

                    return currentItems.map(
                        function(item) {

                            if (item.id === product.id) {

                                const nextQuantity =
                                    Math.min(
                                        item.quantity + 1,
                                        product.stock
                                    );


                                return {
                                    ...item,
                                    quantity: nextQuantity
                                };

                            }


                            return item;

                        }
                    );

                }


                return [
                    ...currentItems,
                    {
                        ...product,
                        quantity: 1
                    }
                ];

            }
        );


        setIsCartOpen(true);

    }


    function handleIncreaseCartItem(productId) {

        setCartItems(
            function(currentItems) {

                return currentItems.map(
                    function(item) {

                        if (item.id !== productId) {
                            return item;
                        }


                        return {
                            ...item,
                            quantity: Math.min(
                                item.quantity + 1,
                                item.stock
                            )
                        };

                    }
                );

            }
        );

    }


    function handleDecreaseCartItem(productId) {

        setCartItems(
            function(currentItems) {

                return currentItems
                    .map(
                        function(item) {

                            if (item.id !== productId) {
                                return item;
                            }


                            return {
                                ...item,
                                quantity:
                                    item.quantity - 1
                            };

                        }
                    )
                    .filter(
                        function(item) {
                            return item.quantity > 0;
                        }
                    );

            }
        );

    }


    function handleRemoveCartItem(productId) {

        setCartItems(
            function(currentItems) {

                return currentItems.filter(
                    function(item) {
                        return item.id !== productId;
                    }
                );

            }
        );

    }


    const cartCount =
        cartItems.reduce(
            function(total, item) {
                return total + item.quantity;
            },
            0
        );


    const cartSubtotal =
        cartItems.reduce(
            function(total, item) {

                return (
                    total
                    + Number(item.price)
                    * item.quantity
                );

            },
            0
        );


    function handleCheckout() {

        if (cartItems.length === 0) {
            return;
        }


        setIsCartOpen(false);

        setIsCheckoutOpen(true);

    }


    function handleOrderConfirmed() {

        setCartItems([]);

    }


    function handleCategoryChange(categoryId) {

        setSelectedCategory(
            categoryId
        );


        setTimeout(
            function() {

                const catalog =
                    document.getElementById(
                        "products"
                    );


                if (catalog) {

                    catalog.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            },
            100
        );

    }


    return (
        <>

            <PremiumHeader
                cartCount={cartCount}
                onCartClick={
                    function() {
                        setIsCartOpen(true);
                    }
                }
            />


            <main>

                <PremiumHero />


                <CategoryShowcase
                    categories={categories}
                    selectedCategory={
                        selectedCategory
                    }
                    onCategoryChange={
                        handleCategoryChange
                    }
                />


                <section
                    className="premium-catalog"
                    id="products"
                >

                    <div className="premium-section-header catalog-heading">

                        <div>

                            <span className="section-eyebrow">
                                CATÁLOGO NEXOMARKET
                            </span>

                            <h2>
                                Productos para
                                tu día digital.
                            </h2>

                        </div>


                        <p>
                            Busca, filtra y descubre productos
                            seleccionados para trabajo,
                            estudio y entretenimiento.
                        </p>

                    </div>


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


                <EditorialBanner />

                <PremiumClosing />

            </main>


            <CartDrawer
                isOpen={isCartOpen}
                items={cartItems}
                totalItems={cartCount}
                subtotal={cartSubtotal}
                onClose={
                    function() {
                        setIsCartOpen(false);
                    }
                }
                onIncrease={
                    handleIncreaseCartItem
                }
                onDecrease={
                    handleDecreaseCartItem
                }
                onRemove={
                    handleRemoveCartItem
                }
                onCheckout={
                    handleCheckout
                }
            />


            {
                isCheckoutOpen && (
                    <CheckoutModal
                        items={cartItems}
                        subtotal={cartSubtotal}
                        onConfirm={
                            handleOrderConfirmed
                        }
                        onClose={
                            function() {
                                setIsCheckoutOpen(false);
                            }
                        }
                    />
                )
            }


            <PremiumFooter />

        </>
    );

}


export default App;
