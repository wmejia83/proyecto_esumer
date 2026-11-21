function SearchBar(props) {

    return (
        <div className="catalog-toolbar">

            <div className="search-field">

                <span className="search-icon">
                    ⌕
                </span>

                <input
                    id="search"
                    type="search"
                    placeholder="Buscar mouse, audífonos, teclado..."
                    value={props.search}
                    onChange={
                        function(event) {

                            props.onSearchChange(
                                event.target.value
                            );

                        }
                    }
                />

            </div>


            <div className="results-counter">

                <strong>
                    {props.total}
                </strong>

                <span>
                    {
                        props.total === 1
                            ? "producto"
                            : "productos"
                    }
                </span>

            </div>

        </div>
    );

}

export default SearchBar;
