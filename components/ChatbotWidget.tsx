"use client";
import { useEffect } from "react";

export default function ChatbotWidget() {
  useEffect(() => {
    // create a container for the chatbot widget
    const container = document.createElement("div");
    container.id = "chatbot-root";
    // position so it's visible by default (adjust CSS as needed)
    container.style.position = "fixed";
    container.style.bottom = "24px";
    container.style.right = "24px";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    // append the external script so it executes
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js";
    s.id = "chatbot";
    s.setAttribute("environmentId", "bf9b00bd-7dc6-e0f2-92c7-9bdc3afed4f0");
    s.crossOrigin = "anonymous";
    document.body.appendChild(s);

    return () => {
      // cleanup
      if (s.parentNode) s.parentNode.removeChild(s);
      if (container.parentNode) container.parentNode.removeChild(container);
    };
  }, []);

  return null;
}