const categoryVisuals = {
    accesorios: {
        image: "/products/keyboard.jpg",
        label: "Productividad"
    },
    audio: {
        image: "/products/headphones.jpg",
        label: "Experiencia sonora"
    },
    monitores: {
        image: "/hero/hero-tech.jpg",
        label: "Espacios digitales"
    }
};


function CategoryShowcase(props) {

    return (
        <section
            className="category-showcase"
            id="categories"
        >

            <div className="premium-section-header">

                <div>
                    <span className="section-eyebrow">
                        EXPLORA NEXOMARKET
                    </span>

                    <h2>
                        Compra por categoría.
                    </h2>
                </div>


                <p>
                    Encuentra tecnología organizada
                    según la forma en que trabajas,
                    creas y disfrutas tu día.
                </p>

            </div>


            <div className="category-showcase-grid">

                <button
                    type="button"
                    className={
                        props.selectedCategory === null
                            ? "category-visual category-all active"
                            : "category-visual category-all"
                    }
                    onClick={
                        function() {
                            props.onCategoryChange(null);
                        }
                    }
                >

                    <span className="category-number">
                        00
                    </span>

                    <div>
                        <span className="category-kicker">
                            CATÁLOGO COMPLETO
                        </span>

                        <strong>
                            Ver todo
                        </strong>

                        <small>
                            Explora nuestra selección completa
                        </small>
                    </div>

                    <span className="category-arrow">
                        →
                    </span>

                </button>


                {
                    props.categories.map(
                        function(category, index) {

                            const visual =
                                categoryVisuals[
                                    category.slug
                                ]
                                || {
                                    image:
                                        "/products/default.jpg",
                                    label:
                                        "Selección NexoMarket"
                                };


                            return (
                                <button
                                    type="button"
                                    key={category.id}
                                    className={
                                        Number(
                                            props.selectedCategory
                                        )
                                        === Number(
                                            category.id
                                        )
                                            ? "category-visual active"
                                            : "category-visual"
                                    }
                                    onClick={
                                        function() {
                                            props.onCategoryChange(
                                                category.id
                                            );
                                        }
                                    }
                                >

                                    <img
                                        src={visual.image}
                                        alt={category.name}
                                    />

                                    <span className="category-shade"></span>


                                    <span className="category-number">
                                        0{index + 1}
                                    </span>


                                    <div className="category-visual-copy">

                                        <span className="category-kicker">
                                            {visual.label}
                                        </span>

                                        <strong>
                                            {category.name}
                                        </strong>

                                        <small>
                                            Explorar categoría
                                        </small>

                                    </div>


                                    <span className="category-arrow">
                                        →
                                    </span>

                                </button>
                            );

                        }
                    )
                }

            </div>

        </section>
    );

}


export default CategoryShowcase;
