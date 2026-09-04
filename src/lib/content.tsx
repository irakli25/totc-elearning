/* Copy and list data lifted from the Figma file. Sections stay presentational
 * so text lives here rather than inside components. */

export const successStats = [
  { value: "15K+", label: "Students" },
  { value: "75%", label: "Total success" },
  { value: "35", label: "Main questions" },
  { value: "26", label: "Chief experts" },
  { value: "16", label: "Years of experience" },
];

export const allInOneCards = [
  {
    title: "Online Billing, Invoicing, & Contracts",
    body: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    badge: "/icons/badges/billing.svg",
    badgeOffsetY: 30,
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    body: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    badge: "/icons/badges/scheduling.svg",
    badgeOffsetY: 24,
  },
  {
    title: "Customer Tracking",
    body: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
    badge: "/icons/badges/tracking.svg",
    badgeOffsetY: 30,
  },
];

export type FeatureRowContent = {
  id: string;
  heading: React.ReactNode;
  body?: string;
  bullets?: { icon: "podium" | "presenter" | "roster"; text: string }[];
  image: string;
  alt: string;
  /** Aspect ratio of the exported illustration, width/height. */
  ratio: string;
  side: "left" | "right";
};

export const featureRows: FeatureRowContent[] = [
  {
    id: "user-interface",
    heading: (
      <>
        A <span className="text-[#00cbb8]">user interface</span> designed for
        the classroom
      </>
    ),
    bullets: [
      {
        icon: "podium",
        text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
      },
      {
        icon: "presenter",
        text: "TA’s and presenters can be moved to the front of the class.",
      },
      {
        icon: "roster",
        text: "Teachers can easily see all students and class data at one time.",
      },
    ],
    image: "/images/features/podium-view.png",
    alt: "The TOTC classroom view with a teacher podium and student grid",
    ratio: "783/483",
    side: "left",
  },
  {
    id: "teaching-tools",
    heading: "Tools For Teachers And Learners",
    body: "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
    image: "/images/features/teaching-tools.png",
    alt: "A student handing in an assignment inside the TOTC interface",
    ratio: "637/611",
    side: "right",
  },
  {
    id: "assessments",
    heading: "Assessments, Quizzes, Tests",
    body: "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
    image: "/images/features/assessments.png",
    alt: "A live true or false quiz question shown to a class",
    ratio: "617/651",
    side: "left",
  },
  {
    id: "class-management",
    heading: "Class Management Tools for Educators",
    body: "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.",
    image: "/images/features/gradebook.png",
    alt: "The TOTC gradebook listing students and their scores",
    ratio: "808/560",
    side: "right",
  },
  {
    id: "one-on-one",
    heading: "One-on-One Discussions",
    body: "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
    image: "/images/features/one-on-one.png",
    alt: "A teacher speaking privately with a student in a breakout view",
    ratio: "755/499",
    side: "left",
  },
];

export const testimonial = {
  eyebrow: "TESTIMONIAL",
  heading: "What They Say?",
  paragraphs: [
    "TOTC has got more than 100k positive ratings from our users around the world.",
    "Some of the students and teachers were greatly helped by the Skilline.",
    "Are you too? Please give your assessment",
  ],
  quote:
    "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
  author: "Gloria Rose",
  meta: "12 reviews at Yelp",
  photo: "/images/home/testimonial-gloria.png",
};

export const newsFeatured = {
  tag: "NEWS",
  title:
    "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
  excerpt:
    "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with Zoom to bring teaching tools into the video call itself.",
  image: "/images/home/news-featured.png",
  href: "/blog/class-adds-30-million",
};

export const newsList = [
  {
    tag: "PRESS RELEASE",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    excerpt:
      "Class Technologies Inc., the company that created Class, announced a $30 million Series A round led by existing investors.",
    image: "/images/home/news-1.png",
    href: "/blog/series-a-financing",
  },
  {
    tag: "NEWS",
    title:
      "Zoom’s earliest investors are betting millions on a better Zoom for schools",
    excerpt:
      "Zoom was never created to be a consumer product. Nonetheless, the video conferencing tool became a household name.",
    image: "/images/home/news-2.png",
    href: "/blog/betting-on-a-better-zoom",
  },
  {
    tag: "NEWS",
    title:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    excerpt:
      "This year, investors have reaped big financial returns from betting on Zoom, whose stock price has more than quadrupled.",
    image: "/images/home/news-3.png",
    href: "/blog/lms-features-for-zoom",
  },
];

