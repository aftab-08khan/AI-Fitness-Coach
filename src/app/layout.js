import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/themeContext";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700"],
  display: "swap",
});
export const metadata = {
  title: "AI Fitness Coach",
  description: "AA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
