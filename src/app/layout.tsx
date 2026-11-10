import { Geist, Instrument_Serif } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const description = site.intro;

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#2c2924",
};

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.headline}`,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "software engineer",
    "product builder",
    "AI",
    "data",
    "sports analytics",
  ],
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  openGraph: {
    title: site.name,
    description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${geistSans.variable} ${instrumentSerif.variable} min-h-full scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-svh flex-col bg-background font-sans text-foreground"
      >
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
          >
            Skip to content
          </a>
          <Header />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
