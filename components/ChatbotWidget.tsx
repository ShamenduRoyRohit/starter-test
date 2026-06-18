"use client";
import { useEffect, useState } from "react";

// Use NEXT_PUBLIC_ prefix so the variable is available on the client
const ENV_ID = process.env.NEXT_PUBLIC_CHATBOT_ENVIRONMENT_ID ?? "";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLauncher, setShowLauncher] = useState(true);

  // helper: try to detect provider's built-in launcher
  const detectProviderLauncher = () => {
    // common heuristics: provider may inject an iframe or a div with identifiable attributes
    const btnSelectors = [
      'iframe[src*="customerconnect"]',
      'iframe[src*="onecdn"]',
      'div[id*="customerconnect"]',
      'div[class*="customerconnect"]',
      'div[class*="cc-"]',
      'div[class*="microsoft"]',
    ];
    try {
      return !!document.querySelector(btnSelectors.join(','));
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    // if provider is already present (loaded elsewhere), hide our launcher
    if (typeof window !== "undefined") {
      if (detectProviderLauncher()) setShowLauncher(false);
    }
  }, []);

  useEffect(() => {
    let s: HTMLScriptElement | null = null;
    // When the panel is opened, lazy-load the provider script so it can mount into #chatbot-root
    if (open && !document.getElementById("chatbot")) {
      if (!ENV_ID) {
        console.warn("Chatbot environment id is not set. Set NEXT_PUBLIC_CHATBOT_ENVIRONMENT_ID in your .env.local");
        return;
      }

      setLoading(true);
      s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js";
      s.id = "chatbot";
      s.setAttribute("environmentId", ENV_ID);
      s.crossOrigin = "anonymous";

      s.onload = () => {
        setLoading(false);
        // give the provider a moment to inject its UI, then detect and hide our launcher if needed
        setTimeout(() => {
          if (detectProviderLauncher()) setShowLauncher(false);
        }, 500);
      };
      s.onerror = () => {
        setLoading(false);
        console.error("Failed to load chatbot script");
      };

      document.body.appendChild(s);
    }

    return () => {
      // Remove script when component unmounts or when closed (optional)
      if (!open) {
        const existing = document.getElementById("chatbot");
        if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
        const root = document.getElementById("chatbot-root");
        if (root) root.innerHTML = "";
        // ensure we show our launcher again if provider removed
        setShowLauncher(true);
      }
    };
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="mb-3 w-[320px] md:w-[420px] h-[480px] md:h-[600px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-emerald-600 flex items-center justify-center text-white font-semibold">IS</div>
              <div className="text-sm font-medium">Chat with us</div>
            </div>
            <div className="flex items-center gap-2">
              {loading ? (
                <div className="text-xs text-slate-500">Loading…</div>
              ) : null}
              <button
                aria-label="Close chat"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-slate-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                ✕
              </button>
            </div>
          </div>

          <div id="chatbot-root" className="flex-1 bg-white dark:bg-slate-900">
            {/* Provider script will mount the widget here. If you want a fallback while loading: */}
            {loading && (
              <div className="flex h-full items-center justify-center text-sm text-slate-500">Initializing chat…</div>
            )}
            {!ENV_ID && (
              <div className="flex h-full items-center justify-center text-sm text-slate-500 p-4">Chat is not configured. Add <code>NEXT_PUBLIC_CHATBOT_ENVIRONMENT_ID</code> to your <code>.env.local</code>.</div>
            )}
          </div>

          <div className="px-3 py-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
            By using this chat you agree to our privacy policy.
          </div>
        </div>
      )}

      {showLauncher && (
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Open chat"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          {open ? (
            <span className="sr-only">Close chat</span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.8L3 21l1.8-4A7.966 7.966 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}