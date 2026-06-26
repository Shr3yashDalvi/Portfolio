export interface Achievement {
  title: string;
  category: "Sports" | "Academic" | "General";
  description: string;
  badge?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Guinness World Record Holder",
    category: "Sports",
    description: "Participated and successfully completed a continuous 24-hour team endurance skating marathon, setting a Guinness World Record.",
    badge: "World Record"
  },
  {
    title: "National & State Level Athlete",
    category: "Sports",
    description: "Competed at national and state levels representing teams in multiple high-discipline sports including Roll Ball, Roller Hockey, and Ice Hockey.",
    badge: "National/State Level"
  },
  {
    title: "Taekwondo Practitioner",
    category: "Sports",
    description: "Trained in Taekwondo martial arts, developing strong physical coordination, focus, self-defense abilities, and mental discipline.",
    badge: "Martial Arts"
  },
  {
    title: "Endurance & Discipline Champion",
    category: "Sports",
    description: "Tested limits in multiple 12-hour and 24-hour long-distance skating endurance events, demonstrating focus and performance under physical pressure.",
    badge: "Endurance"
  }
];
