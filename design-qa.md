# Homepage hero and BTS visual QA

final result: passed

## Visual targets and scope

- Hero source: user attachment `C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-f37e5ca7-81f0-49e2-824a-0ca13e42ef8d.png` (357 × 372).
- BTS source: user attachment `C:/Users/ADMINI~1/AppData/Local/Temp/codex-clipboard-9745bd1e-0d7e-441d-a439-e7d5aec6643f.png` (1065 × 681).
- Adapt these compositions to the existing homepage. The user's subsequent instruction explicitly requires the same hero typography on mobile and desktop. Retain the existing bold Impact headline and Instrument Serif treatment rather than the lighter type in the reference.
- BTS uses the eight supplied videos, full color, studio blue, paper background, and orange accents as requested. Preserve the existing selected-film gallery and place BTS immediately after it.

## Evidence

Browser: Codex in-app browser, local Next.js development server.

- `.tmp/qa/hero-mobile.png`: 390 × 650 capture, hero visible below the 74px navigation.
- `.tmp/qa/hero-desktop.png`: 1440 × 950 capture.
- `.tmp/qa/bts-desktop.png`: 1440 × 1053 section capture.
- `.tmp/qa/hero-comparison.png`: reference and final mobile hero together; reference resized proportionally to 390px wide and implementation cropped below navigation. Intentional section-height difference: 406px scaled reference versus 460px implementation.
- `.tmp/qa/bts-comparison.png`: reference and rendered desktop BTS together, both resized proportionally to 1000px wide. Compare composition rather than identical content or section height.
- Screenshots and comparison images are local QA artifacts in the ignored `.tmp` directory.
- Inspected rendered mobile BTS: two staggered columns with all eight clips, readable introduction, notes, and captions.
- Additional DOM checks at 320px and 390px: no horizontal document overflow. Desktop check at 1440px.

## Fidelity surfaces

- Typography: verified computed Impact headline and Instrument Serif Kolkata fonts match between mobile and desktop. Existing serif CTA and mixed capability typography retained. BTS uses the site's sans-serif/serif pairing.
- Spacing/layout: paper panel, four tilted frames, two original stickers, centered hero copy and blue CTA. BTS preserves the reference's stepped five-column composition and aligned lower edge, with two columns on mobile.
- Colors/tokens: existing blue, orange and off-white palette. Color BTS footage intentionally replaces the monochrome reference photography.
- Asset quality: both supplied stickers loaded with their transparent outer padding trimmed through Cloudinary. All eight BTS video elements reached readyState 4 without media errors. Cloudinary delivers optimized MP4 sources and still-image posters; decorative video loads only near the viewport and pauses offscreen through the existing AmbientVideo component.
- Copy/content: hero heading and description retained. BTS-specific heading, introductory copy, notes and eight captions replace the unrelated photography copy.

## Iterations and interactions

1. Initial mobile review found unnecessary vertical hero space. Reduced mobile panel height from 560px to 460px, repositioned the lower frames, and kept the sticker clear of capability labels. Recaptured and compared the final mobile hero.
2. User flagged mobile/desktop typography differences. Removed mobile font-family, line-height, letter-spacing and serif-size overrides. Confirmed matching computed font families and captured the corrected mobile and desktop states.
3. Keyboard-activated Pause the moments: aria-pressed became false, label changed to Play the moments, and all eight videos paused. Activated Play the moments to restore motion. Existing reduced-motion preference is respected on initial load.
4. Browser console error inspection returned no errors.
5. Focused ESLint, TypeScript, production build (123 generated pages), and git diff whitespace checks passed.

## Remaining findings

No actionable P0/P1/P2 findings. Intentional adaptations are documented above. Video subjects vary during playback, so still captures are not identical frames. No new image assets or dependencies were required.
