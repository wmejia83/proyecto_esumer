function ProductCard(props) {
    return (
        <article className="product-card">

            <div className="product-image-container">

                <img
                    className="product-image"
                    src={props.image}
                    alt={props.name}
                />

                <span className="product-badge">
                    {props.category}
                </span>

            </div>


            <div className="product-info">

                <div className="product-meta">

                    <span className="product-category">
                        {props.category}
                    </span>

                    <span className="product-rating">
                        ★ {props.rating}
                    </span>

                </div>


                <h3>
                    {props.name}
                </h3>


                <p>
                    {props.description}
                </p>


                <div className="product-footer">

                    <strong>
                        ${props.price}
                    </strong>

                    <button
                        type="button"
                        className="product-button"
                    >
                        Agregar al carrito
                    </button>

                </div>

            </div>

        </article>
    );
}

export default ProductCard;