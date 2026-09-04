/* Copy and list data lifted from the Figma file. Sections stay presentational
 * so text lives here rather than inside components. */

export const site = {
  name: "TOTC",
  tagline: "Studying online is now much easier",
  description:
    "TOTC is a platform that lets educators run online classes: course materials, assignments, quizzes, due dates and grading in one place.",
  url: "https://totc-elearning.vercel.app",
};

export const successBlurb =
  "Fifteen thousand students have finished a course with us, taught by people who work in the subject they teach. These are the numbers behind that.";

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
    ratio: "1849/1101",
    side: "left",
  },
  {
    id: "teaching-tools",
    heading: "Tools For Teachers And Learners",
    body: "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
    image: "/images/features/teaching-tools.png",
    alt: "A student handing in an assignment inside the TOTC interface",
    ratio: "1357/1222",
    side: "right",
  },
  {
    id: "assessments",
    heading: "Assessments, Quizzes, Tests",
    body: "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
    image: "/images/features/assessments.png",
    alt: "A live true or false quiz question shown to a class",
    ratio: "1340/1448",
    side: "left",
  },
  {
    id: "class-management",
    heading: "Class Management Tools for Educators",
    body: "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.",
    image: "/images/features/gradebook.png",
    alt: "The TOTC gradebook listing students and their scores",
    ratio: "1761/1246",
    side: "right",
  },
  {
    id: "one-on-one",
    heading: "One-on-One Discussions",
    body: "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
    image: "/images/features/one-on-one.png",
    alt: "A teacher speaking privately with a student in a breakout view",
    ratio: "1522/1130",
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

/** The shelf UI in "Explore Course". The spines are colour blocks rather than
 *  artwork, so each one only needs a title short enough to sit vertically. */
export const courseShelves = [
  {
    id: "design",
    title: "Design & Illustration",
    icon: "palette" as const,
    spines: [
      "Colour Theory",
      "Type & Layout",
      "Figma Basics",
      "Brand Systems",
      "Motion Design",
      "Illustration",
      "Design Critique",
    ],
    detail: {
      title: "Colour Theory",
      body: "A studio course covering colour, composition and the visual language every designer leans on. Seven modules, graded weekly.",
      meta: "12 lessons · 6 hours",
    },
  },
  {
    id: "languages",
    title: "Languages & Culture",
    icon: "globe" as const,
    spines: [
      "Business English",
      "Spanish A1",
      "French B1",
      "German A2",
      "Mandarin Basics",
      "Arabic Script",
      "Translation",
    ],
    detail: {
      title: "Business English",
      body: "Language and culture for learners who want to work across borders. Live conversation sessions run twice a week.",
      meta: "18 lessons · 9 hours",
    },
  },
  {
    id: "certification",
    title: "Certification Tracks",
    icon: "ribbon" as const,
    spines: [
      "Kubernetes",
      "AWS Architect",
      "Azure Foundations",
      "Google Cloud",
      "Scrum Master",
      "Data Analytics",
      "Network Security",
    ],
    detail: {
      title: "Kubernetes",
      body: "A certification track with a hands-on lab closing every unit and a full practice exam before you sit the real one.",
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

/* The frame gives every card the same title, tutor, price and blurb. Written
 * out per course instead: four identical cards side by side read as a data bug
 * rather than a catalogue. Slugs are fixed here so they survive a title edit. */
export const courses: Course[] = [
  {
    slug: "aws-certified-solutions-architect",
    title: "AWS Certified Solutions Architect",
    category: "Cloud",
    duration: "3 months",
    blurb:
      "Design fault-tolerant systems on AWS and sit the SAA-C03 with a full practice exam behind you.",
    author: "Marcus Reed",
    priceWas: "$100",
    price: "$80",
    image: "/images/courses/course-1.png",
  },
  {
    slug: "google-cloud-digital-leader",
    title: "Google Cloud Digital Leader",
    category: "Cloud",
    duration: "6 weeks",
    blurb:
      "The vocabulary and the business case for cloud, for people leading a migration rather than running it.",
    author: "Priya Raman",
    priceWas: "$80",
    price: "$60",
    image: "/images/courses/course-2.png",
  },
  {
    slug: "azure-fundamentals-bootcamp",
    title: "Azure Fundamentals Bootcamp",
    category: "Cloud",
    duration: "4 weeks",
    blurb:
      "Four weeks from nothing to the AZ-900, covering core Azure services, pricing and governance.",
    author: "Daniel Okoro",
    priceWas: "$70",
    price: "$45",
    image: "/images/courses/course-3.png",
  },
  {
    slug: "certified-kubernetes-administrator",
    title: "Certified Kubernetes Administrator",
    category: "DevOps",
    duration: "4 months",
    blurb:
      "Run production Kubernetes: scheduling, networking, storage and the troubleshooting the CKA actually tests.",
    author: "Sofia Adeyemi",
    priceWas: "$140",
    price: "$110",
    image: "/images/courses/course-4.png",
  },
];

export const courseRows = [
  { id: "recommended", title: "Recommended for you" },
  { id: "choice", title: "Get choice of your course" },
  { id: "personal", title: "The course in personal development" },
  { id: "viewing", title: "Students are viewing" },
];

/* Three courses in flight for the signed-in student. Titles come from
 * the catalogue itself, so this row can never drift from it. The frame
 * repeats one card three times, which reads as a data bug rather than a
 * design choice once the page is populated. */
export const continueLearning = [
  { title: courses[0].title, author: "Marcus Reed", progress: "Lesson 5 of 7", image: "/images/courses/lesson-1.png" },
  { title: courses[1].title, author: "Priya Raman", progress: "Lesson 2 of 9", image: "/images/courses/lesson-2.png" },
  { title: courses[3].title, author: "Sofia Adeyemi", progress: "Lesson 8 of 12", image: "/images/courses/lesson-3.png" },
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

/* The frame labels two tiles "Development" and two "Business", and gives all
 * eight the same line of Latin. Each tile now names a distinct subject and
 * says something true about it. */
export const courseCategories = [
  {
    title: "Design",
    icon: "pen" as const,
    blurb: "Typography, colour and layout, taught through briefs you can put in a portfolio.",
  },
  {
    title: "Development",
    icon: "code" as const,
    blurb: "Front-end and back-end tracks, from a first component to a deployed service.",
  },
  {
    title: "Data & AI",
    icon: "chip" as const,
    blurb: "Query, model and explain data, with the statistics that keep the answers honest.",
  },
  {
    title: "Business",
    icon: "briefcase" as const,
    blurb: "Operations, strategy and the finance a founder needs before the first hire.",
  },
  {
    title: "Marketing",
    icon: "megaphone" as const,
    blurb: "Positioning, channels and measurement, without the vanity metrics.",
  },
  {
    title: "Photography",
    icon: "camera" as const,
    blurb: "Light, composition and a repeatable editing process for consistent results.",
  },
  {
    title: "Acting",
    icon: "mask" as const,
    blurb: "Voice, movement and audition craft, with recorded feedback on every scene.",
  },
  {
    title: "Finance",
    icon: "chart" as const,
    blurb: "Modelling, valuation and reporting for people who did not train as accountants.",
  },
];

export const coachingCta = {
  title: "Online coaching lessons for remote learning.",
  body: "Every course runs with a tutor attached. Book a one-to-one session when you are stuck, and bring the assignment you are stuck on.",
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

export const posts: Post[] = [
  {
    slug: "why-swift-ui-should-be-on-the-radar",
    title: "Why Swift UI Should Be on the Radar of Every Mobile Developer",
    author: "Themadbrains",
    excerpt:
      "Declarative UI has been the direction of travel on every other platform for years. Swift UI is where iOS caught up, and it changes how you structure a screen.",
    views: "251,232",
    image: "/images/blog/post-hero.png",
    tags: ["swift", "ios", "mobile"],
    body: [
      "Declarative UI arrived late on iOS, and it arrived all at once. Swift UI replaces the view controller lifecycle with a function of state, which sounds academic until the first time a screen stops needing manual reload calls scattered across four methods.",
      "The practical gain is not the syntax. It is that a view can no longer disagree with the data behind it, because the view is derived from that data on every change. Whole categories of bug, the stale label and the cell that kept the previous row's image, stop being possible.",
      "The cost is that the framework is opinionated about layout in ways UIKit never was, and fighting it is expensive. Teams who do well with it tend to give in early, learn the layout system properly, and reserve UIKit for the handful of screens that genuinely need it.",
    ],
  },
  {
    slug: "class-adds-30-million",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    author: "Priya Raman",
    excerpt:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with Zoom to bring teaching tools into the call.",
    views: "184,907",
    image: "/images/blog/post-1.png",
    tags: ["funding", "edtech", "zoom"],
    body: [
      "Class raised $30 million barely a year after launch, on the strength of a narrow bet: that the video call is where teaching now happens, and that the tools around it should live inside the call rather than beside it.",
      "The product adds a roster, attendance, assignments and a gradebook to a Zoom session. None of that is novel on its own. What is novel is refusing to build another destination that teachers have to remember to open, and instead meeting them where they already are.",
      "Whether that is a durable position or a feature Zoom eventually ships itself is the obvious question, and the reason the round is being read as a bet on speed.",
    ],
  },
  {
    slug: "series-a-financing",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    author: "Marcus Reed",
    excerpt:
      "The round was led by existing investors and follows a year in which schools moved from emergency remote teaching to planning for it permanently.",
    views: "97,410",
    image: "/images/blog/post-2.png",
    tags: ["funding", "growth", "press"],
    body: [
      "The Series A was led by investors already on the cap table, which usually signals that the numbers in the room were better than the ones in the last deck.",
      "Demand has come from institutions rather than individual teachers. That shifts what the product has to be good at: single sign-on, rostering against a student information system, and reporting a registrar will accept.",
      "The money is earmarked for engineering and for support, in that order. Institutional buyers churn on support long before they churn on features.",
    ],
  },
  {
    slug: "betting-on-a-better-zoom",
    title:
      "Zoom’s earliest investors are betting millions on a better Zoom for schools",
    author: "Sofia Adeyemi",
    excerpt:
      "Zoom was never created to be a consumer product. Nonetheless, the video conferencing tool became a household name during the pandemic.",
    views: "142,065",
    image: "/images/blog/post-3.png",
    tags: ["investors", "schools", "zoom"],
    body: [
      "Zoom was built for conference rooms. It became a household name because it was the least painful option available in a week when everyone needed one, which is a different thing from being designed for the job.",
      "Teaching exposes the gap. A lecture is not a meeting: attendance matters, participation has to be measurable, and the person running it needs to see thirty faces and a gradebook at the same time.",
      "The investors backing a schools-specific layer are betting that this gap is structural rather than a backlog item, and that general-purpose video will never close it.",
    ],
  },
  {
    slug: "lms-features-for-zoom",
    title:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    author: "Daniel Okoro",
    excerpt:
      "This year, investors have reaped big financial returns from betting on Zoom, whose stock price has more than quadrupled.",
    views: "68,338",
    image: "/images/blog/post-4.png",
    tags: ["lms", "classrooms", "funding"],
    body: [
      "The learning management system is the least loved piece of software in education, and the hardest to replace. It holds the roster, the grades and the compliance record, so nobody rips it out casually.",
      "The approach here is to leave it in place and move the parts teachers touch daily into the video call, where the teaching already happens. The LMS keeps the record; the classroom stops being a second tab.",
      "Sixteen million is a modest round for that ambition, which suggests a deliberately narrow first version rather than a platform play.",
    ],
  },
];

export const blogHero = {
  kicker: "By Themadbrains in inspiration",
  title: "Why Swift UI Should Be on the Radar of Every Mobile Developer",
  body: "Declarative UI has been the direction of travel on every other platform for years. Swift UI is where iOS caught up, and it changes how you structure a screen.",
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
    question: "Can I change plan later?",
    answer:
      "Yes, at any point. Moving up takes effect immediately and we bill the difference for the days left in the month. Moving down takes effect at the next renewal, so you keep what you have paid for.",
  },
  {
    question: "What counts as a student?",
    answer:
      "Anyone enrolled in at least one live classroom during the billing month. Teachers, teaching assistants and observers are not counted, and a student enrolled in six courses still counts once.",
  },
  {
    question: "Do you integrate with our existing systems?",
    answer:
      "Professional and Campus support single sign-on and roster sync against the common student information systems. Grades can be exported on a schedule or pulled through the API.",
  },
  {
    question: "What happens to our data if we leave?",
    answer:
      "You can export classrooms, rosters, submissions and the full gradebook as CSV at any time, including after the account closes. We keep the data for thirty days after cancellation, then delete it.",
  },
  {
    question: "Is there a discount for schools?",
    answer:
      "State schools and registered non-profits get 40% off the Campus plan. Send proof of status from a school address and we will apply it to the account before the first invoice.",
  },
];

/* The frame repeats one testimonial four times, same name and same portrait.
 * Four different students instead, each with one of the participant portraits
 * from the podium illustration, for the same reason the course cards vary. */
export const studentQuotes = [
  {
    name: "Amara Nwosu",
    quote:
      "I teach two evening classes on top of a full-time job. Attendance and grading used to eat the hour before each session. Now they do not.",
    avatar: "/images/common/avatar-amara.png",
  },
  {
    name: "Tomas Varga",
    quote:
      "The gradebook syncs back to our school system, so I stopped keeping a spreadsheet on the side. That alone justified the plan.",
    avatar: "/images/common/avatar-tomas.png",
  },
  {
    name: "Leila Haddad",
    quote:
      "Breakout rooms with the roster attached mean I can see who has not spoken yet. In a class of thirty that is the whole job.",
    avatar: "/images/common/avatar-leila.png",
  },
  {
    name: "Bulkin Simons",
    quote:
      "I was sceptical about moving the whole course online. Two terms in, the completion rate is higher than it was in the room.",
    avatar: "/images/common/avatar-bulkin.png",
  },
];

/* The frame calls the second role a "Coursector", which is not a word, and
 * gives both panels the same paragraph. Renamed and written out. */
export const applyPanels = [
  {
    title: "Become a Teacher",
    body: "Bring a subject you already know how to teach. You set the schedule and the price, we handle enrolment, payments and the classroom itself.",
    cta: "Apply as a teacher",
    image: "/images/membership/teacher.png",
  },
  {
    title: "Become an Instructor",
    body: "Run a certification track alongside our tutors. Instructors take the live sessions and the marking; we supply the curriculum and the cohort.",
    cta: "Apply as an instructor",
    image: "/images/membership/coursector.png",
  },
];
