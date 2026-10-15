(function (root) {
  'use strict';

  function indexFromHash(hash, count) {
    var match = /^#([1-9]\d*)$/.exec(hash || '');
    return match ? Math.min(count - 1, Number(match[1]) - 1) : 0;
  }
  function commandForKey(key) {
    if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(key)) return 'next';
    if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(key)) return 'previous';
    if (key === 'Home') return 'first';
    if (key === 'End') return 'last';
    if (key === 'f' || key === 'F') return 'fullscreen';
    return null;
  }
  function destination(index, command, count) {
    if (command === 'first') return 0;
    if (command === 'last') return count - 1;
    return (index + (command === 'next' ? 1 : command === 'previous' ? -1 : 0) + count) % count;
  }
  function swipeCommand(dx, dy) {
    return Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.4 ? (dx < 0 ? 'next' : 'previous') : null;
  }
  function escape(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (character) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character];
    });
  }
  function numbered(value) {
    return String(value).split(/(\d+(?:[.,]\d+)*(?:%|bi|M)?)/g).map(function (part) {
      return /^\d/.test(part) ? '<span class="number">' + escape(part) + '</span>' : escape(part);
    }).join('');
  }
  function linkHTML(url, html, className, label) {
    var email = /^mailto:[^\s<>]+@[^\s<>]+$/i.test(url || '');
    if (!email && !/^https?:\/\//i.test(url || '')) return html;
    return '<a href="' + escape(url) + '"' + (className ? ' class="' + className + '"' : '') + (label ? ' aria-label="' + escape(label) + '"' : '') + (email ? '' : ' target="_blank" rel="noopener noreferrer"') + '>' + html + '</a>';
  }
  function titleHTML(slide) {
    var title = String(slide.title), keyword = String(slide.highlight || '');
    var at = keyword ? title.indexOf(keyword) : -1;
    return at < 0 ? escape(title) : escape(title.slice(0, at)) + '<span class="title-highlight">' + escape(keyword) + '</span>' + escape(title.slice(at + keyword.length));
  }
  function sourceHTML(source) {
    if (!source || source.status !== 'confirmed') return '';
    if (source.label === 'Estimativa: gas BSC 0,05 gwei × cotação BNB') {
      var price = (source.references || []).find(function (reference) { return reference.label === 'Cotação BNB'; });
      var rpc = (source.references || []).find(function (reference) { return reference.label === 'RPC BSC'; });
      return 'Estimativa: ' + linkHTML(rpc && rpc.url, 'gas BSC') + ' ' + linkHTML(source.url, '0,05 gwei') + ' × ' + linkHTML(price && price.url, 'cotação BNB') + ' · ' + escape(source.date);
    }
    var label = source.label.split(':')[0].replace(' / Franklin', '');
    var date = (source.date || '').replace(/^Consulta: /, '').split(' · ')[0].replace(' (anúncio)', '');
    return linkHTML(source.url, escape(label)) + (date ? ' · ' + escape(date) : '');
  }
  function countHTML(value) {
    return escape(value).replace(/\d+(?:,\d+)?/g, function (number) {
      var decimals = (number.split(',')[1] || '').length;
      return '<span data-count-to="' + Number(number.replace(',', '.')) + '" data-decimals="' + decimals + '" data-final="' + number + '">' + number + '</span>';
    });
  }
  function bulletsHTML(bullets, sources) {
    return '<ul class="bullets">' + bullets.map(function (bullet, index) {
      var source = (sources || []).find(function (item) { return item.bullets && item.bullets.includes(index); });
      return '<li style="--bullet-index:' + index + '">' + (source ? linkHTML(source.url, numbered(bullet), 'data-link') : numbered(bullet)) + '</li>';
    }).join('') + '</ul>';
  }
  function renderSlide(slide, index, total, deck) {
    var kind = index === 0 ? 'cover' : index === total - 1 ? 'closing' : slide.id === '12' ? 'stats' : slide.id === '13' ? 'products' : 'normal';
    var sources = (slide.source || []).filter(function (source) { return source.status === 'confirmed'; });
    var body;
    if (kind === 'cover') {
      body = '<div class="cover-meta"><p class="cover-author">' + escape(deck.author) + '</p><p class="cover-date">' + escape(deck.date) + '</p><div class="cover-rule" aria-hidden="true"></div></div>' + bulletsHTML(slide.bullets);
    } else if (kind === 'closing') {
      body = '<p class="thanks">' + escape(slide.bullets[0]) + '</p><nav class="social-links" aria-label="Redes sociais de Stefano Cintioli">' + (deck.socials || []).filter(function (social) { return /^(https?:\/\/|mailto:)/i.test(social.url); }).map(function (social) {
        return linkHTML(social.url, social.svg || escape(social.label), 'social-link', social.label);
      }).join('') + '</nav>';
    } else if (kind === 'stats') {
      body = '<div class="stats-grid">' + slide.bullets.map(function (bullet, i) {
        var pieces = bullet.split(' · '), value = pieces.shift(), label = pieces.join(' · ');
        var content = '<div class="stat-value" aria-hidden="true">' + countHTML(value) + '</div><p class="stat-label">' + escape(label) + '</p>';
        return '<section class="stat">' + linkHTML(sources[i] && sources[i].url, content, 'stat-link', 'Ver fonte: ' + value + ' ' + label) + '<p class="stat-source">' + sourceHTML(sources[i]) + '</p></section>';
      }).join('') + '</div>';
    } else if (kind === 'products') {
      body = '<div class="product-grid">' + slide.bullets.map(function (bullet, i) {
        var pieces = bullet.split(' · ');
        var source = sources[i] || {};
        return '<section class="product"><h2 class="product-name">' + linkHTML(source.productUrl || source.url, escape(pieces[0]), 'data-link') + '</h2><p class="product-description">' + linkHTML(source.productUrl || source.url, escape(pieces[1]), 'data-link') + '</p><p class="product-stat">' + linkHTML(source.url, numbered(pieces[2]), 'data-link') + '</p><p class="product-source">' + sourceHTML(source) + '</p></section>';
      }).join('') + '</div>';
    } else body = bulletsHTML(slide.bullets, sources);
    var sourceLine = kind === 'stats' || kind === 'products' ? '<a href="SOURCES.md" target="_blank" rel="noopener noreferrer">Fontes e detalhes: SOURCES.md</a>' : sources.map(sourceHTML).join('<span class="source-separator"> · </span>');
    var numeral = kind === 'normal' ? '<span class="ghost-number" aria-hidden="true">' + String(index + 1).padStart(2, '0') + '</span>' : '';
    return '<article id="slide-' + escape(slide.id) + '" class="slide slide-' + kind + '" aria-labelledby="title-' + escape(slide.id) + '" aria-hidden="true" inert>' + numeral + '<header class="slide-header"><p class="section">' + String(index + 1).padStart(2, '0') + ' · ' + escape(slide.section) + '</p><h1 id="title-' + escape(slide.id) + '">' + titleHTML(slide) + '</h1></header><div class="slide-body">' + body + '</div><footer class="slide-footer"><div class="source-line">' + (kind === 'closing' ? escape(deck.disclaimer) : sourceLine) + '</div><p class="slide-counter">' + String(index + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0') + '</p></footer><div class="progress" role="progressbar" aria-label="Progresso da apresentação" aria-valuemin="1" aria-valuemax="' + total + '" aria-valuenow="' + (index + 1) + '"><span style="width:' + ((index + 1) / total * 100) + '%"></span></div></article>';
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { indexFromHash: indexFromHash, commandForKey: commandForKey, destination: destination, swipeCommand: swipeCommand, renderSlide: renderSlide };
  if (!root.document) return;

  function boot() {
    var deck = root.CRIPTO_DECK;
    var canvas = document.getElementById('deck');
    var announcement = document.getElementById('slide-announcement');
    if (!deck || !Array.isArray(deck.slides) || !deck.slides.length) {
      canvas.textContent = 'Não foi possível carregar a apresentação. Reabra index.html com a pasta src ao lado.';
      return;
    }
    var total = deck.slides.length, current = -1, animationFrame = 0, idleTimer = 0, touchStart = null;
    var reducedMotion = root.matchMedia('(prefers-reduced-motion: reduce)');
    canvas.innerHTML = deck.slides.map(function (slide, index) { return renderSlide(slide, index, total, deck); }).join('');
    var slides = Array.from(canvas.querySelectorAll('.slide'));
    function finishNumbers() {
      root.cancelAnimationFrame(animationFrame);
      canvas.querySelectorAll('[data-count-to]').forEach(function (element) { element.textContent = element.dataset.final; });
    }
    function animateNumbers(article) {
      finishNumbers();
      var numbers = Array.from(article.querySelectorAll('[data-count-to]'));
      if (reducedMotion.matches || !numbers.length) return;
      numbers.forEach(function (element) { element.textContent = '0'; });
      var start = root.performance.now();
      function tick(now) {
        var progress = Math.min(1, (now - start) / 600);
        numbers.forEach(function (element) {
          var decimals = Number(element.dataset.decimals);
          var value = Number(element.dataset.countTo) * progress;
          element.textContent = progress === 1 ? element.dataset.final : value.toLocaleString('pt-BR', { useGrouping: false, minimumFractionDigits: decimals, maximumFractionDigits: decimals });
        });
        if (progress < 1) animationFrame = root.requestAnimationFrame(tick);
      }
      animationFrame = root.requestAnimationFrame(tick);
    }
    function show(index) {
      if (index === current) return;
      var previous = current;
      current = Math.max(0, Math.min(total - 1, index));
      slides.forEach(function (article, i) {
        var active = i === current;
        article.classList.toggle('is-current', active);
        article.setAttribute('aria-hidden', String(!active));
        article.inert = !active;
      });
      if (previous >= 0 && slides[previous].contains(document.activeElement)) canvas.focus({ preventScroll: true });
      var hash = '#' + (current + 1);
      if (root.location.hash !== hash) root.history.replaceState(null, '', root.location.pathname + root.location.search + hash);
      document.title = (current + 1) + ' / ' + total + ' · ' + deck.slides[current].title;
      announcement.textContent = 'Slide ' + (current + 1) + ' de ' + total + ': ' + deck.slides[current].title;
      animateNumbers(slides[current]);
    }
    function wakeCursor() {
      document.body.classList.remove('cursor-idle');
      root.clearTimeout(idleTimer);
      idleTimer = root.setTimeout(function () { document.body.classList.add('cursor-idle'); }, 2000);
    }
    async function fullscreen() {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
        else announcement.textContent = 'Use a opção de tela cheia do navegador.';
      } catch (_) { announcement.textContent = 'A tela cheia não está disponível neste navegador.'; }
    }
    root.addEventListener('keydown', function (event) {
      if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
      var command = commandForKey(event.key);
      if (!command || (event.key === ' ' && event.target.closest('a, button'))) return;
      event.preventDefault();
      wakeCursor();
      if (command === 'fullscreen') fullscreen();
      else show(destination(current, command, total));
    });
    canvas.addEventListener('pointerdown', function (event) {
      if (event.pointerType === 'touch' && !event.target.closest('a')) touchStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
    });
    canvas.addEventListener('pointerup', function (event) {
      if (!touchStart || touchStart.id !== event.pointerId) return;
      var command = swipeCommand(event.clientX - touchStart.x, event.clientY - touchStart.y);
      touchStart = null;
      if (command) show(destination(current, command, total));
    });
    canvas.addEventListener('pointercancel', function () { touchStart = null; });
    root.addEventListener('hashchange', function () { show(indexFromHash(root.location.hash, total)); });
    document.querySelector('.skip-link').addEventListener('click', function (event) {
      event.preventDefault();
      canvas.focus({ preventScroll: true });
    });
    root.addEventListener('pointermove', wakeCursor, { passive: true });
    root.addEventListener('pointerdown', wakeCursor, { passive: true });
    root.addEventListener('beforeprint', finishNumbers);
    reducedMotion.addEventListener('change', function () { if (reducedMotion.matches) finishNumbers(); });
    show(indexFromHash(root.location.hash, total));
    wakeCursor();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(typeof window !== 'undefined' ? window : globalThis);
