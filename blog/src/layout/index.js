import Footer from "./footer";
import Header from "./header";

const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "4rem" }}>{children}</div>
      <Footer />
    </>
  );
};
export default LayOut;
