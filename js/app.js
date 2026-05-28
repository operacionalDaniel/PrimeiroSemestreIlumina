/* ─────────────────────────────────────────────────────────────────────────────
   app.js  —  Lógica do painel BI
   Depende de: Chart.js (CDN), data/dados.js (carregado antes deste script)
───────────────────────────────────────────────────────────────────────────── */

"use strict";

(function () {
  const D = window.DADOS;
  if (!D) { console.error("dados.js não carregado"); return; }

  /* ── Constantes de cor ─────────────────────────────────────────────────── */
  const C = {
    blue:   "#2563EB", teal:  "#0D9488", violet: "#7C3AED",
    amber:  "#D97706", green: "#059669", red:    "#DC2626",
    gray:   "#9CA3AF", blue2: "#60A5FA", teal2:  "#2DD4BF",
  };
  const tick  = { color: "#94A3B8" };
  const grid  = { color: "rgba(0,0,0,.05)" };
  const noLeg = { display: false };
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.font.size   = 11;

  /* ── Helpers ────────────────────────────────────────────────────────────── */
  function $(id) { return document.getElementById(id); }

  function newChart(id, config) {
    const el = $(id);
    if (!el) return;
    return new Chart(el, config);
  }

  function hbars(id, data, color) {
    const el = $(id);
    if (!el) return;
    const max = data[0][1];
    el.innerHTML = data.map(([label, val]) => `
      <div class="hbar">
        <div class="hbar-label" title="${label}">${label}</div>
        <div class="hbar-track">
          <div class="hbar-fill" style="background:${color};width:${Math.round(val / max * 100)}%"></div>
        </div>
        <div class="hbar-val">${val}</div>
      </div>`).join("");
  }

  function pill(text, cls) {
    return `<span class="pill ${cls}">${text}</span>`;
  }

  function appendRows(tbodyId, rows) {
    const tbody = $(tbodyId);
    if (!tbody) return;
    rows.forEach(cells => {
      const tr = document.createElement("tr");
      tr.innerHTML = cells.map(c => `<td class="${c.cls || ""}">${c.v}</td>`).join("");
      tbody.appendChild(tr);
    });
  }

  /* ── Navigation ─────────────────────────────────────────────────────────── */
  window.showPage = function (id, el) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById("page-" + id).classList.add("active");
    el.classList.add("active");
  };

  /* ── Meta ────────────────────────────────────────────────────────────────── */
  function fillMeta() {
    const setTxt = (id, v) => { const el = $(id); if (el) el.textContent = v; };
    setTxt("meta-municipio",   D.meta.municipio + " · " + D.meta.estado);
    setTxt("meta-periodo",     D.meta.periodo);
    setTxt("meta-atualizado",  "Atualizado " + D.meta.atualizado);
    setTxt("kpi-atendimentos", D.kpis.atendimentos.toLocaleString("pt-BR"));
    setTxt("kpi-materiais",    D.kpis.materiaisAplicados.toLocaleString("pt-BR"));
    setTxt("kpi-equipes",      D.kpis.equipes);
    setTxt("kpi-confirmacao",  D.kpis.taxaConfirmacao + "%");
  }

  /* ══════════════════════════════════════════════════════════════════════════
     PAGE 1  —  Visão Geral
  ════════════════════════════════════════════════════════════════════════════ */
  function buildOverview() {
    /* Evolução mensal */
    newChart("c-evolucao", {
      type: "bar",
      data: {
        labels: D.meses,
        datasets: [
          { label: "Equipe 01", data: D.atendimentosMensais.equipe01, backgroundColor: C.blue,   borderRadius: 4, yAxisID: "y",  barPercentage: .7 },
          { label: "Equipe 02", data: D.atendimentosMensais.equipe02, backgroundColor: C.teal,   borderRadius: 4, yAxisID: "y",  barPercentage: .7 },
          { label: "Materiais",  data: D.materiaisMensais.total,       type: "line",
            borderColor: C.violet, backgroundColor: C.violet + "22", fill: true,
            tension: .4, pointBackgroundColor: C.violet, pointRadius: 4,
            yAxisID: "y2", borderWidth: 2 },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: noLeg, tooltip: { mode: "index", intersect: false } },
        scales: {
          y:  { grid, ticks: tick, border: { display: false }, title: { display: true, text: "Atendimentos", color: "#94A3B8", font: { size: 10 } } },
          y2: { position: "right", grid: { display: false }, ticks: { ...tick, color: C.violet }, border: { display: false },
                title: { display: true, text: "Materiais", color: C.violet, font: { size: 10 } } },
        },
      },
    });

    /* Motivos */
    const mLabels = D.motivos.map(m => m.label);
    const mData   = D.motivos.map(m => m.qty);
    newChart("c-motivos", {
      type: "doughnut",
      data: { labels: mLabels, datasets: [{ data: mData, backgroundColor: [C.blue, C.teal, C.amber, C.violet, C.gray], borderWidth: 0, hoverOffset: 6 }] },
      options: { responsive: true, maintainAspectRatio: false, cutout: "65%", plugins: { legend: noLeg } },
    });

    /* Bairros & materiais */
    hbars("bairro-bars", D.bairros.map(b => [b.nome, b.atendimentos]), C.amber);
    hbars("mat-bars-ov", D.materiais.map(m => [m.descricao.substring(0, 28), m.qty]), C.violet);
  }

  /* ══════════════════════════════════════════════════════════════════════════
     PAGE 2  —  Materiais & Equipes
  ════════════════════════════════════════════════════════════════════════════ */
  function buildMateriais() {
    /* Equipes */
    const [e1, e2] = D.equipes;
    const total = e1.os + e2.os;
    const pct1 = Math.round(e1.os / total * 100);
    const pct2 = 100 - pct1;
    const block = (e, pct) => `
      <div>
        <div class="equipe-name" style="color:${e.cor}">${e.nome}</div>
        <div class="equipe-stats">
          <span class="estat"><span>${e.os}</span> OS</span>
          <span class="estat"><span>${e.itens}</span> itens</span>
        </div>
        <div class="equipe-bar"><div class="equipe-fill" style="background:${e.cor};width:${pct}%"></div></div>
        <div style="font-size:11px;color:var(--text3);margin-top:4px">${pct}% do total</div>
      </div>`;
    const er = $("equipe-row");
    if (er) er.innerHTML = block(e1, pct1) + block(e2, pct2);

    /* Equipe por mês */
    newChart("c-equipe-mes", {
      type: "bar",
      data: {
        labels: D.meses,
        datasets: [
          { label: "Equipe 01", data: D.atendimentosMensais.equipe01, backgroundColor: C.blue, borderRadius: 3, barPercentage: .75 },
          { label: "Equipe 02", data: D.atendimentosMensais.equipe02, backgroundColor: C.teal, borderRadius: 3, barPercentage: .75 },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: noLeg, tooltip: { mode: "index", intersect: false } },
        scales: { x: { grid: { display: false }, ticks: tick }, y: { grid, ticks: tick, border: { display: false } } },
      },
    });

    /* Categorias donut */
    const catTotals = [
      { l: "Relês fotoelétricos", v: 477 },
      { l: "Luminárias LED",       v: 209 },
      { l: "Conectores",           v: 244 },
      { l: "Lâmpadas sódio",       v:  65 },
      { l: "Outros",               v:  67 },
    ];
    newChart("c-cat", {
      type: "doughnut",
      data: { labels: catTotals.map(c => c.l), datasets: [{ data: catTotals.map(c => c.v), backgroundColor: [C.blue, C.amber, C.teal, C.violet, C.gray], borderWidth: 0, hoverOffset: 5 }] },
      options: { responsive: true, maintainAspectRatio: false, cutout: "60%", plugins: { legend: noLeg } },
    });

    /* Tabela materiais */
    const catPills = { Relê:"pill-blue", LED:"pill-amber", Conector:"pill-teal", Lâmpada:"pill-violet", Acessório:"pill-green", Cabo:"pill-green" };
    appendRows("mat-table", D.materiais.map(m => [
      { v: m.codigo,   cls: "bold" },
      { v: m.descricao },
      { v: m.qty,      cls: "r mono" },
      { v: pill(m.categoria, catPills[m.categoria] || "pill-gray") },
    ]));

    /* Materiais por mês empilhado */
    const mm = D.materiaisMensais;
    newChart("c-mat-mes", {
      type: "bar",
      data: {
        labels: D.meses,
        datasets: [
          { label: "Relês",      data: mm.reles,      backgroundColor: C.blue,   borderRadius: 3, barPercentage: .8 },
          { label: "Luminárias", data: mm.luminarias,  backgroundColor: C.amber,  borderRadius: 3, barPercentage: .8 },
          { label: "Conectores", data: mm.conectores,  backgroundColor: C.teal,   borderRadius: 3, barPercentage: .8 },
          { label: "Outros",     data: mm.outros,      backgroundColor: C.gray,   borderRadius: 3, barPercentage: .8 },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: true, position: "top", align: "end", labels: { boxWidth: 10, boxHeight: 10, font: { size: 11 }, padding: 16 } }, tooltip: { mode: "index", intersect: false } },
        scales: { x: { stacked: true, grid: { display: false }, ticks: tick }, y: { stacked: true, grid, ticks: tick, border: { display: false } } },
      },
    });
  }

  /* ══════════════════════════════════════════════════════════════════════════
     PAGE 3  —  CUSTOS
  ════════════════════════════════════════════════════════════════════════════ */
  function buildCustos() {
    const cu = D.custos;
    const brl = v => "R$\u00A0" + v.toLocaleString("pt-BR", { minimumFractionDigits:2, maximumFractionDigits:2 });
    const brlK = v => "R$\u00A0" + (v/1000).toLocaleString("pt-BR", { minimumFractionDigits:1, maximumFractionDigits:1 }) + "k";

    // KPIs
    const setTxt = (id, v) => { const el = $(id); if (el) el.textContent = v; };
    const mediaM = cu.totalPeriodo / cu.mensal.labels.length;
    const mediaS = cu.totalPeriodo / cu.semanal.data.length;
    setTxt("kpi-custo-total",     brlK(cu.totalPeriodo));
    setTxt("kpi-custo-medio-mes", brlK(mediaM));
    setTxt("kpi-custo-medio-sem", brlK(mediaS));

    // Chart: custo mensal por equipe + linha total
    newChart("c-custo-mensal", {
      type: "bar",
      data: {
        labels: cu.mensal.labels,
        datasets: [
          { label:"Equipe 01", data:cu.mensal.equipe01, backgroundColor:C.blue, borderRadius:4, yAxisID:"y", barPercentage:.75 },
          { label:"Equipe 02", data:cu.mensal.equipe02, backgroundColor:C.teal, borderRadius:4, yAxisID:"y", barPercentage:.75 },
          { label:"Total", data:cu.mensal.total, type:"line",
            borderColor:C.violet, backgroundColor:C.violet+"22", fill:true,
            tension:.4, pointBackgroundColor:C.violet, pointRadius:4,
            yAxisID:"y2", borderWidth:2 },
        ],
      },
      options: {
        responsive:true, maintainAspectRatio:false,
        plugins:{ legend:noLeg, tooltip:{
          mode:"index", intersect:false,
          callbacks:{ label: t => " "+t.dataset.label+": "+brl(t.raw) }
        }},
        scales:{
          y:  { stacked:true, grid, ticks:{ ...tick, callback: v => "R$"+Math.round(v/1000)+"k" }, border:{display:false} },
          y2: { position:"right", grid:{display:false}, ticks:{ ...tick, color:C.violet, callback: v => "R$"+Math.round(v/1000)+"k" }, border:{display:false} },
        },
      },
    });

    // Chart: custo por categoria — donut
    const catColors = [C.blue, C.amber, C.teal, C.violet, "#F59E0B", C.green, C.gray];
    const catTotal  = cu.porCategoria.reduce((s,c)=>s+c.valor,0);
    newChart("c-custo-cat", {
      type:"doughnut",
      data:{
        labels: cu.porCategoria.map(c=>c.cat),
        datasets:[{ data:cu.porCategoria.map(c=>c.valor), backgroundColor:catColors, borderWidth:0, hoverOffset:6 }]
      },
      options:{
        responsive:true, maintainAspectRatio:false, cutout:"62%",
        plugins:{ legend:noLeg, tooltip:{ callbacks:{ label:t=>" "+t.label+": "+brl(t.raw) } } }
      },
    });

    // Legend for category donut
    const legEl = $("leg-cat-custo");
    if (legEl) {
      legEl.innerHTML = cu.porCategoria.map((c,i) => {
        const pct = (c.valor/catTotal*100).toFixed(1);
        return `<span class="leg"><span class="leg-sq" style="background:${catColors[i]}"></span>${c.cat} — ${brl(c.valor)} (${pct}%)</span>`;
      }).join("");
    }

    // Chart: custo semanal — area line
    newChart("c-custo-semanal", {
      type:"line",
      data:{
        labels: cu.semanal.labels,
        datasets:[{
          label:"Custo semanal", data:cu.semanal.data,
          borderColor:C.violet, backgroundColor:C.violet+"18",
          fill:true, tension:.35,
          pointBackgroundColor:cu.semanal.data.map(v=>v===Math.max(...cu.semanal.data)?C.red:C.violet),
          pointRadius:cu.semanal.data.map(v=>v===Math.max(...cu.semanal.data)?5:3),
          borderWidth:2,
        }],
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{ legend:noLeg, tooltip:{ callbacks:{ label:t=>" Semana "+t.label+": "+brl(t.raw) } } },
        scales:{
          x:{ grid:{display:false}, ticks:{ ...tick, maxRotation:45, autoSkip:false, font:{size:9} } },
          y:{ grid, ticks:{ ...tick, callback:v=>"R$"+Math.round(v/1000)+"k" }, border:{display:false} }
        },
      },
    });

    // Equipe cost blocks
    const ecb = $("equipe-custo-blocks");
    if (ecb) {
      const total = cu.porEquipe.reduce((s,e)=>s+e.valor,0);
      ecb.innerHTML = `<div class="equipe-row">` +
        cu.porEquipe.map(e => {
          const pct = Math.round(e.valor/total*100);
          return `<div>
            <div class="equipe-name" style="color:${e.cor}">${e.equipe}</div>
            <div class="equipe-stats">
              <span class="estat" style="font-size:18px;font-weight:700;color:var(--text)">${brl(e.valor)}</span>
            </div>
            <div class="equipe-bar"><div class="equipe-fill" style="background:${e.cor};width:${pct}%"></div></div>
            <div style="font-size:11px;color:var(--text3);margin-top:4px">${pct}% do custo total</div>
          </div>`;
        }).join("") +
        `</div>`;
    }

    // Horizontal bars: top 8 materiais por custo
    hbars("custo-mat-bars",
      cu.porMaterial.slice(0,8).map(m => [m.descricao.substring(0,28), Math.round(m.total)]),
      C.violet
    );

    // Full table
    const grandTotal = cu.totalPeriodo;
    appendRows("custo-table", cu.porMaterial.map(m => {
      const pct = (m.total/grandTotal*100).toFixed(1);
      const pctBar = `<div style="display:flex;align-items:center;gap:6px;justify-content:flex-end">
        <div class="inline-track"><div class="inline-fill" style="background:${C.violet};width:${Math.min(parseFloat(pct),100)}%"></div></div>
        <span style="font-family:'JetBrains Mono',monospace;font-size:11px">${pct}%</span>
      </div>`;
      return [
        { v:m.codigo,                  cls:"bold" },
        { v:m.descricao },
        { v:m.qtd,                     cls:"r mono" },
        { v:"R$ "+m.unitario.toLocaleString("pt-BR",{minimumFractionDigits:2}), cls:"r mono" },
        { v:"R$ "+m.total.toLocaleString("pt-BR",{minimumFractionDigits:2}),    cls:"r mono bold" },
        { v:pctBar },
      ];
    }));

    // Total row
    const tbody = $("custo-table");
    if (tbody) {
      const tr = document.createElement("tr");
      tr.className = "total-row";
      tr.innerHTML = `<td class="bold" colspan="4">TOTAL</td>
        <td class="r mono bold">R$ ${grandTotal.toLocaleString("pt-BR",{minimumFractionDigits:2})}</td>
        <td></td>`;
      tbody.appendChild(tr);
    }
  }

  /* ── Boot ─────────────────────────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    fillMeta();
    buildOverview();
    buildMateriais();
    buildCustos();
  });

})();
