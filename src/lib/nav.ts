/** Nav labels and order are taken from the Figma header.
 *  "Careers" and "About Us" have no dedicated frame in the file, so they point
 *  at the sections that carry that content: the teacher/instructor application
 *  panels on the membership page, and "What Is TOTC" on the landing page. */
export const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Careers", href: "/membership#apply" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/#about" },
] as const;
