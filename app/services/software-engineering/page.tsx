export const metadata = { title: "Software Engineering" };

import ServiceIcon from "@/components/ServiceIcon";

const services = [
	{
		title: "Custom web applications",
		desc: "Tailored web platforms to digitize and streamline your unique business processes.",
		examples: [
			"Developed a custom project management portal for a global engineering firm",
			"Built a secure client dashboard for real-time project tracking",
			"Created a workflow automation tool for document approvals",
		],
	},
	{
		title: "Engineering dashboards & reporting platforms",
		desc: "Interactive dashboards for real-time data visualization and actionable insights.",
		examples: [
			"Deployed a live SCADA data dashboard for a manufacturing client",
			"Implemented KPI reporting for energy usage and cost savings",
			"Integrated multi-source data into a unified executive dashboard",
		],
	},
	{
		title: "Workflow automation tools",
		desc: "Automate repetitive engineering and business tasks to boost productivity.",
		examples: [
			"Automated timesheet and resource allocation for engineering teams",
			"Streamlined compliance reporting with scheduled automation",
			"Built a notification system for maintenance scheduling",
		],
	},
	{
		title: "AI-assisted data analysis",
		desc: "Leverage artificial intelligence to extract value and trends from complex datasets.",
		examples: [
			"Implemented anomaly detection for sensor data streams",
			"Built a predictive model for equipment failure analysis",
			"Automated root cause analysis for operational incidents",
		],
	},
	{
		title: "Machine learning models for operational insights",
		desc: "Predictive and prescriptive analytics for smarter decision-making.",
		examples: [
			"Deployed ML models for energy consumption forecasting",
			"Built a recommendation engine for process optimization",
			"Implemented predictive maintenance for industrial assets",
		],
	},
	{
		title: "Predictive analytics for infrastructure systems",
		desc: "Anticipate failures and optimize maintenance with advanced analytics.",
		examples: [
			"Provided outage prediction for utility networks",
			"Developed asset health scoring for infrastructure planning",
			"Enabled risk-based maintenance scheduling",
		],
	},
	{
		title: "Anomaly detection & event intelligence",
		desc: "Detect unusual patterns and events for improved reliability and safety.",
		examples: [
			"Real-time event monitoring for critical infrastructure",
			"Alerting system for abnormal operational conditions",
			"Automated incident classification and escalation",
		],
	},
	{
		title: "Cloud-based engineering platforms",
		desc: "Scalable, secure cloud solutions for engineering collaboration and data management.",
		examples: [
			"Migrated legacy engineering tools to a secure cloud environment",
			"Built a multi-tenant platform for remote engineering teams",
			"Integrated cloud storage for project documentation and CAD files",
		],
	},
];

export default function SoftwareEngineering() {
	return (
		<div className="space-y-8 max-w-3xl mx-auto py-8">
			<h1 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">
				Software Engineering
			</h1>
			<p className="text-lg text-slate-700 dark:text-slate-200">
				Custom software platforms, data systems, and AI-enabled tools that improve
				engineering workflows and operational insight.
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
