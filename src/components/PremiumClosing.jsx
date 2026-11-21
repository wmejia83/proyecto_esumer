function PremiumClosing() {

    const steps = [
        {
            number: "01",
            title: "Descubre",
            text:
                "Explora categorías y encuentra tecnología pensada para tu día."
        },
        {
            number: "02",
            title: "Elige",
            text:
                "Compara información, precio y disponibilidad de forma sencilla."
        },
        {
            number: "03",
            title: "Disfruta",
            text:
                "Una experiencia moderna, clara y diseñada para cualquier dispositivo."
        }
    ];


    return (
        <section className="premium-closing">

            <div className="premium-closing-inner">

                <div className="premium-closing-heading">

                    <div>

                        <span className="section-eyebrow">
                            EXPERIENCIA NEXOMARKET
                        </span>

                        <h2>
                            Tecnología más simple.
                            <br />
                            Decisiones más claras.
                        </h2>

                    </div>


                    <a
                        href="#products"
                        className="premium-closing-action"
                    >
                        Explorar catálogo

                        <span>
                            →
                        </span>
                    </a>

                </div>


                <div className="premium-closing-grid">

                    {
                        steps.map(
                            function(step) {

                                return (
                                    <article
                                        key={step.number}
                                        className="premium-closing-item"
                                    >

                                        <span>
                                            {step.number}
                                        </span>


                                        <div>

                                            <strong>
                                                {step.title}
                                            </strong>

                                            <p>
                                                {step.text}
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


export default PremiumClosing;
