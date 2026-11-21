function CategoryFilter(props) {

    return (
        <section
            className="categories-section"
            id="categories"
        >
            <div className="categories-heading">

                <div>
                    <span className="section-eyebrow">
                        EXPLORA A TU MANERA
                    </span>

                    <h2>
                        Encuentra lo que necesitas.
                    </h2>
                </div>

                <p>
                    Explora nuestro catálogo por categoría
                    y encuentra productos pensados para
                    diferentes necesidades.
                </p>

            </div>


            <div className="category-list">

                <button
                    type="button"
                    className={
                        props.selectedCategory === null
                            ? "category-chip active"
                            : "category-chip"
                    }
                    onClick={
                        function() {

                            props.onCategoryChange(
                                null
                            );

                        }
                    }
                >
                    Todos
                </button>


                {
                    props.categories.map(
                        function(category) {

                            return (
                                <button
                                    key={category.id}
                                    type="button"
                                    className={
                                        props.selectedCategory === category.id
                                            ? "category-chip active"
                                            : "category-chip"
                                    }
                                    onClick={
                                        function() {

                                            props.onCategoryChange(
                                                category.id
                                            );

                                        }
                                    }
                                >
                                    {category.name}
                                </button>
                            );

                        }
                    )
                }

            </div>
        </section>
    );

}

export default CategoryFilter;
