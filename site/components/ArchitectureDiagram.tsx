/**
 * SVG Architecture Diagram — replaces ASCII art with a proper visual.
 * Uses real brand colors and clean node-edge layout.
 */
export function ArchitectureDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 520"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="ugc-mediaops-kit pipeline architecture diagram"
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="8" markerHeight="6" orient="auto-start-auto">
          <path d="M0,0 L10,3.5 L0,7" fill="#94a3b8" />
        </marker>
        <marker id="arrow-accent" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="8" markerHeight="6" orient="auto-start-auto">
          <path d="M0,0 L10,3.5 L0,7" fill="#1868db" />
        </marker>
        <linearGradient id="pipeline-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6f8fa" />
          <stop offset="100%" stopColor="#eef1f4" />
        </linearGradient>
        <filter id="shadow" x="-4%" y="-4%" width="108%" height="108%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.06" />
        </filter>
      </defs>

      {/* Background frame */}
      <rect x="60" y="30" width="680" height="340" rx="16" fill="url(#pipeline-bg)" stroke="#d1d9e0" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="400" y="58" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1f2328" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif">ugc-mediaops-kit</text>

      {/* ── Row 1: Input → Schema → Broker → Pipeline ── */}
      {/* Creative Brief input */}
      <rect x="0" y="95" width="50" height="30" rx="6" fill="#ddf4ff" stroke="#b6d7f8" strokeWidth="1" filter="url(#shadow)" />
      <text x="25" y="114" textAnchor="middle" fontSize="8" fill="#0550ae" fontWeight="600" fontFamily="ui-monospace, monospace">Brief</text>
      <line x1="50" y1="110" x2="85" y2="110" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Schema Validator */}
      <rect x="90" y="85" width="120" height="50" rx="10" fill="#ffffff" stroke="#d1d9e0" strokeWidth="1.5" filter="url(#shadow)" />
      <text x="150" y="107" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f2328" fontFamily="-apple-system, sans-serif">Schema</text>
      <text x="150" y="122" textAnchor="middle" fontSize="9" fill="#59636e" fontFamily="-apple-system, sans-serif">Validator</text>

      {/* Arrow → Broker */}
      <line x1="210" y1="110" x2="245" y2="110" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Provider Broker */}
      <rect x="250" y="85" width="120" height="50" rx="10" fill="#ffffff" stroke="#1868db" strokeWidth="2" filter="url(#shadow)" />
      <text x="310" y="107" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1868db" fontFamily="-apple-system, sans-serif">Provider</text>
      <text x="310" y="122" textAnchor="middle" fontSize="9" fill="#0550ae" fontFamily="-apple-system, sans-serif">Broker</text>

      {/* Arrow → Pipeline Runner */}
      <line x1="370" y1="110" x2="405" y2="110" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Pipeline Runner */}
      <rect x="410" y="85" width="120" height="50" rx="10" fill="#ffffff" stroke="#d1d9e0" strokeWidth="1.5" filter="url(#shadow)" />
      <text x="470" y="107" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f2328" fontFamily="-apple-system, sans-serif">Pipeline</text>
      <text x="470" y="122" textAnchor="middle" fontSize="9" fill="#59636e" fontFamily="-apple-system, sans-serif">Runner</text>

      {/* ── Row 2: Brand Presets + QA/Eval ── */}
      {/* Broker → Brand Presets */}
      <line x1="310" y1="135" x2="310" y2="180" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Brand Presets */}
      <rect x="250" y="185" width="120" height="50" rx="10" fill="#ffffff" stroke="#d1d9e0" strokeWidth="1.5" filter="url(#shadow)" />
      <text x="310" y="207" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f2328" fontFamily="-apple-system, sans-serif">Brand</text>
      <text x="310" y="222" textAnchor="middle" fontSize="9" fill="#59636e" fontFamily="-apple-system, sans-serif">Presets</text>

      {/* Pipeline → QA/Eval */}
      <line x1="470" y1="135" x2="470" y2="180" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* QA / Eval */}
      <rect x="410" y="185" width="120" height="50" rx="10" fill="#ffffff" stroke="#d1d9e0" strokeWidth="1.5" filter="url(#shadow)" />
      <text x="470" y="207" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f2328" fontFamily="-apple-system, sans-serif">QA / Eval</text>
      <text x="470" y="222" textAnchor="middle" fontSize="9" fill="#59636e" fontFamily="-apple-system, sans-serif">Engine</text>

      {/* ── Row 3: Export Packager ── */}
      <line x1="310" y1="235" x2="390" y2="285" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <line x1="470" y1="235" x2="390" y2="285" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Export Packager */}
      <rect x="320" y="285" width="140" height="50" rx="10" fill="#ffffff" stroke="#1a7f37" strokeWidth="2" filter="url(#shadow)" />
      <text x="390" y="307" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1a7f37" fontFamily="-apple-system, sans-serif">Export</text>
      <text x="390" y="322" textAnchor="middle" fontSize="9" fill="#1a7f37" fontFamily="-apple-system, sans-serif">Packager</text>

      {/* ── Provider column (right side) ── */}
      {/* Broker → Providers */}
      <line x1="370" y1="100" x2="590" y2="88" stroke="#1868db" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrow-accent)" />

      {/* fal */}
      <rect x="595" y="72" width="85" height="36" rx="8" fill="#6366f1" filter="url(#shadow)" />
      <text x="637" y="95" textAnchor="middle" fontSize="12" fontWeight="700" fill="#ffffff" fontFamily="-apple-system, sans-serif">fal</text>
      <text x="637" y="55" textAnchor="middle" fontSize="8" fill="#59636e" fontFamily="-apple-system, sans-serif">video / audio</text>

      {/* Gemini */}
      <rect x="595" y="120" width="85" height="36" rx="8" fill="#8E75B2" filter="url(#shadow)" />
      <text x="637" y="143" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff" fontFamily="-apple-system, sans-serif">Gemini</text>
      <text x="637" y="165" textAnchor="middle" fontSize="8" fill="#59636e" fontFamily="-apple-system, sans-serif">fast stills</text>

      {/* Imagen */}
      <rect x="595" y="168" width="85" height="36" rx="8" fill="#4285F4" filter="url(#shadow)" />
      <text x="637" y="191" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff" fontFamily="-apple-system, sans-serif">Imagen</text>
      <text x="637" y="213" textAnchor="middle" fontSize="8" fill="#59636e" fontFamily="-apple-system, sans-serif">premium stills</text>

      {/* OpenAI */}
      <rect x="595" y="216" width="85" height="36" rx="8" fill="#10A37F" filter="url(#shadow)" />
      <text x="637" y="239" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff" fontFamily="-apple-system, sans-serif">OpenAI</text>
      <text x="637" y="261" textAnchor="middle" fontSize="8" fill="#59636e" fontFamily="-apple-system, sans-serif">eval / QA</text>

      {/* Broker arrows to other providers */}
      <line x1="370" y1="110" x2="590" y2="138" stroke="#8E75B2" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="370" y1="115" x2="590" y2="186" stroke="#4285F4" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="470" y1="210" x2="590" y2="234" stroke="#10A37F" strokeWidth="1" strokeDasharray="4 3" />

      {/* n8n orchestration note */}
      <rect x="695" y="136" width="65" height="28" rx="6" fill="#EA4B71" filter="url(#shadow)" />
      <text x="727" y="155" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff" fontFamily="-apple-system, sans-serif">n8n</text>
      <text x="727" y="125" textAnchor="middle" fontSize="7" fill="#59636e" fontFamily="-apple-system, sans-serif">orchestration</text>

      {/* ── Output platforms (bottom) ── */}
      <line x1="340" y1="335" x2="220" y2="395" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <line x1="390" y1="335" x2="390" y2="395" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <line x1="440" y1="335" x2="560" y2="395" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* TikTok */}
      <rect x="170" y="400" width="100" height="44" rx="10" fill="#000000" filter="url(#shadow)" />
      <text x="220" y="418" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ffffff" fontFamily="-apple-system, sans-serif">TikTok</text>
      <text x="220" y="434" textAnchor="middle" fontSize="9" fill="#999999" fontFamily="-apple-system, sans-serif">9:16</text>

      {/* Reels */}
      <rect x="340" y="400" width="100" height="44" rx="10" fill="#E4405F" filter="url(#shadow)" />
      <text x="390" y="418" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ffffff" fontFamily="-apple-system, sans-serif">Reels</text>
      <text x="390" y="434" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="-apple-system, sans-serif">9:16</text>

      {/* YouTube */}
      <rect x="510" y="400" width="100" height="44" rx="10" fill="#FF0000" filter="url(#shadow)" />
      <text x="560" y="418" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ffffff" fontFamily="-apple-system, sans-serif">YouTube</text>
      <text x="560" y="434" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="-apple-system, sans-serif">16:9 / 9:16</text>

      {/* ── Labels ── */}
      <text x="85" y="385" fontSize="9" fill="#818b98" fontFamily="-apple-system, sans-serif" fontWeight="500">PUBLISH TARGETS</text>
      <text x="600" y="62" fontSize="9" fill="#818b98" fontFamily="-apple-system, sans-serif" fontWeight="500">PROVIDERS</text>

      {/* Pipeline flow label */}
      <text x="160" y="78" fontSize="8" fill="#818b98" fontFamily="ui-monospace, monospace">brief → generate → polish → export → evaluate → publish</text>
    </svg>
  );
}

