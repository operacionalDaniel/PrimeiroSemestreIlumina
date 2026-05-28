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
    pontosInstalados:  15920,
    semCadastro:       186,
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

  // ── Redes ───────────────────────────────────────────────────────────────────
  // [nome, tipo, cadastrados, semCadastro]
  redes: [
    ["REDE 1 A","4G",   434, 0], ["REDE 1 B","Fibra",314, 0], ["REDE 2", "Fibra",448, 0],
    ["REDE 3",  "4G",   562, 0], ["REDE 4",  "Fibra",395, 0], ["REDE 5", "4G",   283, 0],
    ["REDE 6",  "4G",   471, 0], ["REDE 7",  "Fibra",427, 0], ["REDE 8", "4G",   533, 0],
    ["REDE 9",  "4G",   333, 0], ["REDE 10", "Fibra",403, 0], ["REDE 11","4G",   481, 0],
    ["REDE 12", "Fibra",369, 0], ["REDE 13", "4G",   260,44], ["REDE 14","4G",   370, 0],
    ["REDE 15", "4G",   356, 0], ["REDE 16", "4G",   445, 0], ["REDE 17","Fibra",413, 0],
    ["REDE 18", "Fibra",320, 0], ["REDE 19", "Fibra",436, 0], ["REDE 20","4G",   156, 0],
    ["REDE 21", "Fibra",450, 0], ["REDE 22", "4G",   221, 0], ["REDE 23","4G",   337, 0],
    ["REDE 24", "Fibra",567, 0], ["REDE 25", "Fibra",427, 0], ["REDE 26","4G",   313, 0],
    ["REDE 27", "4G",   327,77], ["REDE 28", "Fibra",274, 0], ["REDE 29","Fibra",151, 9],
    ["REDE 30", "Fibra",246, 0], ["REDE 31", "Fibra",261, 1], ["REDE 32","Fibra",272, 0],
    ["REDE 33", "Fibra",508, 0], ["REDE 34", "4G",   317, 0], ["REDE 35","Fibra",400, 0],
    ["REDE 36", "Fibra",414, 0], ["REDE 37", "4G",   345, 0], ["REDE 38","4G",   391, 0],
    ["REDE 39", "—",      0, 0], ["REDE 40", "Fibra",282,39], ["REDE 41","4G",   189, 0],
    ["REDE 42", "4G",   185, 0], ["REDE 43", "—",     0, 0],  ["REDE 50","Fibra",362, 0],
    ["ZERADOS", "—",   302, 0],
  ],

  // ── Sem cadastro ────────────────────────────────────────────────────────────
  semCadastro: {
    total:         186,
    transmitindo:  170,
    semComunicacao: 16,
    encontradosSGI:185,

    porRede: [
      { rede:"Rede 27 (4G)",    tipo:"4G",   transmitindo:77, semComm:0 },
      { rede:"Rede 13 (4G)",    tipo:"4G",   transmitindo:44, semComm:0 },
      { rede:"Rede 40 (Fibra)", tipo:"Fibra",transmitindo:39, semComm:0 },
      { rede:"Rede 29 (Fibra)", tipo:"Fibra",transmitindo: 9, semComm:0 },
      { rede:"Rede 31 (Fibra)", tipo:"Fibra",transmitindo: 1, semComm:0 },
      { rede:"Sem comunicação", tipo:"—",    transmitindo: 0, semComm:16 },
    ],

    porBairro: [
      { bairro:"Zona Rural",       qty:71 },
      { bairro:"Tereza Cristina",  qty:57 },
      { bairro:"Linha Anta",       qty:24 },
      { bairro:"Jardim Elizabete", qty: 7 },
      { bairro:"Centro",           qty: 6 },
      { bairro:"Vila Nova",        qty: 1 },
    ],
  },

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
