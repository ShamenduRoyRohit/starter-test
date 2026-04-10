"use client";

import { useState } from "react";
import ServiceIcon from "@/components/ServiceIcon";

const services = [
	{
		title: "Data integration pipelines",
		desc: "Connect and automate data flows between engineering, operations, and business systems.",
		examples: [
			"Integrated SCADA and ERP systems for a manufacturing client",
			"Automated data transfer between field devices and cloud analytics",
			"Unified multiple data sources for a city infrastructure dashboard",
		],
	},
	{
		title: "Operational reporting systems",
		desc: "Centralized reporting for real-time monitoring and performance tracking.",
		examples: [
			"Deployed real-time reporting for a water utility",
			"Built custom reports for energy consumption and cost analysis",
			"Enabled automated compliance reporting for a regulated industry",
		],
	},
	{
		title: "Digital engineering workflows",
		desc: "Streamline engineering processes with digital tools and automation.",
		examples: [
			"Digitized approval workflows for engineering change orders",
			"Automated document management for a construction project",
			"Implemented digital punch lists for field teams",
		],
	},
	{
		title: "Infrastructure monitoring tools",
		desc: "Continuous monitoring for critical infrastructure health and reliability.",
		examples: [
			"Installed remote monitoring for substations and switchgear",
			"Developed a dashboard for real-time asset health monitoring",
			"Enabled predictive alerts for infrastructure failures",
		],
	},
	{
		title: "Cross-system interoperability",
		desc: "Ensure seamless communication and data exchange between diverse platforms.",
		examples: [
			"Integrated legacy PLCs with modern cloud platforms",
			"Enabled data exchange between multiple vendor systems",
			"Built APIs for cross-departmental data sharing",
		],
	},
	{
		title: "End-to-end technical solution design",
		desc: "Comprehensive design and delivery of integrated technical solutions.",
		examples: [
			"Delivered a turnkey automation solution for a logistics center",
			"Designed and implemented a full-stack IoT monitoring system",
			"Provided system architecture for a multi-site industrial upgrade",
		],
	},
];

export default function SystemsIntegration() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	return (
		<div className="space-y-8 max-w-3xl mx-auto py-8">
			<h1 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">
				Systems Integration
			</h1>
			<p className="text-lg text-slate-700 dark:text-slate-200">
				Connecting engineering systems and digital platforms into practical, usable
				solutions.
			</p>
			<div className="space-y-4">
				{services.map((item, idx) => (
					<div
						key={item.title}
						className="rounded-xl border border-emerald-100 bg-white shadow dark:bg-slate-900 dark:border-emerald-900"
					>
						<button
							onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
							className="w-full flex items-center justify-between p-5 focus:outline-none"
							aria-expanded={openIndex === idx}
						>
							<span className="flex items-center gap-2 text-lg font-semibold text-emerald-800 dark:text-emerald-300">
								<ServiceIcon name={item.title} />
								{item.title}
							</span>
							<span className="ml-4 text-emerald-600 text-2xl">
								{openIndex === idx ? "-" : "+"}
							</span>
						</button>
						{openIndex === idx && (
							<div className="px-5 pb-5">
								<p className="mt-2 text-slate-600 dark:text-slate-400">
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
						)}
					</div>
				))}
			</div>
		</div>
	);
}