/** The shelf UI in "Explore Course". Titles are the placeholder Latin used in
 *  the Figma file; the spines are colour blocks rather than artwork. */
export const courseShelves = [
  {
    id: "lorem-ipsum",
    title: "Lorem Ipsum",
    icon: "palette" as const,
    spines: [
      "Ut Sed Eros",
      "Donec Vitae",
      "Nulla Porta",
      "Cras Finibus",
      "Sed Rhoncus",
      "Proin Luctus",
      "Etiam Congue",
    ],
    detail: {
      title: "Ut Sed Eros",
      body: "A studio course covering colour, composition and the visual language every designer leans on. Seven modules, graded weekly.",
      meta: "12 lessons · 6 hours",
    },
  },
  {
    id: "quisque-a-consequat",
    title: "Quisque a Consequat",
    icon: "globe" as const,
    spines: [
      "Morbi Semper",
      "Fusce Auctor",
      "Aliquam Erat",
      "Integer Nunc",
      "Vivamus Diam",
      "Curabitur Ac",
      "Praesent Leo",
    ],
    detail: {
      title: "Aliquam Erat",
      body: "Language and culture for learners who want to work across borders. Live conversation sessions run twice a week.",
      meta: "18 lessons · 9 hours",
    },
  },
  {
    id: "aenean-facilisis",
    title: "Aenean Facilisis",
    icon: "ribbon" as const,
    spines: [
      "Suspendisse",
      "Pellentesque",
      "Maecenas Ut",
      "Phasellus In",
      "Nam Gravida",
      "Quisque Vel",
      "Tempor Orci",
    ],
    detail: {
      title: "Maecenas Ut",
      body: "An award-track programme with a portfolio review at the end of every unit and a certificate on completion.",
      meta: "24 lessons · 14 hours",
    },
  },
];

export type Course = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  blurb: string;
  author: string;
  priceWas: string;
  price: string;
  image: string;
};

const courseTitles = [
  "AWS Certified solutions Architect",
  "Google Cloud Digital Leader",
  "Azure Fundamentals Bootcamp",
  "Certified Kubernetes Administrator",
];

export const courses: Course[] = courseTitles.map((title, index) => ({
  slug: title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  title,
  category: "Design",
  duration: "3 Month",
  blurb:
    "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  author: "Lina",
  priceWas: "$100",
  price: "$80",
  image: `/images/courses/course-${index + 1}.png`,
}));

export const courseRows = [
  { id: "recommended", title: "Recommended for you" },
  { id: "choice", title: "Get choice of your course" },
  { id: "personal", title: "The course in personal development" },
  { id: "viewing", title: "Student are viewing" },
];

/* Three courses in flight for the signed-in student. Titles come from
 * courseTitles so this row can never drift from the catalogue. The frame
 * repeats one card three times, which reads as a data bug rather than a
 * design choice once the page is populated. */
export const continueLearning = [
  { title: courseTitles[0], author: "Marcus Reed", progress: "Lesson 5 of 7", image: "/images/courses/lesson-1.png" },
  { title: courseTitles[1], author: "Priya Raman", progress: "Lesson 2 of 9", image: "/images/courses/lesson-2.png" },
  { title: courseTitles[3], author: "Sofia Adeyemi", progress: "Lesson 8 of 12", image: "/images/courses/lesson-3.png" },
];

/* The auth frames are typeset with Lorem Ipsum throughout: the greeting, the
 * caption over the photo panel and the paragraph above the fields. Real copy
 * is written here instead — placeholder Latin on a live sign-in screen reads
 * as an unfinished build rather than a faithful implementation. */
export const authCopy = {
  greeting: "Welcome to TOTC..!",
  login: {
    panelTitle: "Every class in one place",
    panelSubtitle: "Pick up exactly where you left off",
    intro: "Sign in to reach your courses, assignments and grades.",
  },
  register: {
    panelTitle: "Start learning today",
    panelSubtitle: "Join the 15,000 students already on TOTC",
    intro: "Create an account to enrol in courses and track your progress.",
  },
} as const;

export const courseCategories = [
  { title: "Design", icon: "pen" as const },
  { title: "Development", icon: "code" as const },
  { title: "Development", icon: "chip" as const },
  { title: "Business", icon: "briefcase" as const },
  { title: "Marketing", icon: "megaphone" as const },
  { title: "Photography", icon: "camera" as const },
  { title: "Acting", icon: "mask" as const },
  { title: "Business", icon: "chart" as const },
];

