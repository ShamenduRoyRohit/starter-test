export const metadata = { title: "Services" };

export default function Services() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card">
            <h3 className="text-xl font-semibold">Software Engineering</h3>
            <p className="mt-2 text-gray-600">
              We develop bespoke enterprise software solutions that streamline your business processes and enhance productivity.
            </p>
        </div>
        <div className="card">
            <h3 className="text-xl font-semibold">Systems Integration</h3>
            <p className="mt-2 text-gray-600">
              Our experts specialize in integrating SCADA with various industrial protocols and hardware, enhancing system interoperability and performance.
            </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Electrical Engineering</h3>
          <p className="mt-2 text-gray-600">
              We offer comprehensive maintenance and support services to ensure the optimal performance and reliability of your SCADA systems.
          </p>
        </div>
      </div>
    </div>
      
  );
}
