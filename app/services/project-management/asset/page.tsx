// Renders the static HTML from public/asset.html as-is, using dangerouslySetInnerHTML
import fs from "fs";
import path from "path";

export const metadata = { title: "Asset Management" };

export default function AssetPage() {
  // Read the HTML file at build time
  let html = fs.readFileSync(
    path.join(process.cwd(), "app/services/project-management/asset/asset.html"),
    "utf8"
  );
  // Remove Rizwan Advisory header and footer
  html = html.replace(/<header[\s\S]*?<\/header>/, "");
  html = html.replace(/<footer[\s\S]*?<\/footer>/, "");
  // Update View PMO Services link to Next.js route
  html = html.replace(
    /<a([^>]*?)href=["']pmo.html["']([^>]*?)>(\s*View PMO Services\s*)<\/a>/g,
    '<a$1href="/services/project-management/pmo"$2>$3<\/a>'
  );
  return (
    <div className="prose max-w-none w-full mx-auto">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
