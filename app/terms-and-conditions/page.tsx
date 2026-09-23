import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms governing enrolment in and use of Skillvard educational services.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      summary="These terms govern your access to Skillvard courses, mentoring, learning support and related services."
    >
      <section>
        <h2>1. About Skillvard</h2>
        <p>
          Skillvard is operated by {siteConfig.legalName}, an Indian limited liability
          partnership registered under LLPIN {siteConfig.llpin}. References to
          “Skillvard”, “we”, “us” and “our” mean {siteConfig.legalName}.
        </p>
      </section>

      <section>
        <h2>2. Eligibility and enrolment</h2>
        <p>
          You must provide accurate information when making an enquiry, enrolling or
          paying for a service. A learner under 18 must act through, or with the consent
          of, a parent or lawful guardian. Enrolment is confirmed only after the stated
          fee or agreed initial payment is received and we issue confirmation.
        </p>
      </section>

      <section>
        <h2>3. Educational services</h2>
        <p>
          The scope, schedule, duration, mode of delivery and inclusions of each course
          or support programme are those communicated on the relevant page, brochure,
          payment link or enrolment confirmation. Course schedules, mentors and learning
          materials may be reasonably updated while preserving the programme’s core
          learning outcome.
        </p>
        <p>
          Skillvard provides educational guidance and support. Unless expressly stated,
          enrolment does not guarantee examination results, admission, certification or
          employment. Learners remain responsible for attendance, assignments, official
          registrations and compliance with the rules of the relevant examining body.
        </p>
      </section>

      <section>
        <h2>4. Fees and payments</h2>
        <p>
          Fees are displayed or communicated before payment. Payments may be collected
          through an authorised payment gateway or a payment link. The gateway may apply
          its own terms, security checks and transaction limits. We do not store complete
          card, bank-account or UPI credentials.
        </p>
        <p>
          EMI, cardless EMI and pay-later facilities are supplied by third-party banks or
          finance providers. Eligibility, interest, down payment, tenure, repayment and
          approval are determined by that provider. Selecting an EMI facility creates a
          separate repayment obligation between the customer and the provider; Skillvard
          is not the lender.
        </p>
      </section>

      <section>
        <h2>5. Learner responsibilities</h2>
        <ul>
          <li>Use course access and materials only for personal learning.</li>
          <li>Do not copy, sell, publish or share protected materials or login access.</li>
          <li>Behave respectfully in classes, groups and one-to-one interactions.</li>
          <li>Do not misuse the website, interfere with its operation or attempt unauthorised access.</li>
        </ul>
        <p>
          We may restrict access for serious or repeated misuse after providing reasonable
          notice, except where immediate action is necessary for safety or security.
        </p>
      </section>

      <section>
        <h2>6. Cancellations and refunds</h2>
        <p>
          Cancellations and refunds are governed by our{` `}
          <a href="/cancellation-and-refund">Cancellation and Refund Policy</a>, which
          forms part of these terms.
        </p>
        <p>
          Government, examination-board, registration, application, certification and
          other statutory or third-party fees paid on a learner’s behalf are
          non-refundable once paid or remitted. Skillvard service charges, including
          counselling, application assistance, document processing, onboarding,
          mentoring, academic support and related administration, are also non-refundable.
        </p>
      </section>

      <section>
        <h2>7. Intellectual property</h2>
        <p>
          The website, branding, original course materials, recordings, graphics and
          written content are owned by or licensed to Skillvard. Enrolment gives the
          learner a limited, personal, non-transferable right to use the materials for the
          period and purpose communicated for the programme.
        </p>
      </section>

      <section>
        <h2>8. Liability</h2>
        <p>
          To the extent permitted by law, Skillvard is not responsible for indirect or
          consequential loss, third-party platform interruptions, or events beyond our
          reasonable control. Nothing in these terms excludes rights or remedies that
          cannot lawfully be excluded under applicable consumer law.
        </p>
      </section>

      <section>
        <h2>9. Governing law</h2>
        <p>
          These terms are governed by the laws of India. Subject to applicable consumer
          dispute-resolution rights, courts having jurisdiction in Kozhikode, Kerala will
          have jurisdiction over disputes.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Questions about these terms can be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {` `}or raised using the details on our <a href="/contact-us">Contact Us page</a>.
        </p>
      </section>
    </LegalPage>
  );
}
