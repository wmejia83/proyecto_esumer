function Footer() {
    return (
        <footer
            className="footer"
            id="about"
        >

            <div className="footer-inner">

                <div className="footer-brand">

                    <div className="brand footer-logo">

                        <span className="brand-mark">
                            N
                        </span>

                        <span>
                            NexoMarket
                        </span>

                    </div>


                    <p>
                        Tecnología seleccionada para
                        ayudarte a trabajar, crear
                        y disfrutar mejor.
                    </p>

                </div>


                <div className="footer-column">

                    <strong>
                        Explorar
                    </strong>

                    <a href="#">
                        Inicio
                    </a>

                    <a href="#products">
                        Productos
                    </a>

                </div>


                <div className="footer-column">

                    <strong>
                        Proyecto
                    </strong>

                    <span>
                        React + Vite
                    </span>

                    <span>
                        ESUMER 2026
                    </span>

                </div>

            </div>


            <div className="footer-bottom">

                <small>
                    © 2026 NexoMarket
                </small>

                <small>
                    Construido con React
                </small>

            </div>

        </footer>
    );
}

export default Footer;