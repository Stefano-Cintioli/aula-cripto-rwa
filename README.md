# Cripto, RWA e BNB Chain

Apresentação pessoal em PT-BR de Stefano Cintioli para a aula de português com o professor Deivid. São 15 slides com referências curtas para uma fala de aproximadamente 30 minutos.

Apresentação: https://aula-cripto-rwa.vercel.app

Código: https://github.com/Stefano-Cintioli/aula-cripto-rwa

Material educativo pessoal, não é material oficial da BNB Chain. Conteúdo educativo, sem recomendação de investimento.

## Abrir localmente

Abra `index.html` no navegador, mantendo `src` e `assets` ao lado. Não há build, módulos ou dependências externas para renderizar o deck.

Para servir por HTTP, execute nesta pasta:

```sh
npx serve .
```

Ou use Python:

```sh
python3 -m http.server 4187 --bind 127.0.0.1
```

## Navegação e links

- Setas, espaço e PageDown avançam; seta esquerda/cima e PageUp voltam.
- Depois do último slide, avançar retorna à capa. Voltar antes da capa abre o último slide.
- Home e End abrem diretamente o primeiro e o último slide.
- F alterna fullscreen quando o navegador oferece essa API.
- Swipe horizontal permite avançar ou voltar no celular.
- O hash mantém o slide atual, por exemplo `#5`.
- Os dados e bullets factuais abrem suas fontes em outra aba. Os links não mudam o slide.
- O encerramento contém X, LinkedIn, Telegram e GitHub de Stefano.

Para um PDF de backup, use a impressão do navegador: um slide por página, em fundo branco. Desative cabeçalhos/rodapés do navegador e mantenha escala de 100%.

## Editar o conteúdo

`src/deck.js` contém todos os dados. Cada slide usa `id`, `section`, `title`, `bullets` e os campos opcionais `highlight` e `source`. Use de dois a quatro bullets, com até nove palavras cada.

```js
{
  id: "02",
  section: "Conceito",
  title: "O que é cripto?",
  highlight: "cripto",
  bullets: ["Ativo digital com regras próprias", "Transferências verificadas pela rede"],
  source: [{
    label: "Bitcoin",
    url: "https://bitcoin.org/en/faq",
    date: "Consulta: 14/10/2026",
    status: "confirmed",
    bullets: [0, 1]
  }]
}
```

`source.bullets` aponta aos índices dos bullets que aquela referência sustenta, começando em zero. Cada bullet factual deve ter uma fonte confirmada. `source.references` permite links complementares de cálculo ou elegibilidade. `source.productUrl` aponta à documentação do emissor quando o dado principal vem de um provedor de mercado.

Os slides 12 e 13 usam ` · ` como separador:

- Slide 12: `valor · rótulo`, com quatro referências na mesma ordem.
- Slide 13: `nome · descrição de três palavras · dado`, com três referências na mesma ordem.

Os campos gerais `author` e `date` definem a capa; `socials` define os links do encerramento e `disclaimer` define o aviso educativo.

## Dados, fontes e publicação

`SOURCES.md` preserva evidências, datas-base, acesso e limites. As métricas são snapshots datados, não valores ao vivo. Não projetar itens não confirmados. Manter valor distribuído, TVL, transferências e negociação como métricas distintas.

Space Grotesk 600, Inter 400 e JetBrains Mono 400 são hospedadas em `assets/fonts`, junto das licenças OFL.

O repositório usa a branch `main`. O projeto Vercel é `aula-cripto-rwa`; a apresentação de produção é pública e mantém `noindex`. Arquivos locais de revisão e configuração privada não fazem parte do repositório.

Validação de comportamento:

```sh
node --test tests/behavior.test.cjs
```
