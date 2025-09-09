export const metadata = { title: "About" };

export default function Contact() {
  return (
    <div className="container-narrow space-y-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-gray-700">
        For inquiries, project proposals, or support, please reach out to us:
      </p>
      <ul className="text-gray-700 space-y-2">
        <li>
          <strong>Email:</strong> support@ishpath.com
        </li>
        <li>
          <strong>Address:</strong> Toronto, ON, Canada
        </li>
      </ul>
    </div>
  );
}
