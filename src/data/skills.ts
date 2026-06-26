export interface Skill {
  name: string;
  level: number; // 0-100 for display meters
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 75 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "JWT Authentication", level: 80 },
      { name: "SQLAlchemy", level: 80 },
      { name: "Pydantic", level: 85 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Next.js", level: 75 },
      { name: "Streamlit", level: 85 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 85 },
      { name: "Data Modeling Basics", level: 75 }
    ]
  },
  {
    category: "Data & ML",
    skills: [
      { name: "pandas", level: 85 },
      { name: "NumPy", level: 80 },
      { name: "scikit-learn", level: 80 },
      { name: "NLP", level: 75 },
      { name: "EDA (Exploratory Data Analysis)", level: 80 },
      { name: "Statistical Analysis", level: 70 },
      { name: "Data Validation", level: 85 }
    ]
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: "AWS EC2", level: 75 },
      { name: "AWS S3", level: 80 },
      { name: "AWS IAM", level: 70 },
      { name: "AWS Lambda", level: 75 },
      { name: "AWS RDS", level: 75 },
      { name: "CloudWatch", level: 70 },
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Power BI", level: 75 }
    ]
  }
];
