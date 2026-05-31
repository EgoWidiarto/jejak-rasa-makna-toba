import localFont from "next/font/local";

export const atziluth = localFont({
  src: [
    {
      path: "../../public/fonts/Atziluth/Atziluth Script.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-atziluth",
});

export const robotoBold = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto-bold",
});
