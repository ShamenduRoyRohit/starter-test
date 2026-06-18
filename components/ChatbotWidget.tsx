"use client";
import { useEffect } from "react";

const ENV_ID = process.env.NEXT_PUBLIC_CHATBOT_ENVIRONMENT_ID ?? "";

export default function ChatbotWidget() {
  useEffect(() => {
    if (!ENV_ID) {
      console.warn("NEXT_PUBLIC_CHATBOT_ENVIRONMENT_ID not set; chatbot will not load.");
      return;
    }

    if (typeof window === "undefined") return;

    // create a container that providers sometimes expect to be present
    let container = document.getElementById("customerconnect-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "customerconnect-container";
      // keep it empty — provider will fill or render its launcher separately
      container.style.minHeight = "0";
      container.style.minWidth = "0";
      document.body.appendChild(container);
    }

    // avoid double-inject
    if (document.getElementById("chatbot")) return;

    // targeted error handler: suppress transient `contentWindow` null errors from provider script
    const onError = (ev: ErrorEvent) => {
      try {
        const msg = String(ev?.message || "");
        if (msg.includes("contentWindow") && msg.includes("null")) {
          // prevent noise in console; do not swallow other errors
          ev.preventDefault();
          console.warn("Suppressed transient provider error:", msg);
        }
      } catch (e) {
        // ignore
      }
    };
    window.addEventListener("error", onError);

    const loadScript = () => {
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js";
      s.id = "chatbot";
      s.setAttribute("environmentId", ENV_ID);
      s.crossOrigin = "anonymous";

      s.onload = () => {
        console.log("Microsoft CustomerConnect script loaded");
      };
      s.onerror = (e) => {
        console.error("Failed to load Microsoft CustomerConnect script", e);
      };

      document.body.appendChild(s);
    };

    // slight delay so container is settled in the DOM before provider runs
    const t = window.setTimeout(loadScript, 120);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("error", onError);
      const existing = document.getElementById("microsoft-chatbot-script");
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
      const cont = document.getElementById("customerconnect-container");
      if (cont && cont.parentNode) cont.parentNode.removeChild(cont);
    };
  }, []);

  return null;
}