# BI — Operações de Iluminação Pública · Içara

Painel executivo estático (HTML + CSS + JS) para visualização de:

- **Materiais aplicados** por equipe e período
- **Pontos instalados** por rede (4G / Fibra)
- **Equipamentos sem cadastro** com cruzamento SGI

> Nenhuma dependência de servidor ou banco de dados.
> Basta abrir o `index.html` no navegador ou hospedar em qualquer CDN.

---

## Estrutura

```
bi-dashboard/
├── index.html          ← Página principal (HTML puro, sem build)
├── css/
│   └── style.css       ← Todos os estilos
├── js/
│   └── app.js          ← Lógica de gráficos e UI
├── data/
│   └── dados.js        ← Fonte única de dados (atualize aqui)
└── README.md
```

---

## Rodando localmente

### Opção 1 — Abrir direto (sem servidor)
Basta dar duplo clique em `index.html`.  
Funciona porque todos os scripts são carregados de forma síncrona — sem `fetch()` nem módulos ES.

### Opção 2 — Servidor local (recomendado para desenvolvimento)

**Python (built-in):**
```bash
cd bi-dashboard
python3 -m http.server 8080
# Acesse: http://localhost:8080
```

**Node.js:**
```bash
npx serve .
# Acesse: http://localhost:3000
```

**VS Code:** instale a extensão *Live Server* e clique em "Go Live".

---

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (pode ser público ou privado com Pages habilitado)

2. Faça push da pasta `bi-dashboard/` como raiz do repositório:

```bash
cd bi-dashboard
git init
git add .
git commit -m "feat: painel BI iluminação pública"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

3. No repositório, vá em **Settings → Pages**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `(root)`
   - Clique em **Save**

4. Após ~1 minuto, o painel estará disponível em:
   ```
   https://SEU_USUARIO.github.io/SEU_REPO/
   ```

---

## Atualizando os dados

Todos os dados ficam em **`data/dados.js`** — um único arquivo JavaScript com o objeto `window.DADOS`.

Para atualizar após um novo relatório:

1. Edite `data/dados.js`
2. Atualize os arrays e objetos conforme os novos valores
3. Faça commit e push — o GitHub Pages atualiza automaticamente

### Campos principais

| Campo | Onde atualizar | Exemplo |
|---|---|---|
| KPIs globais | `DADOS.kpis` | `atendimentos: 721` |
| Atendimentos mensais | `DADOS.atendimentosMensais` | `equipe01: [65,40,53,...]` |
| Materiais mensais | `DADOS.materiaisMensais` | `total: [274,140,...]` |
| Tabela de materiais | `DADOS.materiais` | `{ codigo, descricao, qty, categoria }` |
| Redes | `DADOS.redes` | `["REDE 1 A","4G",434,0]` |
| Sem cadastro | `DADOS.semCadastro` | `{ total, transmitindo, porRede }` |

---

## Tecnologias

| Biblioteca | Versão | Uso |
|---|---|---|
| [Chart.js](https://www.chartjs.org) | 4.4.1 | Todos os gráficos |
| [Google Fonts](https://fonts.google.com) | — | Inter + JetBrains Mono |

Carregadas via CDN — sem `npm install`, sem bundler.

---

## Compatibilidade

Testado em Chrome 124+, Firefox 125+, Edge 124+, Safari 17+.  
Responsivo para telas a partir de 375px.

---

## Licença

Uso interno. Dados de operação do Parque de Serviço Içara / SC.
