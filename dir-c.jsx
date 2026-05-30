// Direction C — "Asymmetric Atelier"
// Vertical side-nav, multi-image collage hero, off-grid sections,
// expressive type, chip-based amenities.

function DirC({ mobile = false }) {
  const W = mobile ? 360 : 1200;
  const sideNavW = mobile ? 0 : 80;

  // ── SIDE NAV ───────────────────────────────────────────
  const SideNav = !mobile && (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: sideNavW, borderRight: `1px solid ${WF.line}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '32px 0', zIndex: 4, background: '#fff' }}>
      <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.08em' }}>S/V</div>
      <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'flex', gap: 28, fontSize: 11, letterSpacing: '0.3em', color: WF.ink2 }} className="wf-mono">
        <span>STORY</span><span>STAY</span><span>SEE</span><span>ASK</span>
      </div>
      <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: 10, letterSpacing: '0.2em', color: WF.ink3 }} className="wf-mono">
        N 36.4 · W 4.5
      </div>
    </div>
  );

  // ── MOBILE NAV ─────────────────────────────────────────
  const MobNav = mobile && (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px', borderBottom: `1px solid ${WF.line}` }}>
      <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '0.06em' }}>S/V atelier</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 22 }}>
        <div style={{ height: 1.5, background: WF.ink }} /><div style={{ height: 1.5, background: WF.ink }} /><div style={{ height: 1.5, background: WF.ink }} />
      </div>
    </div>
  );

  const body = (
    <div style={{ marginLeft: sideNavW }}>
      {/* ── HERO ── */}
      <div style={{ padding: mobile ? '24px 20px 40px' : '60px 60px 80px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(6,1fr)' : 'repeat(12, 1fr)', gridAutoRows: mobile ? 50 : 60, gap: 16 }}>
          <div style={{ gridColumn: mobile ? '1 / -1' : '1 / 8', gridRow: '1 / 2', display: 'flex', alignItems: 'center' }}>
            <div className="wf-section-label">FIELD NOTES · ANDALUSIA</div>
          </div>
          <div style={{ gridColumn: mobile ? '1 / -1' : '1 / 8', gridRow: mobile ? '2 / 5' : '2 / 6' }}>
            <div className="wf-h1" style={{ fontSize: mobile ? 56 : 140, fontWeight: 400, lineHeight: 0.92, letterSpacing: '-0.03em' }}>
              Sol y <span style={{ fontStyle: 'italic', color: WF.accent }}>Viento</span>
            </div>
          </div>
          <ImgPH label="hero · main" style={{ gridColumn: mobile ? '1 / -1' : '8 / 13', gridRow: mobile ? '5 / 9' : '1 / 7' }} w="100%" h="100%" />
          <ImgPH label="patio" style={{ gridColumn: mobile ? '1 / 4' : '1 / 4', gridRow: mobile ? '9 / 12' : '6 / 10' }} w="100%" h="100%" />
          <div style={{ gridColumn: mobile ? '4 / -1' : '4 / 8', gridRow: mobile ? '9 / 12' : '6 / 10', padding: mobile ? '4px 0' : '20px 8px' }}>
            <div className="wf-body" style={{ fontSize: 14 }}>
              An eight-room farmhouse, twenty kilometres inland from the sea, surrounded by olive terraces.
            </div>
            <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span className="wf-pill" style={{ background: WF.ink, color: '#fff', border: 'none' }}>Reserve</span>
              <span className="wf-pill">↓ scroll</span>
            </div>
          </div>
          <ImgPH label="detail · door" style={{ gridColumn: mobile ? '1 / 4' : '8 / 11', gridRow: mobile ? '12 / 14' : '7 / 10' }} w="100%" h="100%" />
          <ImgPH label="kitchen" style={{ gridColumn: mobile ? '4 / -1' : '11 / 13', gridRow: mobile ? '12 / 14' : '7 / 10' }} w="100%" h="100%" />
        </div>
        {!mobile && <Anno style={{ top: 250, left: 360 }} arrow="left">multi-image collage hero</Anno>}
      </div>

      {/* ── ABOUT (indented) ── */}
      <div style={{ padding: mobile ? '60px 20px' : '120px 60px', borderTop: `1px solid ${WF.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 2fr', gap: mobile ? 32 : 80 }}>
          <div>
            <div className="wf-section-label">§ 01 — STORY</div>
            <div className="wf-h2" style={{ fontSize: 18, marginTop: 24, fontWeight: 500, color: WF.ink3 }}>
              Three sisters, one tractor, a stubborn idea.
            </div>
          </div>
          <div>
            <div className="wf-h1" style={{ fontSize: mobile ? 28 : 44, fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', maxWidth: 720 }}>
              The house came back into the family in 2019. We spent four years putting it back together, mostly with our hands. Eight rooms now open onto the courtyard, and the kitchen is the heart of everything.
            </div>
            <div style={{ marginTop: 40, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[['8', 'ROOMS'], ['12 km', 'TO COAST'], ['1881', 'BUILT']].map((s) => (
                <div key={s[1]}>
                  <div className="wf-h2" style={{ fontSize: 32, fontWeight: 400, fontStyle: 'italic', color: WF.accent }}>{s[0]}</div>
                  <div className="wf-section-label" style={{ marginTop: 6 }}>{s[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── ROOMS (staircase) ── */}
      <div style={{ padding: mobile ? '60px 20px' : '120px 60px', background: WF.fill2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48, flexDirection: mobile ? 'column' : 'row', gap: 16 }}>
          <div>
            <div className="wf-section-label">§ 02 — ROOMS</div>
            <div className="wf-h1" style={{ fontSize: mobile ? 36 : 64, fontWeight: 400, marginTop: 12, letterSpacing: '-0.02em' }}>Eight rooms,<br />no two alike.</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span className="wf-chip">All</span><span className="wf-chip" style={{ background: WF.ink, color: '#fff', borderColor: WF.ink }}>Rooms</span><span className="wf-chip">Suites</span>
          </div>
        </div>
        {[['Olivo', 24, '€180'], ['Naranja', 32, '€240'], ['Higuera', 40, '€320'], ['Almendro', 56, '€420']].map((r, i) => (
          <div key={r[0]} style={{
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr' : '80px 1fr 280px 200px 100px',
            alignItems: 'center',
            gap: mobile ? 12 : 32,
            padding: mobile ? '20px 0' : '24px 0',
            borderTop: i === 0 ? `1px solid ${WF.ink}` : `1px solid ${WF.line}`,
            marginLeft: mobile ? 0 : i * 24,
          }}>
            <div className="wf-mono" style={{ fontSize: 12, color: WF.ink3 }}>0{i + 1} /</div>
            <div className="wf-h2" style={{ fontSize: mobile ? 28 : 40, fontWeight: 400, letterSpacing: '-0.01em' }}>{r[0]}</div>
            {!mobile && <div className="wf-body">{r[1]} m² · double bed · garden view</div>}
            {!mobile && <div className="wf-mono" style={{ fontSize: 13 }}>from {r[2]} / night</div>}
            <div style={{ display: 'flex', justifyContent: mobile ? 'flex-start' : 'flex-end', alignItems: 'center', gap: 12 }}>
              {mobile && <div className="wf-mono" style={{ fontSize: 12, color: WF.ink3, flex: 1 }}>{r[1]} m² · from {r[2]}</div>}
              <span style={{ fontSize: 13, fontStyle: 'italic', color: WF.accent }}>see →</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── GALLERY (pinterest mosaic) ── */}
      <div style={{ padding: mobile ? '60px 20px' : '120px 60px' }}>
        <div className="wf-section-label">§ 03 — GALLERY</div>
        <div className="wf-h1" style={{ fontSize: mobile ? 36 : 64, fontWeight: 400, marginTop: 12, letterSpacing: '-0.02em' }}>A walk-through, in pictures.</div>
        <div style={{ columnCount: mobile ? 2 : 4, columnGap: 16, marginTop: 48 }}>
          {[200, 320, 240, 380, 200, 300, 360, 220, 280, 200].map((h, i) => (
            <div key={i} style={{ breakInside: 'avoid', marginBottom: 16 }}>
              <ImgPH label={`fig ${i + 1}`} w="100%" h={mobile ? h * 0.6 : h} />
            </div>
          ))}
        </div>
      </div>

      {/* ── AMENITIES (chip cloud) ── */}
      <div style={{ padding: mobile ? '60px 20px' : '120px 60px', background: WF.fill2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 2fr', gap: mobile ? 32 : 80, alignItems: 'flex-start' }}>
          <div>
            <div className="wf-section-label">§ 04 — ON SITE</div>
            <div className="wf-h1" style={{ fontSize: mobile ? 32 : 48, fontWeight: 400, marginTop: 16, letterSpacing: '-0.02em' }}>What's <span style={{ fontStyle: 'italic', color: WF.accent }}>here.</span></div>
            <div className="wf-body" style={{ marginTop: 18 }}>Things you can do without leaving.</div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              ['Pool', 18], ['Open kitchen', 16], ['Wine cellar', 14], ['Hammam', 18],
              ['Olive press', 14], ['Yoga', 14], ['Stargazing', 16], ['Bicycles', 14],
              ['Horse riding', 16], ['Library', 14], ['Fire pit', 14], ['Boules', 14],
              ['Kitchen garden', 16], ['Workshops', 14],
            ].map(([t, s]) => (
              <span key={t} style={{
                display: 'inline-flex', alignItems: 'center', padding: '10px 18px',
                border: `1px solid ${WF.ink2}`, borderRadius: 999,
                fontSize: s, color: WF.ink,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── LOCATION (small inset map + landmark list) ── */}
      <div style={{ padding: mobile ? '60px 20px' : '120px 60px' }}>
        <div className="wf-section-label">§ 05 — PLACE</div>
        <div className="wf-h1" style={{ fontSize: mobile ? 36 : 64, fontWeight: 400, marginTop: 12, letterSpacing: '-0.02em' }}>Inland, but not far.</div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.4fr 1fr', gap: mobile ? 32 : 60, marginTop: 56, alignItems: 'flex-start' }}>
          <div>
            {[
              ['Málaga airport', '95 km · 1h 10', 'Plane'],
              ['Ronda', '34 km · 40 min', 'Hilltop town'],
              ['Beach (Casares)', '22 km · 28 min', 'Sand cove'],
              ['Olive mill', '4 km · 8 min', 'Working press'],
              ['Vineyard', '12 km · 18 min', 'Tasting on request'],
              ['Village', '2 km · 25 min walk', 'Bakery + bar'],
            ].map((p) => (
              <div key={p[0]} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, padding: '18px 0', borderTop: `1px solid ${WF.line}` }}>
                <div>
                  <div className="wf-h2" style={{ fontSize: mobile ? 18 : 22, fontWeight: 400 }}>{p[0]}</div>
                  <div className="wf-body" style={{ fontSize: 12, marginTop: 2, color: WF.ink3 }}>{p[2]}</div>
                </div>
                <div className="wf-mono" style={{ fontSize: 12, color: WF.ink3, alignSelf: 'center', whiteSpace: 'nowrap' }}>{p[1]}</div>
              </div>
            ))}
          </div>
          <div style={{ position: 'sticky', top: 20 }}>
            <ImgPH label="topographic map" w="100%" h={mobile ? 280 : 460} />
            <div style={{ marginTop: 14, display: 'flex', gap: 14, fontSize: 11, color: WF.ink3 }} className="wf-mono">
              <span>● us</span><span>○ landmark</span><span>— road</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <div style={{ padding: mobile ? '60px 20px 80px' : '120px 60px 140px', background: WF.ink, color: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 40 : 80 }}>
          <div>
            <div className="wf-section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>§ 06 — ASK</div>
            <div className="wf-h1" style={{ fontSize: mobile ? 36 : 72, fontWeight: 400, marginTop: 12, letterSpacing: '-0.02em', color: '#fff' }}>
              Write to us.<br /><span style={{ fontStyle: 'italic', color: WF.accent }}>Or call.</span>
            </div>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14, fontSize: 14 }}>
              <div><span className="wf-mono" style={{ opacity: 0.6, marginRight: 10 }}>tel</span> +34 952 ··· ···</div>
              <div><span className="wf-mono" style={{ opacity: 0.6, marginRight: 10 }}>mail</span> hola@solyviento.es</div>
              <div><span className="wf-mono" style={{ opacity: 0.6, marginRight: 10 }}>post</span> Camino del Olivo s/n, 29380 Casares</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {['Your name', 'Email', 'How many of you', 'Any dates in mind?', 'Anything else'].map((l, i) => (
              <div key={l} style={{ display: 'flex', alignItems: 'baseline', padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                <span className="wf-mono" style={{ fontSize: 10, opacity: 0.5, width: 32, letterSpacing: '0.2em' }}>0{i + 1}</span>
                <span style={{ flex: 1, color: 'rgba(255,255,255,0.5)' }}>{l}</span>
              </div>
            ))}
            <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="wf-mono" style={{ fontSize: 11, opacity: 0.5, letterSpacing: '0.2em' }}>WE REPLY IN 24H</span>
              <span style={{ padding: '14px 26px', background: '#fff', color: WF.ink, fontWeight: 600 }}>Send →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="wf-art" style={{ width: W, position: 'relative' }}>
      {MobNav}{SideNav}{body}
    </div>
  );
}

window.DirC = DirC;
