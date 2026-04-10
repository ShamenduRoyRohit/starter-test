export const metadata = { title: "Electrical Engineering" };

import ServiceIcon from "@/components/ServiceIcon";

const services = [
	{
		title: "Electrical system design",
		desc: "Comprehensive design of power distribution and control systems for industrial and infrastructure projects.",
		examples: [
			"Designed LV/MV power distribution for a new manufacturing plant",
			"Upgraded electrical layouts for a hospital expansion",
			"Delivered single-line diagrams and panel schedules for a data center",
		],
	},
	{
		title: "Power system studies",
		desc: "Analysis of power flow, short circuit, and system stability to ensure safe and reliable operation.",
		examples: [
			"Performed arc flash and coordination studies for a utility substation",
			"Completed load flow and short-circuit analysis for a solar farm",
			"Provided relay settings and protection studies for industrial clients",
		],
	},
	{
		title: "Protection & coordination",
		desc: "Development of protection schemes and relay coordination for fault detection and system safety.",
		examples: [
			"Developed relay coordination for a multi-building campus",
			"Reviewed and optimized protection settings for a water treatment plant",
			"Implemented breaker coordination for critical infrastructure",
		],
	},
	{
		title: "Commissioning support",
		desc: "On-site and remote support for system commissioning, testing, and troubleshooting.",
		examples: [
			"Provided field support for commissioning a new substation",
			"Led FAT/SAT testing for control panels and switchgear",
			"Troubleshot startup issues for a process automation project",
		],
	},
	{
		title: "Industrial electrification",
		desc: "Solutions for electrifying industrial processes and integrating new technologies.",
		examples: [
			"Electrified a new production line for a food processing facility",
			"Integrated EV charging infrastructure for a logistics company",
			"Upgraded plant power for robotics and automation deployment",
		],
	},
	{
		title: "Technical due diligence",
		desc: "Independent technical reviews and risk assessments for projects and investments.",
		examples: [
			"Performed technical due diligence for a renewable energy acquisition",
			"Reviewed electrical designs for compliance and constructability",
			"Assessed risk and reliability for a critical infrastructure investment",
		],
	},
];

export default function ElectricalEngineering() {
	return (
		<div className="space-y-8 max-w-3xl mx-auto py-8">
			<h1 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">
				Electrical Engineering
			</h1>
			<p className="text-lg text-slate-700 dark:text-slate-200">
				Engineering analysis and design for reliable industrial, infrastructure,
				and energy systems.
			</p>
			<div className="grid gap-6 md:grid-cols-2">
				{services.map((item) => (
					<div
						key={item.title}
						className="rounded-xl border border-emerald-100 bg-white p-5 shadow hover:shadow-lg transition dark:bg-slate-900 dark:border-emerald-900"
					>
						<h3 className="flex items-center text-lg font-semibold text-emerald-800 dark:text-emerald-300">
							<ServiceIcon name={item.title} />
							{item.title}
						</h3>
						<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
							{item.desc}
						</p>
						{item.examples && (
							<ul className="mt-3 list-disc list-inside text-sm text-slate-700 dark:text-slate-300">
								{item.examples.map((ex) => (
									<li key={ex}>{ex}</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
