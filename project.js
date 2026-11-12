(() => {
  const copy = {
    zh: {
      allWorks: '全部作品', navExperience: '经历', navContact: '联系', backWorks: '返回全部作品',
      caseOverview: '项目概览', caseType: '项目类型', caseOutput: '交付内容',
      caseChallenge: '要解决的问题', caseApproach: '设计与制作', caseGallery: '作品画面',
      videoSample: '短片精选', videoNote: '三段横屏样片，展示不同的财税情景与角色风格。',
      scriptTitle: '脚本与对应画面', scriptNote: '先看完整的 0–30 秒脚本，再看三个关键画面。', nextLabel: '下一个项目'
    },
    en: {
      allWorks: 'All work', navExperience: 'Experience', navContact: 'Contact', backWorks: 'Back to all work',
      caseOverview: 'Overview', caseType: 'Project type', caseOutput: 'Outputs',
      caseChallenge: 'The challenge', caseApproach: 'The approach', caseGallery: 'Selected frames',
      videoSample: 'Selected films', videoNote: 'Three landscape samples show different finance situations and character styles.',
      scriptTitle: 'Script & frame', scriptNote: 'Read the full 0–30 second script, then view three key frames.', nextLabel: 'Next project'
    }
  };
  const projects = window.portfolioData.projects;
  const slug = new URLSearchParams(location.search).get('slug');
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) {
    document.querySelector('main').innerHTML = '<section class="section-shell" style="padding-top:180px;min-height:70vh"><h1>Project not found</h1><p><a class="text-link" href="./index.html#work">Back to work ↗</a></p></section>';
    return;
  }

  const project = projects[index];
  document.body.classList.add(`project-slug-${project.slug}`);
  const next = projects[(index + 1) % projects.length];
  const toggle = document.querySelector('.language-toggle');
  const gallery = document.querySelector('#gallery-grid');
  const hero = document.querySelector('.case-cover-wrap');
  const heroItems = project.heroImages ?? [{ src: project.cover, alt: project.coverAlt }];
  let language = 'zh';
  try { language = localStorage.getItem('wutong-language') === 'en' ? 'en' : 'zh'; } catch {}

  hero.classList.add(heroItems.length > 1 ? 'case-cover-wrap--duo' : 'case-cover-wrap--single');
  hero.classList.add(`case-cover-wrap--${project.slug}`);
  heroItems.forEach((item) => {
    const image = document.createElement('img');
    image.className = 'case-hero-image';
    image.src = item.src;
    image.fetchPriority = 'high';
    if (project.slug === 'digital-model') {
      const frame = document.createElement('span');
      frame.className = 'case-portrait-frame';
      frame.append(image);
      hero.append(frame);
    } else {
      hero.append(image);
    }
  });

  function renderGallery() {
    gallery.replaceChildren();
    const groups = project.galleryGroups ?? [{ items: project.gallery }];
    let index = 0;
    for (const group of groups) {
      if (group.title) {
        const heading = document.createElement('div');
        heading.className = 'gallery-group-heading';
        const title = document.createElement('h3');
        title.textContent = group.title[language];
        const intro = document.createElement('p');
        intro.textContent = group.intro[language];
        heading.append(title, intro);
        gallery.append(heading);
      }
      for (const item of group.items) {
        index += 1;
        const figure = document.createElement('figure');
        figure.className = `gallery-figure gallery-figure--${item.layout ?? 'wide'}`;
        const media = document.createElement('div');
        media.className = 'gallery-media';
        if (item.boardRows) {
          media.classList.add('gallery-media--overview');
          const board = document.createElement('div');
          board.className = 'asset-overview';
          for (const row of item.boardRows) {
            const section = document.createElement('div');
            const label = document.createElement('p');
            label.className = 'asset-overview-label';
            label.textContent = row.label[language];
            const strip = document.createElement('div');
            strip.className = `asset-overview-strip asset-overview-strip--${row.kind}`;
            for (const tile of row.items) {
              const image = document.createElement('img');
              image.src = tile.src;
              image.alt = tile.alt[language];
              image.loading = 'lazy';
              image.decoding = 'async';
              strip.append(image);
            }
            section.append(label, strip);
            board.append(section);
          }
          media.append(board);
        } else {
          const image = document.createElement('img');
          image.src = item.src;
          image.alt = item.caption[language];
          image.loading = 'lazy';
          image.decoding = 'async';
          media.append(image);
        }
        const caption = document.createElement('figcaption');
        const number = document.createElement('span');
        number.textContent = String(index).padStart(2, '0');
        const title = document.createElement('span');
        title.textContent = item.caption[language];
        caption.append(number, title);
        figure.append(media, caption);
        gallery.append(figure);
      }
    }
  }

  function createVideoCard(clip, index) {
    const figure = document.createElement('figure');
    figure.className = 'case-video-card';
    const video = document.createElement('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'none';
    video.src = clip.src;
    video.poster = clip.poster;
    video.setAttribute('aria-label', clip.title[language]);
    video.addEventListener('play', () => {
      document.querySelectorAll('main video').forEach((other) => {
        if (other !== video) other.pause();
      });
    });
    const caption = document.createElement('figcaption');
    const number = document.createElement('span');
    number.textContent = String(index + 1).padStart(2, '0');
    const title = document.createElement('strong');
    title.textContent = clip.title[language];
    const duration = document.createElement('span');
    duration.textContent = clip.duration;
    caption.append(number, title, duration);
    figure.append(video, caption);
    return figure;
  }

  function renderChapters() {
    if (!project.chapters) return;
    const chinese = language === 'zh';
    document.querySelector('.case-gallery-head .section-index').hidden = true;
    gallery.classList.add('case-chapters');
    gallery.replaceChildren();

    let navigation = document.querySelector('.case-chapter-nav');
    if (!navigation) {
      navigation = document.createElement('nav');
      navigation.className = 'case-chapter-nav';
      hero.before(navigation);
    }
    navigation.setAttribute('aria-label', chinese ? '五个案例目录' : 'Case index');
    navigation.replaceChildren();

    for (const [index, chapter] of project.chapters.entries()) {
      const ordinal = String(index + 1).padStart(2, '0');
      const target = `case-${chapter.id}`;
      const link = document.createElement('a');
      link.href = `#${target}`;
      link.textContent = chapter.title[language];
      navigation.append(link);

      const section = document.createElement('section');
      section.className = 'case-chapter';
      section.id = target;
      section.setAttribute('aria-labelledby', `${target}-title`);
      const header = document.createElement('header');
      header.className = 'chapter-heading';
      const number = document.createElement('span');
      number.className = 'chapter-number';
      number.textContent = ordinal;
      const title = document.createElement('h3');
      title.id = `${target}-title`;
      title.textContent = chapter.title[language];
      const intro = document.createElement('p');
      intro.textContent = chapter.intro[language];
      header.append(number, title, intro);
      section.append(header);

      const feature = document.createElement('div');
      feature.className = `chapter-feature chapter-feature--${chapter.videos.length}`;
      const videos = document.createElement('div');
      videos.className = 'chapter-videos';
      videos.style.setProperty('--chapter-columns', chapter.videos.length);
      chapter.videos.forEach((clip, i) => videos.append(createVideoCard(clip, i)));

      const notes = document.createElement('div');
      notes.className = 'chapter-notes';
      const notesTitle = document.createElement('h4');
      notesTitle.textContent = chinese ? '制作拆解' : 'Production Notes';
      const list = document.createElement('ul');
      chapter.notes.forEach((note) => {
        const item = document.createElement('li');
        item.textContent = note[language];
        list.append(item);
      });
      notes.append(notesTitle, list);
      feature.append(videos, notes);
      section.append(feature);

      if (chapter.script) {
        const details = document.createElement('details');
        details.className = 'chapter-script';
        const summary = document.createElement('summary');
        summary.textContent = chinese ? '阅读完整分镜脚本 · 00:00–00:30' : 'Read the Full Script · 00:00–00:30 (Chinese)';
        const content = document.createElement('div');
        content.className = 'chapter-script-content';
        content.lang = 'zh-CN';
        chapter.script.split(/(?=镜头\d+｜)/u).forEach((entry) => {
          const block = document.createElement('p');
          block.textContent = entry.trim();
          content.append(block);
        });
        details.append(summary, content);
        section.append(details);
      }

      for (const group of chapter.groups) {
        const assets = document.createElement('div');
        assets.className = 'chapter-assets';
        const heading = document.createElement('h4');
        heading.textContent = group.title[language];
        const grid = document.createElement('div');
        grid.className = 'chapter-stills';
        grid.style.setProperty('--chapter-columns', group.items.length);
        for (const item of group.items) {
          const figure = document.createElement('figure');
          const link = document.createElement('a');
          link.href = item.src;
          link.target = '_blank';
          link.rel = 'noopener';
          link.setAttribute('aria-label', (chinese ? '查看大图：' : 'Open image: ') + item.caption[language]);
          const image = document.createElement('img');
          image.src = item.src;
          image.alt = item.caption[language];
          image.loading = 'lazy';
          image.decoding = 'async';
          const caption = document.createElement('figcaption');
          caption.textContent = item.caption[language];
          link.append(image);
          figure.append(link, caption);
          grid.append(figure);
        }
        assets.append(heading, grid);
        section.append(assets);
      }
      gallery.append(section);
    }
  }
  function renderVideos() {
    const wrap = document.querySelector('#case-video-wrap');
    const clips = project.videos ?? [];
    wrap.hidden = clips.length === 0;
    if (!clips.length) return;
    const grid = document.querySelector('#case-video-grid');
    grid.replaceChildren(...clips.map(createVideoCard));
  }
  function renderScriptFrames() {
    const wrap = document.querySelector('#case-script-wrap');
    const frames = project.scriptFrames ?? [];
    const fullScript = project.fullScript;
    wrap.hidden = frames.length === 0 && !fullScript;
    if (wrap.hidden) return;
    const fullScriptFigure = document.querySelector('#case-full-script');
    fullScriptFigure.hidden = !fullScript;
    if (fullScript) {
      const link = document.querySelector('#case-full-script-link');
      const image = document.querySelector('#case-full-script-image');
      link.href = fullScript.src;
      image.src = fullScript.src;
      image.alt = fullScript.alt[language];
      document.querySelector('#case-full-script-caption').textContent = fullScript.caption[language];
    }
    const grid = document.querySelector('#case-script-grid');
    grid.replaceChildren();
    for (const frame of frames) {
      const figure = document.createElement('figure');
      figure.className = 'case-script-card';
      const image = document.createElement('img');
      image.src = frame.src;
      image.alt = frame.alt[language];
      image.loading = 'lazy';
      image.decoding = 'async';
      const caption = document.createElement('figcaption');
      const number = document.createElement('span');
      number.className = 'section-index';
      number.textContent = `SHOT / ${frame.shot}`;
      const title = document.createElement('h4');
      title.textContent = frame.title[language];
      const line = document.createElement('blockquote');
      line.textContent = frame.line[language];
      caption.append(number, title, line);
      figure.append(image, caption);
      grid.append(figure);
    }
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = copy[language][element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    toggle.innerHTML = language === 'zh' ? 'EN <span aria-hidden="true">↗</span>' : '中文 <span aria-hidden="true">↗</span>';
    toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
    toggle.title = language === 'zh' ? 'Switch to English' : '切换到中文';
    document.querySelector('#case-number').textContent = project.number;
    document.querySelector('#case-category').textContent = project.category[language];
    document.querySelector('#case-title').textContent = project.title[language];
    document.querySelector('#case-tagline').textContent = project.tagline[language];
    document.querySelector('#case-summary').textContent = project.summary[language];
    document.querySelector('#case-type').textContent = project.category[language];
    document.querySelector('#case-deliverables').textContent = project.deliverables[language];
    document.querySelector('#case-brief').textContent = project.brief[language];
    document.querySelector('#case-process').textContent = project.process[language];
    document.querySelector('#next-title').textContent = next.title[language];
    if (project.galleryTitle) document.querySelector('#gallery-title').textContent = project.galleryTitle[language];
    if (project.videoTitle) document.querySelector('[data-i18n="videoSample"]').textContent = project.videoTitle[language];
    if (project.videoNote) document.querySelector('[data-i18n="videoNote"]').textContent = project.videoNote[language];
    hero.querySelectorAll('.case-hero-image').forEach((image, i) => { image.alt = heroItems[i].alt[language]; });
    document.title = `${project.title[language]} — WUTONG`;
    document.querySelector('meta[name="description"]').content = project.summary[language];
    if (project.chapters) renderChapters(); else renderGallery();
    renderVideos();
    renderScriptFrames();
    try { localStorage.setItem('wutong-language', language); } catch {}
  }

  document.querySelector('#next-link').href = `./project.html?slug=${encodeURIComponent(next.slug)}`;
  toggle.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
  setLanguage(language);
})();

