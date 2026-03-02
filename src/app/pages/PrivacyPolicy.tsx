import { Link } from "react-router-dom";

export function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 text-gray-300">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">
            Effective Date: March 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <p className="text-gray-400">
              Finni AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website heyfinni.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Account information (name, email address, password)</li>
              <li>Financial information you choose to connect or input</li>
              <li>Communications and support requests</li>
              <li>Survey responses and feedback</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
            <p className="mt-4">
              We also automatically collect certain information when you visit our website, such as your IP address, browser type, device information, and usage data through cookies and similar technologies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. How We Use Your Data
            </h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Personalize your experience and deliver relevant content</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address fraud and security issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. Third-Party Services
            </h2>
            <p className="mb-4">
              We use trusted third-party services to operate our platform:
            </p>
            <ul className="space-y-3 text-gray-400">
              <li>
                <strong className="text-gray-300">Supabase:</strong> We use Supabase for database storage, authentication, and backend infrastructure. Supabase processes and stores your account data and application information. You can review Supabase&apos;s privacy practices at{" "}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  supabase.com/privacy
                </a>
                .
              </li>
              <li>
                <strong className="text-gray-300">Gemini AI:</strong> We use Google&apos;s Gemini AI to power intelligent features within our services. Data processed by Gemini AI is subject to Google&apos;s privacy policy. You can learn more at{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  policies.google.com/privacy
                </a>
                .
              </li>
            </ul>
            <p className="mt-4">
              These services may have their own privacy policies governing how they handle your data. We encourage you to review their policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect and track information about your use of our website. Cookies help us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Keep you signed in</li>
              <li>Remember your preferences</li>
              <li>Understand how you interact with our services</li>
              <li>Improve our website performance</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              5. Your Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong className="text-gray-300">Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong className="text-gray-300">Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong className="text-gray-300">Deletion:</strong> Request deletion of your personal data</li>
              <li><strong className="text-gray-300">Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong className="text-gray-300">Opt-out:</strong> Opt out of marketing communications and certain data processing</li>
              <li><strong className="text-gray-300">Object:</strong> Object to processing of your data in certain circumstances</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:company@heyfinni.com"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                company@heyfinni.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              7. Data Retention
            </h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately at{" "}
              <a
                href="mailto:company@heyfinni.com"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                company@heyfinni.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the &quot;Effective Date&quot; at the top. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="mt-4 p-6 rounded-lg bg-slate-900/50 border border-cyan-500/20">
              <p className="font-semibold text-white">Finni AI</p>
              <p>Website:{" "}
                <a
                  href="https://heyfinni.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  heyfinni.com
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:company@heyfinni.com"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  company@heyfinni.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
