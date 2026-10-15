const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../src/app.js');
test('hashes are one-based and clamp to the available slides', () => {
  assert.equal(app.indexFromHash('#5', 15), 4);
  assert.equal(app.indexFromHash('#999', 15), 14);
  for (const hash of ['', '#0', '#-1', '#5x', '#1.5']) assert.equal(app.indexFromHash(hash, 15), 0);
});
test('clicker keys navigate complete slides and loop at both ends', () => {
  for (const key of ['ArrowRight', 'ArrowDown', ' ', 'PageDown']) assert.equal(app.commandForKey(key), 'next');
  for (const key of ['ArrowLeft', 'ArrowUp', 'PageUp']) assert.equal(app.commandForKey(key), 'previous');
  assert.equal(app.commandForKey('Home'), 'first');
  assert.equal(app.commandForKey('End'), 'last');
  assert.equal(app.commandForKey('F'), 'fullscreen');
  assert.equal(app.commandForKey('s'), null);
  assert.equal(app.destination(14, 'next', 15), 0);
  assert.equal(app.destination(0, 'previous', 15), 14);
  assert.equal(app.destination(14, 'first', 15), 0);
  assert.equal(app.destination(0, 'last', 15), 14);
});
test('each factual bullet links to its mapped official reference', () => {
  const html = app.renderSlide({ id:'04', section:'Origem', title:'Bitcoin', bullets:['2008: proposta', '2009: rede'], source:[{label:'Proposta',url:'https://www.metzdowd.com/bitcoin',status:'confirmed',bullets:[0]},{label:'Rede',url:'https://bitcoin.org/en/faq',status:'confirmed',bullets:[1]}] },3,15,{});
  assert.match(html, /<li[^>]*><a[^>]*href="https:\/\/www\.metzdowd\.com\/bitcoin"[^>]*>.*2008/);
  assert.match(html, /<li[^>]*><a[^>]*href="https:\/\/bitcoin\.org\/en\/faq"[^>]*>.*2009/);
  assert.equal((html.match(/class="data-link"/g)||[]).length,2);
});
test('closing social links stay native links and reject unsafe protocols', () => {
  const html=app.renderSlide({id:'15',section:'Fechamento',title:'Obrigado',bullets:['Obrigado','Até a próxima']},14,15,{socials:[{label:'X',url:'https://x.com/s_cintioli_'},{label:'Bad',url:'javascript:alert(1)'}]});
  assert.match(html,/href="https:\/\/x\.com\/s_cintioli_"[^>]*target="_blank"/);
  assert.equal(html.includes('javascript:'),false);
});
test('vertical gestures and small touches never change slides', () => {
  assert.equal(app.swipeCommand(-90, 12), 'next');
  assert.equal(app.swipeCommand(90, 12), 'previous');
  assert.equal(app.swipeCommand(20, 0), null);
  assert.equal(app.swipeCommand(70, 90), null);
});
test('a slide cannot inject markup or unsafe source links', () => {
  const html = app.renderSlide({ id: '02', section: '<img>', title: '<script>alert(1)</script>', bullets: ['A & B', '<img src=x>'], source: [{ label: 'Unsafe', url: 'javascript:alert(1)', date: '2026-10-14', status: 'confirmed' }] }, 1, 15, {});
  assert.equal(html.includes('<script>'), false);
  assert.equal(html.includes('<img'), false);
  assert.equal(html.includes('javascript:'), false);
  assert.match(html, /A &amp; B/);
});
test('unconfirmed source entries never become projected claims', () => {
  const html = app.renderSlide({ id: '02', section: 'CONCEITO', title: 'Cripto', bullets: ['Ativo digital', 'Registro compartilhado'], source: [{ label: '[DADO A CONFIRMAR]', url: 'https://example.com', status: '[DADO A CONFIRMAR]' }] }, 1, 15, {});
  assert.equal(html.includes('[DADO A CONFIRMAR]'), false);
});
