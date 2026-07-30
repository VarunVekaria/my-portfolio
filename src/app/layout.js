import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://my-portfolio-varun-vekaria.vercel.app"),
  title: "Varun Vekaria — AI Engineer & Full-Stack Developer",
  description:
    "AI Engineer building agentic systems end to end: MCP servers, vectorless RAG engines, LLM-as-judge evaluation, and full-stack products shipped to real users.",
  keywords: [
    "Varun Vekaria",
    "AI Engineer",
    "Agentic AI",
    "MCP server",
    "RAG",
    "LLM evaluation",
    "Full-Stack Developer",
    "Rutgers",
  ],
  authors: [{ name: "Varun Vekaria" }],
  openGraph: {
    title: "Varun Vekaria — AI Engineer & Full-Stack Developer",
    description:
      "Agent harnesses, retrieval engines, and the eval loops that prove they work. MS CS, Rutgers Class of 2026 graduate speaker.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
