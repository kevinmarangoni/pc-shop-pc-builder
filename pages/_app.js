import Theme from "/pages/src/context/Theme.jsx";
import Layout from "./src/components/common/layout/Layout";
import CartProvider from "./src/context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <CartProvider>
        <Layout />
        <Component {...pageProps} />
      </CartProvider>
    </Theme>
  );
}

export default MyApp;
