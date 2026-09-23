import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shipping and Exchange Policy",
  description: "Delivery terms for Skillvard digital educational services.",
};

export default function ShippingAndExchangePage() {
  return (
    <LegalPage
      eyebrow="Service delivery"
      title="Shipping and Exchange Policy"
      summary="Skillvard primarily supplies educational services and digital learning support rather than shippable goods."
    >
      <section>
        <h2>1. No physical shipping</h2>
        <p>
          Skillvard’s current programmes are educational services delivered through
          classes, mentoring, communication channels and digital materials. No physical
          product is shipped unless a programme description expressly says otherwise.
          Consequently, conventional shipping, return and product-exchange terms do not
          apply to these services.
        </p>
      </section>

      <section>
        <h2>2. Digital delivery and onboarding</h2>
        <p>
          After successful payment and enrolment verification, onboarding or access
          instructions are ordinarily sent to the phone number, WhatsApp account or email
          address provided by the customer within 2 working days. The class start date and
          schedule are communicated separately for cohort-based programmes.
        </p>
      </section>

      <section>
        <h2>3. Missing access</h2>
        <p>
          If you have paid but have not received confirmation or access within the stated
          period, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
          call <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phone}</a> with the
          learner’s name and payment reference.
        </p>
      </section>

      <section>
        <h2>4. Batch or programme changes</h2>
        <p>
          A request to move to another available batch or programme is reviewed according
          to seat availability, progress already made, fee difference and the terms
          communicated for that programme. Such a change is not a physical-product exchange.
        </p>
      </section>
    </LegalPage>
  );
}
