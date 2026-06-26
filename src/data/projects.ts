export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  problem: string;
  solution: string;
  impact: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "movie-booking",
    title: "Concurrent Movie Tickets Booking Platform",
    description: "A secure, full-stack movie seat reservation system designed to handle highly concurrent booking requests safely and efficiently.",
    techStack: ["FastAPI", "Next.js", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT", "Neon"],
    problem: "Handling high-volume booking traffic where multiple users attempt to reserve the same seat simultaneously, leading to database race conditions and double bookings.",
    solution: "Designed and implemented race-condition-safe seat reservation logic using atomic SQL updates and partial unique indexes to guarantee database consistency under concurrent execution.",
    impact: "Zero duplicate seat reservations, secure session authorization with rotating HttpOnly refresh tokens, rate limiting for API protection, and real-time frontend seat status rendering.",
    highlights: [
      "Designed race-condition-safe seat reservation logic using atomic SQL updates.",
      "Utilized partial unique database indexes in PostgreSQL to prevent duplicate reservations.",
      "Implemented secure JWT authentication with rotating HttpOnly refresh tokens.",
      "Added bcrypt password hashing, Pydantic schema validation, and API rate limiting.",
      "Built a highly responsive real-time seat booking UI with tiered pricing structures and modern error handling."
    ],
    githubUrl: "https://github.com/Shr3yashDalvi/Concurrent-MovieTickets-Booking-Platform-"
  },
  {
    id: "auth-app",
    title: "Full-Stack Authentication Web App",
    description: "A production-grade, secure full-stack authentication shell featuring JWT verification, password complexity checking, and protected routes.",
    techStack: ["FastAPI", "React", "TypeScript", "SQLAlchemy", "SQLite", "JWT", "bcrypt"],
    problem: "Boilerplate auth packages can be hard to customize and secure against common threats, requiring a robust custom template for full-stack projects.",
    solution: "Developed a secure authentication system from scratch using industry-standard cryptography, HttpOnly cookie tokens, and strict server-side validation.",
    impact: "Provides a secure, reusable starter kit with built-in login, registration, password hashing (bcrypt), and front-end authentication status guards.",
    highlights: [
      "Built registration and login workflows with secure password hashing (bcrypt).",
      "Created token-protected API routes that validate user sessions on every request.",
      "Designed interactive UI checklists for password-strength checks (letters, numbers, symbols, length).",
      "Implemented client-side validation, confirm-password verifications, and auth-aware page navigation."
    ],
    githubUrl: "https://github.com/Shr3yashDalvi/Full-Stack-Authentication-Web-App-FastAPI-React-TypeScript-SQLAlchemy-JWT-"
  },
  {
    id: "spam-detector",
    title: "NLP Spam Detection System",
    description: "A machine learning system that cleans, processes, and vectorizes text messages to predict whether they are spam in real-time.",
    techStack: ["Python", "NLP", "scikit-learn", "Streamlit", "TF-IDF", "pandas"],
    problem: "Unsolicited promotional and malicious messages cluttering communications and requiring fast, scalable classification.",
    solution: "Trained a multinomial classification model using scikit-learn and processed message feeds using TF-IDF tokenization and lexical cleaning.",
    impact: "High classification accuracy deployed on a clean Streamlit interface, allowing recruiters or users to paste text and get instant, real-time predictions.",
    highlights: [
      "Preprocessed textual data by cleaning (removing stopwords/punctuation), tokenizing, and lemmatizing messages.",
      "Vectorized text inputs using TF-IDF (Term Frequency-Inverse Document Frequency) numerical representations.",
      "Trained and evaluated classification models (Naive Bayes/Logistic Regression) to detect spam.",
      "Built a simple, interactive Streamlit GUI supporting real-time text entries and prediction feedbacks."
    ],
    githubUrl: "https://github.com/Shr3yashDalvi/spam_detection"
  }
];
