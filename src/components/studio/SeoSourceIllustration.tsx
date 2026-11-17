import type { SeoPageContent } from "@/data/services/seo-pages";

/** Conceptual diagrams; no client performance data is represented. */
export function SeoSourceIllustration({ kind }: { kind: SeoPageContent["visual"] }) {
  return <svg viewBox="0 0 520 310" fill="none" className="seo-search-art" aria-hidden="true">
    <path d="M25 280H495" stroke="currentColor" opacity=".2" />
    {kind === "catalog" ? <>
      <rect x="55" y="45" width="410" height="220" rx="4" fill="#fff" stroke="currentColor" strokeWidth="2" />
      <path d="M55 82H465M150 82V265" stroke="currentColor" strokeWidth="2" />
      {[110, 135, 160, 185].map(y => <path key={y} d={`M75 ${y}H125`} stroke="#073bff" strokeWidth="5" />)}
      {[180, 270, 360].map((x, i) => <g key={x}><rect x={x} y="108" width="70" height="83" fill={i === 1 ? "#ff601c" : "#e8edff"} /><path d={`M${x} 213h60m-60 15h40`} stroke="currentColor" strokeWidth="4" /><path d={`M${x + 20} 145h30m-15-15v30`} stroke={i === 1 ? "#fff" : "#073bff"} strokeWidth="2" /></g>)}
    </> : kind === "map" ? <>
      <path d="m50 75 130-35 155 40 135-30v190l-135 30-155-40-130 35Z" fill="#e8edff" stroke="currentColor" strokeWidth="2" />
      <path d="M180 40V230M335 80V270m-285-95 420-50M103 60l285 198" stroke="#fff" strokeWidth="13" />
      <path d="M305 115c0 33-45 78-45 78s-45-45-45-78a45 45 0 0 1 90 0Z" fill="#ff601c" stroke="currentColor" strokeWidth="2" /><circle cx="260" cy="113" r="15" fill="#f3f3ef" />
      <path d="m130 207 70-20m113 32 60-15" stroke="#073bff" strokeWidth="4" strokeDasharray="6 7" />
    </> : kind === "code" ? <>
      <rect x="50" y="48" width="330" height="210" rx="5" fill="#073bff" /><path d="m125 115-30 30 30 30m155-60 30 30-30 30m-65-75-30 90" stroke="#fff" strokeWidth="6" />
      <path d="M75 73H355" stroke="#fff" opacity=".4" /><path d="M88 220H210" stroke="#fff" strokeWidth="5" opacity=".4" />
      <rect x="330" y="170" width="130" height="95" fill="#ff601c" stroke="currentColor" strokeWidth="2" /><path d="m365 216 20 20 41-43" stroke="#fff" strokeWidth="8" />
    </> : kind === "property" ? <>
      <path d="M80 270V90h140v180M245 270V45h145v225M410 270V145h60v125" fill="#e8edff" stroke="currentColor" strokeWidth="2" />
      {[115, 155, 195].map(y => <g key={y}><path d={`M104 ${y}h28m30 0h28`} stroke="#073bff" strokeWidth="15" /><path d={`M270 ${y - 35}h29m30 0h29`} stroke="#073bff" strokeWidth="15" /></g>)}
      <path d="M140 270v-40h30v40M300 270v-45h35v45" stroke="currentColor" strokeWidth="2" />
      <circle cx="423" cy="83" r="35" fill="#ff601c" /><path d="M423 63v40m-20-20h40" stroke="#fff" strokeWidth="3" />
    </> : kind === "interiors" ? <>
      <path d="M60 265V55h400v210M60 55l75 55h250l75-55M135 110v155m250-155v155" fill="#e8edff" stroke="currentColor" strokeWidth="2" />
      <rect x="172" y="175" width="175" height="65" rx="12" fill="#ff601c" stroke="currentColor" strokeWidth="2" /><path d="M186 240v25m145-25v25M190 204h140m-70-28v28" stroke="currentColor" strokeWidth="2" />
      <path d="M260 110v34m-24 15h48l-10-15h-28Z" fill="#073bff" stroke="currentColor" strokeWidth="2" /><rect x="310" y="125" width="45" height="30" fill="#f3f3ef" stroke="currentColor" />
    </> : kind === "network" ? <>
      <path d="m260 150-145-70m145 70 145-70m-145 70-145 85m145-85 145 85" stroke="currentColor" strokeWidth="2" strokeDasharray="5 7" />
      {[[75, 48], [365, 48], [75, 207], [365, 207]].map(([x, y]) => <g key={`${x}-${y}`}><rect x={x} y={y} width="80" height="55" fill="#fff" stroke="#073bff" strokeWidth="2" /><path d={`M${x + 14} ${y + 17}h48m-48 12h35m-35 12h42`} stroke="#073bff" strokeWidth="3" /></g>)}
      <circle cx="260" cy="150" r="50" fill="#ff601c" /><path d="M260 120v60m-30-30h60m-51-21 42 42m0-42-42 42" stroke="#fff" strokeWidth="3" />
    </> : kind === "b2b" ? <>
      {[[45, 80], [200, 110], [355, 140]].map(([x, y], i) => <g key={x}><rect x={x} y={y} width="120" height="110" fill={i === 2 ? "#ff601c" : "#fff"} stroke="currentColor" strokeWidth="2" /><circle cx={x + 30} cy={y + 28} r="11" fill="#073bff" /><path d={`M${x + 20} ${y + 55}h80m-80 15h65m-65 15h45`} stroke="currentColor" strokeWidth="3" />{i < 2 && <path d={`M${x + 124} ${y + 55}h25m-8-8 8 8-8 8`} stroke="#073bff" strokeWidth="2" />}</g>)}
    </> : <>
      <path d="M70 65h310v130H150l-50 35v-35H70Z" fill="#fff" stroke="currentColor" strokeWidth="2" /><path d="M100 98h230m-230 22h200m-200 22h145" stroke="#073bff" strokeWidth="5" />
      <path d="M230 167h230v90h-35v25l-40-25H230Z" fill="#ff601c" stroke="currentColor" strokeWidth="2" /><path d="M255 195h170m-170 20h135m-135 20h95" stroke="#fff" strokeWidth="4" />
      <rect x="80" y="245" width="95" height="25" fill="#073bff" /><path d="M94 257h65" stroke="#fff" strokeWidth="3" />
    </>}
  </svg>;
}
