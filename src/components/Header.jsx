function Header(props) {
    return (
        <header className="header">

            <div className="header-inner">
                <a
                    href="#"
                    className="brand"
                >
                    <span className="brand-mark">
                        N
                    </span>

                    <span>
                        NexoMarket
                    </span>
                </a>


                <nav className="nav">

                    <a href="#">
                        Inicio
                    </a>

                    <a href="#products">
                        Productos
                    </a>

                    <a href="#about">
                        Nosotros
                    </a>

                </nav>


                <button
                    className="cart-button"
                    type="button"
                >
                    Carrito

                    <span>
                        {props.cartCount}
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Header;