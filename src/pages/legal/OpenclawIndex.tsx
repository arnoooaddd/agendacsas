import { Link } from "react-router-dom";
import { usePageTitle, useMetaDescription, useCanonical } from "@/hooks/usePageTitle";

const OpenclawIndex = () => {
  usePageTitle("OpenClaw Accounting Connector — Legal");
  useMetaDescription("Legal documents for the OpenClaw Accounting Connector, operated by Agendac (SASU).");
  useCanonical("/openclaw");

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", maxWidth: 760, margin: "0 auto", padding: "48px 24px", lineHeight: 1.7, color: "#111" }}>
      <h1>OpenClaw Accounting Connector</h1>
      <p>Legal documents for the OpenClaw Accounting Connector, a private single-user internal tool operated by Agendac (SASU).</p>
      <ul>
        <li><Link to="/privacy-policy" style={{ color: "#0074D4" }}>Privacy Policy</Link></li>
        <li><Link to="/eula" style={{ color: "#0074D4" }}>End-User License Agreement (EULA)</Link></li>
      </ul>
      <footer style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #eee", color: "#666", fontSize: 14 }}>© 2026 Agendac.</footer>
    </main>
  );
};

export default OpenclawIndex;