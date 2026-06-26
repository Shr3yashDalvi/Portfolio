export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Data Analyst and Testing Intern",
    company: "Orionsoft Tech Services Pvt. Ltd.",
    location: "Pune, India (Remote)",
    period: "Jan 2026 - Feb 2026",
    highlights: [
      "Performed detailed data analytics and quality assurance testing on production datasets.",
      "Identified 15+ database anomalies and helped improve overall data quality metrics by 20%.",
      "Implemented robust Python and SQL-based validation scripts executing checks across 50,000+ active records.",
      "Prepared comprehensive issues reports and collaborated with the engineering team to implement corrective actions."
    ]
  }
];
