import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goose River Canine Co. — Border Collie Goldendoodle Puppies",
  description:
    "Goose River Canine Co. breeds exceptional Border Collie Goldendoodle puppies — intelligent, affectionate, and family-raised with comprehensive health testing. Apply for our waitlist today.",
  openGraph: {
    title: "Goose River Canine Co.",
    description:
      "Exceptional Border Collie Goldendoodle puppies — intelligent, affectionate, and family-raised.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
