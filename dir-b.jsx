// Direction B — "Cinematic Story"
// Oversized type, dark hero, full-bleed alternating sections,
// horizontal-scroll rooms strip. Bolder, magazine-cover energy.

function DirB({ mobile = false }) {
  const W = mobile ? 360 : 1200;

  // ── NAV (floating over hero) ────────────────────────────
  const Nav = (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 5, padding: mobile ? '20px' : '28px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff' }}>
      <div style={{ fontSize: mobile ? 16 : 20, fontWeight: 700, letterSpacing: '0.02em' }}>halcyon/</div>
      {mobile ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 22 }}>
          <div style={{ height: 1.5, background: '#fff' }} /><div style={{ height: 1.5, background: '#fff' }} /><div style={{ height: 1.5, background: '#fff' }} />
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', gap: 32, fontSize: 13, fontWeight: 500 }}>
            <span>Story</span><span>Rooms</span><span>Gallery</span><span>Place</span><span>Contact</span>
          </div>
          <div style={{ background: '#fff', color: '#111', padding: '10px 20px', borderRadius: 999, fontSize: 13, fontWeight: 600 }}>Reserve →</div>
        </>
      )}
    </div>
  );

  // ── HERO ────────────────────────────────────────────────
  const Hero = (
    <div style={{ position: 'relative', height: mobile ? 720 : 880 }}>
      <ImgPH label="hero · cinematic wide shot · ocean at golden hour" dark w="100%" h="100%" style={{ position: 'absolute', inset: 0, border: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)' }} />
      {Nav}
      <div style={{ position: 'absolute', bottom: mobile ? 40 : 80, left: mobile ? 20 : 48, right: mobile ? 20 : 48, color: '#fff' }}>
        <div className="wf-mono" style={{ fontSize: 11, letterSpacing: '0.3em', opacity: 0.7, marginBottom: 18 }}>FILE NO. 047 · PORTO COVO</div>
        <div className="wf-h1" style={{ fontSize: mobile ? 56 : 156, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.85 }}>
          A long<br />slow<br /><span style={{ fontStyle: 'italic', fontWeight: 300 }}>summer.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 24, gap: 16, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 380, opacity: 0.85 }} className="wf-body">
            Twenty-two rooms on the cliffs, twenty minutes from anywhere worth being.
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ padding: '14px 24px', background: '#fff', color: '#111', fontWeight: 600, fontSize: 13 }}>Book a stay</div>
            <div style={{ padding: '14px 24px', border: '1px solid #fff', color: '#fff', fontSize: 13 }}>Watch film ▷</div>
          </div>
        </div>
      </div>
      {!mobile && <Anno style={{ top: 130, left: -130, color: WF.accent }} arrow="right">oversized italic display type</Anno>}
    </div>
  );

  // ── ABOUT (split-bleed) ─────────────────────────────────
  const About = (
    <div style={{ padding: mobile ? '80px 20px' : '160px 48px', background: '#fff' }}>
      <div className="wf-section-label">01 — THE HOUSE</div>
      <div className="wf-h1" style={{ fontSize: mobile ? 38 : 86, fontWeight: 600, marginTop: 18, maxWidth: 1000, letterSpacing: '-0.025em', lineHeight: 1.02 }}>
        Built in 1962. Reopened, slowly, in 2023.
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 80, marginTop: 64, alignItems: 'flex-start' }}>
        <div className="wf-body" style={{ fontSize: 15 }}>
          <TextLines lines={6} last={0.4} />
          <div style={{ marginTop: 24 }}><TextLines lines={4} last={0.6} /></div>
        </div>
        <div>
          <ImgPH label="interior · reading nook" w="100%" h={mobile ? 280 : 420} />
          <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between' }}>
            <span className="wf-mono" style={{ fontSize: 11, color: WF.ink3, letterSpacing: '0.1em' }}>FIG. 01 · LIBRARY</span>
            <span className="wf-mono" style={{ fontSize: 11, color: WF.ink3 }}>↓ MORE</span>
          </div>
        </div>
      </div>
    </div>
  );

  // ── ROOMS (horizontal scroll feel) ──────────────────────
  const roomList = [
    ['Cliff Room', '€220', '24m²'],
    ['Garden Suite', '€340', '42m²'],
    ['The Bay House', '€680', '78m²'],
    ['Library Loft', '€420', '52m²'],
  ];
  const Rooms = (
    <div style={{ padding: mobile ? '80px 0 80px 20px' : '160px 0 160px 48px', background: '#111', color: '#fff' }}>
      <div style={{ paddingRight: mobile ? 20 : 48, marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: mobile ? 'column' : 'row', gap: 16 }}>
        <div>
          <div className="wf-section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>02 — ROOMS</div>
          <div className="wf-h1" style={{ fontSize: mobile ? 44 : 96, fontWeight: 600, marginTop: 18, color: '#fff' }}>Pick a room.</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ width: 44, height: 44, border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>←</div>
          <div style={{ width: 44, height: 44, border: '1px solid #fff', background: '#fff', color: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>→</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 24, overflow: 'hidden', paddingRight: 60 }}>
        {roomList.map(([name, price, sqm], i) => (
          <div key={name} style={{ flex: `0 0 ${mobile ? 260 : 340}px` }}>
            <ImgPH label={`room · 0${i + 1}`} dark w="100%" h={mobile ? 340 : 440} />
            <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div className="wf-h2" style={{ fontSize: 22, fontWeight: 500, color: '#fff' }}>{name}</div>
              <div className="wf-mono" style={{ fontSize: 12, opacity: 0.6 }}>{sqm}</div>
            </div>
            <div style={{ marginTop: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, opacity: 0.7 }}>From {price} / night</span>
              <span style={{ fontSize: 12, opacity: 0.7 }}>view →</span>
            </div>
          </div>
        ))}
        {!mobile && <div style={{ flex: '0 0 200px', display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.4)' }} className="wf-mono">scroll →</div>}
      </div>
    </div>
  );

  // ── GALLERY MOSAIC ──────────────────────────────────────
  const Gallery = (
    <div style={{ padding: mobile ? '80px 20px' : '160px 48px' }}>
      <div className="wf-section-label">03 — GALLERY</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 18, flexDirection: mobile ? 'column' : 'row', gap: 16 }}>
        <div className="wf-h1" style={{ fontSize: mobile ? 38 : 86, fontWeight: 600, letterSpacing: '-0.025em' }}>Looking around.</div>
        <div className="wf-mono" style={{ fontSize: 11, color: WF.ink3, letterSpacing: '0.14em' }}>34 IMAGES · OPEN ALL ↗</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(6, 1fr)' : 'repeat(12, 1fr)', gridAutoRows: mobile ? 80 : 120, gap: 8, marginTop: 56 }}>
        <ImgPH label="01" style={{ gridColumn: 'span 6', gridRow: 'span 3' }} />
        <ImgPH label="02" style={{ gridColumn: 'span 3', gridRow: 'span 2' }} />
        <ImgPH label="03" style={{ gridColumn: 'span 3', gridRow: 'span 2' }} />
        <ImgPH label="04" style={{ gridColumn: 'span 3' }} />
        <ImgPH label="05" style={{ gridColumn: 'span 3' }} />
        <ImgPH label="06" style={{ gridColumn: 'span 4', gridRow: 'span 2' }} />
        <ImgPH label="07" style={{ gridColumn: 'span 4', gridRow: 'span 2' }} />
        <ImgPH label="08" style={{ gridColumn: 'span 4', gridRow: 'span 2' }} />
      </div>
    </div>
  );

  // ── AMENITIES (numbered manifesto) ──────────────────────
  const amen = [
    ['01', 'Pool', 'Heated, ocean-facing, open to midnight.'],
    ['02', 'Kitchen', 'Set menu, single seating, communal table.'],
    ['03', 'Spa', 'Two rooms. Whatever you need, ask.'],
    ['04', 'Garden', 'Citrus, herbs, a few stubborn olive trees.'],
    ['05', 'Library', 'Mostly novels. Take one home.'],
    ['06', 'Boat', 'Wooden launch, half-day charters.'],
  ];
  const Amenities = (
    <div style={{ padding: mobile ? '80px 20px' : '160px 48px', background: WF.fill2 }}>
      <div className="wf-section-label">04 — AMENITIES</div>
      <div className="wf-h1" style={{ fontSize: mobile ? 38 : 86, fontWeight: 600, marginTop: 18, letterSpacing: '-0.025em' }}>Six things, done well.</div>
      <div style={{ marginTop: 64, borderTop: `1px solid ${WF.line}` }}>
        {amen.map((a) => (
          <div key={a[0]} style={{ display: 'grid', gridTemplateColumns: mobile ? '40px 1fr' : '80px 1fr 2fr 100px', gap: mobile ? 16 : 32, padding: mobile ? '20px 0' : '28px 0', borderBottom: `1px solid ${WF.line}`, alignItems: 'baseline' }}>
            <div className="wf-mono" style={{ color: WF.ink3, fontSize: 13 }}>{a[0]}</div>
            <div className="wf-h2" style={{ fontSize: mobile ? 22 : 32, fontWeight: 500 }}>{a[1]}</div>
            {!mobile && <div className="wf-body">{a[2]}</div>}
            {!mobile && <div className="wf-mono" style={{ fontSize: 11, color: WF.ink3, textAlign: 'right' }}>READ →</div>}
            {mobile && <div className="wf-body" style={{ gridColumn: '1 / -1', marginTop: 4 }}>{a[2]}</div>}
          </div>
        ))}
      </div>
    </div>
  );

  // ── LOCATION (dark full-bleed map) ──────────────────────
  const Location = (
    <div style={{ padding: mobile ? '0 0 80px' : '0 0 160px', background: '#111', color: '#fff' }}>
      <div style={{ padding: mobile ? '80px 20px 40px' : '160px 48px 60px' }}>
        <div className="wf-section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>05 — PLACE</div>
        <div className="wf-h1" style={{ fontSize: mobile ? 38 : 86, fontWeight: 600, marginTop: 18, color: '#fff', letterSpacing: '-0.025em' }}>
          41.3°N, 8.8°W —<br />the south-west corner.
        </div>
      </div>
      <div style={{ position: 'relative', height: mobile ? 360 : 540, margin: mobile ? '0 20px' : '0 48px' }}>
        <ImgPH label="map · coastline + village" dark w="100%" h="100%" style={{ position: 'absolute', inset: 0, border: 'none' }} />
        {/* Annotated pins */}
        {[
          ['us.', '52%', '46%', '#fff'],
          ['village', '64%', '38%', 'rgba(255,255,255,0.5)'],
          ['cove', '46%', '58%', 'rgba(255,255,255,0.5)'],
          ['airport', '20%', '22%', 'rgba(255,255,255,0.5)'],
        ].map(([l, left, top, c]) => (
          <div key={l} style={{ position: 'absolute', left, top, transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
            <span className="wf-mono" style={{ fontSize: 11, color: c, letterSpacing: '0.1em' }}>{l}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: mobile ? '32px 20px 0' : '40px 48px 0', display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 24 }}>
        {[['Airport', '90 min'], ['Old Town', '20 min'], ['Beach', '4 min walk'], ['Vineyard', '10 min']].map((p) => (
          <div key={p[0]} style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 14 }}>
            <div className="wf-mono" style={{ fontSize: 10, letterSpacing: '0.2em', opacity: 0.5 }}>{p[0].toUpperCase()}</div>
            <div className="wf-h2" style={{ fontSize: 22, fontWeight: 500, marginTop: 8, color: '#fff' }}>{p[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── CONTACT (split image + form) ────────────────────────
  const Contact = (
    <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1.2fr' }}>
      <ImgPH label="reception desk" w="100%" h={mobile ? 240 : 720} style={{ border: 'none' }} />
      <div style={{ padding: mobile ? '60px 20px' : '120px 80px' }}>
        <div className="wf-section-label">06 — WRITE</div>
        <div className="wf-h1" style={{ fontSize: mobile ? 38 : 64, fontWeight: 600, marginTop: 18, letterSpacing: '-0.025em' }}>Send a note.</div>
        <div className="wf-body" style={{ marginTop: 16, maxWidth: 400 }}>We answer everything by hand, usually within a day.</div>
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 0, borderTop: `1px solid ${WF.ink}` }}>
          {['Name', 'Email', 'When', 'Tell us about your trip'].map((l, i) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', padding: '18px 0', borderBottom: `1px solid ${WF.ink}` }}>
              <div className="wf-mono" style={{ fontSize: 11, letterSpacing: '0.2em', width: 90, color: WF.ink3 }}>{(i + 1).toString().padStart(2, '0')}</div>
              <div style={{ flex: 1, color: WF.ink3 }}>{l}</div>
              <div style={{ color: WF.ink3 }}>→</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 16, background: '#111', color: '#fff', padding: '18px 32px', fontWeight: 600 }}>Send enquiry &nbsp;→</div>
      </div>
    </div>
  );

  const Footer = (
    <div style={{ padding: mobile ? '40px 20px' : '60px 48px', borderTop: `1px solid ${WF.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: mobile ? 'column' : 'row', gap: 24 }}>
      <div className="wf-h1" style={{ fontSize: mobile ? 56 : 140, fontWeight: 700, letterSpacing: '-0.04em' }}>halcyon/</div>
      <div className="wf-mono" style={{ fontSize: 11, color: WF.ink3, letterSpacing: '0.14em' }}>EST. MMXXIII · © {new Date().getFullYear()}</div>
    </div>
  );

  return (
    <div className="wf-art" style={{ width: W, position: 'relative' }}>
      {Hero}{About}{Rooms}{Gallery}{Amenities}{Location}{Contact}{Footer}
    </div>
  );
}

window.DirB = DirB;
