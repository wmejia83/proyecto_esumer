import ProductCard
    from "./ProductCard";


function ProductGrid(props) {

    return (
        <section
            id="products"
            className="products-section"
        >

            <div className="section-heading">

                <span className="section-eyebrow">
                    CATÁLOGO NEXOMARKET
                </span>


                <div className="section-title-row">

                    <h2>
                        Tecnología elegida para ti.
                    </h2>

                    <p>
                        Productos modernos, funcionales
                        y pensados para mejorar
                        tu espacio digital.
                    </p>

                </div>

            </div>


            {
                props.products.length > 0
                    ? (
                        <div className="products-grid">

                            {
                                props.products.map(
                                    function(product) {

                                        return (
                                            <ProductCard
                                                key={product.id}
                                                product={product}
                                                onAddToCart={
                                                    props.onAddToCart
                                                }
                                            />
                                        );

                                    }
                                )
                            }

                        </div>
                    )
                    : (
                        <div className="empty-state">

                            <span>
                                ⌕
                            </span>

                            <h3>
                                No encontramos productos.
                            </h3>

                            <p>
                                Intenta con otra búsqueda
                                o selecciona otra categoría.
                            </p>

                        </div>
                    )
            }

        </section>
    );

}

export default ProductGrid;