export const categoryBlurb =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod";

export const coachingCta = {
  title: "Online coaching lessons for remote learning.",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor",
  cta: "Start learning now",
};

export type Post = {
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  views: string;
  image: string;
  tags: string[];
  body: string[];
};

const longBody =
  "TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.";

export const posts: Post[] = [
  {
    slug: "why-swift-ui-should-be-on-the-radar",
    title: "Why Swift UI Should Be on the Radar of Every Mobile Developer",
    author: "Lina",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor",
    views: "251,232",
    image: "/images/blog/post-hero.png",
    tags: ["affordable", "Stunning", "making", "madbrawns"],
    body: [longBody, `${longBody} ${longBody}`, longBody],
  },
  {
    slug: "class-adds-30-million",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    author: "Lina",
    excerpt:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with Zoom to bring teaching tools into the call.",
    views: "251,232",
    image: "/images/blog/post-1.png",
    tags: ["funding", "edtech", "zoom"],
    body: [longBody, `${longBody} ${longBody}`],
  },
  {
    slug: "series-a-financing",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    author: "Lina",
    excerpt:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with Zoom to bring teaching tools into the call.",
    views: "251,232",
    image: "/images/blog/post-2.png",
    tags: ["funding", "growth", "press"],
    body: [longBody, `${longBody} ${longBody}`],
  },
  {
    slug: "betting-on-a-better-zoom",
    title:
      "Zoom’s earliest investors are betting millions on a better Zoom for schools",
    author: "Lina",
    excerpt:
      "Zoom was never created to be a consumer product. Nonetheless, the video conferencing tool became a household name during the pandemic.",
    views: "251,232",
    image: "/images/blog/post-3.png",
    tags: ["investors", "schools", "zoom"],
    body: [longBody, `${longBody} ${longBody}`],
  },
  {
    slug: "lms-features-for-zoom",
    title:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    author: "Lina",
    excerpt:
      "This year, investors have reaped big financial returns from betting on Zoom, whose stock price has more than quadrupled.",
    views: "251,232",
    image: "/images/blog/post-4.png",
    tags: ["lms", "classrooms", "funding"],
    body: [longBody, `${longBody} ${longBody}`],
  },
];

export const blogHero = {
  kicker: "By Themadbrains in inspiration",
  title: "Why Swift UI Should Be on the Radar of Every Mobile Developer",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor",
  cta: "Start learning now",
  image: "/images/blog/hero.png",
};

export const blogCategories = [
  { title: "UX/UI", image: "/images/blog/cat-ux.png" },
  { title: "React", image: "/images/blog/cat-react.png" },
  { title: "PHP", image: "/images/blog/cat-php.png" },
  { title: "JavaScript", image: "/images/blog/cat-js.png" },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    blurb: "Everything one teacher needs to run a single online classroom.",
    features: [
      "1 virtual classroom",
      "Up to 30 students",
      "Assignments and quizzes",
      "Community support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    blurb: "For schools running several classes across one campus.",
    features: [
      "Unlimited classrooms",
      "Up to 500 students",
      "Gradebook and attendance",
      "Priority support",
      "Custom certificates",
    ],
    featured: true,
  },
  {
    name: "Campus",
    price: "$99",
    period: "/month",
    blurb: "Multi-campus scheduling, billing and reporting in one place.",
    features: [
      "Everything in Professional",
      "Multiple campuses",
      "Billing and invoicing",
      "Single sign-on",
      "Dedicated success manager",
    ],
    featured: false,
  },
];

export const faqs = [
  {
    question: "Lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet.",
  },
  { question: "Consectetur adipiscing elit, sed do", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { question: "Eiusmod tempos Lorem ipsum", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { question: "Lorem ipsum dolor sit amet", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { question: "Lorem ipsum dolor sit amet", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor." },
];

export const studentQuotes = Array.from({ length: 4 }, () => ({
  name: "Bulkin Simons",
  quote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
  avatar: "/images/common/student.png",
}));

export const applyPanels = [
  {
    title: "Become a Teacher",
    body: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with Zoom to bring teaching tools into the call.",
    cta: "Apply a Teacher",
    image: "/images/membership/teacher.png",
  },
  {
    title: "Become a Coursector",
    body: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with Zoom to bring teaching tools into the call.",
    cta: "Apply a Coursector",
    image: "/images/membership/coursector.png",
  },
];
