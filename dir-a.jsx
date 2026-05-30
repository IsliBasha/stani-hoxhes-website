// Direction A — "Editorial Stay" · Stani i Hoxhës
// Mountain retreat in the Novoseja peaks above Kukës, Albania.
// Open May 22 — end of August (recurring annually).
// Centered, classic-luxury linear stack. Bilingual SQ/EN.

function DirA({ mobile = false }) {
  const W = mobile ? 360 : 1200;

  // ── NAV ─────────────────────────────────────────────────
  const Nav = mobile ? (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${WF.line}` }}>
      <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ height: 1.5, background: WF.ink }} /><div style={{ height: 1.5, background: WF.ink }} /><div style={{ height: 1.5, background: WF.ink }} />
      </div>
      <div className="wf-mono" style={{ fontSize: 11, letterSpacing: '0.2em' }}>STANI&nbsp;I&nbsp;HOXHËS</div>
      <div className="wf-mono" style={{ fontSize: 10, color: WF.ink3 }}>SQ</div>
    </div>
  ) : (
    <div style={{ borderBottom: `1px solid ${WF.line}` }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 40px', fontSize: 11, color: WF.ink3, borderBottom: `1px solid ${WF.line2}` }} className="wf-mono">
        <span>+355 ··· ··· ···</span>
        <span>REZERVO@STANIHOXHES.AL</span>
        <span>SEZONI 2026 · 22 MAJ — FUND GUSHTI</span>
        <span>SQ · EN</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', padding: '20px 40px' }}>
        <div style={{ display: 'flex', gap: 24, fontSize: 12, letterSpacing: '0.14em' }} className="wf-mono">
          <span>SHTËPIA</span><span>BUNGALLOT</span><span>KUZHINA</span><span>NATYRA</span>
        </div>
        <div style={{ fontSize: 20, letterSpacing: '0.28em', fontWeight: 300 }}>STANI&nbsp;I&nbsp;HOXHËS</div>
        <div style={{ display: 'flex', gap: 24, fontSize: 12, letterSpacing: '0.14em', justifyContent: 'flex-end' }} className="wf-mono">
          <span>GALERIA</span><span>NDODHEMI</span><span>KONTAKT</span><span style={{ borderBottom: `1px solid ${WF.ink}`, paddingBottom: 2 }}>REZERVO</span>
        </div>
      </div>
    </div>
  );

  // ── HERO ────────────────────────────────────────────────
  const Hero = (
    <div style={{ position: 'relative', padding: mobile ? '24px 20px 40px' : '40px 40px 60px' }}>
      <div style={{ position: 'relative' }}>
        <ImgPH label="hero · novoseja peaks, main lodge, golden light" w="100%" h={mobile ? 420 : 620} />
        <div style={{ position: 'absolute', top: 16, right: 16, background: '#fff', border: `1px solid ${WF.ink}`, padding: '6px 12px', fontSize: 11, letterSpacing: '0.16em' }} className="wf-mono">
          HAPUR · 22 MAJ — FUND GUSHTI
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: mobile ? 32 : 56 }}>
        <div className="wf-section-label">QË NGA 2018 · MALET E NOVOSEJËS · KUKËS, AL</div>
        <div className="wf-h1" style={{ fontSize: mobile ? 40 : 80, marginTop: 12, fontWeight: 300, color: '#9a7438' }}>Stani i Hoxhës</div>
        <div className="wf-h2" style={{ marginTop: 14, fontSize: mobile ? 18 : 24, fontWeight: 300, fontStyle: 'italic', color: WF.ink2 }}>
          Mes maleve, pranë qetësisë.
        </div>
        <div className="wf-body" style={{ marginTop: 6, maxWidth: 520, margin: '6px auto 0', color: WF.ink3, fontSize: 13 }}>
          Among the mountains, close to tranquility.
        </div>
      </div>
      {/* booking widget */}
      <div style={{
        marginTop: mobile ? 28 : 44,
        border: `1px solid ${WF.line}`,
        display: mobile ? 'flex' : 'grid',
        flexDirection: mobile ? 'column' : undefined,
        gridTemplateColumns: mobile ? undefined : 'repeat(4, 1fr) auto',
        background: '#fff',
      }}>
        {[['MBËRRITJA', '— · maj · 2026'], ['LARGIMI', '— · — · 2026'], ['MYSAFIRË', '2 të rritur'], ['QËNDRO NË', 'Shtëpi ose Bungallo']].map((l) => (
          <div key={l[0]} style={{ padding: '16px 20px', borderRight: mobile ? 'none' : `1px solid ${WF.line2}`, borderBottom: mobile ? `1px solid ${WF.line2}` : 'none' }}>
            <div className="wf-mono" style={{ fontSize: 9, letterSpacing: '0.2em', color: WF.ink3 }}>{l[0]}</div>
            <div className="wf-body" style={{ marginTop: 6, color: WF.ink }}>{l[1]}</div>
          </div>
        ))}
        <div style={{ background: WF.ink, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: mobile ? '18px' : '0 36px', fontSize: 13, letterSpacing: '0.1em' }} className="wf-mono">KONTROLLO DATAT</div>
      </div>
      {!mobile && <Anno style={{ top: 60, right: 50 }} arrow="left">season badge always visible</Anno>}
      {!mobile && <Anno style={{ top: 730, left: 380 }} arrow="left">primary copy in Albanian · English subtitle</Anno>}
    </div>
  );

  // ── ABOUT ───────────────────────────────────────────────
  const About = (
    <div style={{ padding: mobile ? '60px 20px' : '120px 80px', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 80, alignItems: 'center' }}>
      <div>
        <SectionHead num="01" label="RRETH NESH · ABOUT US" title="Mikpritje tradicionale, mes maleve." sub="Traditional hospitality, deep in the Novoseja mountains." />
        <div className="wf-body" style={{ marginTop: 24, lineHeight: 1.7 }}>
          Stani i Hoxhës është një destinacion turistik në zemër të maleve të Novosejës, i krijuar për të ofruar qetësi, mikpritje tradicionale dhe një eksperiencë autentike shqiptare. I rrethuar nga natyra, ajri i pastër dhe pamjet mahnitëse malore — ideal për familje, çifte dhe çdo vizitor që kërkon të largohet nga zhurma e qytetit.
        </div>
        <div className="wf-body" style={{ marginTop: 12, lineHeight: 1.7, fontStyle: 'italic', color: WF.ink3, fontSize: 12 }}>
          A unique mountain retreat in the heart of the Novosejë mountains — peace, traditional hospitality and an authentic Albanian experience, perfect for families, couples and anyone escaping the noise of the city.
        </div>
        <div style={{ marginTop: 28, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <div className="wf-h2" style={{ fontSize: 36, fontWeight: 300 }}>20 + 4</div>
            <div className="wf-section-label" style={{ marginTop: 4 }}>DHOMA · BUNGALLO</div>
          </div>
          <div>
            <div className="wf-h2" style={{ fontSize: 36, fontWeight: 300 }}>2018</div>
            <div className="wf-section-label" style={{ marginTop: 4 }}>I HAPUR</div>
          </div>
          <div>
            <div className="wf-h2" style={{ fontSize: 36, fontWeight: 300 }}>3 mu.</div>
            <div className="wf-section-label" style={{ marginTop: 4 }}>SEZON I VERËS</div>
          </div>
        </div>
      </div>
      <ImgPH label="lifestyle · familja, shtëpia, mëngjes" w="100%" h={mobile ? 280 : 480} />
    </div>
  );

  // ── WHY CHOOSE US ──────────────────────────────────────
  const Why = (
    <div style={{ padding: mobile ? '60px 20px' : '110px 80px', background: '#233429', color: '#fff' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <div className="wf-section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>PSE TË NA ZGJIDHNI · WHY CHOOSE US</div>
        <div className="wf-h1" style={{ fontSize: mobile ? 26 : 40, fontWeight: 300, marginTop: 18, color: '#fff', lineHeight: 1.35, letterSpacing: '-0.01em' }}>
          Aty ku qetësia e natyrës, ajri i pastër dhe shijet tradicionale krijojnë kujtime të paharrueshme.
        </div>
        <div className="wf-body" style={{ marginTop: 16, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', maxWidth: 560, margin: '16px auto 0' }}>
          Where the tranquility of nature, fresh mountain air and authentic traditional flavors create unforgettable memories.
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 20 : 40, marginTop: mobile ? 36 : 56, maxWidth: 900, margin: mobile ? '36px auto 0' : '56px auto 0' }}>
        {[
          ['Qetësi', 'Tranquility', 'Larg zhurmës së qytetit, pranë natyrës.'],
          ['Mikpritje', 'Hospitality', 'Pritja e ngrohtë shqiptare e familjes.'],
          ['Tradita', 'Tradition', 'Ushqim tradicional dhe shije autentike.'],
        ].map((c) => (
          <div key={c[0]} style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 18 }}>
            <div className="wf-h2" style={{ fontSize: 20, fontWeight: 400, color: '#fff' }}>{c[0]}</div>
            <div className="wf-body" style={{ fontSize: 11, fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{c[1]}</div>
            <div className="wf-body" style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>{c[2]}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── ROOMS ───────────────────────────────────────────────
  // Real inventory TBD — these are placeholder categories matching the
  // confirmed 20 (main house) + 4 (cabins) split.
  const rooms = [
    { name: 'Dhoma Standarde', en: 'Standard room', loc: 'Shtëpia qendrore', count: 12, from: '—', sqm: '—', view: 'pamje malore' },
    { name: 'Suita',           en: 'Suite',         loc: 'Shtëpia qendrore', count: 8,  from: '—', sqm: '—', view: 'pamje në liqen' },
    { name: 'Bungallo',        en: 'Cabin',         loc: 'Më vete',          count: 4,  from: '—', sqm: '—', view: 'verandë private' },
  ];
  const Rooms = (
    <div style={{ padding: mobile ? '60px 20px' : '120px 80px', background: WF.fill2 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: mobile ? 'column' : 'row', gap: 16 }}>
        <SectionHead num="02" label="QËNDRIMI · STAY" title="Njëzet dhoma, katër bungallo." sub="Shtëpia qendrore ka njëzet dhoma në dy kate. Katër bungallot ndodhen pak hapa larg, secili më vete. · The main lodge holds twenty rooms across two floors; the four cabins sit a short walk into the meadow, each on its own." />
        <div className="wf-mono" style={{ fontSize: 11, color: WF.ink3, letterSpacing: '0.14em' }}>SHIH TË GJITHA →</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 32 : 24, marginTop: 48 }}>
        {rooms.map((r, i) => (
          <div key={r.name} style={{ background: '#fff', border: `1px solid ${WF.line}` }}>
            <ImgPH label={`${r.en.toLowerCase()} · 0${i + 1}`} w="100%" h={mobile ? 220 : 280} style={{ border: 'none', borderBottom: `1px solid ${WF.line}` }} />
            <div style={{ padding: '20px 22px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div className="wf-section-label">{r.loc.toUpperCase()} · {r.count} GJITHSEJ</div>
                <div className="wf-section-label">NGA · {r.from}</div>
              </div>
              <div className="wf-h2" style={{ fontSize: 22, marginTop: 8, fontWeight: 400 }}>{r.name}</div>
              <div className="wf-body" style={{ fontSize: 12, fontStyle: 'italic', color: WF.ink3, marginTop: 2 }}>{r.en}</div>
              <div className="wf-body" style={{ marginTop: 14 }}><TextLines lines={2} last={0.7} /></div>
              <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
                <span className="wf-chip">2 mysafirë</span>
                <span className="wf-chip">{r.sqm} m²</span>
                <span className="wf-chip">{r.view}</span>
              </div>
              <div className="wf-mono" style={{ fontSize: 11, marginTop: 18, borderTop: `1px solid ${WF.line2}`, paddingTop: 14, letterSpacing: '0.12em' }}>SHIKO →</div>
            </div>
          </div>
        ))}
      </div>
      {!mobile && (
        <div className="wf-anno" style={{ marginTop: 16, fontSize: 13 }}>
          ↑ placeholder counts &amp; rates · awaiting your room inventory
        </div>
      )}
    </div>
  );

  // ── GALLERY ─────────────────────────────────────────────
  const Gallery = (
    <div style={{ padding: mobile ? '60px 20px' : '120px 80px' }}>
      <SectionHead num="03" label="GALERIA" title="Mali, drita, qetësia." align={mobile ? 'left' : 'center'} sub="The mountain, the light, the quiet." />
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(4, 1fr)', gridAutoRows: mobile ? 140 : 220, gap: 12, marginTop: 48 }}>
        <ImgPH label="01 · shtëpia" style={{ gridColumn: 'span 2', gridRow: 'span 2' }} />
        <ImgPH label="02 · bungallo" />
        <ImgPH label="03 · liqeni" />
        <ImgPH label="04 · shtegu" />
        <ImgPH label="05 · lulet" />
        <ImgPH label="06 · panoramë" style={{ gridColumn: 'span 2' }} />
        <ImgPH label="07 · sofra" />
        <ImgPH label="08 · piknik" />
      </div>
      {!mobile && (
        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <span className="wf-mono" style={{ fontSize: 11, color: WF.ink3, letterSpacing: '0.16em' }}>SHIH GALERINË E PLOTË · 60+ FOTO →</span>
        </div>
      )}
    </div>
  );

  // ── EXPERIENCES (true to the property) ─────────────────
  const exp = [
    ['Liqeni i Novosejt',     'Lake Novoseja',        'Një vizitë e shkurtër në buzë të liqenit alpin.'],
    ['Shtegu i Ngjyrave',     'The Path of Colors',   'Shëtitje në mal, mes ngjyrave të lëndinave.'],
    ['Lëndina e Luleve',      'Flower Meadow',        'Lulëzimi i fundverës, pas mëngjesit.'],
    ['Pamje Panoramike',      'Panoramic Views',      'Maja dhe lugina, deri tej, mes maleve.'],
    ['Piknik & Kamping',      'Picnic & Camping',     'Sofër në natyrë ose një natë nën yjet.'],
    ['Qetësi e Plotë',        'Total Quiet',          'Shkëputje nga rutina, larg sinjalit.'],
    ['Kuzhinë Tradicionale',  'Traditional Kitchen',  'Bukë, djathë, mish në hell — gatime familjare.'],
    ['Mikpritje',             'Hospitality',          'Familja Hoxha, pritja shqiptare.'],
  ];
  const Experiences = (
    <div style={{ padding: mobile ? '60px 20px' : '120px 80px', borderTop: `1px solid ${WF.line}` }}>
      <SectionHead num="04" label="ÇFARË BËHET KËTU" title="Eksperienca, jo lista shërbimesh." sub="Experiences, not a list of amenities — what people actually come here for." />
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: mobile ? 24 : 40, marginTop: 48 }}>
        {exp.map((a) => (
          <div key={a[0]}>
            <div className="wf-icon" style={{ marginBottom: 12 }}>○</div>
            <div className="wf-h2" style={{ fontSize: 16, fontWeight: 500 }}>{a[0]}</div>
            <div className="wf-body" style={{ marginTop: 2, fontSize: 11, fontStyle: 'italic', color: WF.ink3 }}>{a[1]}</div>
            <div className="wf-body" style={{ marginTop: 8, fontSize: 12 }}>{a[2]}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── LOCATION ───────────────────────────────────────────
  const Location = (
    <div style={{ padding: mobile ? '60px 20px' : '120px 80px', background: WF.fill2, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1.2fr', gap: mobile ? 32 : 60, alignItems: 'center' }}>
      <div>
        <SectionHead num="05" label="NDODHEMI" title="Lart në malet e Novosejës." sub="Above the town of Kukës, in the Novoseja highlands of northeastern Albania." />
        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            ['Tirana (TIA) · aeroport', '180 km · ~3h'],
            ['Kukës qytet', '— km · ~30 min'],
            ['Liqeni i Novosejt', '— km · në këmbë'],
            ['Shtegu i Ngjyrave', 'fillon te porta'],
          ].map((p) => (
            <div key={p[0]} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${WF.line2}`, paddingBottom: 10 }}>
              <span className="wf-body" style={{ color: WF.ink }}>{p[0]}</span>
              <span className="wf-mono" style={{ fontSize: 11, color: WF.ink3, letterSpacing: '0.1em' }}>{p[1]}</span>
            </div>
          ))}
        </div>
        <div className="wf-anno" style={{ marginTop: 16, fontSize: 12, position: 'static' }}>
          ↑ live Google Maps embed · 41.9715, 20.5791 · distances TBD
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <iframe
          title="Stani i Hoxhës · Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14185.406462874298!2d20.579131120623117!3d41.971450449356546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353d9d1972f9381%3A0x45ce9f7f749d8119!2sStani%20i%20Hoxh%C3%ABs!5e1!3m2!1sen!2s!4v1780151961771!5m2!1sen!2s"
          width="100%"
          height={mobile ? 280 : 440}
          style={{ border: `1px solid ${WF.line}`, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href="https://www.google.com/maps?q=41.9714504,20.5791311"
          target="_blank"
          rel="noopener noreferrer"
          className="wf-mono"
          style={{ position: 'absolute', top: 12, right: 12, background: '#fff', border: `1px solid ${WF.ink}`, padding: '6px 12px', fontSize: 11, letterSpacing: '0.12em', color: WF.ink, textDecoration: 'none' }}
        >HAP NË GOOGLE MAPS →</a>
      </div>
    </div>
  );

  // ── CONTACT ────────────────────────────────────────────
  const Contact = (
    <div style={{ padding: mobile ? '60px 20px 80px' : '120px 80px 140px' }}>
      <div style={{ textAlign: 'center' }}>
        <SectionHead num="06" label="KONTAKT · REZERVO" title="Planifiko verën." align="center" sub="Na kontaktoni për rezervime, informacione ose organizime speciale. · Contact us for reservations, information or special events." />
      </div>
      <div style={{ maxWidth: 880, margin: '40px auto 0', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 48, alignItems: 'flex-start' }}>
        {/* real contact details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            ['VENDNDODHJA', 'Novosejë, Kukës, Shqipëri', 'Pin nga Google Maps'],
            ['TELEFON', '+355 69 240 4448', 'Thirrje & WhatsApp'],
            ['EMAIL', 'staniihoxhes@gmail.com', '24h përgjigje në sezon'],
            ['INSTAGRAM', '@staniihoxhes', 'Lidhe me profilin'],
          ].map((c, i) => (
            <div key={c[0]} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 16, padding: '18px 0', borderTop: i === 0 ? `1px solid ${WF.ink}` : `1px solid ${WF.line2}`, alignItems: 'baseline' }}>
              <div className="wf-icon" style={{ width: 24, height: 24, fontSize: 11 }}>○</div>
              <div>
                <div className="wf-section-label">{c[0]}</div>
                <div className="wf-h2" style={{ fontSize: mobile ? 18 : 20, fontWeight: 400, marginTop: 4 }}>{c[1]}</div>
                <div className="wf-body" style={{ fontSize: 11, color: WF.ink3, marginTop: 2 }}>{c[2]}</div>
              </div>
            </div>
          ))}
          <div className="wf-anno" style={{ marginTop: 16, fontSize: 12, position: 'static' }}>↑ live Google Map embed + IG feed on build</div>
        </div>
        {/* inquiry form */}
        <div style={{ background: WF.fill2, padding: mobile ? 24 : 32 }}>
          <div className="wf-h2" style={{ fontSize: 18, fontWeight: 500 }}>Dërgo një kërkesë</div>
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 12 }}>
            <div className="wf-input">Emri</div>
            <div className="wf-input">Mbiemri</div>
            <div className="wf-input" style={{ gridColumn: mobile ? 'auto' : '1 / -1' }}>Email</div>
            <div className="wf-input">Mbërritja (22 maj – fund gushti)</div>
            <div className="wf-input">Largimi</div>
            <div className="wf-input" style={{ gridColumn: mobile ? 'auto' : '1 / -1', height: 90 }}>Mesazh (opsional) · Message</div>
            <div className="wf-btn" style={{ gridColumn: mobile ? 'auto' : '1 / -1', padding: '16px' }}>DËRGO KËRKESËN</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ── FOOTER ─────────────────────────────────────────────
  const Footer = (
    <div style={{ padding: mobile ? '32px 20px' : '40px 80px', background: '#1a2b1f', color: '#fff', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '2fr 1fr 1fr 1fr', gap: 24 }}>
      <div>
        <div style={{ fontSize: 16, letterSpacing: '0.28em', color: '#c8a063' }}>STANI&nbsp;I&nbsp;HOXHËS</div>
        <div className="wf-body" style={{ marginTop: 8, fontSize: 12, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>Mes maleve, pranë qetësisë.</div>
        <div style={{ marginTop: 12, fontSize: 11, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }} className="wf-mono">
          NOVOSEJË, KUKËS, AL<br />+355 69 240 4448<br />STANIIHOXHES@GMAIL.COM<br />@STANIIHOXHES
        </div>
        <div style={{ marginTop: 12, fontSize: 11, color: 'rgba(255,255,255,0.4)' }} className="wf-mono">© 2026 · SEZONI 22 MAJ — FUND GUSHTI</div>
      </div>
      {!mobile && ['QËNDRO', 'NATYRA', 'KONTAKT'].map((c) => (
        <div key={c} style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }} className="wf-mono">
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, letterSpacing: '0.2em' }}>{c}</div>
          <span>— — —</span><span>— — — —</span><span>— — —</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="wf-art" style={{ width: W }}>
      {Nav}{Hero}{About}{Why}{Rooms}{Gallery}{Experiences}{Location}{Contact}{Footer}
    </div>
  );
}

window.DirA = DirA;
