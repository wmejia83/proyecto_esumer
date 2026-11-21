function EditorialBanner() {

    return (
        <section className="editorial-banner">

            <div className="editorial-image">

                <div className="editorial-image-overlay"></div>

                <span>
                    NEXOMARKET SELECT
                </span>

            </div>


            <div className="editorial-content">

                <span className="section-eyebrow">
                    SELECCIÓN DE LA SEMANA
                </span>

                <h2>
                    Tecnología útil.
                    <br />
                    Diseño que inspira.
                </h2>

                <p>
                    Elegimos productos pensados para
                    integrarse mejor a tu espacio y
                    acompañarte en lo que haces cada día.
                </p>

                <a href="#products">
                    Explorar selección
                    <span>→</span>
                </a>

            </div>

        </section>
    );

}


export default EditorialBanner;
