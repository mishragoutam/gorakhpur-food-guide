/** Latte cup on a saucer with a croissant. Decorative only. */
export function CafeScene() {
  return (
    <>
      <circle cx="58" cy="48" r="50" fill="#fff" opacity=".3" />
      <circle cx="272" cy="160" r="60" fill="#fff" opacity=".25" />

      <g fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity=".9">
        <path d="M134 78c-9-9 9-15 0-26" />
        <path d="M160 74c-9-9 9-15 0-26" />
        <path d="M186 78c-9-9 9-15 0-26" />
      </g>

      <ellipse cx="156" cy="172" rx="96" ry="9" fill="#5a3a24" opacity=".14" />
      <ellipse cx="156" cy="158" rx="86" ry="14" fill="#fffdf8" />
      <ellipse cx="156" cy="156" rx="64" ry="9" fill="#f3e4cc" />

      <path d="M208 110c28-4 28 32-2 34" fill="none" stroke="#fffdf8" strokeWidth="9" strokeLinecap="round" />
      <path d="M102 100h108c0 36-18 58-54 58s-54-22-54-58z" fill="#fffdf8" />
      <path d="M112 134c10 12 26 18 44 18" fill="none" stroke="#e9dcc4" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="156" cy="100" rx="54" ry="10" fill="#fffdf8" />
      <ellipse cx="156" cy="101" rx="47" ry="7" fill="#7a4a2b" />
      <path
        d="M0 6C-10-2-8-9-3-9-1-9 0-7 0-6 0-7 1-9 3-9 8-9 10-2 0 6z"
        transform="translate(156 101) scale(1.6 .75)"
        fill="#fbf3e3"
      />

      <path d="M40 160c4-22 24-32 44-26 8 2 12 8 8 14-6 12-18 22-36 24-12 2-18-2-16-12z" fill="#e6a23c" />
      <g fill="none" stroke="#c97a1e" strokeWidth="2.5" strokeLinecap="round">
        <path d="M56 140c4 6 4 14 0 22" />
        <path d="M70 136c4 6 4 14 0 22" />
      </g>
    </>
  );
}
