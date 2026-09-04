const paths: Record<string, React.ReactNode> = {
  pen: <path d="M4 20l4-1 9-9-3-3-9 9-1 4zM16 5l3 3 2-2-3-3-2 2z" />,
  code: <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  chip: <path d="M8 8h8v8H8zM4 10h2M4 14h2M18 10h2M18 14h2M10 4v2M14 4v2M10 18v2M14 18v2M6 6h12v12H6z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  briefcase: <path d="M4 8h16v11H4zM9 8V6h6v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  megaphone: <path d="M4 10v4h3l7 4V6l-7 4H4zM17 9a4 4 0 010 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  camera: <path d="M4 8h3l1.5-2h7L17 8h3v11H4zM12 16a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  mask: <path d="M5 5h6v7a3 3 0 01-6 0zM13 5h6v7a3 3 0 01-6 0zM8 18v2M16 18v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  chart: <path d="M5 19V11M12 19V5M19 19v-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />,
};

export function CategoryIcon({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-8 text-teal-400" fill="currentColor">
      {paths[kind]}
    </svg>
  );
}
