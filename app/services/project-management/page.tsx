export const metadata = { title: "Project Management Office (PMO) Services" };

import Link from "next/link";

export default function ProjectManagement() {
	return (
		<div className="flex flex-col gap-12 max-w-5xl mx-auto py-8">
			{/* Hero Section (simple, no image) */}
			<section
				className="rounded-2xl p-8 md:p-16 text-white relative overflow-hidden mb-8"
				style={{
					backgroundImage: `url('/images/project.avif')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="relative z-10 flex flex-col gap-4">
					<h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
						Client-ready PMO and asset management webpages.
					</h1>
					<p className="text-lg text-emerald-100 mb-2">
						Stronger project delivery and asset management for industrial
						environments.
						<br />
						Choose a focus area below to explore our PMO and Asset Management
						services.
					</p>
				</div>
			</section>

			{/* PMO & Asset Options */}
			<section className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
				<Link
					href="/services/project-management/asset"
					className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border-2 border-emerald-100"
				>
					<h2 className="text-2xl font-bold mb-2 text-emerald-900">
						Asset Management
					</h2>
					<p className="text-slate-700 text-center mb-4">
						Asset registers, maintenance routines, and lifecycle controls for
						reliable project delivery and operational performance.
					</p>
					<span className="mt-auto inline-block bg-emerald-700 text-white font-bold px-5 py-2 rounded-full shadow hover:bg-emerald-800 transition">
						Explore Asset
					</span>
				</Link>
				<Link
					href="/services/project-management/pmo"
					className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform border-2 border-emerald-100"
				>
					<h2 className="text-2xl font-bold mb-2 text-emerald-900">
						PMO Services
					</h2>
					<p className="text-slate-700 text-center mb-4">
						Project controls, risk management, and lean delivery support for
						capital projects, shutdowns, and upgrades.
					</p>
					<span className="mt-auto inline-block bg-emerald-700 text-white font-bold px-5 py-2 rounded-full shadow hover:bg-emerald-800 transition">
						Explore PMO
					</span>
				</Link>
			</section>
		</div>
	);
}
