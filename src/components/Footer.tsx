import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Breed", href: "/about-breed" },
  { label: "Our Dogs", href: "/our-dogs" },
  { label: "Puppies", href: "/puppies" },
  { label: "Health", href: "/health" },
  { label: "Apply", href: "/apply" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#2D2016] text-[#FDF6EE]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl text-[#B87333]">
              Goose River Canine Co.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#FDF6EE]/80">
              Breeding intelligence, heart, and companionship on the banks of
              the Goose River.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-[#B87333]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FDF6EE]/70 transition-colors hover:text-[#B87333]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-[#B87333]">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#FDF6EE]/70">
              <li>
                <a
                  href="mailto:hello@gooserivercanine.com"
                  className="transition-colors hover:text-[#B87333]"
                >
                  hello@gooserivercanine.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="transition-colors hover:text-[#B87333]"
                >
                  (555) 123-4567
                </a>
              </li>
              <li>Goose River Valley</li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#B87333]"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#B87333]"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FDF6EE]/10 py-6 text-center text-xs text-[#FDF6EE]/50">
        &copy; 2026 Goose River Canine Co. All rights reserved.
      </div>
    </footer>
  );
}
