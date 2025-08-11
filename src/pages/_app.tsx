import { type AppType } from "next/dist/shared/lib/utils";
import localFont from "next/font/local";
import "~/styles/globals.css";

const redHat = localFont({
  src: [
    {
      path: "../../public/fonts/RedHatDisplay.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={redHat.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
