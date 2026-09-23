import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cancellation and Refund Policy",
  description: "Cancellation and refund terms for Skillvard educational services.",
};

export default function CancellationAndRefundPage() {
  return (
    <LegalPage
      eyebrow="Payments"
      title="Cancellation and Refund Policy"
      summary="How cancellation, duplicate-payment and refund requests are handled for Skillvard programmes."
    >
      <section>
        <h2>1. Requesting a cancellation</h2>
        <p>
          Please contact us promptly at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          {` `}or {siteConfig.phone} with the learner’s name, programme and payment reference.
          A request is not complete until we acknowledge it.
        </p>
      </section>

      <section>
        <h2>2. Non-refundable government fees and service charges</h2>
        <p>
          Government, examination-board, registration, application, certification or
          other statutory fees paid to a government authority or third party on the
          learner’s behalf are strictly non-refundable once paid or remitted.
        </p>
        <p>
          Skillvard service charges are also non-refundable. These include charges for
          counselling, application assistance, registration support, document processing,
          onboarding, mentoring, academic support and related administrative services.
          Any refund eligibility described below applies only to the refundable portion of
          the programme fee, after excluding government fees, third-party fees and
          Skillvard service charges.
        </p>
      </section>

      <section>
        <h2>3. Refund eligibility</h2>
        <p>
          Unless a different written term was shown for the selected programme, a
          cancellation requested within 7 calendar days of payment and before course
          access, learning materials or scheduled classes have begun is eligible for a
          refund. Gateway charges or other non-recoverable third-party charges may be
          deducted where permitted and disclosed.
        </p>
        <p>
          Once digital access has been issued, materials have been supplied, or the first
          scheduled class or mentoring session has begun, fees are ordinarily
          non-refundable because delivery of the educational service has commenced.
          This does not limit remedies available for a service that was not delivered as promised.
        </p>
      </section>

      <section>
        <h2>4. Duplicate or incorrect payments</h2>
        <p>
          A verified duplicate payment or amount collected in error will be refunded in
          full to the original payment method. Please share the relevant transaction
          references so we can verify the payment.
        </p>
      </section>

      <section>
        <h2>5. Programme cancellation by Skillvard</h2>
        <p>
          If we cancel a paid programme and cannot provide a suitable replacement or
          rescheduled option, the amount paid for the undelivered service will be refunded.
        </p>
      </section>

      <section>
        <h2>6. Refund processing</h2>
        <p>
          Approved refunds are initiated to the original payment method within 7 working
          days. The bank, card issuer, UPI provider or EMI provider may take additional
          time to credit or adjust the amount. EMI and pay-later refunds are also subject
          to the finance provider’s settlement and loan-adjustment process.
        </p>
      </section>
    </LegalPage>
  );
}
