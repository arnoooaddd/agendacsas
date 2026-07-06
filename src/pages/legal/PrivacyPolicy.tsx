import { Link } from "react-router-dom";
import { usePageTitle, useMetaDescription, useCanonical } from "@/hooks/usePageTitle";

const PrivacyPolicy = () => {
  usePageTitle("Privacy Policy — OpenClaw Accounting Connector");
  useMetaDescription("Privacy Policy for the OpenClaw Accounting Connector, a private single-user tool operated by Agendac (SASU).");
  useCanonical("/privacy-policy");

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", maxWidth: 760, margin: "0 auto", padding: "48px 24px", lineHeight: 1.7, color: "#111" }}>
      <p><Link to="/" style={{ color: "#0074D4" }}>← Home</Link></p>
      <h1>Privacy Policy — OpenClaw Accounting Connector</h1>
      <p><strong>Effective date:</strong> 6 July 2026</p>

      <p>This Privacy Policy describes how the OpenClaw Accounting Connector (the "Application") handles data. The Application is operated by Agendac (SASU), 734 route de Vesonne, 74210 Faverges-Seythenex, France ("we", "us"). The Application is a private, single-user internal tool used solely by the operator to access the operator's own QuickBooks Online company. It is not offered to, or used by, any third party.</p>

      <h2>1. Data we access</h2>
      <p>When connected to QuickBooks Online via Intuit's official OAuth 2.0 flow, the Application can read and (where enabled by the operator) write accounting records in the operator's own company, including transactions, invoices, bills, customers, vendors, accounts, items, and financial reports. It accesses only the data authorized by the granted OAuth scope (com.intuit.quickbooks.accounting).</p>

      <h2>2. How data is used</h2>
      <p>Accessed data is used only to fulfil the operator's own requests, such as viewing, summarizing, categorizing, or updating the operator's accounting records. Data is processed in-session to answer those requests. We do not sell, rent, share, or disclose QuickBooks data to any third party.</p>

      <h2>3. Artificial intelligence</h2>
      <p>The Application works with a self-hosted AI assistant used only by the operator. QuickBooks data may be passed to a large language model at the operator's request to interpret instructions and summarize the operator's own data. QuickBooks data is never used to train, fine-tune, or improve any AI model.</p>

      <h2>4. Data storage and security</h2>
      <p>The Application runs on the operator's own private server. OAuth credentials and tokens are stored locally in a file readable only by the service account (file permissions 600). QuickBooks records are not persisted beyond what is needed to answer a given request and are not copied to any external service. Access tokens are short-lived and refresh tokens are rotated automatically.</p>

      <h2>5. Data retention and deletion</h2>
      <p>The operator may revoke access at any time by disconnecting the Application from the Intuit account, after which stored tokens are deleted from the server. No QuickBooks data is retained after disconnection.</p>

      <h2>6. Data sharing</h2>
      <p>We do not share QuickBooks data with any third party. The only external party involved is Intuit, whose API provides the data, subject to Intuit's own privacy terms.</p>

      <h2>7. Changes to this policy</h2>
      <p>We may update this policy from time to time. The effective date above reflects the latest version.</p>

      <h2>8. Contact</h2>
      <p>Questions about this policy: <a href="mailto:arnaud@agendac.fr">arnaud@agendac.fr</a></p>

      <footer style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #eee", color: "#666", fontSize: 14 }}>© 2026 Agendac.</footer>
    </main>
  );
};

export default PrivacyPolicy;