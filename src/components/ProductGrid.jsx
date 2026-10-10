import ProductCard from "./ProductCard";

function ProductGrid(){

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

                <ProductCard
                    image="/products/headphones.jpg"
                    category="Audio"
                    name="Audífonos Pro"
                    description="Sonido envolvente, diseño cómodo y una experiencia premium para trabajar o disfrutar tu música."
                    price="129.900"

                />


                <ProductCard
                    image="/products/keyboard.jpg"
                    category="Accesorios"
                    name="Teclado Mecánico"
                    description="Precisión y respuesta inmediata para estudiar, programar y trabajar durante largas jornadas."
                    price="189.900"
                />


                <ProductCard
                    image="/products/mouse.jpg"
                    category="Accesorios"
                    name="Mouse Inalámbrico"
                    description="Diseño ergonómico, ligero y preciso para acompañarte cómodamente durante todo el día."
                    price="79.900"
                />

            </div>

        </section>
    )

}

export default ProductGrid