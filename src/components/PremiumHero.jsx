function PremiumHero() {

    const benefits = [
        {
            icon: "↗",
            title: "Envío confiable",
            text: "Cobertura para tus compras"
        },
        {
            icon: "◇",
            title: "Compra sencilla",
            text: "Una experiencia clara y rápida"
        },
        {
            icon: "⚡",
            title: "+100 productos",
            text: "Tecnología seleccionada"
        },
        {
            icon: "☆",
            title: "Experiencia premium",
            text: "Diseñada para cualquier dispositivo"
        }
    ];


    return (
        <section
            className="premium-hero"
            id="top"
        >

            <div className="premium-hero-overlay"></div>
            <div className="premium-hero-glow"></div>


            <div className="premium-hero-inner">

                <div className="premium-hero-layout">

                    <div className="premium-hero-copy">

                        <div className="premium-hero-pill">

                            <span></span>

                            Tecnología seleccionada
                            para tu día

                        </div>


                        <h1>
                            Tecnología para
                            <span>
                                avanzar mejor.
                            </span>
                        </h1>


                        <p>
                            Productos seleccionados para estudiar,
                            trabajar, crear y disfrutar una experiencia
                            digital más simple, potente y confiable.
                        </p>


                        <div className="premium-hero-actions">

                            <a
                                href="#products"
                                className="premium-primary-action"
                            >
                                Explorar catálogo

                                <span>
                                    →
                                </span>
                            </a>


                            <a
                                href="#categories"
                                className="premium-secondary-action"
                            >
                                Ver categorías
                            </a>

                        </div>

                    </div>

                </div>


                <div className="premium-hero-trust">

                    {
                        benefits.map(
                            function(benefit) {

                                return (
                                    <article
                                        className="premium-trust-item"
                                        key={benefit.title}
                                    >

                                        <span className="premium-trust-icon">
                                            {benefit.icon}
                                        </span>


                                        <div>

                                            <strong>
                                                {benefit.title}
                                            </strong>

                                            <p>
                                                {benefit.text}
                                            </p>

                                        </div>

                                    </article>
                                );

                            }
                        )
                    }

                </div>

            </div>

        </section>
    );

}

export default PremiumHero;
