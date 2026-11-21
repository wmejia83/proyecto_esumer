function ProductCard(props) {

    const product =
        props.product;


    const formattedPrice =
        new Intl.NumberFormat(
            "es-CO",
            {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0
            }
        ).format(
            Number(product.price)
        );


    const hasStock =
        product.stock > 0;


    return (
        <article className="product-card">

            <div className="product-image-container">

                <img
                    className="product-image"
                    src={
                        product.image_url
                        || "/products/default.jpg"
                    }
                    alt={product.name}
                />


                <div className="product-image-top">

                    <span className="product-badge">
                        {product.category}
                    </span>

                    <span
                        className={
                            hasStock
                                ? "stock-badge"
                                : "stock-badge out"
                        }
                    >
                        {
                            hasStock
                                ? `${product.stock} disponibles`
                                : "Agotado"
                        }
                    </span>

                </div>

            </div>


            <div className="product-info">

                <div className="product-meta">

                    <span>
                        {product.category}
                    </span>

                    <span className="product-rating">
                        ★ {product.rating}
                    </span>

                </div>


                <h3>
                    {product.name}
                </h3>


                <p>
                    {product.description}
                </p>


                <div className="product-footer">

                    <div className="product-price">

                        <span>
                            Precio
                        </span>

                        <strong>
                            {formattedPrice}
                        </strong>

                    </div>


                    <button
                        type="button"
                        className="product-button"
                        disabled={!hasStock}
                        onClick={
                            function() {

                                props.onAddToCart(
                                    product
                                );

                            }
                        }
                    >
                        {
                            hasStock
                                ? "Agregar"
                                : "Sin stock"
                        }
                    </button>

                </div>

            </div>

        </article>
    );

}

export default ProductCard;
