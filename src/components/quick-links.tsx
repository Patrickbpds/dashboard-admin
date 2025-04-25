import Link from "next/link";
import { Card, CardContent } from "./ui/card";

type Link = {
  href: string;
  text: string;
};

const links: Link[] = [
  { href: "/support", text: "How can users contact support?" },
  { href: "/faq", text: "Frequently Asked Questions about dashboard" },
  { href: "/pricing", text: "How to host the app?" },
  { href: "/features", text: "3 ways you can share your results" },
  { href: "/about", text: "How to integrate Ai to analyze feedback" },
  { href: "/contact", text: "Contact Us" },
  { href: "/terms", text: "Terms and Conditions" },
  { href: "/privacy", text: "Privacy Policy" },
];

export function QuickLinks() {
  return (
    <Card>
      <CardContent>
        <h2>Quick Links</h2>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
