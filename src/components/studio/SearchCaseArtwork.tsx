import type { CSSProperties } from "react";
import type { SearchCaseStudy } from "@/data/searchCaseStudies";

const artwork = {
  film: {
    paper: "#dbddff", ink: "#252f93", accent: "#ff784d",
    scene: <><rect x="99" y="81" width="282" height="140" rx="10"/><path d="M100 110h280M122 95h8m9 0h8m9 0h8M125 184l45-38 33 28 28-20 46 40M128 200h224"/><circle cx="303" cy="154" r="24" fill="var(--art-accent)"/><path d="m298 144 15 10-15 10z"/><path d="M127 239h225m-180-7v14m60-14v14m60-14v14"/></>,
  },
  renovation: {
    paper: "#fae1c7", ink: "#633818", accent: "#fb794d",
    scene: <><path d="M103 93h274v140H103zM199 93v73h89v67m-185-62h54m16 0h26m34 0h55m43-78v54h46M149 93v38h50"/><path d="M113 222h28v-31h-28zm98-117h63v46h-63zm93 112h55v-29h-55z" fill="var(--art-accent)"/><path d="M103 249h274m-274-7v14m274-14v14M88 92v142m-7-142h14m-14 142h14"/></>,
  },
  hospitality: {
    paper: "#e3e8ff", ink: "#2443a1", accent: "#f37154",
    scene: <><path d="M109 128h262m-262 53h262m-197-91v147m63-147v147m66-147v147M109 220l262-110"/><rect x="108" y="88" width="264" height="150" rx="12"/><path d="M158 118c-11-21 19-32 29-13 5 11-7 25-14 32-5-6-11-12-15-19zm64 49c-11-21 19-32 29-13 5 11-7 25-14 32-5-6-11-12-15-19zm67-42c-11-21 19-32 29-13 5 11-7 25-14 32-5-6-11-12-15-19z" fill="var(--art-accent)"/><path d="M123 253h86m53 0h94"/></>,
  },
  research: {
    paper: "#dbeee7", ink: "#19594d", accent: "#71bd9d",
    scene: <><rect x="111" y="88" width="178" height="111" rx="12"/><rect x="191" y="135" width="178" height="101" rx="12" fill="var(--art-paper)"/><path d="M130 110h80m-80 18h105m-105 18h40m42 57h107m-107-16h134"/><path d="M246 99v36m-18-18h36m-30-12 24 24m0-24-24 24" strokeWidth="3"/><circle cx="220" cy="157" r="8" fill="var(--art-accent)"/><path d="M237 157h54m-156 66h35m116 29h83"/></>,
  },
  storefront: {
    paper: "#ffe6d5", ink: "#8a432a", accent: "#ff9064",
    scene: <><rect x="95" y="96" width="118" height="131" rx="8"/><rect x="267" y="96" width="118" height="131" rx="8"/><path d="M95 122h118m54 0h118M111 180h87m-87 14h57m116-14h84m-84 14h57M224 160h33m-9-9 9 9-9 9"/><path d="M111 135h87v32h-87zm173 0h38v32h-38zm46 0h38v32h-38z" fill="var(--art-accent)"/><circle cx="110" cy="109" r="2"/><circle cx="282" cy="109" r="2"/></>,
  },
  editorial: {
    paper: "#ebe3fa", ink: "#55377a", accent: "#c698ef",
    scene: <><rect x="177" y="80" width="126" height="73" rx="8" fill="var(--art-accent)"/><path d="M198 102h84m-84 14h60m-60 14h74M240 153v29m-112 22v-22h224v22m-112-22v22"/><rect x="88" y="204" width="80" height="45" rx="6"/><rect x="200" y="204" width="80" height="45" rx="6"/><rect x="312" y="204" width="80" height="45" rx="6"/><path d="M100 220h56m-56 12h40m72-12h56m-56 12h40m72-12h56m-56 12h40"/></>,
  },
  clinic: {
    paper: "#f4e2ef", ink: "#773960", accent: "#e89fc5",
    scene: <><rect x="118" y="86" width="150" height="150" rx="10"/><path d="M118 125h150m-125-20h7m10 0h7m10 0h7M142 151h72m-72 20h96m-96 20h52"/><rect x="233" y="147" width="128" height="91" rx="10" fill="var(--art-paper)"/><path d="M278 182h38m-19-19v38" strokeWidth="6"/><path d="M250 223h93m-204 29h100" stroke="var(--art-accent)" strokeWidth="3"/></>,
  },
};

export function SearchCaseArtwork({ visual }: { visual: SearchCaseStudy["visual"] }) {
  const { paper, ink, accent, scene } = artwork[visual];

  return (
    <svg viewBox="0 0 480 300" className="search-case-art" aria-hidden="true" focusable="false"
      style={{ "--art-paper": paper, "--art-accent": accent } as CSSProperties}>
      <rect width="480" height="300" fill={paper}/>
      <g stroke={ink} fill="none">
        <rect x="22" y="22" width="436" height="256" rx="10" opacity=".23"/>
        <path d="M22 61h436M22 265h436M58 61v204m364-204v204M38 42h8m7 0h8m7 0h8m316 0h46" opacity=".25"/>
        <circle cx="240" cy="164" r="95" opacity=".15"/>
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{scene}</g>
      </g>
    </svg>
  );
}
