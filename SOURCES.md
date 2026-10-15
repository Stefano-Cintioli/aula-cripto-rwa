# Fontes, dados e exemplos · Fase 2

Deck simplificado em 15/10/2026. Os snapshots e as datas-base abaixo permanecem os verificados em 14/10; esta revisão não atualiza as métricas. Somente dados `confirmed` aparecem nos slides. O registro de pendências permanece aqui para consulta.

Consulta em **14/10/2026**, data local de Buenos Aires. Fontes primárias dos emissores, da rede e dos provedores de dados. `confirmed` sustenta o recorte registrado; não significa auditoria independente. `[DADO A CONFIRMAR]` fica fora da fala factual. Dados dinâmicos exigem nova consulta antes da apresentação.

Valores são USD. Na apresentação, o recorte BNB Chain dos painéis corresponde à BNB Smart Chain (BSC); não agrega opBNB. **Valor distribuído, TVL de DeFi, market cap, negociações e transferências são métricas diferentes.** Endereços holders não são pessoas únicas. Não somar categorias sobrepostas.

As APIs abaixo não publicam timestamp de cálculo. “Snapshot consultado em 14/10” identifica observação, e o horário UTC registra a captura quando disponível. O total de stablecoins foi calculado somando os campos já convertidos para USD de `stablecoinchains`; o endpoint `stablecoincharts/BSC` da Fase 1 não foi adotado como um total intercambiável. A leitura fresca resolveu o uso principal com US$ 13,14 bi, em vez de repetir US$ 13,2 bi; o TVL fresco passou de US$ 5,33 bi aproximados para US$ 5,32 bi.

**Seleção aprovada:** BUIDL via Securitize, Franklin Templeton/Benji e Ondo USDY. USYC fica como reserva. VBILL e TBILL não foram selecionados. A campanha de zero fee é temporária e fica fora da apresentação principal.

## Dados da infraestrutura

### RWA-BNB-VALUE · RWA.xyz · BNB Chain

