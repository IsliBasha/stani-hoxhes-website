// Mid-fi wireframe primitives. Light gray fills, monospace labels,
// occasional sketchy annotation. No external assets.

const WF = {
  ink: '#222',
  ink2: '#444',
  ink3: '#6b6b6b',
  line: '#cdcdcd',
  line2: '#dadada',
  fill: '#ececec',
  fill2: '#f4f4f4',
  fillDark: '#dadada',
  accent: '#3a6fb0',
  page: '#ffffff',
  mono: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
  sans: '-apple-system, "Segoe UI", system-ui, Roboto, sans-serif',
  hand: '"Patrick Hand", "Comic Sans MS", "Segoe Print", cursive',
};

// One-time CSS for the wireframe primitives.
if (typeof document !== 'undefined' && !document.getElementById('wf-styles')) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Inter:wght@400;500;600;700&display=swap';
  document.head.appendChild(link);

  const s = document.createElement('style');
  s.id = 'wf-styles';
  s.textContent = `
    .wf-art { font-family: ${WF.sans}; color: ${WF.ink}; background: ${WF.page}; overflow: hidden; }
    .wf-art *, .wf-art *::before, .wf-art *::after { box-sizing: border-box; }
    .wf-mono { font-family: ${WF.mono}; }
    .wf-hand { font-family: ${WF.hand}; }
    .wf-img {
      background:
        repeating-linear-gradient(135deg, transparent 0 9px, rgba(0,0,0,0.045) 9px 10px),
        ${WF.fill};
      border: 1px solid ${WF.line};
      position: relative;
      display: flex; align-items: center; justify-content: center;
      color: ${WF.ink3};
      font-family: ${WF.mono};
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      overflow: hidden;
    }
    .wf-img::before {
      content: ""; position: absolute; inset: 0;
      background:
        linear-gradient(45deg, transparent calc(50% - 0.5px), rgba(0,0,0,0.08) calc(50% - 0.5px) calc(50% + 0.5px), transparent calc(50% + 0.5px)),
        linear-gradient(-45deg, transparent calc(50% - 0.5px), rgba(0,0,0,0.08) calc(50% - 0.5px) calc(50% + 0.5px), transparent calc(50% + 0.5px));
      pointer-events: none;
    }
    .wf-img > span { position: relative; z-index: 1; background: rgba(255,255,255,0.7); padding: 3px 8px; border-radius: 2px; }
    .wf-bar { background: ${WF.ink2}; border-radius: 2px; }
    .wf-bar-light { background: ${WF.line}; border-radius: 2px; }
    .wf-chip {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 5px 10px; border: 1px solid ${WF.line};
      border-radius: 999px; font-size: 11px;
      font-family: ${WF.mono}; color: ${WF.ink2};
      background: #fff;
    }
    .wf-btn {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 12px 22px; border-radius: 4px;
      background: ${WF.ink}; color: #fff;
      font-size: 13px; font-weight: 500;
      letter-spacing: 0.04em;
    }
    .wf-btn-ghost {
      display: inline-flex; align-items: center; justify-content: center;
      padding: 12px 22px; border: 1px solid ${WF.ink}; color: ${WF.ink};
      font-size: 13px; font-weight: 500; background: #fff;
    }
    .wf-anno {
      font-family: ${WF.hand};
      color: ${WF.accent};
      font-size: 14px;
      line-height: 1.2;
    }
    .wf-anno-line {
      position: absolute;
      background: ${WF.accent};
      opacity: 0.6;
    }
    .wf-section-label {
      font-family: ${WF.mono};
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: ${WF.ink3};
    }
    .wf-h1 { font-family: ${WF.sans}; font-weight: 300; letter-spacing: -0.02em; line-height: 1; }
    .wf-h2 { font-family: ${WF.sans}; font-weight: 400; letter-spacing: -0.01em; line-height: 1.05; }
    .wf-body { font-size: 13px; color: ${WF.ink2}; line-height: 1.55; }
    .wf-divider { height: 1px; background: ${WF.line}; }
    .wf-divider-v { width: 1px; background: ${WF.line}; }
    .wf-icon {
      width: 28px; height: 28px; border: 1px solid ${WF.ink2};
      border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;
      color: ${WF.ink2};
    }
    .wf-pill {
      display: inline-flex; align-items: center; padding: 8px 14px;
      border-radius: 999px; background: #fff; border: 1px solid ${WF.line};
      font-size: 12px; color: ${WF.ink};
    }
    .wf-input {
      border: 1px solid ${WF.line}; padding: 12px 14px;
      font-family: ${WF.mono}; font-size: 12px; color: ${WF.ink3};
      background: #fff;
    }
    .wf-callout {
      position: absolute; pointer-events: none;
      font-family: ${WF.hand}; color: ${WF.accent}; font-size: 13px;
    }
  `;
  document.head.appendChild(s);
}

// Image placeholder with a label like "HERO" or "ROOM 01"
function ImgPH({ label, w, h, style = {}, dark = false, children }) {
  return (
    <div
      className="wf-img"
      style={{
        width: w, height: h,
        background: dark
          ? `repeating-linear-gradient(135deg, transparent 0 9px, rgba(255,255,255,0.06) 9px 10px), #2a2a2a`
          : undefined,
        color: dark ? 'rgba(255,255,255,0.7)' : undefined,
        ...style,
      }}
    >
      {label && <span style={dark ? { background: 'rgba(0,0,0,0.4)', color: 'rgba(255,255,255,0.85)' } : {}}>{label}</span>}
      {children}
    </div>
  );
}

// Faux text using stacked gray bars
function TextLines({ lines = 3, width = '100%', lineHeight = 8, gap = 8, last = 0.6, color }) {
  const c = color || WF.line;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, width }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} style={{
          height: lineHeight,
          width: i === lines - 1 ? `${last * 100}%` : '100%',
          background: c, borderRadius: 2,
        }} />
      ))}
    </div>
  );
}

// Section header with label + title
function SectionHead({ num, label, title, align = 'left', color, sub }) {
  return (
    <div style={{ textAlign: align, color: color || WF.ink }}>
      <div className="wf-section-label" style={{ color: color || WF.ink3 }}>
        {num && <span style={{ marginRight: 8 }}>{num}</span>}{label}
      </div>
      <div className="wf-h2" style={{ fontSize: 32, marginTop: 10, color: 'inherit' }}>{title}</div>
      {sub && <div className="wf-body" style={{ marginTop: 8, maxWidth: 480, color: color === '#fff' ? 'rgba(255,255,255,0.7)' : undefined, marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>{sub}</div>}
    </div>
  );
}

// Sketchy arrow annotation
function Anno({ children, style = {}, arrow = 'right' }) {
  return (
    <div className="wf-anno" style={{ position: 'absolute', ...style, display: 'flex', alignItems: 'center', gap: 6 }}>
      {arrow === 'left' && <span style={{ fontSize: 18 }}>↖</span>}
      <span>{children}</span>
      {arrow === 'right' && <span style={{ fontSize: 18 }}>↘</span>}
      {arrow === 'down' && <span style={{ fontSize: 18 }}>↓</span>}
    </div>
  );
}

Object.assign(window, { WF, ImgPH, TextLines, SectionHead, Anno });
