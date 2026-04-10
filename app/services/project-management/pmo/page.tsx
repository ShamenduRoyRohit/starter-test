// Renders the static HTML from public/pmo.html as-is, using dangerouslySetInnerHTML
import fs from "fs";
import path from "path";

export const metadata = { title: "PMO Services" };

export default function PMOPage() {
  // Read the HTML file at build time
  let html = fs.readFileSync(
    path.join(process.cwd(), "app/services/project-management/pmo/pmo.html"),
    "utf8"
  );
  // Remove Rizwan Advisory header and footer
  html = html.replace(/<header[\s\S]*?<\/header>/, "");
  html = html.replace(/<footer[\s\S]*?<\/footer>/, "");
  // Update Request Consultation mailto link
  html = html.replace(
    /<a([^>]*?)href=["']mailto:info@example.com["']([^>]*?)>(\s*Request Consultation\s*)<\/a>/g,
    '<a$1href="mailto:support@ishpath.com"$2>$3<\/a>'
  );
  // Update View Asset Management link to Next.js route
  html = html.replace(
    /<a([^>]*?)href=["']asset.html["']([^>]*?)>(\s*View Asset Management\s*)<\/a>/g,
    '<a$1href="/services/project-management/asset"$2>$3<\/a>'
  );
  return (
    <div className="prose max-w-none w-full mx-auto">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
