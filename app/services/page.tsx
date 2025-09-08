export const metadata = { title: "Services" };

export default function Services() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card">
            <h3 className="text-xl font-semibold">Custom SCADA Development</h3>
            <p className="mt-2 text-gray-600">
              We build tailored SCADA solutions that meet your specific operational needs, ensuring seamless integration with your existing systems.
            </p>
        </div>
        <div className="card">
            <h3 className="text-xl font-semibold">System Integration</h3>
            <p className="mt-2 text-gray-600">
              Our experts specialize in integrating SCADA with various industrial protocols and hardware, enhancing system interoperability and performance.
            </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold">Cloud-Based SCADA</h3>
          <p className="mt-2 text-gray-600">
              Leverage the power of the cloud with our scalable and secure cloud-based SCADA solutions, enabling remote monitoring and control.
          </p>
        </div>
        <div className="card">
            <h3 className="text-xl font-semibold">Data Analytics & Reporting</h3>     
            <p className="mt-2 text-gray-600">
              Transform your operational data into actionable insights with our advanced analytics and reporting services.
            </p>
        </div>
        <div className="card">
            <h3 className="text-xl font-semibold">Custom Enterprise Software Solutions</h3>
            <p className="mt-2 text-gray-600">
              We develop bespoke enterprise software solutions that streamline your business processes and enhance productivity.
            </p>
        </div>
        <div className="card">
            <h3 className="text-xl font-semibold">Mobile Application Development</h3>
            <p className="mt-2 text-gray-600">
              Our team creates intuitive mobile applications that provide on-the-go access to your SCADA systems and enterprise solutions.
            </p>
        </div>
        <div className="card">
            <h3 className="text-xl font-semibold">System Maintenance & Support</h3>
            <p className="mt-2 text-gray-600">
              We offer comprehensive maintenance and support services to ensure the optimal performance and reliability of your SCADA systems.
            </p>
        </div>
        <div className="card">
            <h3 className="text-xl font-semibold">Consulting</h3>
            <p className="mt-2 text-gray-600">
              Our consulting services help you identify the best SCADA and software solutions to meet your business objectives.
            </p>
          </div>
      </div>
    </div>
      
  );
}
