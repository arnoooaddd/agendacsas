import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const WEBHOOK_URL = "https://hook.eu2.make.com/e1pevadma4ungfo4o2b6duo8j1phwmqn";
const STORAGE_KEY = "phone_webhook_triggered";

const PhoneWebhookTrigger = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const p = params.get("p");
    if (!p) return;

    const digits = p.replace(/\D/g, "");
    if (!digits) return;

    const phone = digits.startsWith("+") ? digits : `+${digits}`;

    try {
      const already = sessionStorage.getItem(STORAGE_KEY);
      if (already === phone) return;
      sessionStorage.setItem(STORAGE_KEY, phone);
    } catch {
      // ignore storage errors
    }

    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
      keepalive: true,
    }).catch((err) => {
      console.error("Phone webhook trigger failed", err);
    });
  }, [location.search]);

  return null;
};

export default PhoneWebhookTrigger;