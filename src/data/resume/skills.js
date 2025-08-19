// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  // Testing Skills
  {
    title: "Functional Testing",
    competency: 5,
    category: ["Testing"],
  },
  {
    title: "API Testing",
    competency: 5,
    category: ["Testing"],
  },
  {
    title: "Cypress Automation",
    competency: 4,
    category: ["Testing"],
  },
  {
    title: "Manual Testing",
    competency: 5,
    category: ["Testing"],
  },
  {
    title: "Devices UI/UX Testing",
    competency: 5,
    category: ["Testing"],
  },
  {
    title: "Performance Testing",
    competency: 4,
    category: ["Testing"],
  },
  // Languages
  {
    title: "TypeScript",
    competency: 4,
    category: ["Languages"],
  },
  {
    title: "JavaScript",
    competency: 4,
    category: ["Languages"],
  },
  {
    title: "Python",
    competency: 3,
    category: ["Languages"],
  },
  {
    title: "HTML",
    competency: 4,
    category: ["Languages"],
  },
  {
    title: "CSS",
    competency: 4,
    category: ["Languages"],
  },
  {
    title: "SQL",
    competency: 3,
    category: ["Languages"],
  },
  // Tools
  {
    title: "Jira",
    competency: 4,
    category: ["Tools"],
  },
  {
    title: "Cypress",
    competency: 4,
    category: ["Tools"],
  },
  {
    title: "GraphQL",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Splunk",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Datadog",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "GitLab",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Swagger",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Postman",
    competency: 4,
    category: ["Tools"],
  },
  {
    title: "Locust",
    competency: 2,
    category: ["Tools"],
  },
  {
    title: "Tableau",
    competency: 2,
    category: ["Tools"],
  },
  {
    title: "Salesforce",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Visual Studio",
    competency: 2,
    category: ["Tools"],
  },
  {
    title: "Cursor",
    competency: 3,
    category: ["Tools"],
  },
  {
    title: "Pendo Guide",
    competency: 2,
    category: ["Tools"],
  },
  {
    title: "Umbra",
    competency: 2,
    category: ["Tools"],
  },
  // Basic Knowledge
  {
    title: "CI/CD Pipelines",
    competency: 2,
    category: ["Basic Knowledge"],
  },
  {
    title: "Artifactory",
    competency: 2,
    category: ["Basic Knowledge"],
  },
  {
    title: "Python",
    competency: 2,
    category: ["Basic Knowledge"],
  },
  {
    title: "Playwright",
    competency: 2,
    category: ["Basic Knowledge"],
  },
  {
    title: "JMeter",
    competency: 2,
    category: ["Basic Knowledge"],
  },
  {
    title: "AWS",
    competency: 2,
    category: ["Basic Knowledge"],
  },
  {
    title: "Salesforce",
    competency: 2,
    category: ["Basic Knowledge"],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  "#6968b3",
  "#37b1f5",
  "#40494e",
  "#515dd4",
  "#e47272",
  "#cc7b94",
  "#3896e2",
  "#c3423f",
  "#d75858",
  "#747fff",
  "#64cb7b",
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
