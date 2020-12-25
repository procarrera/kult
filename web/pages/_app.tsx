import "tailwindcss/tailwind.css";
import Menu from "../src/components/Menu";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <Menu />
      <div className="w-full pt-4 md:pl-64 md:pt-0">
      <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
