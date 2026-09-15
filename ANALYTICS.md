# Analytics

Dashboard privado em `/analytics` com contagem de pageviews, visitantes únicos e
país/região. Sem cookies de rastreamento e sem serviços de terceiros.

## O que é coletado

| Dado | Como |
|---|---|
| Pageviews por página | Contador por caminho (`/about`, `/work/all`, …) |
| Visitantes únicos | Hash anônimo diário de IP + user-agent, via HyperLogLog |
| País e região | Headers de geolocalização da Vercel (`x-vercel-ip-country`) |
| Série diária | Pageviews e únicos por dia, últimos 90 dias |

O IP **nunca é armazenado**. Ele entra num hash SHA-256 junto com a data e um
salt, e só o resultado é guardado. O salt muda a cada dia, então não é possível
seguir a mesma pessoa entre dias. Como nada disso identifica um indivíduo nem usa
cookie, não é necessário banner de consentimento (LGPD/GDPR).

## Checklist de deploy na Vercel

Ao subir para produção, faça os três passos — só definir a senha não é suficiente,
o dashboard abriria permanentemente zerado.

- [ ] **Criar o banco**: painel do projeto → **Storage** → **Create Database** →
      **Upstash Redis**. As variáveis `KV_REST_API_URL` e `KV_REST_API_TOKEN` são
      injetadas automaticamente; você não precisa digitá-las.

- [ ] **Adicionar as duas variáveis próprias** em **Settings → Environment
      Variables**, marcando **Production** (e Preview, se quiser testar lá):

      ANALYTICS_PASSWORD   uma senha forte, diferente da de desenvolvimento
      ANALYTICS_SALT       saída de `openssl rand -hex 16`

- [ ] **Redeploy**. Variáveis de ambiente só valem para builds novos. Se você as
      adicionou depois do deploy automático, force um: **Deployments** → menu do
      último deploy → **Redeploy**.

Sem o Redis em produção o site continua funcionando normalmente, mas os números
se perdem a cada reinício de instância — o fallback em memória serve apenas para
desenvolvimento local.

## Setup

### 1. Criar o banco Redis

No diretório do projeto, com a Vercel CLI:

```bash
vercel install upstash
```

Isso provisiona um Upstash Redis, conecta ao projeto e injeta as credenciais como
variáveis de ambiente automaticamente. Alternativa pelo painel: **Storage → Create
Database → Upstash Redis**.

O código aceita tanto `KV_REST_API_URL`/`KV_REST_API_TOKEN` quanto
`UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN`, que são os dois nomes que a
Vercel usa dependendo de como a integração foi criada.

### 2. Definir a senha e o salt

No painel da Vercel, em **Settings → Environment Variables**:

| Variável | Valor |
|---|---|
| `ANALYTICS_PASSWORD` | A senha para entrar no dashboard |
| `ANALYTICS_SALT` | Uma string aleatória qualquer (ex: saída de `openssl rand -hex 16`) |

`ANALYTICS_SALT` é opcional mas recomendado: sem ele, um valor padrão é usado.
Trocar a senha depois invalida todas as sessões abertas automaticamente.

### 3. Rodar localmente (opcional)

Crie um `.env.local` — já está no `.gitignore`, não vai para o Git:

```
ANALYTICS_PASSWORD=escolha-uma-senha
ANALYTICS_SALT=qualquer-string-aleatoria
KV_REST_API_URL=...
KV_REST_API_TOKEN=...
```

Sem as variáveis de Redis o site funciona normalmente — o tracking apenas não
registra nada, e `/analytics` mostra quais variáveis estão faltando.

Em desenvolvimento local os dados de país/região ficam vazios: esses headers são
adicionados pela rede da Vercel e não existem na sua máquina.

## Custo

O plano gratuito do Upstash dá 500.000 comandos por mês e 256 MB. Cada visita
consome cerca de 7 comandos. Um portfólio com 3.000 visitas mensais usa por volta
de 21.000 comandos — **cerca de 4% do limite gratuito**. O volume de dados fica
abaixo de 100 KB.

## Retenção

Os contadores principais **não expiram**: total de pageviews, contagem por página,
países, regiões e visitantes únicos totais são mantidos indefinidamente.

Apenas as chaves da série diária (`pv:day:*` e `uniq:day:*`) têm TTL de 90 dias,
para não acumular uma chave nova por dia para sempre. Isso não afeta os totais —
eles são contadores independentes.

Para guardar a série diária indefinidamente, remova as chamadas `pipeline.expire(...)`
em `lib/analytics.ts`.

## Estrutura das chaves no Redis

```
pv:total                 número    total de pageviews (nunca expira)
pv:path:<caminho>        número    pageviews por página (nunca expira)
pv:day:<YYYY-MM-DD>      número    pageviews no dia (TTL 90 dias)
geo:country              hash      código do país -> contagem (nunca expira)
geo:region               hash      "PAÍS/REGIÃO" -> contagem (nunca expira)
uniq:all                 HLL       visitantes únicos totais (nunca expira)
uniq:day:<YYYY-MM-DD>    HLL       únicos no dia (TTL 90 dias)
```

HyperLogLog (HLL) conta valores distintos usando 12 KB fixos, com margem de erro
de cerca de 0,81%. É a estrutura padrão para contagem de únicos — o número é
aproximado por design, em troca de não precisar guardar a lista de visitantes.

## Arquivos

| Arquivo | Papel |
|---|---|
| `lib/analytics.ts` | Leitura e escrita no Redis |
| `lib/analytics-auth.ts` | Verificação de senha e sessão |
| `app/api/track/route.ts` | Endpoint que recebe os pageviews |
| `components/analytics-tracker.tsx` | Dispara o tracking no cliente |
| `app/analytics/page.tsx` | Página do dashboard (gate de senha) |
| `app/analytics/dashboard.tsx` | Visualizações |
| `app/analytics/login-form.tsx` | Formulário de senha |
| `app/analytics/actions.ts` | Server Actions de login e logout |
