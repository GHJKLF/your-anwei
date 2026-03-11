import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | AquaBLADE Support",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
