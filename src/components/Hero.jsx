function Hero() {
    return (
        <section className="hero">

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <span className="eyebrow">
                    TECNOLOGÍA · DISEÑO · PRODUCTIVIDAD
                </span>

                <h1>
                    Tecnología que
                    mejora tu día.
                </h1>

                <p>
                    Descubre productos seleccionados
                    para estudiar, trabajar y disfrutar
                    con una mejor experiencia.
                </p>

                <div className="hero-actions">

                    <a
                        href="#products"
                        className="primary-button"
                    >
                        Explorar productos
                    </a>

                    <a
                        href="#about"
                        className="secondary-button"
                    >
                        Conocer NexoMarket
                    </a>

                </div>

                <div className="hero-features">

                    <span>
                        ✓ Selección premium
                    </span>

                    <span>
                        ✓ Tecnología útil
                    </span>

                    <span>
                        ✓ Compra simple
                    </span>

                </div>

            </div>

        </section>
    );
}

export default Hero;
