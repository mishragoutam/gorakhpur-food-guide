/** Burger with a carton of fries. Decorative only. */
export function FastFoodScene() {
  return (
    <>
      <circle cx="258" cy="40" r="56" fill="#fff" opacity=".3" />
      <circle cx="40" cy="168" r="50" fill="#fff" opacity=".2" />

      <ellipse cx="140" cy="174" rx="86" ry="8" fill="#5a3a24" opacity=".14" />

      <path d="M70 148h140c0 14-10 24-24 24H94c-14 0-24-10-24-24z" fill="#e6a23c" />
      <rect x="62" y="128" width="156" height="22" rx="11" fill="#5a3a24" />
      <path d="M66 124h148l-14 20-12-12-14 14-14-14-14 12-14-12-14 14-14-12-14 12z" fill="#f6c445" />
      <rect x="74" y="112" width="132" height="12" rx="6" fill="#c8402a" />
      <path d="M64 106c10-10 14 6 24-2s14 6 24-2 14 6 24-2 14 6 24-2 14 6 24-2 14 6 24-2v14H64z" fill="#5f8f4e" />
      <path d="M70 108c0-36 28-58 70-58s70 22 70 58z" fill="#f2b04a" />
      <path d="M86 98c6-24 24-38 54-38" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".35" />
      <g fill="#fff4dc">
        <ellipse cx="116" cy="78" rx="5" ry="2.8" transform="rotate(-20 116 78)" />
        <ellipse cx="142" cy="68" rx="5" ry="2.8" transform="rotate(10 142 68)" />
        <ellipse cx="166" cy="80" rx="5" ry="2.8" transform="rotate(-10 166 80)" />
        <ellipse cx="130" cy="92" rx="5" ry="2.8" transform="rotate(25 130 92)" />
        <ellipse cx="184" cy="96" rx="5" ry="2.8" transform="rotate(-25 184 96)" />
      </g>

      <g fill="#f6c445" stroke="#e6a23c" strokeWidth="1.5">
        <rect x="224" y="84" width="9" height="36" rx="3" transform="rotate(-8 228 102)" />
        <rect x="235" y="76" width="9" height="44" rx="3" />
        <rect x="247" y="82" width="9" height="38" rx="3" transform="rotate(6 251 102)" />
        <rect x="259" y="88" width="9" height="32" rx="3" transform="rotate(12 263 104)" />
      </g>
      <path d="M216 114h60l-7 60h-46z" fill="#c8402a" />
      <path d="M222 138h48" fill="none" stroke="#f6c445" strokeWidth="6" strokeLinecap="round" />
    </>
  );
}
