export const blogs = [
  {
    id: 6,
    slug: "java-roadmap-2026",
    title: "Java Roadmap for Beginners to Advanced (2026 Guide)",
    description: "Follow a step-by-step Java Roadmap from basics to Spring Boot backend with projects, a 3–6 month timeline, tips, and FAQs.",
    category: "Java",
    readingTime: 18,
    difficulty: "Beginner",
    language: "Java",
    topic: "Roadmap",
    updatedAt: "20 Feb, 2026",
    type: "blog",
    metaDescription: "Follow this Java Roadmap (2026) from basics to Spring Boot backend. A clear Java learning path with projects, timeline, and FAQs.",
    content: [
      { type: "heading", text: "Introduction: Why Java Is Still a Top Skill in 2026" },
      {
        type: "p",
        text: "Java is one of the most trusted and widely used programming languages in the world—and it’s still a top career skill in 2026. It powers enterprise software, backend systems, Android apps, and large-scale platforms where stability matters. If you’re confused about how to learn Java step-by-step, this guide gives you a clear Java learning path (beginner to advanced) with phases, goals, projects, and a realistic timeline."
      },
      { type: "ul", items: [
        "Why teams choose Java: stability, performance, and a massive ecosystem",
        "Great for backend development with Spring / Spring Boot",
        "Excellent language to build strong OOP + DSA fundamentals",
        "Long-term career value in product and enterprise companies"
      ] },

      { type: "heading", text: "How to Use This Java Roadmap (The Smart Way)" },
      { type: "p", text: "Treat this Java Roadmap like a checklist. Finish one phase at a time, write code daily, and build small projects as you go. Don’t rush to frameworks—Core Java fundamentals make everything easier later." },
      { type: "ul", items: [
        "Learn one phase at a time (avoid jumping ahead)",
        "Practice 20–60 minutes daily (consistency beats intensity)",
        "Build projects to make skills real",
        "Revise basics regularly (loops, arrays, OOP)"
      ] },

      { type: "heading", text: "Phase 1: Java Basics (Foundation Level) 🟢" },
      { type: "p", text: "This phase builds your foundation. The goal is to become comfortable writing small Java programs without copying code." },
      { type: "heading", text: "1) Learn Basic Syntax" },
      { type: "ul", items: [
        "Structure of a Java program (class, main method)",
        "Printing output using System.out.println",
        "Basic input/output mindset"
      ] },
      { type: "code", language: "java", code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, Java!\");\n  }\n}" },
      { type: "heading", text: "2) Variables & Data Types" },
      { type: "ul", items: [
        "Primitive types: int, long, double, float, char, boolean",
        "Non-primitive types: String, Arrays (basic intro)",
        "Type casting basics"
      ] },
      { type: "heading", text: "3) Operators" },
      { type: "ul", items: [
        "Arithmetic: +, -, *, /, %",
        "Comparison: ==, !=, >, <, >=, <=",
        "Logical: &&, ||, !"
      ] },
      { type: "heading", text: "4) Control Statements" },
      { type: "ul", items: [
        "if / else if / else",
        "switch",
        "Loops: for, while, do-while"
      ] },
      { type: "heading", text: "5) Functions (Methods)" },
      { type: "ul", items: [
        "Method creation and calling",
        "Parameters and return types",
        "Method overloading"
      ] },
      { type: "p", text: "🎯 Goal: You should solve basic logic problems (prime check, Fibonacci, reverse number/string, patterns) and feel comfortable reading Java code." },

      { type: "heading", text: "Phase 2: Object-Oriented Programming (Core Java) 🟡" },
      { type: "p", text: "OOP is the heart of Java. Most real-world Java applications are structured around classes, objects, and clean design." },
      { type: "heading", text: "1) Classes & Objects" },
      { type: "ul", items: [
        "Create classes and objects",
        "Constructors (default + parameterized)",
        "Object lifecycle intuition"
      ] },
      { type: "heading", text: "2) OOP Concepts (Must Master)" },
      { type: "ul", items: [
        "Encapsulation (private fields + getters/setters)",
        "Abstraction (hide details, expose essentials)",
        "Inheritance (extend behavior)",
        "Polymorphism (overloading + overriding)"
      ] },
      { type: "heading", text: "3) Important Keywords" },
      { type: "ul", items: [
        "this (current object reference)",
        "super (parent class reference)",
        "static (class-level members)",
        "final (constant / restrict changes)"
      ] },
      { type: "heading", text: "4) Interfaces & Abstract Classes" },
      { type: "ul", items: [
        "Abstract classes: shared base behavior",
        "Interfaces: clean contracts, multiple inheritance of type",
        "When to choose interface vs abstract class"
      ] },
      { type: "p", text: "🎯 Goal: Build small OOP apps like a bank account system, library management mini app, or employee payroll model." },

      { type: "heading", text: "Phase 3: Advanced Java Concepts 🔵" },
      { type: "p", text: "Now you’ll learn features that appear in production Java codebases and technical interviews." },
      { type: "heading", text: "1) Exception Handling" },
      { type: "ul", items: [
        "try-catch-finally",
        "throw vs throws",
        "Custom exceptions"
      ] },
      { type: "heading", text: "2) Collections Framework" },
      { type: "ul", items: [
        "List: ArrayList, LinkedList",
        "Set: HashSet",
        "Map: HashMap",
        "Iteration, sorting basics, and time complexity intuition"
      ] },
      { type: "heading", text: "3) Multithreading" },
      { type: "ul", items: [
        "Thread class and Runnable interface",
        "Synchronization basics",
        "Thread safety intuition"
      ] },
      { type: "heading", text: "4) File Handling" },
      { type: "ul", items: [
        "Read/write files",
        "FileReader and FileWriter",
        "Work with file paths and data"
      ] },
      { type: "p", text: "🎯 Goal: Understand real-world Java features—error handling, data structures, concurrency basics, and persistence." },

      { type: "heading", text: "Phase 4: Java Backend Development (Java Backend Roadmap) 🟣" },
      { type: "p", text: "This is where you become job-ready for backend roles. If you want to build APIs and real products, this phase is essential in your Java developer roadmap." },
      { type: "heading", text: "1) Database Basics" },
      { type: "ul", items: [
        "SQL fundamentals (SELECT, INSERT, UPDATE, DELETE)",
        "Joins, indexing basics (high level)",
        "JDBC: connect Java with a database"
      ] },
      { type: "heading", text: "2) Spring Framework" },
      { type: "ul", items: [
        "Dependency Injection (DI) and IoC",
        "REST API concepts",
        "Controller / service / repository separation"
      ] },
      { type: "heading", text: "3) Spring Boot" },
      { type: "ul", items: [
        "Create REST APIs quickly",
        "Validation basics",
        "Connect database",
        "Authentication basics (JWT concept)"
      ] },
      { type: "heading", text: "4) Hibernate / JPA" },
      { type: "ul", items: [
        "ORM concept",
        "Entities and relationships (one-to-one, one-to-many, many-to-many)",
        "Mapping and migrations (basic mindset)"
      ] },
      { type: "p", text: "🎯 Goal: Build backend applications like a CRUD API with auth, a blog backend, or a mini e-commerce backend." },

      { type: "heading", text: "Phase 5: Tools & Industry Skills 🟠" },
      { type: "p", text: "Tools make you productive and job-ready. This phase turns knowledge into professional workflow skills." },
      { type: "heading", text: "1) Build Tools" },
      { type: "ul", items: [
        "Maven basics (dependencies, lifecycle)",
        "Gradle (optional but useful)"
      ] },
      { type: "heading", text: "2) Version Control" },
      { type: "ul", items: [
        "Git: commit, branch, merge",
        "GitHub: pull requests and collaboration"
      ] },
      { type: "heading", text: "3) Testing" },
      { type: "ul", items: [
        "JUnit basics",
        "Mockito basics (mocking dependencies)"
      ] },
      { type: "heading", text: "4) Deployment" },
      { type: "ul", items: [
        "Docker basics",
        "Cloud basics (AWS concepts)",
        "Environment variables, logs, configs"
      ] },

      { type: "heading", text: "Real-World Project Ideas (Very Important) 💡" },
      { type: "p", text: "Projects make your skills visible. Start small and improve the same project over time instead of building many incomplete apps." },
      { type: "heading", text: "Beginner Projects" },
      { type: "ul", items: [
        "Calculator App (console)",
        "Number Guessing Game",
        "Student Grade Calculator",
        "Basic To-Do List"
      ] },
      { type: "heading", text: "Intermediate Projects" },
      { type: "ul", items: [
        "Student Management System (CRUD + file storage)",
        "Library Management System (OOP + Collections)",
        "Expense Tracker"
      ] },
      { type: "heading", text: "Advanced / Backend Projects" },
      { type: "ul", items: [
        "REST API Project (Spring Boot + MySQL/PostgreSQL)",
        "Authentication System (JWT basics)",
        "Mini e-commerce backend",
        "Full stack app (React + Spring Boot + DB)"
      ] },

      { type: "heading", text: "Java Learning Timeline (3–6 Month Plan) 🗓️" },
      { type: "heading", text: "3-Month Plan (Fast Track)" },
      { type: "ul", items: [
        "Weeks 1–3: Basics + problem solving",
        "Weeks 4–6: OOP + mini projects",
        "Weeks 7–9: Collections + exceptions + file handling",
        "Weeks 10–12: Spring Boot fundamentals + simple REST API"
      ] },
      { type: "heading", text: "6-Month Plan (Comfortable + Strong)" },
      { type: "ul", items: [
        "Month 1: Basics + logic building",
        "Month 2: OOP + class design",
        "Month 3: Collections + exceptions + practice",
        "Month 4: SQL + JDBC + backend fundamentals",
        "Month 5: Spring Boot + REST APIs + JPA",
        "Month 6: Auth basics + testing + deployment intro + polishing projects"
      ] },

      { type: "heading", text: "Final Tips for Success ✅" },
      { type: "ul", items: [
        "Practice daily (even 20 minutes)",
        "Write code yourself—avoid copy/paste learning",
        "Master fundamentals: loops, arrays, OOP, collections",
        "Build 1–2 strong projects",
        "Read documentation regularly",
        "Start DSA after you’re confident with Core Java"
      ] },

      { type: "heading", text: "FAQ: Java Roadmap (Beginners to Advanced)" },
      { type: "heading", text: "How long does it take to learn Java?" },
      { type: "p", text: "With consistent practice, you can learn Java basics in 4–6 weeks and become backend-ready in 3–6 months depending on your pace." },
      { type: "heading", text: "Is Java good for beginners in 2026?" },
      { type: "p", text: "Yes. Java teaches strong fundamentals (OOP, data structures, clean code) and remains a top choice for backend development." },
      { type: "heading", text: "How to learn Java without getting overwhelmed?" },
      { type: "p", text: "Use a phased Java learning path: Basics → OOP → Collections/Exceptions → Backend → Tools. Focus on one phase at a time." },
      { type: "heading", text: "What should I learn after Core Java?" },
      { type: "p", text: "After Core Java, learn collections, exception handling, and multithreading basics. Then move to the Java backend roadmap with Spring Boot." },
      { type: "heading", text: "Do I need Spring Boot to get a Java job?" },
      { type: "p", text: "For backend roles, Spring Boot is highly recommended. Most Java backend jobs expect REST API experience with Spring Boot." },

      { type: "heading", text: "Conclusion" },
      { type: "p", text: "This Java Roadmap (2026 guide) gives you a clear direction from beginner fundamentals to advanced concepts and backend development. Start small, practice daily, build projects, and move phase-by-phase. Java rewards consistency—and the results are worth it." },
      { type: "p", text: "🚀 Next step: Save this roadmap, pick Phase 1 today, and commit to daily practice. Want more guides like this? Explore our latest tutorials and subscribe for updates." }
    ],
    related: ["java-tutorial-basics", "system-design-caching"]
  },
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
