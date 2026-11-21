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


function CartDrawer(props) {

    return (
        <>

            <button
                type="button"
                className={
                    props.isOpen
                        ? "cart-backdrop open"
                        : "cart-backdrop"
                }
                aria-label="Cerrar carrito"
                onClick={props.onClose}
            />


            <aside
                className={
                    props.isOpen
                        ? "cart-drawer open"
                        : "cart-drawer"
                }
            >

                <div className="cart-drawer-header">

                    <div>

                        <span className="cart-drawer-eyebrow">
                            TU SELECCIÓN
                        </span>

                        <h2>
                            Carrito
                        </h2>

                    </div>


                    <button
                        type="button"
                        className="cart-close"
                        onClick={props.onClose}
                        aria-label="Cerrar carrito"
                    >
                        ×
                    </button>

                </div>


                {
                    props.items.length === 0
                        ? (
                            <div className="cart-empty">

                                <span className="cart-empty-icon">
                                    ◇
                                </span>

                                <h3>
                                    Tu carrito está vacío.
                                </h3>

                                <p>
                                    Explora el catálogo y agrega
                                    los productos que quieras comparar
                                    o comprar.
                                </p>

                                <button
                                    type="button"
                                    onClick={props.onClose}
                                >
                                    Explorar productos
                                </button>

                            </div>
                        )
                        : (
                            <>

                                <div className="cart-items">

                                    {
                                        props.items.map(
                                            function(item) {

                                                return (
                                                    <article
                                                        className="cart-item"
                                                        key={item.id}
                                                    >

                                                        <div className="cart-item-image">

                                                            <img
                                                                src={
                                                                    item.image_url
                                                                    || "/products/default.jpg"
                                                                }
                                                                alt={item.name}
                                                            />

                                                        </div>


                                                        <div className="cart-item-content">

                                                            <div className="cart-item-top">

                                                                <div>

                                                                    <span>
                                                                        {item.category}
                                                                    </span>

                                                                    <h3>
                                                                        {item.name}
                                                                    </h3>

                                                                </div>


                                                                <button
                                                                    type="button"
                                                                    className="cart-remove"
                                                                    onClick={
                                                                        function() {
                                                                            props.onRemove(
                                                                                item.id
                                                                            );
                                                                        }
                                                                    }
                                                                    aria-label={
                                                                        `Eliminar ${item.name}`
                                                                    }
                                                                >
                                                                    ×
                                                                </button>

                                                            </div>


                                                            <div className="cart-item-bottom">

                                                                <div className="quantity-control">

                                                                    <button
                                                                        type="button"
                                                                        onClick={
                                                                            function() {
                                                                                props.onDecrease(
                                                                                    item.id
                                                                                );
                                                                            }
                                                                        }
                                                                    >
                                                                        −
                                                                    </button>

                                                                    <span>
                                                                        {item.quantity}
                                                                    </span>

                                                                    <button
                                                                        type="button"
                                                                        onClick={
                                                                            function() {
                                                                                props.onIncrease(
                                                                                    item.id
                                                                                );
                                                                            }
                                                                        }
                                                                    >
                                                                        +
                                                                    </button>

                                                                </div>


                                                                <strong>
                                                                    {
                                                                        formatPrice(
                                                                            Number(item.price)
                                                                            * item.quantity
                                                                        )
                                                                    }
                                                                </strong>

                                                            </div>

                                                        </div>

                                                    </article>
                                                );

                                            }
                                        )
                                    }

                                </div>


                                <div className="cart-summary">

                                    <div className="cart-summary-row">

                                        <span>
                                            Productos
                                        </span>

                                        <strong>
                                            {props.totalItems}
                                        </strong>

                                    </div>


                                    <div className="cart-summary-row">

                                        <span>
                                            Envío
                                        </span>

                                        <strong>
                                            Se calcula en checkout
                                        </strong>

                                    </div>


                                    <div className="cart-total">

                                        <div>

                                            <span>
                                                Subtotal
                                            </span>

                                            <small>
                                                Impuestos y envío se calculan
                                                en el siguiente paso.
                                            </small>

                                        </div>

                                        <strong>
                                            {
                                                formatPrice(
                                                    props.subtotal
                                                )
                                            }
                                        </strong>

                                    </div>


                                    <button
                                        type="button"
                                        className="cart-checkout-button"
                                        onClick={props.onCheckout}
                                    >
                                        Ir al checkout

                                        <span>
                                            →
                                        </span>
                                    </button>


                                    <button
                                        type="button"
                                        className="cart-continue-button"
                                        onClick={props.onClose}
                                    >
                                        Seguir comprando
                                    </button>

                                </div>

                            </>
                        )
                }

            </aside>

        </>
    );

}


export default CartDrawer;
