import { useState } from 'react';
import Header from "../components/header-select"
import Level from "../components/level";

interface QuestData {
  id: number;
  name: string;
  desc: string;
  xp: number;
}

interface BossBattleData {
  id: number;
  name: string;
  xp: number;
  desc: string;
}

interface LevelData {
  id: string;
  title: string;
  subtitle: string;
  xp: number;
  quests: QuestData[];
  bossBattles: BossBattleData[];
  rewards: string[];
}

const pythonLevels: LevelData[] = [
  {
    id: "level1",
    title: "Level 1: Python Novice",
    subtitle: "The First Script",
    xp: 500,
    quests: [
      {
        id: 1,
        name: "\"Hello World!\" Genesis (100 XP)",
        desc: "Write your first Python program that prints 'Hello, World!'.",
        xp: 100
      },
      {
        id: 2,
        name: "Variable Vault (150 XP)",
        desc: "Declare and use variables of different data types.",
        xp: 150
      },
      {
        id: 3,
        name: "Calculator Capers (150 XP)",
        desc: "Write a script to perform basic arithmetic operations.",
        xp: 150
      },
      {
        id: 4,
        name: "Storyteller Script (100 XP)",
        desc: "Create a script that tells a personalized story based on user input.",
        xp: 100
      },
    ],
    bossBattles: [{
      id: 101,
      name: "Personalized Greeting App (200 XP)",
      xp: 200,
      desc: "Ask name, age, hobby & greet user with it."
    }],
    rewards: [
      "Syntax Savant Badge",
      "First Script Success"
    ]
  },
  {
    id: "level2",
    title: "Level 2: Control Flow Commander",
    subtitle: "Logic Labyrinth",
    xp: 1000,
    quests: [
      { id: 5, name: "Decision Maker (300 XP)", desc: "Use if/elif/else to respond to user input.", xp: 300 },
      { id: 6, name: "Loop de Loop (350 XP)", desc: "Use for and while loops for repetition.", xp: 350 }
    ],
    bossBattles: [{ id: 102, name: "Guess the Number Game (400 XP)", xp: 400, desc: "Create a number guessing game with hints." }],
    rewards: [
      "Logic Master Title",
      "Loop Virtuoso"
    ]
  },
  {
    id: "level3",
    title: "Level 3: Function & Structure Architect",
    subtitle: "Code Constructor",
    xp: 1500,
    quests: [
      { id: 7, name: "Function Forge (500 XP)", desc: "Define and call functions with parameters and returns.", xp: 500 },
    ],
    bossBattles: [{ id: 103, name: "Text-Based Adventure Game (600 XP)", xp: 600, desc: "Create an adventure game using functions and dictionaries." }],
    rewards: [
      "Modular Maestro Certificate",
      "Bug Buster Badge"
    ]
  },
  {
    id: "level4",
    title: "Level 4: Object-Oriented Engineer",
    subtitle: "Class Constructor",
    xp: 2000,
    quests: [
      { id: 8, name: "Class Creator (700 XP)", desc: "Define classes with attributes and methods.", xp: 700 },
    ],
    bossBattles: [{ id: 104, name: "Mini-CRM System (800 XP)", xp: 800, desc: "Create a contact manager using classes and file storage." }],
    rewards: [
      "Object Oracle Achievement",
      "Code Reusability Master"
    ]
  },
  {
    id: "level5",
    title: "Level 5: Data & Automation Alchemist",
    subtitle: "Digital Dynamo",
    xp: 2500,
    quests: [
      { id: 9, name: "Data Explorer (800 XP)", desc: "Work with CSVs and perform data aggregations.", xp: 800 },
    ],
    bossBattles: [{ id: 105, name: "Automated Report Generator (1000 XP)", xp: 1000, desc: "Analyze CSV data and generate a text report." }],
    rewards: [
      "Data Architect Title",
      "Automation Ace"
    ]
  },
  {
    id: "level6",
    title: "Level 6: Web Weaver & API Explorer",
    subtitle: "Internet Innovator",
    xp: 3000,
    quests: [
      { id: 10, name: "Web Framework Fundamentals (1000 XP)", desc: "Set up a simple Flask/Django web app.", xp: 1000 },
    ],
    bossBattles: [{ id: 106, name: "Simple CRUD Web Application (1200 XP)", xp: 1200, desc: "Create a blog/task app with full CRUD." }],
    rewards: [
      "Deployment Wizard Achievement",
      "API Conqueror"
    ]
  },
  {
    id: "level7",
    title: "Level 7: Problem Solver & Beyond",
    subtitle: "The Grand Master",
    xp: 3500,
    quests: [
      { id: 11, name: "Algorithm Ace (1000 XP)", desc: "Solve classic algorithm problems.", xp: 1000 },
    ],
    bossBattles: [{ id: 107, name: "The Grand Pythoneer's Capstone(1500 XP)", xp: 1500, desc: "Choose and complete a large project from 4 options." }],
    rewards: [
      "Master Pythoneer Legend",
      "Algorithm Alchemist Badge",
      "Certified Code Crafter"
    ]
  }
];


function PythonRoadmapPage() {
  const [activeLevelId, setActiveLevelId] = useState(pythonLevels[0].id);

  const activeLevel = pythonLevels.find(level => level.id === activeLevelId);

  const currentProgress = 30;

  if (!activeLevel) {
    return <div className="text-white text-center p-8">Level not found.</div>;
  }

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
<Header/>
      <div className="flex justify-between items-center bg-zinc-800 rounded-lg p-1 mb-6 shadow-md overflow-x-auto">
        {pythonLevels.map(level => (
          <button
            key={level.id}
            onClick={() => setActiveLevelId(level.id)}
            className={`
                            flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors duration-200 whitespace-nowrap
                            ${activeLevelId === level.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-700'
              }
                        `}
          >
            {level.title}
          </button>
        ))}
      </div>



      <div className='flex flex-col w-full py-10 px-20'>
        <h1 className="text-4xl font-bold mb-6 text-[#021FA0]">
          {activeLevel.title.split(':')[1]?.trim() || activeLevel.title}
        </h1>
        <Level
          subtitle={activeLevel.subtitle}
          xp={activeLevel.xp}
          quests={activeLevel.quests}
          bossBattles={activeLevel.bossBattles}
          rewards={activeLevel.rewards}
          progressValue={currentProgress}
        />
      </div>
    </div>
  );
}

export default PythonRoadmapPage
