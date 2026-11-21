const initialProducts = [
    {
        id: 1,
        name: "Mouse Pro",
        description:
            "Mouse inalámbrico ergonómico para trabajar, estudiar y crear con mayor precisión.",
        price: 79900,
        stock: 10,
        image_url: "/products/mouse.jpg",
        active: true,
        category_id: 1,
        category: "Accesorios",
        category_slug: "accesorios",
        rating: 4.8
    },
    {
        id: 2,
        name: "Audífonos Air",
        description:
            "Audio inalámbrico, diseño ligero y sonido envolvente para acompañarte durante todo el día.",
        price: 219900,
        stock: 8,
        image_url: "/products/headphones.jpg",
        active: true,
        category_id: 2,
        category: "Audio",
        category_slug: "audio",
        rating: 4.9
    },
    {
        id: 3,
        name: "Teclado Studio",
        description:
            "Teclado mecánico de respuesta precisa diseñado para productividad, estudio y creatividad.",
        price: 189900,
        stock: 6,
        image_url: "/products/keyboard.jpg",
        active: true,
        category_id: 1,
        category: "Accesorios",
        category_slug: "accesorios",
        rating: 4.9
    }
];

export default initialProducts;
