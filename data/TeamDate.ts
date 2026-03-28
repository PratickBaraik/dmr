export type TeamMember = {
  id: number;
  name: string;
  title: string;
  responsibilities: string[];
  image: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Prakashit Kujur",
    title: "Brand Owner",
    responsibilities: [
      "Defines brand vision and strategic direction",
      "Oversees cross-functional alignment and decisions",
      "Drives partnerships, growth, and long-term positioning",
    ],
    image: "/team/member1.jpg",
  },
  {
    id: 2,
    name: "Pratick Baraik",
    title: "Tech Head",
    responsibilities: [
      "Leads platform architecture and system design",
      "Ensures code quality, scalability, and performance",
      "Drives development workflows and technical innovation",
    ],
    image: "/team/member2.jpg",
  },
  {
    id: 3,
    name: "Akash Panna",
    title: "Sales & Marketing Head",
    responsibilities: [
      "Develops marketing strategies and outreach campaigns",
      "Manages lead generation and conversion pipelines",
      "Builds brand presence through digital and offline channels",
    ],
    image: "/team/member3.jpg",
  },
  {
    id: 4,
    name: "Prashant Kujur",
    title: "Account Manager",
    responsibilities: [
      "Handles financial planning and budget tracking",
      "Maintains client and stakeholder relationships",
      "Ensures operational efficiency and resource allocation",
    ],
    image: "/team/member4.jpg",
  },
];
