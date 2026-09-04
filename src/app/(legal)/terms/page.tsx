import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that apply when you use TOTC.",
};

export default function TermsPage() {
  return (
    <>
      <h1 className="display-md font-semibold text-ink">Terms &amp; Conditions</h1>
      <p>
        This page is a placeholder. The Figma file this site was built from has
        no terms frame, and the footer links to it, so it exists here to keep
        every link in the design reachable.
      </p>
      <h2>Using TOTC</h2>
      <p>
        You are responsible for the classes you run and the content you upload,
        and for keeping your account credentials private.
      </p>
      <h2>Billing</h2>
      <p>
        Paid plans renew monthly until cancelled. Cancelling stops the next
        renewal and leaves access in place until the period ends.
      </p>
      <h2>Changes</h2>
      <p>
        We will give notice before making material changes to these terms or to
        the pricing of an active plan.
      </p>
    </>
  );
}
