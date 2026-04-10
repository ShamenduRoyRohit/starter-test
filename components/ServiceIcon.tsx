import { ReactNode } from "react";

export default function ServiceIcon({ name }: { name: string }) {
  // Map service names to heroicons or emoji for demo purposes
  switch (name) {
    case "Electrical system design":
      return <span role="img" aria-label="design" className="text-2xl mr-2">🛠️</span>;
    case "Power system studies":
      return <span role="img" aria-label="power" className="text-2xl mr-2">⚡</span>;
    case "Protection & coordination":
      return <span role="img" aria-label="protection" className="text-2xl mr-2">🛡️</span>;
    case "Commissioning support":
      return <span role="img" aria-label="support" className="text-2xl mr-2">🤝</span>;
    case "Industrial electrification":
      return <span role="img" aria-label="industry" className="text-2xl mr-2">🏭</span>;
    case "Technical due diligence":
      return <span role="img" aria-label="review" className="text-2xl mr-2">🔍</span>;
    case "Custom web applications":
      return <span role="img" aria-label="web" className="text-2xl mr-2">💻</span>;
    case "Engineering dashboards & reporting platforms":
      return <span role="img" aria-label="dashboard" className="text-2xl mr-2">📊</span>;
    case "Workflow automation tools":
      return <span role="img" aria-label="automation" className="text-2xl mr-2">🤖</span>;
    case "AI-assisted data analysis":
      return <span role="img" aria-label="ai" className="text-2xl mr-2">🧠</span>;
    case "Machine learning models for operational insights":
      return <span role="img" aria-label="ml" className="text-2xl mr-2">📈</span>;
    case "Predictive analytics for infrastructure systems":
      return <span role="img" aria-label="predictive" className="text-2xl mr-2">🔮</span>;
    case "Anomaly detection & event intelligence":
      return <span role="img" aria-label="anomaly" className="text-2xl mr-2">🚨</span>;
    case "Cloud-based engineering platforms":
      return <span role="img" aria-label="cloud" className="text-2xl mr-2">☁️</span>;
    case "Data integration pipelines":
      return <span role="img" aria-label="pipeline" className="text-2xl mr-2">🔗</span>;
    case "Operational reporting systems":
      return <span role="img" aria-label="reporting" className="text-2xl mr-2">📑</span>;
    case "Digital engineering workflows":
      return <span role="img" aria-label="workflow" className="text-2xl mr-2">📝</span>;
    case "Infrastructure monitoring tools":
      return <span role="img" aria-label="monitoring" className="text-2xl mr-2">🖥️</span>;
    case "Cross-system interoperability":
      return <span role="img" aria-label="interoperability" className="text-2xl mr-2">🔄</span>;
    case "End-to-end technical solution design":
      return <span role="img" aria-label="solution" className="text-2xl mr-2">🧩</span>;
    case "Project planning and scheduling":
      return <span role="img" aria-label="planning" className="text-2xl mr-2">🗓️</span>;
    case "Resource allocation and coordination":
      return <span role="img" aria-label="resource" className="text-2xl mr-2">📦</span>;
    case "Risk management and mitigation":
      return <span role="img" aria-label="risk" className="text-2xl mr-2">⚠️</span>;
    case "Stakeholder communication":
      return <span role="img" aria-label="communication" className="text-2xl mr-2">📣</span>;
    case "Progress tracking and reporting":
      return <span role="img" aria-label="tracking" className="text-2xl mr-2">⏱️</span>;
    case "Quality assurance":
      return <span role="img" aria-label="quality" className="text-2xl mr-2">✅</span>;
    default:
      return <span className="text-2xl mr-2">🔷</span>;
  }
}
