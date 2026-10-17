import ProductCard from "./ProductCard";

function ProductGrid(props){

    return(
        <section
        id="products"
        className="products-section"
        >

            <div className="section-heading">

                <span className="section-eyebrow">
                    COLECCIÓN DESTACADA
                </span>


                <div className="section-title-row">

                    <h2>
                        Tecnología elegida para ti.
                    </h2>

                    <p>
                        Productos funcionales,
                        modernos y pensados para
                        mejorar tu espacio digital.
                    </p>

                </div>

            </div>
            
            <div className="products-grid">
                {
                    props.products.map(
                        function (product) {

                            return(

                                <ProductCard
                                    key ={product.id}
                                    image={product.image}
                                    category={product.category}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    rating={product.rating}
                                    onAddToCart={product.onAddToCart}
                                />
                            );

                        }
                    )
                }
            </div>

        </section>
    )

}

export default ProductGrid