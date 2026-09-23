import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Skillvard collects, uses and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="This policy explains the information we collect and how we use it while providing educational services."
    >
      <section>
        <h2>1. Who controls your information</h2>
        <p>
          {siteConfig.legalName}, LLPIN {siteConfig.llpin}, is responsible for personal
          information collected through this website, enquiries and enrolments.
        </p>
      </section>

      <section>
        <h2>2. Information we collect</h2>
        <ul>
          <li>Name, age or date of birth, and parent or guardian details where applicable.</li>
          <li>Phone number, email address, postal address and preferred language.</li>
          <li>Course enquiries, educational details, enrolment records and communications.</li>
          <li>Payment status, amount, transaction reference and invoice information.</li>
          <li>Website usage information such as device, browser, pages visited and referral source.</li>
        </ul>
        <p>
          Payment credentials are processed by our authorised payment provider. We do not
          receive or store complete card numbers, bank login details, UPI PINs or lender KYC
          credentials entered directly in the provider’s checkout.
        </p>
      </section>

      <section>
        <h2>3. How we use information</h2>
        <ul>
          <li>Respond to enquiries and recommend suitable programmes.</li>
          <li>Process enrolments, payments, receipts, support and refunds.</li>
          <li>Deliver classes, mentoring, materials and service communications.</li>
          <li>Maintain records, prevent fraud and comply with legal obligations.</li>
          <li>Improve our website, programmes and customer experience.</li>
          <li>Send promotional messages only where permitted; you may opt out at any time.</li>
        </ul>
      </section>

      <section>
        <h2>4. When information is shared</h2>
        <p>
          We may share the minimum necessary information with tutors and service staff,
          hosting and communication providers, analytics services, payment gateways,
          banks or finance providers selected by you, professional advisers, and public
          authorities where legally required. These parties process information for the
          relevant service or legal purpose and are not authorised to use it for unrelated purposes.
        </p>
      </section>

      <section>
        <h2>5. Retention and security</h2>
        <p>
          Information is retained only for as long as needed to provide services, resolve
          disputes, meet accounting and legal requirements, and protect legitimate
          business interests. We use reasonable administrative and technical safeguards,
          but no internet transmission or storage system can be guaranteed completely secure.
        </p>
      </section>

      <section>
        <h2>6. Your choices and rights</h2>
        <p>
          You may ask to access or correct your information, withdraw optional consent,
          stop promotional communications, or request deletion where retention is not
          legally required. We may need to verify the requester before acting.
        </p>
      </section>

      <section>
        <h2>7. Children’s information</h2>
        <p>
          Where a learner is under 18, a parent or lawful guardian should make the
          enrolment and provide the required consent. We use a minor learner’s information
          only to deliver and administer the requested educational service.
        </p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>
          For a privacy request, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {` `}or use the information on our <a href="/contact-us">Contact Us page</a>.
        </p>
      </section>
    </LegalPage>
  );
}
