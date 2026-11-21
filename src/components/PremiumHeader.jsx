function PremiumHeader(props) {

    return (
        <header className="premium-header">

            <div className="premium-header-inner">

                <a
                    href="#top"
                    className="premium-brand"
                >
                    <span className="premium-brand-mark">
                        N
                    </span>

                    <span className="premium-brand-copy">
                        <strong>NexoMarket</strong>
                        <small>SMART COMMERCE</small>
                    </span>
                </a>


                <nav className="premium-nav">

                    <a href="#top">
                        Inicio
                    </a>

                    <a href="#categories">
                        Categorías
                    </a>

                    <a href="#products">
                        Catálogo
                    </a>

                    <a href="#about">
                        Nosotros
                    </a>

                </nav>


                <div className="premium-header-actions">

                    <button
                        type="button"
                        className="premium-admin-button"
                    >
                        Administrar
                    </button>


                    <button
                        type="button"
                        className="premium-cart-button"
                        onClick={props.onCartClick}
                    >
                        <span>
                            Carrito
                        </span>

                        <strong>
                            {props.cartCount}
                        </strong>
                    </button>

                </div>

            </div>

        </header>
    );

}

export default PremiumHeader;
