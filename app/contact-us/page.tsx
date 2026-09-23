import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Skillvard International LLP for course, payment and support enquiries.",
};

export default function ContactUsPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="Contact Us"
      summary="Contact Skillvard about programmes, enrolment, payments, refunds or learner support."
    >
      <section>
        <h2>Business details</h2>
        <p><strong>{siteConfig.legalName}</strong></p>
        <p>LLPIN: {siteConfig.llpin}</p>
        <p>
          {siteConfig.address.linesEn.map((line) => (
            <span className="block" key={line}>{line}</span>
          ))}
        </p>
      </section>

      <section>
        <h2>Customer support</h2>
        <p>
          Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />
          Phone: <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a><br />
          WhatsApp: <a href={`https://wa.me/${siteConfig.whatsappNumber}`}>{siteConfig.phone}</a>
        </p>
        <p>
          Please include the learner’s name and, for payment matters, the payment reference.
          Do not send card numbers, UPI PINs, passwords or one-time passwords.
        </p>
      </section>

      <section>
        <h2>Response time</h2>
        <p>
          We generally acknowledge support enquiries within 2 working days. Payment and
          refund investigations can take longer where confirmation from a bank, payment
          gateway or finance provider is required.
        </p>
      </section>
    </LegalPage>
  );
}
