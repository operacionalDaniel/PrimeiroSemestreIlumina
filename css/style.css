/* ─────────────────────────────────────────────────────────────────────────────
   style.css  —  Painel BI · Iluminação Pública · Içara
───────────────────────────────────────────────────────────────────────────── */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

/* ── Tokens ── */
:root {
  --bg:        #F8F9FC;
  --surface:   #FFFFFF;
  --surface2:  #F1F3F8;
  --border:    #E5E7F0;
  --border2:   #D1D5E8;
  --text:      #0F172A;
  --text2:     #475569;
  --text3:     #94A3B8;

  --blue:      #2563EB; --blue-l:   #EFF6FF; --blue-d:   #1D4ED8;
  --teal:      #0D9488; --teal-l:   #F0FDFA;
  --violet:    #7C3AED; --violet-l: #F5F3FF;
  --amber:     #D97706; --amber-l:  #FFFBEB;
  --green:     #059669; --green-l:  #ECFDF5;
  --red:       #DC2626; --red-l:    #FEF2F2;
  --gray-pill: #F1F5F9; --gray-text:#94A3B8;

  --radius:    10px;
  --radius-lg: 16px;
  --shadow:    0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04);
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: var(--text);
  min-height: 100vh;
}

/* ── Header ── */
.header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo { display: flex; align-items: center; gap: 10px; }
.logo-mark {
  width: 32px; height: 32px;
  background: var(--blue);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.logo-mark svg { width: 18px; height: 18px; fill: none; stroke: #fff; stroke-width: 2; stroke-linecap: round; }
.logo-text  { font-size: 14px; font-weight: 600; color: var(--text); }
.logo-sub   { font-size: 11px; color: var(--text3); margin-top: 1px; }
.header-meta { display: flex; align-items: center; gap: 12px; }
.date-range  { font-size: 12px; color: var(--text2); display: flex; align-items: center; gap: 6px; }
.dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); display: inline-block; }

/* ── Nav ── */
.nav {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 0 2rem;
  display: flex;
  gap: 2px;
  position: sticky;
  top: 62px;
  z-index: 99;
}
.tab {
  padding: 10px 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text2);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all .15s;
  white-space: nowrap;
  user-select: none;
}
.tab:hover  { color: var(--blue); background: var(--blue-l); border-radius: 6px 6px 0 0; }
.tab.active { color: var(--blue); border-bottom-color: var(--blue); font-weight: 600; }

/* ── Pages ── */
.page { display: none; padding: 1.5rem 2rem 3rem; max-width: 1400px; margin: 0 auto; }
.page.active { display: block; }

/* ── KPI strip ── */
.kpis { display: grid; gap: 12px; margin-bottom: 1.5rem; }
.kpis-6 { grid-template-columns: repeat(6, 1fr); }
.kpis-5 { grid-template-columns: repeat(5, 1fr); }
.kpis-4 { grid-template-columns: repeat(4, 1fr); }
.kpi {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem 1.1rem;
  box-shadow: var(--shadow);
}
.kpi-icon  { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; font-size: 16px; }
.kpi-label { font-size: 10.5px; font-weight: 500; color: var(--text3); text-transform: uppercase; letter-spacing: .6px; margin-bottom: 4px; }
.kpi-val   { font-size: 22px; font-weight: 700; color: var(--text); letter-spacing: -.5px; line-height: 1; }
.kpi-sub   { font-size: 11px; color: var(--text3); margin-top: 5px; }
.kpi-sub b { color: var(--green); }
.kpi-sub.danger b { color: var(--red); }

/* ── Grid layouts ── */
.grid2    { display: grid; grid-template-columns: 1fr 1fr;  gap: 14px; margin-bottom: 14px; }
.grid3    { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-bottom: 14px; }
.grid-2-1 { display: grid; grid-template-columns: 2fr 1fr; gap: 14px; margin-bottom: 14px; }
.grid-1-2 { display: grid; grid-template-columns: 1fr 2fr; gap: 14px; margin-bottom: 14px; }

/* ── Card ── */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.25rem;
  box-shadow: var(--shadow);
}
.card-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .7px;
  color: var(--text3);
  margin-bottom: 1rem;
}
.chart-wrap { position: relative; width: 100%; }
.section-hdr {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
  padding-bottom: .6rem;
  border-bottom: 1px solid var(--border);
}

