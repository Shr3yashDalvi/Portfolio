import React, { useState, useEffect, useRef } from "react";
import { Mail, Github, Phone, Award, Linkedin, Code } from "lucide-react";
import BackgroundWord from "./BackgroundWord";

export default function Contact() {
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "────────────────────────────",
    "Welcome to my portfolio terminal! 👋",
    "────────────────────────────",
    "",
    "I'd love to hear from you.",
    "Fill in your details to get in touch.",
    "",
    "Step 1 → name      Your Name",
    "Step 2 → email     your@email.com",
    "Step 3 → message   Your message here",
    "Step 4 → send",
    "",
    "Type 'help' anytime for all commands.",
    ""
  ]);
  const [inputValue, setInputValue] = useState<string>("contact"); // pre-populate or empty, empty is fine
  useEffect(() => {
    // Keep input empty initially so they can type or see the prompt
    setInputValue("");
  }, []);

  const [theme, setTheme] = useState<string>("light");
  const historyEndRef = useRef<HTMLDivElement>(null);
  
  // State machine for interactive contact wizard
  const [wizardStep, setWizardStep] = useState<"idle" | "name" | "email" | "message">("idle");
  const [wizardData, setWizardData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const addLine = (line: string) => {
    setTerminalHistory((prev) => [...prev, line]);
  };

  const handleCommand = (cmdStr: string) => {
    const rawCmd = cmdStr.trim();
    
    // If in contact wizard mode, handle step-by-step inputs
    if (wizardStep !== "idle") {
      addLine(`guest@shreyash:~$ ${rawCmd}`);
      
      if (rawCmd.toLowerCase() === "exit") {
        setWizardStep("idle");
        addLine("Interactive session terminated. Returned to command mode.");
        setInputValue("");
        return;
      }

      if (wizardStep === "name") {
        if (!rawCmd) {
          addLine("Error: Name cannot be empty. Please enter your name:");
          return;
        }
        setWizardData((prev) => ({ ...prev, name: rawCmd }));
        setWizardStep("email");
        addLine(`Hello, ${rawCmd}. Please enter your email:`);
      } else if (wizardStep === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(rawCmd)) {
          addLine("Error: Invalid email format. Please enter your email (e.g. user@domain.com):");
          return;
        }
        setWizardData((prev) => ({ ...prev, email: rawCmd }));
        setWizardStep("message");
        addLine("Email recorded. Please enter your message:");
      } else if (wizardStep === "message") {
        if (!rawCmd) {
          addLine("Error: Message cannot be empty. Please enter your message:");
          return;
        }
        const finalData = { ...wizardData, message: rawCmd };
        addLine("Ingesting message packets...");
        addLine("---------------------------------------------");
        addLine(`FROM: ${finalData.name} <${finalData.email}>`);
        addLine(`BODY: ${finalData.message}`);
        addLine("---------------------------------------------");
        addLine("Message successfully transmitted to Shreyash! (Simulation)");
        addLine("Thank you for reaching out. I'll get back to you shortly.");
        
        // Reset wizard
        setWizardStep("idle");
        setWizardData({ name: "", email: "", message: "" });
      }
      setInputValue("");
      return;
    }

    // Normal command processing
    const parts = rawCmd.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    addLine(`guest@shreyash:~$ ${cmdStr}`);

    switch (cmd) {
      case "":
        break;
      case "help":
        addLine("Available commands:");
        addLine("  whoami          - Quick overview of Shreyash");
        addLine("  skills          - Lists principal engineering technologies");
        addLine("  projects        - Prints details of featured case studies");
        addLine("  contact         - Starts step-by-step interactive message wizard");
        addLine("  clear           - Clears terminal logs");
        addLine("  theme <name>    - Changes CLI design theme (light, matrix, dracula, cyberpunk)");
        addLine("  exit/abort      - Stops current prompt wizard");
        break;
      case "whoami":
        addLine("Shreyash Dalvi | Software & Systems Developer");
        addLine("B.Tech IT student specializing in Python, SQL, FastAPI, NextJS, and ML.");
        addLine("Endurance athlete, sports record holder, and systems builder.");
        break;
      case "skills":
        addLine("Technical Core:");
        addLine("  Languages: Python, C++, SQL");
        addLine("  Backend:   FastAPI, REST APIs, JWT, SQLAlchemy, Alembic");
        addLine("  Frontend:  React, TypeScript, Next.js, Streamlit");
        addLine("  Databases: PostgreSQL, MySQL, SQLite");
        addLine("  Data/ML:   pandas, NumPy, scikit-learn, NLP, Data Validation");
        addLine("  Cloud:     AWS EC2, S3, IAM, Lambda, RDS, CloudWatch, Docker");
        break;
      case "projects":
        addLine("Featured Projects:");
        addLine("  1. Movie Seat Reservation system (race-condition-safe async FastAPI + Postgres)");
        addLine("  2. Full-Stack Authentication template (JWT, react, sqlite, bcrypt checks)");
        addLine("  3. NLP Spam Classifier (pandas, Streamlit prediction interface)");
        addLine("  Type 'contact' to trigger message logs!");
        break;
      case "contact":
        setWizardStep("name");
        addLine("Starting contact wizard (type 'exit' to cancel).");
        addLine("Please enter your name:");
        break;
      case "clear":
        setTerminalHistory([]);
        break;
      case "theme":
        const targetTheme = args[0] ? args[0].toLowerCase() : "";
        if (targetTheme === "cyberpunk") {
          setTheme("cyberpunk");
          addLine("Theme changed to Cyberpunk (Yellow/Cyan).");
        } else if (targetTheme === "matrix") {
          setTheme("matrix");
          addLine("Theme changed to Matrix (Green).");
        } else if (targetTheme === "dracula") {
          setTheme("dracula");
          addLine("Theme changed to Dracula (Purple/Pink).");
        } else if (targetTheme === "light") {
          setTheme("light");
          addLine("Theme changed to Light Minimal Console.");
        } else {
          addLine("Usage: theme [light | matrix | dracula | cyberpunk]");
        }
        break;
      default:
        addLine(`Command not recognized: '${cmd}'. Type 'help' for options.`);
    }

    setInputValue("");
  };

  const getThemeClasses = () => {
    switch (theme) {
      case "cyberpunk":
        return {
          bg: "bg-[#0b0b02] border-[#f4e04d]/20",
          text: "text-[#f4e04d]",
          input: "text-[#f4e04d] caret-[#4ddbf4]",
          prompt: "text-[#4ddbf4]",
          headerBg: "bg-[#141405] border-b border-[#f4e04d]/20",
          headerText: "text-[#f4e04d]/60",
          accentText: "text-[#4ddbf4]",
          inputRowBg: "bg-black/30 border-t border-[#f4e04d]/10"
        };
      case "dracula":
        return {
          bg: "bg-[#1a1824] border-[#bd93f9]/20",
          text: "text-[#f8f8f2]",
          input: "text-[#f8f8f2] caret-[#ff79c6]",
          prompt: "text-[#50fa7b]",
          headerBg: "bg-[#211e2e] border-b border-[#bd93f9]/20",
          headerText: "text-[#bd93f9]/60",
          accentText: "text-[#ff79c6]",
          inputRowBg: "bg-black/30 border-t border-[#bd93f9]/10"
        };
      case "matrix":
        return {
          bg: "bg-[#040705] border-[#10B981]/20",
          text: "text-[#10B981]",
          input: "text-[#10B981] caret-white",
          prompt: "text-white/80",
          headerBg: "bg-[#070b08] border-b border-[#10B981]/20",
          headerText: "text-[#10B981]/60",
          accentText: "text-white",
          inputRowBg: "bg-black/30 border-t border-[#10B981]/10"
        };
      case "light":
      default:
        return {
          bg: "bg-white border-black/[0.10] shadow-[0_20px_50px_rgba(0,0,0,0.10)]",
          text: "text-[#111111]/80",
          input: "text-[#111111] caret-[#4F3FF0]",
          prompt: "text-[#4F3FF0] font-bold",
          headerBg: "bg-[#f5f5f5] border-b border-black/[0.08]",
          headerText: "text-[#555555] font-semibold",
          accentText: "text-[#4F3FF0]",
          inputRowBg: "bg-[#FAFAFA] border-t border-black/[0.08]"
        };
    }
  };

  const currentTheme = getThemeClasses();

  return (
    <section id="contact" className="relative py-24 z-10 overflow-hidden bg-[#FAFAFA] border-t border-black/5">
      {/* Background Layered Outline Text */}
      <BackgroundWord 
        word="CONNECT" 
        className="bottom-[10%] right-[5%] text-[15vw]" 
        strokeWidth="thick" 
      />

      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 glow-spot-indigo opacity-10 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F3FF0]" />
            <span className="text-xs font-mono tracking-widest text-[#4F3FF0] uppercase">07 / Open Transmission Ports</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] font-sans">
            Say it in the Terminal
          </h2>
          <p className="text-sm text-[#111111]/55 mt-2 font-sans max-w-xl text-left">
            Submit a message directly to Shreyash via the custom CLI terminal or click links below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Direct Channels Cards (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between text-left">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-[#111111] font-sans">Direct Connections</h3>
              
              <a
                href="mailto:shreyashdalvi2005@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md hover:bg-black/[0.01] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#4F3FF0]/10 border border-[#4F3FF0]/20 flex items-center justify-center text-[#4F3FF0]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">Email Direct</h4>
                  <p className="text-xs text-[#111111]/55 mt-0.5">shreyashdalvi2005@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919028535227"
                className="flex items-center gap-4 p-4 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md hover:bg-black/[0.01] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#4F3FF0]/10 border border-[#4F3FF0]/20 flex items-center justify-center text-[#4F3FF0]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">Phone Port</h4>
                  <p className="text-xs text-[#111111]/55 mt-0.5">+91 9028535227</p>
                </div>
              </a>

              <a
                href="https://github.com/Shr3yashDalvi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md hover:bg-black/[0.01] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center text-[#111111]/80">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">GitHub Port</h4>
                  <p className="text-xs text-[#111111]/55 mt-0.5">Inspect Repositories</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/shreyash-dalvi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md hover:bg-black/[0.01] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#4F3FF0]/10 border border-[#4F3FF0]/20 flex items-center justify-center text-[#4F3FF0]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">LinkedIn Port</h4>
                  <p className="text-xs text-[#111111]/55 mt-0.5">Professional Network</p>
                </div>
              </a>

              <a
                href="https://leetcode.com/u/shreyash-dalvi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md hover:bg-black/[0.01] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-black/5 border border-black/10 flex items-center justify-center text-[#111111]/80">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">LeetCode Port</h4>
                  <p className="text-xs text-[#111111]/55 mt-0.5">Problem Solving Metrics</p>
                </div>
              </a>
            </div>

            <div className="p-5 border border-[#4F3FF0]/20 bg-[#4F3FF0]/5 rounded-2xl flex gap-3">
              <Award className="w-5 h-5 text-[#4F3FF0] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono font-bold text-[#4F3FF0] uppercase tracking-wider">GWR Status</h4>
                <p className="text-[11px] text-[#111111]/70 mt-1 leading-relaxed">Guinness World Record credentials verified on-chain. Resilient systems design backed by physical focus.</p>
              </div>
            </div>
          </div>

          {/* Interactive Terminal (Right) */}
          <div className="lg:col-span-7 flex flex-col items-start w-full">
            <div className={`w-full rounded-[22px] border ${currentTheme.bg} overflow-hidden flex flex-col font-mono text-xs transition-colors duration-300 min-h-[360px] max-h-[430px] max-w-[850px] shadow-[0_20px_50px_rgba(0,0,0,0.10)]`}>
              {/* Header Bar */}
              <div className={`flex items-center justify-between px-5 py-3 ${currentTheme.headerBg}`}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E0746A]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E0B860]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6FBF80]" />
                </div>
                <div className={`${currentTheme.headerText} text-[10px] font-mono`}>
                  guest@shreyash — contact
                </div>
                <div className="w-10" />
              </div>

              {/* Console Logs */}
              <div className="flex-1 py-6 px-7 overflow-y-auto max-h-[300px] flex flex-col gap-1 select-text text-left">
                {terminalHistory.map((line, idx) => (
                  <div key={idx} className={`${currentTheme.text} leading-relaxed`}>
                    {line}
                  </div>
                ))}
                <div ref={historyEndRef} />
              </div>

              {/* Input Row */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommand(inputValue);
                }}
                className={`flex items-center gap-1.5 px-6 py-3.5 ${currentTheme.inputRowBg}`}
              >
                <span className={`${currentTheme.prompt}`}>guest@shreyash:~$</span>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className={`flex-1 bg-transparent border-none outline-none font-mono text-xs ${currentTheme.input}`}
                  placeholder={
                    wizardStep === "name"
                      ? "name your_name"
                      : wizardStep === "email"
                      ? "email your@email.com"
                      : wizardStep === "message"
                      ? "message your message here"
                      : "Type 'contact' or 'help'..."
                  }
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

