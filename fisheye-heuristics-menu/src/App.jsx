import { useState } from "react";
import {
  Eye,
  Puzzle,
  RefreshCcw,
  ShieldCheck,
  AlertTriangle,
  Undo2,
  SlidersHorizontal,
  ScanSearch,
  FileText,
  HelpCircle,
} from "lucide-react";
import "./App.css";

const heuristics = [
  {
    id: "UH#1",
    title: "Visibility of system status",
    description: "The system should always keep users informed about what is going on.",
    icon: Eye,
  },
  {
    id: "UH#2",
    title: "Match between system and real world",
    description: "Use familiar language, concepts, and real-world conventions.",
    icon: Puzzle,
  },
  {
    id: "UH#3",
    title: "User control and freedom",
    description: "Users need clear exits, undo, and redo options.",
    icon: Undo2,
  },
  {
    id: "UH#4",
    title: "Consistency and standards",
    description: "Users should not wonder whether different words or actions mean the same thing.",
    icon: RefreshCcw,
  },
  {
    id: "UH#5",
    title: "Error prevention",
    description: "Good design prevents problems before they happen.",
    icon: ShieldCheck,
  },
  {
    id: "UH#6",
    title: "Recognition rather than recall",
    description: "Make options visible so users do not have to remember information.",
    icon: ScanSearch,
  },
  {
    id: "UH#7",
    title: "Flexibility and efficiency of use",
    description: "Support both beginner users and experienced users through shortcuts.",
    icon: SlidersHorizontal,
  },
  {
    id: "UH#8",
    title: "Aesthetic and minimalist design",
    description: "Interfaces should not contain unnecessary or distracting information.",
    icon: FileText,
  },
  {
    id: "UH#9",
    title: "Help users recognize and recover from errors",
    description: "Error messages should explain the problem and suggest a solution.",
    icon: AlertTriangle,
  },
  {
    id: "UH#10",
    title: "Help and documentation",
    description: "Provide clear help that is easy to search and focused on user tasks.",
    icon: HelpCircle,
  },
];

function App() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Human Computer Interaction</p>
        <h1>Fisheye Menu Guide</h1>
        <p className="subtitle">
          Interactive guide to Nielsen’s 10 usability heuristics.
        </p>
      </section>

      <section className="menu-card">
        <div className="fisheye-menu">
          {heuristics.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === index;

            return (
              <button
                key={item.id}
                className={`menu-item ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
                onFocus={() => setActiveItem(index)}
                onBlur={() => setActiveItem(null)}
                onClick={() => setActiveItem(index)}
              >
                <div className="icon-wrap">
                  <Icon size={isActive ? 44 : 28} strokeWidth={1.8} />
                </div>

                <span className="heuristic-id">{item.id}</span>

                <div className="details">
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <p className="note">
        Hover, tab, or click any item to enlarge it and reveal the heuristic details.
      </p>
    </main>
  );
}

export default App;