// Direction D — "Anchored"
// Location-first. Persistent booking widget, big map, bento amenities,
// tabbed gallery. Mountain resort · summer-only.

function DirD({ mobile = false }) {
  const W = mobile ? 360 : 1200;

  // ── NAV ────────────────────────────────────────────────
  const Nav = (
    <div style={{ position: 'sticky', top: 0, zIndex: 5, background: '#fff', borderBottom: `1px solid ${WF.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: mobile ? '14px 20px' : '14px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ width: 28, height: 28, border: `1.5px solid ${WF.ink}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>a</div>
        <div style={{ fontSize: 15, fontWeight: 600 }}>Alta Lodge</div>
        {!mobile && (
          <div style={{ display: 'flex', gap: 20, marginLeft: 32, fontSize: 13, color: WF.ink2 }}>
            <span>Main House</span><span>Cabins</span><span>Restaurant</span><span>Trails</span><span>Journal</span>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        {!mobile && (
          <span style={{ fontSize: 11, color: WF.ink3, padding: '6px 10px', border: `1px solid ${WF.line}`, letterSpacing: '0.12em', fontFamily: WF.mono }}>
            ● OPEN JUN 14 — SEP 22
          </span>
        )}
        {!mobile && <span style={{ fontSize: 13, color: WF.ink2 }}>+33 · 4 · ·· ·· ·· ··</span>}
        <span style={{ padding: '10px 18px', background: WF.ink, color: '#fff', fontSize: 13, fontWeight: 500, borderRadius: 4 }}>Reserve</span>
      </div>
    </div>
  );

  // ── HERO ────────────────────────────────────────────────
  const Hero = (
    <div style={{ position: 'relative', padding: mobile ? '20px' : '32px 32px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '2fr 1fr', gap: mobile ? 16 : 16 }}>
        <div style={{ position: 'relative' }}>
          <ImgPH label="main house · larches · summer light" w="100%" h={mobile ? 320 : 520} />
          <div style={{ position: 'absolute', left: mobile ? 16 : 32, bottom: mobile ? 16 : 32, color: '#fff' }}>
            <div className="wf-mono" style={{ fontSize: 11, letterSpacing: '0.18em', background: 'rgba(0,0,0,0.4)', padding: '4px 10px', display: 'inline-block' }}>HAUTE-MAURIENNE · FRENCH ALPS</div>
            <div className="wf-h1" style={{ fontSize: mobile ? 32 : 60, fontWeight: 500, marginTop: 14, lineHeight: 1, letterSpacing: '-0.02em', textShadow: '0 2px 16px rgba(0,0,0,0.3)' }}>
              Alta Mountain Lodge
            </div>
            <div className="wf-mono" style={{ fontSize: 11, marginTop: 10, background: 'rgba(0,0,0,0.4)', padding: '4px 10px', display: 'inline-block', letterSpacing: '0.16em' }}>
              SUMMER ONLY · JUN — SEP 2026
            </div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <ImgPH label="map · valley + lodge + cabins" w="100%" h={mobile ? 200 : 520} />
          {/* main house and cabin pins */}
          <div style={{ position: 'absolute', left: '50%', top: '46%', transform: 'translate(-50%,-50%)' }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: WF.ink, color: '#fff', border: `2px solid #fff`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>H</div>
          </div>
          {[['38%','60%'],['44%','64%'],['58%','62%'],['62%','58%']].map(([l,t],i)=>(
            <div key={i} style={{ position:'absolute', left:l, top:t, transform:'translate(-50%,-50%)' }}>
              <div style={{ width:14, height:14, borderRadius:'50%', background:'#fff', border:`2px solid ${WF.ink}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:8, fontWeight:700 }}>C{i+1}</div>
            </div>
          ))}
          <div style={{ position: 'absolute', top: 12, left: 12, padding: '6px 12px', background: '#fff', border: `1px solid ${WF.line}`, fontSize: 11, fontWeight: 500 }}>OPEN IN MAP →</div>
          <div style={{ position: 'absolute', bottom: 12, left: 12, padding: '4px 10px', background: '#fff', border: `1px solid ${WF.line}`, fontSize: 10, fontFamily: WF.mono, letterSpacing: '0.1em' }}>
            ● H · MAIN HOUSE &nbsp; ○ C1–C4 · CABINS
          </div>
        </div>
      </div>

      {/* Booking widget — straddles the hero */}
      <div style={{ marginTop: mobile ? 16 : -36, marginLeft: mobile ? 0 : 32, marginRight: mobile ? 0 : 32, background: '#fff', border: `1px solid ${WF.ink}`, padding: mobile ? 14 : 18, display: 'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(5,1fr) auto', gap: mobile ? 10 : 12, position: 'relative', zIndex: 2, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
        {[['Check-in', 'Mon · Jul 6'], ['Check-out', 'Fri · Jul 10'], ['Guests', '2 adults'], ['Stay in', 'House / Cabin'], ['Promo', '—']].map((f, i) => (
          <div key={f[0]} style={{ gridColumn: mobile && i === 4 ? '1 / -1' : undefined, padding: '4px 6px', borderLeft: !mobile && i > 0 ? `1px solid ${WF.line}` : undefined }}>
            <div className="wf-section-label">{f[0]}</div>
            <div style={{ marginTop: 4, fontSize: 13, fontWeight: 500 }}>{f[1]}</div>
          </div>
        ))}
        <div style={{ gridColumn: mobile ? '1 / -1' : undefined, background: WF.ink, color: '#fff', padding: '14px 24px', fontWeight: 500, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}>Search →</div>
      </div>

      <div style={{ marginTop: mobile ? 24 : 40, display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: mobile ? 16 : 32, padding: mobile ? '0' : '0 32px', borderTop: `1px solid ${WF.line}`, paddingTop: 24 }}>
        {[
          ['1,640 m', 'elevation'],
          ['20 + 4', 'rooms · cabins'],
          ['Jun – Sep', 'season, only'],
          ['★ 4.9', '· 214 reviews'],
        ].map((s) => (
          <div key={s[1]}>
            <div className="wf-h2" style={{ fontSize: mobile ? 22 : 28, fontWeight: 500 }}>{s[0]}</div>
            <div className="wf-section-label" style={{ marginTop: 4 }}>{s[1]}</div>
          </div>
        ))}
      </div>
      {!mobile && <Anno style={{ top: 360, left: 660 }} arrow="right">map preview anchored next to hero — main house + cabin pins</Anno>}
    </div>
  );

  // ── ABOUT (bento) ──────────────────────────────────────
  const About = (
    <div style={{ padding: mobile ? '60px 20px' : '120px 32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexDirection: mobile ? 'column' : 'row', gap: 16 }}>
        <div>
          <div className="wf-section-label">01 · ABOUT</div>
          <div className="wf-h2" style={{ fontSize: mobile ? 32 : 48, fontWeight: 500, marginTop: 12, letterSpacing: '-0.015em' }}>One main house, four cabins, one summer.</div>
        </div>
        <div className="wf-body" style={{ maxWidth: 360 }}>
          Family-run since 1986. Twenty rooms in the main building, four standalone cabins of one room each, open only between June and September.
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)', gridAutoRows: mobile ? 180 : 240, gap: 12 }}>
        <div style={{ gridColumn: mobile ? '1 / -1' : 'span 2', gridRow: 'span 2', position: 'relative' }}>
          <ImgPH label="main house at dawn" w="100%" h="100%" />
        </div>
        <div style={{ background: WF.fill2, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="wf-section-label">MAIN HOUSE</div>
          <div className="wf-h2" style={{ fontSize: 36, fontWeight: 500 }}>20 <span style={{ fontSize: 16, color: WF.ink3 }}>rooms</span></div>
        </div>
        <div style={{ background: WF.ink, color: '#fff', padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="wf-section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>CABINS</div>
          <div className="wf-h2" style={{ fontSize: 36, fontWeight: 500, color: '#fff' }}>4 <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }}>standalone</span></div>
        </div>
        <ImgPH label="one of the cabins" />
        <div style={{ background: WF.fill2, padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div className="wf-section-label">SEASON</div>
          <div className="wf-h2" style={{ fontSize: 22, fontWeight: 500 }}>Jun 14 — Sep 22</div>
          <div className="wf-body" style={{ fontSize: 12 }}>Closed in winter, always.</div>
        </div>
      </div>
    </div>
  );

  // ── ROOMS (2×2 detailed) ───────────────────────────────
  const cabins = [
    ['Standard Room',  '€180', 22, 'Main house · 8 rooms · 2 guests · valley side'],
    ['Superior Room',  '€240', 28, 'Main house · 8 rooms · 2 guests · peak view'],
    ['Suite',          '€340', 42, 'Main house · 4 rooms · 2–3 guests · corner balcony'],
    ['Stone Cabin',    '€420', 30, 'Standalone · 4 cabins · 1 bedroom · private terrace'],
  ];
  const Rooms = (
    <div style={{ padding: mobile ? '60px 20px' : '120px 32px', background: WF.fill2 }}>
      <div className="wf-section-label">02 · ROOMS &amp; CABINS</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 12, flexDirection: mobile ? 'column' : 'row', gap: 16 }}>
        <div className="wf-h2" style={{ fontSize: mobile ? 32 : 48, fontWeight: 500, letterSpacing: '-0.015em' }}>Twenty-four ways to wake up in the valley.</div>
        <div style={{ display: 'flex', gap: 6 }}>
          <span className="wf-chip" style={{ background: WF.ink, color: '#fff', borderColor: WF.ink }}>All · 24</span>
          <span className="wf-chip">Main house · 20</span>
          <span className="wf-chip">Cabins · 4</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 16, marginTop: 40 }}>
        {cabins.map((c, i) => (
          <div key={c[0]} style={{ background: '#fff', border: `1px solid ${WF.line}`, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '160px 1fr', gap: 0 }}>
            <ImgPH label={i === 3 ? 'cabin' : `room 0${i + 1}`} w="100%" h={mobile ? 160 : 200} style={{ border: 'none' }} />
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div className="wf-h2" style={{ fontSize: 20, fontWeight: 500 }}>{c[0]}</div>
                <div className="wf-mono" style={{ fontSize: 11, color: WF.ink3 }}>{c[2]} m²</div>
              </div>
              <div className="wf-body" style={{ fontSize: 12 }}>{c[3]}</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                {(i === 3 ? ['Wi-Fi', 'Kitchenette', 'Wood stove', 'Terrace'] : ['Wi-Fi', 'Bath', 'Breakfast']).map((t) => (
                  <span key={t} className="wf-chip" style={{ fontSize: 10, padding: '3px 8px' }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 12, borderTop: `1px solid ${WF.line2}` }}>
                <div>
                  <div className="wf-section-label">FROM</div>
                  <div style={{ fontSize: 18, fontWeight: 600 }}>{c[1]}<span style={{ fontSize: 11, fontWeight: 400, color: WF.ink3 }}> / night</span></div>
                </div>
                <span style={{ padding: '8px 14px', border: `1px solid ${WF.ink}`, fontSize: 12, fontWeight: 500 }}>Check dates →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── GALLERY (tabbed) ───────────────────────────────────
  const Gallery = (
    <div style={{ padding: mobile ? '60px 20px' : '120px 32px' }}>
      <div className="wf-section-label">03 · GALLERY</div>
      <div className="wf-h2" style={{ fontSize: mobile ? 32 : 48, fontWeight: 500, marginTop: 12, letterSpacing: '-0.015em' }}>The lodge, this summer.</div>
      <div style={{ display: 'flex', gap: 8, marginTop: 28, borderBottom: `1px solid ${WF.line}`, paddingBottom: 0, flexWrap: 'wrap' }}>
        {['All · 86', 'Main house · 32', 'Cabins · 18', 'Outdoors · 36'].map((t, i) => (
          <span key={t} style={{
            padding: '12px 18px',
            fontSize: 13, fontWeight: i === 0 ? 600 : 400,
            borderBottom: i === 0 ? `2px solid ${WF.ink}` : '2px solid transparent',
            color: i === 0 ? WF.ink : WF.ink3,
            marginBottom: -1,
          }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(4, 1fr)', gridAutoRows: mobile ? 130 : 200, gap: 8, marginTop: 28 }}>
        {[1,2,3,4,5,6,7,8].map((i) => (
          <ImgPH key={i} label={`s ${i}`}
            style={{ gridColumn: i === 1 ? 'span 2' : 'auto', gridRow: i === 1 ? 'span 2' : 'auto' }} />
        ))}
      </div>
    </div>
  );

  // ── AMENITIES (structured table) ───────────────────────
  const amenGroups = [
    ['Wellness', [['Sauna · wood-fired', 'main house basement'], ['Spring-fed pool', 'open Jun–Sep'], ['Treatment rooms', 'by appt.'], ['Yoga deck', 'morning sessions']]],
    ['Food & drink', [['Restaurant', 'breakfast + dinner'], ['Communal table', 'single seating'], ['Wine cellar', '80 Piemontese labels'], ['Picnic baskets', 'on request']]],
    ['Outdoors', [['Marked trails', '23 routes from door'], ['Mountain bikes', 'rental'], ['Climbing routes', 'guide on request'], ['Fishing licence', 'arranged']]],
    ['Service', [['Wi-Fi', 'main house + cabins'], ['Transfer', 'from Modane stn'], ['Laundry', 'on request'], ['Pets', 'cabins only']]],
  ];
  const Amenities = (
    <div style={{ padding: mobile ? '60px 20px' : '120px 32px', background: WF.fill2 }}>
      <div className="wf-section-label">04 · AMENITIES</div>
      <div className="wf-h2" style={{ fontSize: mobile ? 32 : 48, fontWeight: 500, marginTop: 12, letterSpacing: '-0.015em' }}>What's included, what's extra.</div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)', gap: mobile ? 32 : 24, marginTop: 48 }}>
        {amenGroups.map(([g, items]) => (
          <div key={g}>
            <div style={{ paddingBottom: 12, borderBottom: `1.5px solid ${WF.ink}`, marginBottom: 12 }}>
              <div className="wf-h2" style={{ fontSize: 16, fontWeight: 600 }}>{g}</div>
            </div>
            {items.map((it) => (
              <div key={it[0]} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${WF.line2}` }}>
                <span style={{ fontSize: 13 }}>{it[0]}</span>
                <span className="wf-mono" style={{ fontSize: 11, color: WF.ink3 }}>{it[1]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  // ── LOCATION (big map) ─────────────────────────────────
  const Location = (
    <div style={{ padding: mobile ? '60px 20px' : '120px 32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: mobile ? 'column' : 'row', gap: 16 }}>
        <div>
          <div className="wf-section-label">05 · LOCATION</div>
          <div className="wf-h2" style={{ fontSize: mobile ? 32 : 48, fontWeight: 500, marginTop: 12, letterSpacing: '-0.015em' }}>Finding us.</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span className="wf-chip">Driving</span>
          <span className="wf-chip" style={{ background: WF.ink, color: '#fff', borderColor: WF.ink }}>By train</span>
          <span className="wf-chip">By air</span>
        </div>
      </div>
      <div style={{ position: 'relative', marginTop: 32 }}>
        <ImgPH label="regional map · valley + pass · summer roads" w="100%" h={mobile ? 380 : 540} />
        {[
          ['1', 'Alta Lodge', '52%', '52%', true],
          ['2', 'Modane Stn', '32%', '38%'],
          ['3', 'Lyon TGV', '14%', '20%'],
          ['4', 'Village (Bessans)', '60%', '44%'],
          ['5', 'Trail head', '64%', '68%'],
        ].map(([n, lbl, l, t, on]) => (
          <div key={n} style={{ position: 'absolute', left: l, top: t, transform: 'translate(-50%,-50%)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width: on ? 28 : 22, height: on ? 28 : 22, borderRadius: '50%',
              background: on ? WF.ink : '#fff', color: on ? '#fff' : WF.ink,
              border: `2px solid ${WF.ink}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700,
            }}>{n}</div>
            <span style={{ padding: '3px 8px', background: '#fff', border: `1px solid ${WF.line}`, fontSize: 11, fontWeight: 500, whiteSpace: 'nowrap' }}>{lbl}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 16, marginTop: 32 }}>
        {[
          ['By car', 'A43 motorway from Lyon, 180 km, ~2h 30. Parking on site.'],
          ['By train', 'Lyon Part-Dieu → Modane direct, 2h 40. We collect you, free.'],
          ['Nearest airport', 'Chambéry · CMF, 110 km. Geneva · GVA, 180 km.'],
        ].map((t) => (
          <div key={t[0]} style={{ background: WF.fill2, padding: 18 }}>
            <div className="wf-h2" style={{ fontSize: 16, fontWeight: 600 }}>{t[0]}</div>
            <div className="wf-body" style={{ marginTop: 8, fontSize: 13 }}>{t[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── CONTACT ────────────────────────────────────────────
  const Contact = (
    <div style={{ padding: mobile ? '60px 20px 80px' : '120px 32px 140px', background: WF.ink, color: '#fff' }}>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 80 }}>
        <div>
          <div className="wf-section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>06 · CONTACT</div>
          <div className="wf-h2" style={{ fontSize: mobile ? 32 : 48, fontWeight: 500, marginTop: 12, color: '#fff', letterSpacing: '-0.015em' }}>Have a question first?</div>
          <div className="wf-body" style={{ marginTop: 18, color: 'rgba(255,255,255,0.7)', fontSize: 14, maxWidth: 380 }}>
            Reservations open from February. We answer within one working day during the season, and weekly off-season.
          </div>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              ['Front desk', '+33 4 ·· ·· ·· ··', '08:00 — 22:00 · in-season'],
              ['Email', 'stay@altalodge.fr', '24h reply, in-season'],
              ['Address', 'Route du Col 14', '73480 Bessans, France'],
            ].map((c) => (
              <div key={c[0]} style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr', gap: 16, paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.15)', alignItems: 'baseline' }}>
                <div className="wf-section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>{c[0]}</div>
                <div style={{ fontSize: 14, color: '#fff' }}>{c[1]}</div>
                <div className="wf-mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{c[2]}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: '#fff', color: WF.ink, padding: mobile ? 24 : 36 }}>
          <div className="wf-h2" style={{ fontSize: 22, fontWeight: 600 }}>Send a message</div>
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 12 }}>
            <div className="wf-input">First name</div>
            <div className="wf-input">Last name</div>
            <div className="wf-input" style={{ gridColumn: mobile ? 'auto' : '1 / -1' }}>Email</div>
            <div className="wf-input">Arrival (Jun–Sep)</div>
            <div className="wf-input">Departure</div>
            <div style={{ gridColumn: mobile ? 'auto' : '1 / -1', border: `1px solid ${WF.line}`, padding: '12px 14px', height: 90, fontFamily: WF.mono, fontSize: 12, color: WF.ink3 }}>
              Tell us about your trip — main house or cabin, family or pair…
            </div>
            <div style={{ gridColumn: mobile ? 'auto' : '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
              <span className="wf-mono" style={{ fontSize: 10, color: WF.ink3, letterSpacing: '0.18em' }}>WE REPLY WITHIN 24H</span>
              <span style={{ padding: '14px 28px', background: WF.ink, color: '#fff', fontWeight: 600, fontSize: 13 }}>Send →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="wf-art" style={{ width: W }}>
      {Nav}{Hero}{About}{Rooms}{Gallery}{Amenities}{Location}{Contact}
    </div>
  );
}

window.DirD = DirD;