/**
 * Compact inline diagram for the hero section.
 */
export function HeroDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 380 340"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Pipeline flow overview"
    >
      <defs>
        <marker id="ha" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="7" markerHeight="5" orient="auto-start-auto">
          <path d="M0,0 L10,3.5 L0,7" fill="#94a3b8" />
        </marker>
        <filter id="hs" x="-4%" y="-4%" width="108%" height="108%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.05" />
        </filter>
      </defs>

      {/* Pipeline stages - vertical flow */}
      {[
        { y: 10, label: "Creative Brief", sub: "schema validated", color: "#1868db", bg: "#ddf4ff" },
        { y: 65, label: "Provider Broker", sub: "fal · Gemini · Imagen", color: "#6366f1", bg: "#eef2ff" },
        { y: 120, label: "Pipeline Runner", sub: "generate → polish", color: "#1f2328", bg: "#f6f8fa" },
        { y: 175, label: "Brand + QA", sub: "presets · eval gate", color: "#9a6700", bg: "#fff8e1" },
        { y: 230, label: "Export Packager", sub: "9:16 · 16:9 · 1:1", color: "#1a7f37", bg: "#dcfce7" },
        { y: 285, label: "Publish Handoff", sub: "TikTok · Reels · YouTube", color: "#1f2328", bg: "#f6f8fa" },
      ].map((stage, i) => (
        <g key={stage.label}>
          <rect x="40" y={stage.y} width="300" height="42" rx="10" fill={stage.bg} stroke="#d1d9e0" strokeWidth="1" filter="url(#hs)" />
          <text x="60" y={stage.y + 18} fontSize="12" fontWeight="600" fill={stage.color} fontFamily="-apple-system, sans-serif">{stage.label}</text>
          <text x="60" y={stage.y + 33} fontSize="9" fill="#818b98" fontFamily="-apple-system, sans-serif">{stage.sub}</text>
          <text x="325" y={stage.y + 28} fontSize="16" fill="#c8cdd2" fontFamily="-apple-system, sans-serif" textAnchor="end" fontWeight="600">{i + 1}</text>
          {i < 5 && <line x1="190" y1={stage.y + 42} x2="190" y2={stage.y + 55} stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#ha)" />}
        </g>
      ))}
    </svg>
  );
}