- **Fonte:** [RWA.xyz · BNB Chain](https://app.rwa.xyz/networks/bnb-chain).
- **Data-base/recorte temporal:** 2026-10-14. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Distributed Asset Value, BNB Chain, excluindo stablecoins.
- **Registro:** US$ 5,91 bilhões, precisão do cabeçalho. Valor distribuído não é TVL. O total exato da Fase 1 não foi recapturado; usar o arredondamento confirmado.

### RWA-BNB-TRANSFER · RWA.xyz · transferências de RWA

- **Fonte:** [RWA.xyz · transferências de RWA](https://app.rwa.xyz/networks/bnb-chain).
- **Data-base/recorte temporal:** 2026-10-14. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** RWA 30D Transfer Volume, BNB Chain.
- **Registro:** US$ 10,26 bilhões em transferências nos últimos 30 dias. Não é volume negociado, receita ou pagamentos finais. Fronteiras exatas da janela não publicadas no cabeçalho.

### RWA-BNB-HOLDERS · BNB Chain · anúncio de holders

- **Fonte:** [BNB Chain · anúncio de holders](https://x.com/BNBCHAIN/status/2107803255422034140).
- **Data-base/recorte temporal:** 2026-10-07. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Relato oficial de 2 milhões de RWA holders; cerca de 40% do total global; primeira rede a atingir esse marco.
- **Registro:** Confirmado como anúncio oficial lido no navegador. Holders são endereços observados, não pessoas únicas. A primazia histórica e a participação global são atribuídas à BNB Chain; não representam auditoria independente.

### RWA-BNB-HOLDERS-CURRENT · RWA.xyz · RWA holders

- **Fonte:** [RWA.xyz · RWA holders](https://app.rwa.xyz/networks/bnb-chain).
- **Data-base/recorte temporal:** 2026-10-14. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** RWA Holders, BNB Chain.
- **Registro:** 2.047.103 no snapshot do painel. Não equivale a pessoas únicas nem deve ser usado para recalcular silenciosamente a participação global anunciada em 07/10.

### BSC-TOKENIZED-STOCKS · BNB Chain · ações tokenizadas

- **Fonte:** [BNB Chain · ações tokenizadas](https://x.com/BNBCHAIN/status/2109521419558330629).
- **Data-base/recorte temporal:** 2026-10-12. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Market cap de ações tokenizadas por rede, relato oficial citando Token Terminal.
- **Registro:** US$ 1,2 bilhão e liderança entre as redes, segundo o post oficial. O post incorpora análise da Token Terminal publicada em 11/10. Não é TVL nem todo o mercado de RWA; não atualizar este ranking com métricas de outro provedor.

### TOKEN-TERMINAL-STOCKS · Token Terminal · crescimento de ações tokenizadas

- **Fonte:** [Token Terminal · crescimento de ações tokenizadas](https://x.com/tokenterminal/status/2109385913927352791).
- **Data-base/recorte temporal:** 2026-10-11. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Variação de market cap por rede em sete dias.
- **Registro:** Post incorporado pelo anúncio da BNB Chain: crescimento de US$ 63,6 milhões na BNB Chain em sete dias. Registro de contexto, sem incluir o crescimento na tela principal.

### BSC-STABLECOINS · DefiLlama · stablecoinchains/BSC

- **Fonte:** [DefiLlama · stablecoinchains/BSC](https://stablecoins.llama.fi/stablecoinchains).
- **Data-base/recorte temporal:** 2026-10-14 (snapshot consultado). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Soma dos valores em USD de totalCirculatingUSD da linha name=BSC.
- **Registro:** US$ 13.137.181.978,24, ou US$ 13,14 bilhões. Captura 19:16:14 UTC. O endpoint não informa timestamp de cálculo; esta data identifica a observação. Soma em USD, não unidades nominais. Difere dos US$ 13,2 bilhões aproximados do briefing por atualização da fonte; não usar stablecoincharts/BSC como total intercambiável.
- **Captura UTC:** 2026-10-14T19:16:14.860829Z.

### BSC-DEFI-TVL · DefiLlama · TVL DeFi da BSC

- **Fonte:** [DefiLlama · TVL DeFi da BSC](https://api.llama.fi/v2/chains).
- **Data-base/recorte temporal:** 2026-10-14 (snapshot consultado). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Campo tvl da linha name=BSC, chainId=56.
- **Registro:** US$ 5.323.222.824,43, ou US$ 5,32 bilhões. Captura 19:16:14 UTC; o endpoint não informa timestamp de cálculo. É TVL de DeFi da BSC inteira, não TVL de RWA. A leitura atual difere dos US$ 5,33 bilhões do briefing.
- **Captura UTC:** 2026-10-14T19:16:14.985397Z.

### BSC-DEX-30D · DefiLlama · DEXs da BSC

- **Fonte:** [DefiLlama · DEXs da BSC](https://api.llama.fi/overview/dexs/bsc).
- **Data-base/recorte temporal:** 2026-10-14 (snapshot consultado). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Campo total30d, volume de negociação dos DEXs monitorados na BSC.
- **Registro:** US$ 28.431.747.567,48, ou US$ 28,43 bilhões em 30 dias. Último dia da série: 14/10/2026 UTC. Não mede apenas RWA e não é volume de transferências. Captura da chamada concluída após as leituras de 19:16:14 UTC; horário exato deste endpoint não registrado.

### BSC-SPEED · BNB Chain · Behind the Suits with Franklin Templeton

- **Fonte:** [BNB Chain · Behind the Suits with Franklin Templeton](https://www.bnbchain.org/en/blog/behind-the-suits-with-franklin-templeton).
- **Data-base/recorte temporal:** 2026-08-04. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Métricas técnicas reportadas no artigo.
- **Registro:** Bloco de 0,45 s e finality de 1,125 s. Preservar a data e a atribuição. Tempo de resgate do fundo e tempo de uma exchange são diferentes. Substitui no deck a antiga métrica Memory Finality de 0,65 s.

### BSC-GAS · BNB Chain · Tech Roadmap 2026

- **Fonte:** [BNB Chain · Tech Roadmap 2026](https://www.bnbchain.org/en/blog/tech-roadmap-2026).
- **Data-base/recorte temporal:** 2025-12-30. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Resultado histórico de gas price em 2025.
- **Registro:** Gas price de 0,05 gwei reportado como resultado de 2025. É uma premissa do exemplo didático de custo, não uma tarifa observada de uma operação RWA.

### BNB-PRICE · Binance · cotação de BNB em USD

- **Fonte:** [Binance · cotação de BNB em USD](https://www.binance.com/en/price/bnb).
- **Data-base/recorte temporal:** 2026-10-14T18:46:00Z. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Preço de referência exibido pela Binance no timestamp publicado na página.
- **Registro:** US$ 727,92 por BNB. Preço dinâmico; captura do texto em 14/10. O valor de US$ 727,88 informado no briefing não foi capturado independentemente; o cálculo usa US$ 727,92.

### EVM-NATIVE-GAS · Ethereum · gas e taxas

- **Fonte:** [Ethereum · gas e taxas](https://ethereum.org/developers/docs/gas/).
- **Data-base/recorte temporal:** 2026-10-14 (texto consultado). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Exemplo de transferência simples nativa sem execução de contrato.
- **Registro:** Transferência simples usa 21.000 unidades de gas. Aplicação didática à BSC depende da compatibilidade EVM. Transferências de tokens e operações com smart contracts podem consumir mais gas.

### BSC-NATIVE-FEE-ESTIMATE · Cálculo didático · taxa nativa estimada

- **Fonte:** [Cálculo didático · taxa nativa estimada](https://www.binance.com/en/price/bnb).
- **Data-base/recorte temporal:** 2026-10-14 (cotação; gas histórico de 2025). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** 21.000 gas × 0,05 gwei × US$ 727,92/BNB.
- **Registro:** Resultado: 0,00000105 BNB = US$ 0,000764316, arredondado para cerca de US$ 0,0008. Estimativa calculada, não tarifa média atual nem custo de negociar ou resgatar RWA. Fontes das premissas: BSC-GAS, BNB-PRICE, EVM-NATIVE-GAS.

### BSC-EVM · BNB Chain · documentação BSC

- **Fonte:** [BNB Chain · documentação BSC](https://docs.bnbchain.org/bnb-smart-chain/introduction/).
- **Data-base/recorte temporal:** 2026-03-16 (data da página; texto consultado em 14/10/2026). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Compatibilidade EVM de smart contracts e ferramentas.
- **Registro:** Documentação técnica, não meta de roadmap. Facilita reutilizar ferramentas; não garante acesso irrestrito aos produtos ou comportamento idêntico de todos os aplicativos.

## Slide 13: exemplos selecionados

### C-BUIDL · BNB Chain · BUIDL via Securitize

- **Fonte:** [BNB Chain · BUIDL via Securitize](https://www.bnbchain.org/en/blog/blackrocks-buidl-fund-launches-bnb-chain-tokenized-by-securitize-and-accepted-as-collateral-on-binance).
- **Data-base/recorte temporal:** 2025-11-14. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Exemplo selecionado para slide 13: BlackRock BUIDL, via Securitize.
- **Registro:** Fundo de liquidez institucional tokenizado, nova classe na BNB Chain para investidores qualificados. Transferibilidade contínua não elimina elegibilidade ou condições de resgate.

### BUIDL-ISSUER · Securitize · lançamento de BUIDL na BNB Chain

- **Fonte:** [Securitize · lançamento de BUIDL na BNB Chain](https://investors.securitize.io/news/news-details/2025/BlackRocks-BUIDL-Tokenized-by-Securitize-Now-Accepted-as-Collateral-for-Trading-on-Binance-and-Launches-on-BNB-Chain-11-14-2025/default.aspx).
- **Data-base/recorte temporal:** 2025-11-14. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Anúncio do prestador de tokenização.
- **Registro:** Corrobora BUIDL na BNB Chain e acesso qualificado. Não usar transferências 24/7 como promessa de resgate incondicional ou oferta para varejo.

### C-BENJI · BNB Chain · integração da plataforma Benji

- **Fonte:** [BNB Chain · integração da plataforma Benji](https://www.bnbchain.org/en/blog/franklin-templetons-benji-technology-platform-onboards-bnb-chain-unlocking-the-next-era-of-tokenized-finance).
- **Data-base/recorte temporal:** 2025-09-24. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Exemplo selecionado: Franklin Templeton / plataforma Benji.
- **Registro:** Data do anúncio de integração. O site Franklin registra disponibilidade BSC em julho de 2025; são marcos distintos. Apresentar cotas de fundos via Benji, sem chamar o valor da rede de AUM global de FOBXX.

### BENJI-BNB-VALUE · RWA.xyz · valor da plataforma Benji na BNB Chain

- **Fonte:** [RWA.xyz · valor da plataforma Benji na BNB Chain](https://app.rwa.xyz/networks/bnb-chain).
- **Data-base/recorte temporal:** 2026-10-14. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Total Value da linha Franklin Templeton Benji Investments no filtro de rede.
- **Registro:** Cerca de US$ 1,5 bilhão na BNB Chain. Label do deck: Franklin Templeton / Benji. O ativo correspondente é iBENJI; não atribuir este total ao token BENJI/FOBXX.

### BENJI-CONTRACTS · Franklin Templeton · registro de contratos

- **Fonte:** [Franklin Templeton · registro de contratos](https://digitalassets.franklintempleton.com/benji/benji-contracts/).
- **Data-base/recorte temporal:** 2026-10-14 (registro consultado). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Identificação do token iBENJI na BNB Smart Chain.
- **Registro:** Registro oficial distingue BENJI de iBENJI e lista iBENJI (BNB Smart Chain). Sustenta a presença do produto e impede aplicar termos de FOBXX automaticamente a iBENJI.

### BENJI-ACCESS · Franklin Templeton · Invest with Benji

- **Fonte:** [Franklin Templeton · Invest with Benji](https://digitalassets.franklintempleton.com/benji/).
- **Data-base/recorte temporal:** 2026-10-14 (texto consultado). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Disponibilidade de Benji por rede.
- **Registro:** BNB Smart Chain aparece com disponibilidade Institutional. Não apresentar a integração como acesso automático para uma pessoa com wallet.

### BENJI-SWAP-CONDITIONS · Franklin Templeton · BenjiSwap FAQs

- **Fonte:** [Franklin Templeton · BenjiSwap FAQs](https://digitalassets.franklintempleton.com/api-docs/docs/benjiswap/faqs/).
- **Data-base/recorte temporal:** 2026-10-14 (documentação consultada). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Troca de iBENJI por stablecoin através de contratos autorizados.
- **Registro:** A autorização do participante/contrato e do par, operação ativa da pool e reserva suficiente condicionam a troca. Swap é distinto do resgate primário do fundo; não prometer liquidez ilimitada ou prazo único.

### BENJI-FOBXX-TERMS · Franklin Templeton · prospecto de FOBXX na SEC

- **Fonte:** [Franklin Templeton · prospecto de FOBXX na SEC](https://www.sec.gov/Archives/edgar/data/1786958/000165558926000970/c485bpos.htm).
- **Data-base/recorte temporal:** 2026-08-01. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Termos do Franklin OnChain U.S. Government Money Fund, token BENJI, ticker FOBXX.
- **Registro:** KYC, wallets aprovadas, pedidos via app/portal; compras e resgates processados em horário comercial nos dias úteis. Documento de apoio sobre FOBXX; não aplicar essas condições ao valor de iBENJI na BNB Chain.

### C-ONDO · Ondo · USDY na BNB Chain

- **Fonte:** [Ondo · USDY na BNB Chain](https://ondo.finance/blog/usdy-is-live-on-bnb-chain).
- **Data-base/recorte temporal:** 2026-08-04. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Exemplo selecionado para slide 13: USDY.
- **Registro:** Anúncio de USDY nativo na BNB Chain. Exposição em dólar com lastro descrito pelo emissor; mint/redeem instantâneo anunciado sujeito às regras atuais de elegibilidade e do produto. Não é recomendação de compra.

### ONDO-RIGHTS · Ondo · USDY Basics

- **Fonte:** [Ondo · USDY Basics](https://docs.ondo.finance/general-access-products/usdy/basics).
- **Data-base/recorte temporal:** 2026-10-14 (documentação consultada). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Estrutura e resgate de USDY.
- **Registro:** USDY representa nota tokenizada, não posse direta de um Treasury individual. Depois de onboarding, emissão com USDC; resgate bancário em USD para contas fora dos EUA e resgate em USDC via Ondo Global Markets (BVI), conforme as condições da rota.

### ONDO-ELIGIBILITY · Ondo · elegibilidade de USDY

- **Fonte:** [Ondo · elegibilidade de USDY](https://docs.ondo.finance/general-access-products/usdy/eligibility).
- **Data-base/recorte temporal:** 2026-10-14 (documentação consultada). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Elegibilidade por jurisdição, emissão e proibições de USDY.
- **Registro:** No Brasil, emissão restrita a investidores qualificados ou profissionais segundo a documentação. Onboarding e prova de elegibilidade; proibições de adquirir/resgatar também existem por jurisdição. Ter tokens não comprova elegibilidade para resgate; mercado secundário não é atalho para contornar regras.

## Apoio e candidatos de reserva

### C-USYC · Circle · USYC na BNB Chain

- **Fonte:** [Circle · USYC na BNB Chain](https://www.circle.com/fr/blog/circle-usyc-is-now-available-on-bnb-chain).
- **Data-base/recorte temporal:** 2025-11-19. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Exemplo de reserva, não selecionado para a tela do slide 13.
- **Registro:** USYC representa uma participação em fundo de curto prazo. Acesso elegível para não-US Persons, com onboarding/KYC/AML e wallets permitidas. Subscrição/resgate em USDC 24/7, sob condições normais e sujeitos à liquidez e congestionamento. Data do artigo não prova primeiro dia técnico da implantação.

### C-VBILL · BNB Chain · VanEck VBILL via Securitize

- **Fonte:** [BNB Chain · VanEck VBILL via Securitize](https://www.bnbchain.org/en/blog/use-case-securitize-and-vaneck-bring-vbill-on-chain-to-unlock-tokenized-treasuries-on-bnb-chain).
- **Data-base/recorte temporal:** 2025-06-06. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Candidato não selecionado; data de publicação confirmada.
- **Registro:** Caso oficial de VBILL disponível a investidores qualificados via Securitize. É exposição através de fundo, não propriedade direta de um Treasury.

### ONDO-BNB · Ondo · Stocks na BNB Chain

- **Fonte:** [Ondo · Stocks na BNB Chain](https://ondo.finance/blog/global-markets-live-on-bnb-chain).
- **Data-base/recorte temporal:** 2025-10-29. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Anúncio de Ondo Stocks, anteriormente Global Markets.
- **Registro:** Presença na rede confirmada; não substitui a elegibilidade atual de cada produto. Stocks não foi selecionado para o slide 13; USDY foi.

### ONDO-STOCKS-RIGHTS · Ondo · estrutura legal de Stocks

- **Fonte:** [Ondo · estrutura legal de Stocks](https://docs.ondo.finance/ondo-stocks/legal-and-regulatory).
- **Data-base/recorte temporal:** 2026-10-14 (documentação consultada). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Estrutura de notas de ações tokenizadas.
- **Registro:** Stocks é uma nota estruturada emitida por Ondo Global Markets (BVI), com exposição econômica e direitos definidos nos termos. Não oferece automaticamente direitos políticos da ação original. Apoio de estudo; produto diferente de USDY.

### RWA-TREASURIES · RWA.xyz · U.S. Treasury Funds

- **Fonte:** [RWA.xyz · U.S. Treasury Funds](https://app.rwa.xyz/treasuries).
- **Data-base/recorte temporal:** 2026-10-14. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Distributed Value global de fundos de títulos públicos dos EUA.
- **Registro:** US$ 14,90 bilhões no cabeçalho. Global, não BNB Chain. Categoria inclui Treasury bills, notes, bonds e fundos focados nesses títulos; apoio de estudo.

### LATAM-STABLECOINS · Chainalysis · adoção cripto na América Latina 2026

- **Fonte:** [Chainalysis · adoção cripto na América Latina 2026](https://www.chainalysis.com/blog/latin-america-crypto-adoption-2026/).
- **Data-base/recorte temporal:** 2026-06 (data-base); publicação 2026-09-23. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Valor cripto transfronteiriço observado na América Latina.
- **Registro:** Stablecoins: 32,1% em junho de 2026. Não é participação em todas as remessas ou pagamentos da região. Uma mudança da fatia pode refletir mudanças de preço de outros ativos.

### ONDO-BSC-HISTORY · BNB Chain · tokenized equities, snapshot histórico

- **Fonte:** [BNB Chain · tokenized equities, snapshot histórico](https://www.bnbchain.org/en/blog/the-next-step-for-tokenized-equities-funding-paths-matter-after-assets-move-onchain).
- **Data-base/recorte temporal:** 2026-05-12 (snapshot); publicação 2026-06-01. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Ondo Global Markets na BSC, números históricos citados de DefiLlama.
- **Registro:** TVL US$ 473,18 milhões; DEX 30 dias US$ 783,27 milhões; DEX acumulado US$ 4,257 bilhões. Histórico de um projeto, não total RWA nem valor atual. Apoio, fora das métricas principais.

### BSC-ZERO-FEE-PROMO · BNB Chain · 0 Fee Carnival temporário

- **Fonte:** [BNB Chain · 0 Fee Carnival temporário](https://x.com/BNBCHAIN/status/2110158679366385706).
- **Data-base/recorte temporal:** 2026-10-13. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Anúncio de cobertura de taxas até 31/10/2026.
- **Registro:** US$ 0 para transferências elegíveis de USDC, USD1 e U, com wallets e limites diários específicos. Confirmado no post; promoção temporária. Omitida da apresentação principal para não confundir uma campanha com taxa universal da rede.

## Conceitos e história

### BTC-ORIGIN · Satoshi · anúncio de Bitcoin

- **Fonte:** [Satoshi · anúncio de Bitcoin](https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html).
- **Data-base/recorte temporal:** 2008-10-31. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Publicação da proposta de Bitcoin.
- **Registro:** Sustenta a data do anúncio e o problema de gasto duplo; não estabelece uma única motivação ou identidade de Satoshi.

### BTC-PAPER · Bitcoin · white paper

- **Fonte:** [Bitcoin · white paper](https://bitcoin.org/bitcoin.pdf).
- **Data-base/recorte temporal:** 2008-10-31 (anúncio da proposta). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Modelo do Bitcoin: assinaturas, rede peer-to-peer, gasto duplo e proof of work.
- **Registro:** Não generalizar a mineração de Bitcoin para todas as blockchains.

### BTC-FAQ · Bitcoin · FAQ

- **Fonte:** [Bitcoin · FAQ](https://bitcoin.org/en/faq).
- **Data-base/recorte temporal:** 2009 (origem da implementação); texto consultado em 2026-10-14. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Moeda digital, assinaturas, custódia e riscos.
- **Registro:** Wallet é interface para chaves e registro, não gaveta de moedas. Usar o ano de início, sem acrescentar data diária não verificada.

### ETH-HISTORY · Ethereum · histórico

- **Fonte:** [Ethereum · histórico](https://ethereum.org/ethereum-forks/).
- **Data-base/recorte temporal:** 2015-07-30. **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Lançamento Frontier.
- **Registro:** Apoia o marco histórico de Ethereum e aplicações programáveis.

### ETH-CONTRACTS · Ethereum · introdução a smart contracts

- **Fonte:** [Ethereum · introdução a smart contracts](https://ethereum.org/developers/docs/smart-contracts/).
- **Data-base/recorte temporal:** 2026-10-14 (texto consultado). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Execução de código, composição e dados externos.
- **Registro:** Smart contract não prova sozinho a entrega de um serviço fora da rede; informações externas exigem ligação apropriada.

### ETH-SECURITY · Ethereum · segurança

- **Fonte:** [Ethereum · segurança](https://ethereum.org/security/).
- **Data-base/recorte temporal:** 2026-10-14 (texto consultado). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Chaves, phishing e assinaturas.
- **Registro:** Apoio conceitual, sem estatísticas de perdas.

### ETH-CONTRACT-SECURITY · Ethereum · segurança de smart contracts

- **Fonte:** [Ethereum · segurança de smart contracts](https://ethereum.org/developers/docs/smart-contracts/security/).
- **Data-base/recorte temporal:** documentação consultada em 2026-10-15. **Acesso:** 2026-10-15. **Status:** `confirmed`.
- **Recorte:** Falhas de código e práticas de segurança de contratos.
- **Registro:** Apoio ao risco técnico do slide 5; sem estatística de perdas.

### ETH-BRIDGES · Ethereum · riscos de bridges

- **Fonte:** [Ethereum · riscos de bridges](https://ethereum.org/developers/docs/bridges/#risk-with-bridges).
- **Data-base/recorte temporal:** 2026-04-03, atualização indicada na página; consulta em 2026-10-15. **Acesso:** 2026-10-15. **Status:** `confirmed`.
- **Recorte:** Riscos de smart contracts e dependências de bridges.
- **Registro:** Apoio ao slide 9; não fornece taxas de falha ou volume de perdas.

### ETH-STABLECOINS · Ethereum · stablecoins

- **Fonte:** [Ethereum · stablecoins](https://ethereum.org/stablecoins/).
- **Data-base/recorte temporal:** 2026-10-14 (texto consultado). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Definição, referência de preço e riscos.
- **Registro:** Paridade é objetivo do mecanismo, não garantia de preço nem resgate.

### RWA-METHODOLOGY · RWA.xyz · distributed e represented

- **Fonte:** [RWA.xyz · distributed e represented](https://app.rwa.xyz/blog/a-new-framework-for-tokenized-assets-distributed-and-represented).
- **Data-base/recorte temporal:** 2025-11-21 (classificações). **Acesso:** 2026-10-14. **Status:** `confirmed`.
- **Recorte:** Metodologia de classificação dos ativos.
- **Registro:** Distributed pode circular fora da plataforma emissora, ainda com whitelist e elegibilidade. Valor distribuído não implica acesso aberto nem uso em DeFi.

## Pendências fora da fala factual

### RWA-BSC-DEFI-TVL · TVL de RWA usado ativamente em DeFi

- **Fonte:** [TVL de RWA usado ativamente em DeFi](https://defillama.com/rwa/chain/bsc).
- **Data-base/recorte temporal:** não estabelecida. **Acesso:** 2026-10-14. **Status:** `[DADO A CONFIRMAR]`.
- **Recorte:** TVL de RWA usado ativamente em DeFi.
- **Registro:** Snapshot de cálculo e metodologia específicos de RWA não registrados. TVL total da BSC não resolve este campo.

### RWA-BSC-TOTAL-TVL · TVL agregado de todos os protocolos RWA

- **Fonte:** [TVL agregado de todos os protocolos RWA](https://defillama.com/rwa/chain/bsc).
- **Data-base/recorte temporal:** não estabelecida. **Acesso:** 2026-10-14. **Status:** `[DADO A CONFIRMAR]`.
- **Recorte:** TVL agregado de todos os protocolos RWA.
- **Registro:** Escopo, agregação e controle de duplicação não definidos. Não substituir por valor distribuído ou por BSC-DEFI-TVL.

### RWA-BSC-TRADING · Negociação agregada de RWA na BSC

- **Fonte:** [Negociação agregada de RWA na BSC](https://app.rwa.xyz/networks/bnb-chain).
- **Data-base/recorte temporal:** não estabelecida. **Acesso:** 2026-10-14. **Status:** `[DADO A CONFIRMAR]`.
- **Recorte:** Negociação agregada de RWA na BSC.
- **Registro:** Sem agregado spot confirmado de todos os RWA. DEX total mede outros ativos; transferências e perps não resolvem o dado.

### RWA-BNB-TREASURIES · Valor da categoria US Treasury Debt na BNB Chain

- **Fonte:** [Valor da categoria US Treasury Debt na BNB Chain](https://app.rwa.xyz/networks/bnb-chain).
- **Data-base/recorte temporal:** não estabelecida. **Acesso:** 2026-10-14. **Status:** `[DADO A CONFIRMAR]`.
- **Recorte:** Valor da categoria US Treasury Debt na BNB Chain.
- **Registro:** Tabela de classe de ativo não recapturada nesta revisão; número opcional da Fase 1 fora do deck até nova captura.

### ONDO-USDY-BNB · Valor exato de USDY na BNB Chain

- **Fonte:** [Valor exato de USDY na BNB Chain](https://app.rwa.xyz/networks/bnb-chain).
- **Data-base/recorte temporal:** não estabelecida. **Acesso:** 2026-10-14. **Status:** `[DADO A CONFIRMAR]`.
- **Recorte:** Valor exato de USDY na BNB Chain.
- **Registro:** Tabela filtrada de ativos não recapturada; número opcional da Fase 1 fora do deck. A presença do produto está confirmada pelo emissor.

### ONDO-BSC-DEX-CURRENT · DEX 30 dias atual de Ondo na BSC

- **Fonte:** [DEX 30 dias atual de Ondo na BSC](https://defillama.com/protocol/ondo-global-markets).
- **Data-base/recorte temporal:** não estabelecida. **Acesso:** 2026-10-14. **Status:** `[DADO A CONFIRMAR]`.
- **Recorte:** DEX 30 dias atual de Ondo na BSC.
- **Registro:** Snapshot com data de cálculo específico do projeto não registrado. Não usar o total DEX da BSC como volume de Ondo.

### BSC-FEE-USD · Tarifa atual representativa de uma operação RWA em USD

- **Fonte:** [Tarifa atual representativa de uma operação RWA em USD](https://www.bnbchain.org/en/blog/tech-roadmap-2026).
- **Data-base/recorte temporal:** não estabelecida. **Acesso:** 2026-10-14. **Status:** `[DADO A CONFIRMAR]`.
- **Recorte:** Tarifa atual representativa de uma operação RWA em USD.
- **Registro:** Operação, período e distribuição não definidos. O custo de transferência nativa é somente uma estimativa didática distinta.

### C-TBILL · Condições de acesso e resgate de OpenEden TBILL

- **Fonte:** [Condições de acesso e resgate de OpenEden TBILL](https://app.rwa.xyz/assets/TBILL).
- **Data-base/recorte temporal:** não estabelecida. **Acesso:** 2026-10-14. **Status:** `[DADO A CONFIRMAR]`.
- **Recorte:** Condições de acesso e resgate de OpenEden TBILL.
- **Registro:** Não selecionado; termos do emissor não revisados nesta fase.

### BSC-STABLECOINS-HISTORY · Snapshot oficial próximo de US$ 17 bilhões em março de 2026

- **Fonte:** [Snapshot oficial próximo de US$ 17 bilhões em março de 2026](https://www.bnbchain.org/en/blog).
- **Data-base/recorte temporal:** não estabelecida. **Acesso:** 2026-10-14. **Status:** `[DADO A CONFIRMAR]`.
- **Recorte:** Snapshot oficial próximo de US$ 17 bilhões em março de 2026.
- **Registro:** Relato aproximado de US$ 17 bilhões em março de 2026 não localizado com data-base. A fonte histórica encontrada descreve maio, não março; não substituir os recortes silenciosamente. Fora do deck até resolver o recorte solicitado.

### BENJI-PRIMARY-REDEMPTION · Prazo e termos específicos do resgate primário de iBENJI

- **Fonte:** [Prazo e termos específicos do resgate primário de iBENJI](https://digitalassets.franklintempleton.com/benji/).
- **Data-base/recorte temporal:** não estabelecida. **Acesso:** 2026-10-14. **Status:** `[DADO A CONFIRMAR]`.
- **Recorte:** Prazo e termos específicos do resgate primário de iBENJI.
- **Registro:** Não foi localizado prospecto público específico do produto. Não extrapolar o horário de FOBXX ou a liquidez de uma pool de swap.

### DAILY-TRANSACTIONS · Transações diárias atuais da BSC

- **Fonte:** [Transações diárias atuais da BSC](https://bscscan.com/chart/tx).
- **Data-base/recorte temporal:** não estabelecida. **Acesso:** 2026-10-14. **Status:** `[DADO A CONFIRMAR]`.
- **Recorte:** Transações diárias atuais da BSC.
- **Registro:** Snapshot diário atual, período UTC e metodologia não verificados. Picos históricos ou endereços ativos não substituem a contagem diária atual.

## Regras para reutilização

- Todo número financeiro no deck acompanha fonte, data-base ou data explícita de observação, acesso e status.
- O valor de cerca de US$ 1,5 bi corresponde a Benji na BNB Chain, com iBENJI identificado no registro oficial. Não chamar esse total de FOBXX nem transferir seus termos de resgate para iBENJI.
- O custo de cerca de US$ 0,0008 é uma estimativa didática para uma transferência nativa simples; gas de contratos, spread, emissor e resgate têm custos diferentes.
- Rankings e marcos históricos vindos de posts ficam atribuídos a quem os publicou; uma consulta atual não prova primazia histórica por si só.
- Disclaimers do material: “Material educativo pessoal, não é material oficial da BNB Chain.” e “Conteúdo educativo, sem recomendação de investimento.”
