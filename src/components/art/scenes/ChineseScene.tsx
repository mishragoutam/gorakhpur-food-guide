/** Noodle bowl with chopsticks. Decorative only. */
export function ChineseScene() {
  return (
    <>
      <circle cx="62" cy="44" r="54" fill="#fff" opacity=".3" />
      <circle cx="272" cy="170" r="58" fill="#fff" opacity=".25" />

      <g fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity=".9">
        <path d="M134 64c-9-9 9-15 0-26" />
        <path d="M164 60c-9-9 9-15 0-26" />
        <path d="M194 64c-9-9 9-15 0-26" />
      </g>

      <ellipse cx="160" cy="172" rx="92" ry="9" fill="#5a3a24" opacity=".14" />

      <path d="M82 120h156c0 36-30 58-78 58s-78-22-78-58z" fill="#c8402a" />
      <path d="M82 120h156c-1 6-2 11-4 16H86c-2-5-3-10-4-16z" fill="#a8301e" />
      <path d="M108 154h104" fill="none" stroke="#f6c445" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 10" />
      <ellipse cx="160" cy="120" rx="78" ry="11" fill="#a8301e" />

      <ellipse cx="160" cy="116" rx="68" ry="20" fill="#f6c445" />
      <g fill="none" stroke="#e6a23c" strokeWidth="4" strokeLinecap="round">
        <path d="M108 112c12-14 24 12 36-2s24 12 36-2 24 10 32-2" />
        <path d="M114 122c12-12 22 10 34-2s22 10 34-2 22 8 30-2" />
      </g>
      <circle cx="138" cy="104" r="5" fill="#5f8f4e" />
      <circle cx="184" cy="102" r="5" fill="#5f8f4e" />
      <circle cx="160" cy="98" r="5" fill="#f0680f" />
      <circle cx="122" cy="116" r="4" fill="#f0680f" />
      <circle cx="200" cy="116" r="4" fill="#5f8f4e" />

      <g strokeLinecap="round" strokeWidth="6">
        <path d="M214 34L170 112" stroke="#5a3a24" />
        <path d="M234 44L184 116" stroke="#3d2f24" />
      </g>
    </>
  );
}
