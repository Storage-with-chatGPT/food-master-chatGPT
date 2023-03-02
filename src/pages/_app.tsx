import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/commons/Header";
import Footer from "@/components/commons/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <ToastContainer className="font-semibold" />
      <Footer />
    </Provider>
  );
};

export default MyApp;
