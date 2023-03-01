import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer className="font-semibold" />
    </Provider>
  );
};

export default MyApp;
