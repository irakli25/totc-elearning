import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TOTC — Studying online is now much easier",
    template: "%s — TOTC",
  },
  description:
    "TOTC is an interesting platform that will teach you in more an interactive way. Virtual classrooms, live lessons and course management in one place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
