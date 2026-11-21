import {
    useState
} from "react";


function formatPrice(value) {

    return new Intl.NumberFormat(
        "es-CO",
        {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0
        }
    ).format(
        Number(value)
    );

}


function CheckoutModal(props) {

    const [form, setForm] =
        useState({
            name: "",
            email: "",
            phone: "",
            city: "",
            address: ""
        });


    const [submitted, setSubmitted] =
        useState(false);


    const [orderNumber] =
        useState(
            function() {

                return (
                    "NXM-"
                    + Date.now()
                        .toString()
                        .slice(-6)
                );

            }
        );


    function handleChange(event) {

        const {
            name,
            value
        } = event.target;


        setForm(
            function(currentForm) {

                return {
                    ...currentForm,
                    [name]: value
                };

            }
        );

    }


    function handleSubmit(event) {

        event.preventDefault();

        props.onConfirm(form);

        setSubmitted(true);

    }


    if (submitted) {

        return (
            <div className="checkout-overlay">

                <section className="checkout-success">

                    <div className="checkout-success-icon">
                        ✓
                    </div>

                    <span className="checkout-eyebrow">
                        PEDIDO CONFIRMADO
                    </span>

                    <h2>
                        ¡Gracias por tu compra!
                    </h2>

                    <p>
                        Tu pedido de demostración fue
                        registrado correctamente.
                    </p>


                    <div className="checkout-order-number">

                        <span>
                            Número de pedido
                        </span>

                        <strong>
                            {orderNumber}
                        </strong>

                    </div>


                    <p className="checkout-demo-note">
                        Este checkout forma parte del proyecto
                        académico NexoMarket y no procesa
                        pagos reales.
                    </p>


                    <button
                        type="button"
                        className="checkout-finish-button"
                        onClick={props.onClose}
                    >
                        Volver a NexoMarket
                    </button>

                </section>

            </div>
        );

    }


    return (
        <div className="checkout-overlay">

            <section className="checkout-modal">

                <div className="checkout-header">

                    <div>

                        <span className="checkout-eyebrow">
                            CHECKOUT
                        </span>

                        <h2>
                            Finalizar compra
                        </h2>

                    </div>


                    <button
                        type="button"
                        className="checkout-close"
                        onClick={props.onClose}
                        aria-label="Cerrar checkout"
                    >
                        ×
                    </button>

                </div>


                <div className="checkout-layout">

                    <form
                        className="checkout-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="checkout-section-title">

                            <span>
                                01
                            </span>

                            <div>
                                <strong>
                                    Información de contacto
                                </strong>

                                <p>
                                    Datos necesarios para
                                    identificar tu pedido.
                                </p>
                            </div>

                        </div>


                        <div className="checkout-fields">

                            <label className="checkout-field checkout-field-full">

                                <span>
                                    Nombre completo
                                </span>

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Tu nombre"
                                    required
                                />

                            </label>


                            <label className="checkout-field">

                                <span>
                                    Correo electrónico
                                </span>

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="correo@ejemplo.com"
                                    required
                                />

                            </label>


                            <label className="checkout-field">

                                <span>
                                    Teléfono
                                </span>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="300 000 0000"
                                    required
                                />

                            </label>

                        </div>


                        <div className="checkout-divider"></div>


                        <div className="checkout-section-title">

                            <span>
                                02
                            </span>

                            <div>
                                <strong>
                                    Datos de entrega
                                </strong>

                                <p>
                                    Indica dónde recibirías
                                    tu pedido.
                                </p>
                            </div>

                        </div>


                        <div className="checkout-fields">

                            <label className="checkout-field">

                                <span>
                                    Ciudad
                                </span>

                                <input
                                    type="text"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    placeholder="Ciudad"
                                    required
                                />

                            </label>


                            <label className="checkout-field">

                                <span>
                                    Dirección
                                </span>

                                <input
                                    type="text"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    placeholder="Dirección de entrega"
                                    required
                                />

                            </label>

                        </div>


                        <div className="checkout-divider"></div>


                        <div className="checkout-section-title">

                            <span>
                                03
                            </span>

                            <div>
                                <strong>
                                    Método de pago
                                </strong>

                                <p>
                                    Simulación para fines académicos.
                                </p>
                            </div>

                        </div>


                        <div className="checkout-payment-demo">

                            <span className="checkout-payment-icon">
                                ◇
                            </span>

                            <div>

                                <strong>
                                    Pago de demostración
                                </strong>

                                <p>
                                    No se solicitarán datos bancarios
                                    ni se realizará ningún cobro real.
                                </p>

                            </div>

                            <span className="checkout-payment-check">
                                ✓
                            </span>

                        </div>


                        <button
                            type="submit"
                            className="checkout-confirm-button"
                        >
                            Confirmar pedido

                            <span>
                                →
                            </span>
                        </button>

                    </form>


                    <aside className="checkout-summary">

                        <span className="checkout-eyebrow">
                            TU PEDIDO
                        </span>

                        <h3>
                            Resumen
                        </h3>


                        <div className="checkout-products">

                            {
                                props.items.map(
                                    function(item) {

                                        return (
                                            <article
                                                className="checkout-product"
                                                key={item.id}
                                            >

                                                <div className="checkout-product-image">

                                                    <img
                                                        src={
                                                            item.image_url
                                                            || "/products/default.jpg"
                                                        }
                                                        alt={item.name}
                                                    />

                                                    <span>
                                                        {item.quantity}
                                                    </span>

                                                </div>


                                                <div className="checkout-product-info">

                                                    <span>
                                                        {item.category}
                                                    </span>

                                                    <strong>
                                                        {item.name}
                                                    </strong>

                                                </div>


                                                <strong className="checkout-product-price">
                                                    {
                                                        formatPrice(
                                                            Number(item.price)
                                                            * item.quantity
                                                        )
                                                    }
                                                </strong>

                                            </article>
                                        );

                                    }
                                )
                            }

                        </div>


                        <div className="checkout-summary-lines">

                            <div>
                                <span>
                                    Subtotal
                                </span>

                                <strong>
                                    {formatPrice(props.subtotal)}
                                </strong>
                            </div>


                            <div>
                                <span>
                                    Envío
                                </span>

                                <strong>
                                    Por calcular
                                </strong>
                            </div>

                        </div>


                        <div className="checkout-summary-total">

                            <span>
                                Total parcial
                            </span>

                            <strong>
                                {formatPrice(props.subtotal)}
                            </strong>

                        </div>


                        <p className="checkout-summary-note">
                            El envío no está incluido porque
                            esta etapa corresponde a una
                            simulación académica.
                        </p>

                    </aside>

                </div>

            </section>

        </div>
    );

}


export default CheckoutModal;
