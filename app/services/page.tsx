export const metadata = { title: "Services" };

export default function Services() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {["Consulting", "Implementation", "Support"].map((s) => (
          <div key={s} className="card">
            <h3 className="text-xl font-semibold">{s}</h3>
            <p className="mt-2 text-gray-600">
              Briefly describe your {s.toLowerCase()} offering and the value it brings.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
