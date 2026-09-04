import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TOTC collects, uses and protects personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <h1 className="display-md font-semibold text-ink">Privacy Policy</h1>
      <p>
        This page is a placeholder. The Figma file this site was built from has
        no privacy frame, and the footer links to it, so it exists here to keep
        every link in the design reachable.
      </p>
      <h2>What we collect</h2>
      <p>
        Account details you provide when registering, the classes you join, and
        basic usage data used to keep the service running.
      </p>
      <h2>How we use it</h2>
      <p>
        To operate your classes, keep your account secure, and improve the
        product. We do not sell personal information.
      </p>
      <h2>Your choices</h2>
      <p>
        You can request a copy of your data or ask for your account to be
        deleted at any time.
      </p>
    </>
  );
}
