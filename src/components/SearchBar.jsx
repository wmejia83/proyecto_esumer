function SearchBar(props){
    return (
        <section className="search-section">

            <div className="search-content">

                <label htmlFor="search">Buscar Productos</label>

                <input
                    id="search"
                    type="text"
                    placeholder="Ej. mouse, teclado..."
                    value={props.search}
                    onChange={
                        function(event){
                            props.onSearchChange(
                                event.target.value
                            );
                        }
                    }
                >
                </input>
                
            </div>

        </section>
    );
}

export default SearchBar;