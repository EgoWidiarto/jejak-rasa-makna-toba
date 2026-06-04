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

export const robotoMedium = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-roboto-medium",
});

export const robotoLight = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-roboto-light",
});

export const poppinsRegular = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poppins-regular",
});

export const poppinsItalic = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins/Poppins-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-poppins-italic",
});
