import Footer from "./Footer";
import Header from "./Header";
import ReactNode from "react";

export default function Layout(props: ReactNode.PropsWithChildren) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="mt-5">
        { props.children }
      </main>
      <footer className="bg-dark text-white">
        <Footer />
      </footer>
    </>
  );
}