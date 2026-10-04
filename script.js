* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f7fb;
    color: #172033;
}

/* Header */
header {
    background: #0d2b52;
    color: white;
    padding: 18px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 26px;
    font-weight: bold;
}

.cart-btn {
    background: #ffffff;
    color: #0d2b52;
    border: none;
    padding: 11px 18px;
    border-radius: 25px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
}

.cart-btn:hover {
    background: #e7effa;
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 55px 20px;
    background: linear-gradient(135deg, #dcecff, #ffffff);
}

.hero h1 {
    font-size: 42px;
    margin-bottom: 12px;
}

.hero p {
    color: #5d6b82;
    font-size: 18px;
}

/* Products */
.products-section {
    padding: 45px 7%;
}

.products-section h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 30px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 25px;
}

/* Product Card */
.product-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
    transition: 0.3s;
}

.product-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.product-image {
    width: 100%;
    height: 190px;
    object-fit: cover;
}

.product-info {
    padding: 20px;
}

.product-info h3 {
    font-size: 20px;
    margin-bottom: 8px;
}

.product-info p {
    color: #68758a;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 15px;
}

.price {
    font-size: 20px;
    font-weight: bold;
    color: #0d6efd;
    margin-bottom: 15px;
}

.add-cart {
    width: 100%;
    padding: 11px;
    border: none;
    border-radius: 8px;
    background: #0d6efd;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
}

.add-cart:hover {
    background: #0958c7;
}

/* Cart */
.cart-section {
    background: white;
    margin: 20px 7% 50px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
}

.cart-section h2 {
    margin-bottom: 20px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #ddd;
}

.cart-item button {
    border: none;
    background: #ff4d4d;
    color: white;
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
}

.cart-total {
    text-align: right;
    font-size: 22px;
    font-weight: bold;
    margin-top: 20px;
}

.checkout-btn {
    display: block;
    margin: 20px 0 0 auto;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    background: #198754;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.checkout-btn:hover {
    background: #146c43;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    justify-content: center;
    align-items: center;
    z-index: 200;
    padding: 20px;
}

.modal-content {
    background: white;
    width: 100%;
    max-width: 500px;
    border-radius: 15px;
    padding: 30px;
    position: relative;
    animation: popup 0.25s ease;
}

@keyframes popup {
    from {
        transform: scale(0.85);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.close-btn {
    position: absolute;
    right: 20px;
    top: 15px;
    border: none;
    background: none;
    font-size: 28px;
    cursor: pointer;
}

.modal-content h2 {
    margin-bottom: 20px;
}

.modal-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

.modal-total {
    margin-top: 20px;
    font-size: 21px;
    font-weight: bold;
    text-align: right;
}

.confirm-btn {
    width: 100%;
    margin-top: 20px;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background: #198754;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

/* Footer */
footer {
    background: #0d2b52;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 40px;
}

/* Mobile Responsive */
@media (max-width: 600px) {

    header {
        padding: 15px 5%;
    }

    .logo {
        font-size: 21px;
    }

    .cart-btn {
        padding: 9px 13px;
        font-size: 13px;
    }

    .hero {
        padding: 40px 15px;
    }

    .hero h1 {
        font-size: 30px;
    }

    .hero p {
        font-size: 15px;
    }

    .products-section {
        padding: 35px 5%;
    }

    .products-section h2 {
        font-size: 25px;
    }

    .cart-section {
        margin: 20px 5% 40px;
        padding: 20px;
    }

    .product-grid {
        grid-template-columns: 1fr;
    }
}