/* ── Legend ── */
.legend { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 12px; }
.leg    { display: flex; align-items: center; gap: 5px; font-size: 11px; color: var(--text2); white-space: nowrap; }
.leg-sq { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }

/* ── Horizontal bars ── */
.hbars   { display: flex; flex-direction: column; gap: 8px; }
.hbar    { display: grid; grid-template-columns: 130px 1fr 44px; align-items: center; gap: 8px; }
.hbar-label { font-size: 11px; color: var(--text2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: right; }
.hbar-track { background: var(--surface2); border-radius: 4px; height: 7px; overflow: hidden; }
.hbar-fill  { height: 100%; border-radius: 4px; transition: width .8s cubic-bezier(.4,0,.2,1); }
.hbar-val   { font-size: 11px; font-weight: 600; color: var(--text); font-family: 'JetBrains Mono', monospace; }

/* ── Table ── */
.table-wrap  { overflow-x: auto; }
table        { width: 100%; border-collapse: collapse; font-size: 12px; }
thead tr     { border-bottom: 2px solid var(--border2); }
th           { padding: 8px 12px; text-align: left; font-size: 10.5px; font-weight: 600; text-transform: uppercase; letter-spacing: .5px; color: var(--text3); white-space: nowrap; }
th.r, td.r   { text-align: right; }
tbody tr     { border-bottom: 1px solid var(--border); transition: background .1s; }
tbody tr:hover { background: var(--surface2); }
td           { padding: 8px 12px; color: var(--text2); }
td.bold      { color: var(--text); font-weight: 500; }
td.mono      { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; }
tr.total-row { background: var(--surface2); font-weight: 700; }

/* ── Pills ── */
.pill { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 10px; font-weight: 600; }
.pill-blue   { background: var(--blue-l);   color: var(--blue);   }
.pill-teal   { background: var(--teal-l);   color: var(--teal);   }
.pill-amber  { background: var(--amber-l);  color: var(--amber);  }
.pill-green  { background: var(--green-l);  color: var(--green);  }
.pill-red    { background: var(--red-l);    color: var(--red);    }
.pill-violet { background: var(--violet-l); color: var(--violet); }
.pill-gray   { background: var(--gray-pill);color: var(--gray-text); }

/* ── Badges (header) ── */
.badge        { font-size: 11px; font-weight: 500; padding: 4px 12px; border-radius: 20px; white-space: nowrap; }
.badge-green  { background: var(--green-l); color: var(--green); }
.badge-blue   { background: var(--blue-l);  color: var(--blue);  }

/* ── Equipe blocks ── */
.equipe-row   { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding: 4px 0; }
.equipe-name  { font-size: 13px; font-weight: 600; margin-bottom: 6px; }
.equipe-stats { display: flex; gap: 16px; margin-bottom: 8px; }
.estat        { font-size: 11px; color: var(--text2); }
.estat span   { font-weight: 600; color: var(--text); }
.equipe-bar   { background: var(--surface2); border-radius: 4px; height: 10px; overflow: hidden; }
.equipe-fill  { height: 100%; border-radius: 4px; }

/* ── Donut center label ── */
.donut-wrap   { position: relative; }
.donut-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); text-align: center; pointer-events: none; }
.donut-center-val { font-size: 22px; font-weight: 700; color: var(--text); }
.donut-center-lbl { font-size: 10px; color: var(--text3); margin-top: 1px; }

/* ── Inline progress (table) ── */
.inline-track { display: inline-block; vertical-align: middle; background: var(--surface2); border-radius: 4px; height: 6px; width: 80px; overflow: hidden; margin-right: 6px; }
.inline-fill  { height: 100%; border-radius: 4px; }

/* ── Footer ── */
.footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 12px 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: var(--text3);
  margin-top: 2rem;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .kpis-6 { grid-template-columns: repeat(3, 1fr); }
  .kpis-5 { grid-template-columns: repeat(3, 1fr); }
  .grid2, .grid-2-1, .grid-1-2 { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .header { padding: 0 1rem; }
  .page   { padding: 1rem; }
  .kpis-6, .kpis-5, .kpis-4 { grid-template-columns: repeat(2, 1fr); }
  .hbar   { grid-template-columns: 90px 1fr 36px; }
}
