import localFont from "next/font/local";
import "../globals.css";
import "swagger-ui-react/swagger-ui.css";
import "components/swagger/swagger-dark.css";

const helpFont = localFont({
  src: "../public/fonts/Estedad-FD[KSHD,wght].ttf",
  display: "swap",
  preload: true,
  variable: "--help-font",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${helpFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}