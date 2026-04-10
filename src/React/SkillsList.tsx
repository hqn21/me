import React, { useState } from "react";

const CategoryIcons = {
  "Agentic AI": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M184 120C184 89.1 209.1 64 240 64L264 64C281.7 64 296 78.3 296 96L296 544C296 561.7 281.7 576 264 576L232 576C202.2 576 177.1 555.6 170 528C169.3 528 168.7 528 168 528C123.8 528 88 492.2 88 448C88 430 94 413.4 104 400C84.6 385.4 72 362.2 72 336C72 305.1 89.6 278.2 115.2 264.9C108.1 252.9 104 238.9 104 224C104 179.8 139.8 144 184 144L184 120zM456 120L456 144C500.2 144 536 179.8 536 224C536 239 531.9 253 524.8 264.9C550.5 278.2 568 305 568 336C568 362.2 555.4 385.4 536 400C546 413.4 552 430 552 448C552 492.2 516.2 528 472 528C471.3 528 470.7 528 470 528C462.9 555.6 437.8 576 408 576L376 576C358.3 576 344 561.7 344 544L344 96C344 78.3 358.3 64 376 64L400 64C430.9 64 456 89.1 456 120z"/>
    </svg>
  ),
  "Application Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M208 64C172.7 64 144 92.7 144 128L144 512C144 547.3 172.7 576 208 576L432 576C467.3 576 496 547.3 496 512L496 128C496 92.7 467.3 64 432 64L208 64zM280 480L360 480C373.3 480 384 490.7 384 504C384 517.3 373.3 528 360 528L280 528C266.7 528 256 517.3 256 504C256 490.7 266.7 480 280 480z"/>
    </svg>
  ),
  "AI Trading": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M544 72C544 58.7 533.3 48 520 48L418.2 48C404.9 48 394.2 58.7 394.2 72C394.2 85.3 404.9 96 418.2 96L462.1 96L350.8 207.3L255.7 125.8C246.7 118.1 233.5 118.1 224.5 125.8L112.5 221.8C102.4 230.4 101.3 245.6 109.9 255.6C118.5 265.6 133.7 266.8 143.7 258.2L240.1 175.6L336.5 258.2C346 266.4 360.2 265.8 369.1 256.9L496.1 129.9L496.1 173.8C496.1 187.1 506.8 197.8 520.1 197.8C533.4 197.8 544.1 187.1 544.1 173.8L544 72zM112 320C85.5 320 64 341.5 64 368L64 528C64 554.5 85.5 576 112 576L528 576C554.5 576 576 554.5 576 528L576 368C576 341.5 554.5 320 528 320L112 320zM159.3 376C155.9 396.1 140.1 412 119.9 415.4C115.5 416.1 111.9 412.5 111.9 408.1L111.9 376.1C111.9 371.7 115.5 368.1 119.9 368.1L151.9 368.1C156.3 368.1 160 371.7 159.2 376.1zM159.3 520.1C160 524.5 156.4 528.1 152 528.1L120 528.1C115.6 528.1 112 524.5 112 520.1L112 488.1C112 483.7 115.6 480 120 480.8C140.1 484.2 156 500 159.4 520.2zM520 480.7C524.4 480 528 483.6 528 488L528 520C528 524.4 524.4 528 520 528L488 528C483.6 528 479.9 524.4 480.7 520C484.1 499.9 499.9 484 520.1 480.6zM480.7 376C480 371.6 483.6 368 488 368L520 368C524.4 368 528 371.6 528 376L528 408C528 412.4 524.4 416.1 520 415.3C499.9 411.9 484 396.1 480.6 375.9zM256 448C256 412.7 284.7 384 320 384C355.3 384 384 412.7 384 448C384 483.3 355.3 512 320 512C284.7 512 256 483.3 256 448z"/>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Agentic AI": [
      "LLM Agents",
      "Multi-Agent Systems",
      "Model Context Protocol (MCP) Servers",
    ],
    "Application Development": [
      "Frontend (Astro, Vue.js, Tailwind CSS)",
      "Backend (Laravel, MySQL, RESTful API Design)",
      "DevOps (CI/CD, GitHub Actions, Docker, Linux)",
      "iOS Native Apps (Swift, SwiftUI)",
    ],
    "AI Trading": [
      "Still Learning :D",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I Do
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
