import "@/styles/globals.css";
//Internal Imports
import { Navbar, Footer } from "../../components";
import { CrowdFundingProvider } from "../../context/CrowdFunding";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CrowdFundingProvider>
        <Navbar />
        <Component {...pageProps} />;
        <Footer />
      </CrowdFundingProvider>
    </>
  );
}
