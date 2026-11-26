export type IconName =
  | "github"
  | "linkedin"
  | "email";

export const site = {
  name: "Hao-Quan Liu",
  title: "M.S. Student in Computer Science @ NTU",
  bio: "My work centers on LLM-based agents, covering multi-agent retrieval, MCP servers, and interaction-based scam website detection. My other focus is deep learning for financial time series classification.",
  status: {
    text: "Looking for internships",
    available: true,
  } as { text: string; available: boolean } | undefined,
  location: "Taipei, Taiwan",
  socials: [
    { label: "GitHub", href: "https://github.com/hqn21", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/haoquanliu", icon: "linkedin" },
    { label: "Email", href: "mailto:haoquan291@gmail.com", icon: "email" },
  ] satisfies { label: string; href: string; icon: IconName }[],
  affiliation: "National Taiwan University",
  url: "https://haoquan.me",
  description:
    "Hao-Quan Liu is an M.S. student in Computer Science at National Taiwan University, working on LLM-based agents and deep learning for financial time series.",
};