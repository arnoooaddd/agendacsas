import { Link } from "react-router-dom";
import { usePageTitle, useMetaDescription, useCanonical } from "@/hooks/usePageTitle";

const Eula = () => {
  usePageTitle("End-User License Agreement — OpenClaw Accounting Connector");
  useMetaDescription("End-User License Agreement for the OpenClaw Accounting Connector, a private single-user tool operated by Agendac (SASU).");
  useCanonical("/eula");

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", maxWidth: 760, margin: "0 auto", padding: "48px 24px", lineHeight: 1.7, color: "#111" }}>
      <p><Link to="/" style={{ color: "#0074D4" }}>← Home</Link></p>
      <h1>End-User License Agreement — OpenClaw Accounting Connector</h1>
      <p><strong>Effective date:</strong> 6 July 2026</p>

      <p>This End-User License Agreement ("Agreement") governs use of the OpenClaw Accounting Connector (the "Application"), operated by Agendac (SASU), 734 route de Vesonne, 74210 Faverges-Seythenex, France ("we", "us"). By installing, connecting, or using the Application, the user ("you") agrees to this Agreement. The Application is a private, single-user internal tool; it is not distributed to or licensed to third parties.</p>

      <h2>1. License</h2>
      <p>We grant you a personal, non-transferable, non-exclusive, revocable license to use the Application solely to access your own QuickBooks Online company for internal accounting purposes.</p>

      <h2>2. Permitted use</h2>
      <p>You may use the Application only to view, organize, categorize, and manage your own accounting data. You must comply with Intuit's applicable terms and with all applicable laws.</p>

      <h2>3. Restrictions</h2>
      <p>You may not: (a) use the Application to access data you are not authorized to access; (b) resell, sublicense, or distribute the Application; (c) use it for any unlawful purpose; or (d) attempt to circumvent its security or the security of the QuickBooks Online API.</p>

      <h2>4. Data</h2>
      <p>Use of QuickBooks data through the Application is described in our <Link to="/privacy-policy" style={{ color: "#0074D4" }}>Privacy Policy</Link>. You are responsible for the accuracy of any changes you make to your accounting records through the Application.</p>

      <h2>5. No warranty</h2>
      <p>The Application is provided "as is", without warranties of any kind, express or implied, including fitness for a particular purpose. We do not warrant that it will be error-free or uninterrupted. The Application does not provide accounting, tax, or financial advice.</p>

      <h2>6. Limitation of liability</h2>
      <p>To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages, or for any loss of data or profits, arising from use of the Application.</p>

      <h2>7. Termination</h2>
      <p>This license terminates automatically if you breach it, or when you disconnect the Application from your Intuit account. On termination you must stop using the Application.</p>

      <h2>8. Contact</h2>
      <p>Questions about this Agreement: <a href="mailto:arnaud@agendac.fr">arnaud@agendac.fr</a></p>

      <footer style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #eee", color: "#666", fontSize: 14 }}>© 2026 Agendac.</footer>
    </main>
  );
};

export default Eula;