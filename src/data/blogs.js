export const blogs = [
  {
    id: 1,
    slug: "java-tutorial-basics",
    title: "Java Tutorial: Basics to Advanced",
    description: "Understand Java syntax, OOP, collections, and practical tips.",
    category: "Java",
    readingTime: 12,
    difficulty: "Beginner",
    language: "Java",
    topic: "OOP",
    updatedAt: "8 Dec, 2025",
    type: "blog",
    content: [
      { type: "heading", text: "Java Basics" },
      { type: "p", text: "Java is a high-level, object-oriented programming language used to build applications." },
      { type: "ul", items: ["Write once, run anywhere","Strongly typed","Rich standard library"] },
      { type: "heading", text: "OOP & Interfaces" },
      { type: "code", language: "java", code: "class Hello {\n  public static void main(String[] args){\n    System.out.println(\"Hello Java\");\n  }\n}" },
      { type: "heading", text: "Collections" },
      { type: "p", text: "Collections framework provides data structures like List, Set, and Map." }
    ],
    related: ["react-hooks-guide", "cpp-stl-cheatsheet"]
  },
  {
    id: 2,
    slug: "react-hooks-guide",
    title: "React Hooks Guide",
    description: "A practical guide to useState, useEffect, and custom hooks.",
    category: "React",
    readingTime: 10,
    difficulty: "Intermediate",
    language: "JavaScript",
    topic: "React",
    updatedAt: "4 Jan, 2026",
    type: "blog",
    content: [
      { type: "heading", text: "Introduction" },
      { type: "p", text: "Hooks let you use state and other React features without writing a class." },
      { type: "heading", text: "useState" },
      { type: "code", language: "javascript", code: "const [count, setCount] = useState(0);" },
      { type: "heading", text: "useEffect" },
      { type: "code", language: "javascript", code: "useEffect(() => {\n  document.title = `Count ${count}`;\n}, [count]);" }
    ],
    related: ["java-tutorial-basics"]
  },
  {
    id: 3,
    slug: "python-data-classes",
    title: "Python Data Classes Explained",
    description: "Use dataclasses for cleaner models and utilities.",
    category: "Python",
    readingTime: 8,
    difficulty: "Beginner",
    language: "Python",
    topic: "Language Features",
    updatedAt: "2 Jan, 2026",
    type: "blog",
    content: [
      { type: "heading", text: "Why Dataclasses" },
      { type: "code", language: "python", code: "from dataclasses import dataclass\n\n@dataclass\nclass User:\n    id: int\n    name: str" },
    ]
  },
  {
    id: 4,
    slug: "cpp-stl-cheatsheet",
    title: "C++ STL Cheatsheet",
    description: "Quick reference for vectors, maps, and algorithms.",
    category: "C++",
    readingTime: 7,
    difficulty: "Advanced",
    language: "C++",
    topic: "STL",
    updatedAt: "29 Dec, 2025",
    type: "note",
    content: [
      { type: "heading", text: "Vectors" },
      { type: "code", language: "cpp", code: "std::vector<int> v = {1,2,3};\nv.push_back(4);" },
      { type: "heading", text: "Maps" },
      { type: "code", language: "cpp", code: "std::map<std::string,int> m;\nm[\"a\"] = 1;" }
    ]
  },
  {
    id: 5,
    slug: "system-design-caching",
    title: "System Design: Caching Strategies",
    description: "LRU, LFU, write-through, and CDN edge caching.",
    category: "System Design",
    readingTime: 9,
    difficulty: "Intermediate",
    language: "JavaScript",
    topic: "Architecture",
    updatedAt: "1 Jan, 2026",
    type: "blog",
    content: [
      { type: "heading", text: "Overview" },
      { type: "p", text: "Caching improves latency and reduces load on origin services." },
      { type: "ul", items: ["Client vs Server caches","Invalidation strategies","Consistency"] }
    ]
  }
];
