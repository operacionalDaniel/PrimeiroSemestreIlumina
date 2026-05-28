// ─────────────────────────────────────────────────────────────────────────────
// dados.js  —  Fonte única de dados do painel
// Atualize aqui para refletir novos relatórios sem tocar no código de UI.
// ─────────────────────────────────────────────────────────────────────────────

window.DADOS = {

  meta: {
    municipio:    "Içara",
    estado:       "SC",
    periodo:      "Janeiro – Maio 2026",
    atualizado:   "28/05/2026",
    confirmedPct: 100,
  },

  // ── KPIs globais ────────────────────────────────────────────────────────────
  kpis: {
    atendimentos:      721,
    materiaisAplicados:1062,
    equipes:           2,
    taxaConfirmacao:   100,
  },

  // ── Evolução mensal ─────────────────────────────────────────────────────────
  meses: ["Jan", "Fev", "Mar", "Abr", "Mai"],

  atendimentosMensais: {
    equipe01: [65,  40,  53, 149, 115],
    equipe02: [116, 52,  54,  26,  51],
  },

  materiaisMensais: {
    reles:     [120, 55,  70, 115, 117],
    luminarias:[60,  30,  45,  45,  29],
    conectores:[70,  40,  45,  55,  34],
    outros:    [24,  15,  15,  12,  18],
    total:     [274, 140, 175, 227, 246],
  },

  // ── Motivos de atendimento ──────────────────────────────────────────────────
  motivos: [
    { label: "Lâmpada queimada",   qty: 412 },
    { label: "Relê queimado",      qty: 402 },
    { label: "LED / Luminária",    qty:  82 },
    { label: "Conexão",            qty:  72 },
    { label: "Outros",             qty:  19 },
  ],

  // ── Materiais ───────────────────────────────────────────────────────────────
  materiais: [
    { codigo:"I-252", descricao:"Relê SGIP Fotoelétrico SMARTGREEN",        qty:452, categoria:"Relê"      },
    { codigo:"I-053", descricao:"Luminária LED 30W — REEME",                 qty:150, categoria:"LED"       },
    { codigo:"I-031", descricao:"Conector cunha BT tipo II (verde)",          qty:110, categoria:"Conector"  },
    { codigo:"I-043", descricao:"Lâmpada vapor de sódio 70W E27",            qty: 65, categoria:"Lâmpada"   },
    { codigo:"I-030", descricao:"Conector cunha BT tipo I (cinza)",           qty: 57, categoria:"Conector"  },
    { codigo:"I-034", descricao:"Conector derivação perfurante 35x70mm²",    qty: 43, categoria:"Conector"  },
    { codigo:"I-055", descricao:"Luminária LED 70W — REEME",                  qty: 36, categoria:"LED"       },
    { codigo:"I-032", descricao:"Conector cunha BT tipo III (vermelho)",      qty: 34, categoria:"Conector"  },
    { codigo:"—",     descricao:"Tipo de Relê: NA",                           qty: 25, categoria:"Relê"      },
    { codigo:"I-056", descricao:"Luminária LED 120W — REEME",                 qty: 23, categoria:"LED"       },
    { codigo:"I-004", descricao:"Bocal E-27",                                 qty: 19, categoria:"Acessório" },
    { codigo:"I-008", descricao:"Cabo PP 2x1,5mm",                            qty: 18, categoria:"Cabo"      },
  ],

  // ── Bairros ─────────────────────────────────────────────────────────────────
  bairros: [
    { nome:"Presidente Vargas", atendimentos:66 },
    { nome:"Centro",            atendimentos:56 },
    { nome:"Liri",              atendimentos:40 },
    { nome:"Vila São José",     atendimentos:39 },
    { nome:"Lombas",            atendimentos:34 },
    { nome:"Demboski",          atendimentos:32 },
    { nome:"Zona Rural",        atendimentos:32 },
    { nome:"Boa Vista",         atendimentos:29 },
  ],

  // ── Equipes ─────────────────────────────────────────────────────────────────
  equipes: [
    { nome:"Equipe 01", os:422, itens:579, cor:"#2563EB" },
    { nome:"Equipe 02", os:299, itens:483, cor:"#0D9488" },
  ],

  // ── Custos ──────────────────────────────────────────────────────────────────
  custos: {

    totalPeriodo: 191235.56,

    // Custo mensal total
    mensal: {
      labels: ["Jan/2026","Fev/2026","Mar/2026","Abr/2026","Mai/2026"],
      total:  [33939.18, 27116.84, 30705.41, 53700.71, 45773.42],
      equipe01: [10801.01, 12104.25, 14475.34, 45786.91, 29956.95],
      equipe02: [23138.17, 15012.59, 16230.07,  7913.80, 15816.47],
    },

    // Custo semanal (seg da semana → custo)
    semanal: {
      labels: ["29/12","05/01","12/01","19/01","26/01","02/02","09/02","16/02","23/02",
               "02/03","09/03","16/03","23/03","30/03","06/04","13/04","20/04","27/04",
               "04/05","11/05","18/05","25/05"],
      data:   [835.39,6842.93,8072.09,11837.31,6351.46,6462.10,8754.69,6474.60,5425.45,
               6867.16,4692.34,3615.65,11156.59,7423.83,18953.63,8626.55,14551.21,8519.16,
               14349.68,15577.18,11250.33,4596.23],
    },

    // Custo por categoria
    porCategoria: [
      { cat:"Relê",          valor:107299.74 },
      { cat:"Luminária LED", valor: 76815.23 },
      { cat:"Luminária",     valor:  3357.41 },
      { cat:"Estrutura",     valor:  1644.02 },
      { cat:"Lâmpada sódio", valor:   997.75 },
      { cat:"Conector",      valor:   888.51 },
      { cat:"Reator",        valor:   232.90 },
    ],

    // Por equipe (total período)
    porEquipe: [
      { equipe:"Equipe 01", valor:113124.46, cor:"#2563EB" },
      { equipe:"Equipe 02", valor: 78111.10, cor:"#0D9488" },
    ],

    // Tabela completa por material
    porMaterial: [
      { codigo:"I-252",  descricao:"Relê SGIP Fotoelétrico SMARTGREEN",       qtd:452, unitario:236.62, total:106952.24 },
      { codigo:"I-053",  descricao:"Luminária LED 30W — REEME",                qtd:150, unitario:299.55, total: 44932.50 },
      { codigo:"I-055",  descricao:"Luminária LED 70W — REEME",                qtd: 36, unitario:400.23, total: 14408.28 },
      { codigo:"I-056",  descricao:"Luminária LED 120W — REEME",               qtd: 23, unitario:465.33, total: 10702.59 },
      { codigo:"I-054",  descricao:"Luminária LED 40W — REEME",                qtd: 20, unitario:322.08, total:  6441.60 },
      { codigo:"I-300",  descricao:"Luminária 30W ARGOS",                       qtd: 11, unitario:263.96, total:  2903.56 },
      { codigo:"I-090",  descricao:"Braço 2 mts",                               qtd: 17, unitario: 96.50, total:  1640.50 },
      { codigo:"I-043",  descricao:"Lâmpada vapor de sódio 70W E27",           qtd: 65, unitario: 15.35, total:   997.75 },
      { codigo:"I-030",  descricao:"Conector cunha BT tipo I (cinza)",          qtd: 57, unitario:  9.00, total:   513.00 },
      { codigo:"I-303",  descricao:"Luminária 120W ARGOS",                      qtd:  1, unitario:453.85, total:   453.85 },
      { codigo:"2630",   descricao:"Tipo de Relê: NA",                          qtd: 25, unitario: 13.90, total:   347.50 },
      { codigo:"I-0302", descricao:"Luminária LED 70W ARGOS",                   qtd:  1, unitario:330.26, total:   330.26 },
      { codigo:"I-034",  descricao:"Conector derivação perfurante 35x70mm²",   qtd: 43, unitario:  5.91, total:   254.13 },
      { codigo:"I-068",  descricao:"Reator externo vapor de sódio 70W",        qtd:  5, unitario: 46.58, total:   232.90 },
      { codigo:"I-032",  descricao:"Conector cunha BT tipo III (vermelho)",     qtd: 34, unitario:  3.03, total:   103.02 },
      { codigo:"I-099",  descricao:"Conector Perfurante 10x120",                qtd:  3, unitario:  6.12, total:    18.36 },
      { codigo:"I-058",  descricao:"Parafuso cabeça abaulada 16x70mm",          qtd:  1, unitario:  3.52, total:     3.52 },
    ],
  },
};
