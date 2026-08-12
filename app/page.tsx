"use client";

import { useEffect, useRef, useState } from "react";

const works = [
  { src: "/covers/cover-01.jpg", alt: "App 概览" },
  { src: "/covers/cover-02.jpg", alt: "毕业 MV 封面" },
  { src: "/covers/cover-03.jpg", alt: "毕业海报" },
  { src: "/covers/cover-04.jpg", alt: "油画作品一" },
  { src: "/covers/cover-05.jpg", alt: "油画作品二" },
  { src: "/covers/cover-06.jpg", alt: "油画作品九" },
  { src: "/covers/cover-07.jpg", alt: "邀请函设计" },
];

const navItems = ["AI设计", "海报设计", "绘画书法", "PPT设计", "摄影作品"];

const directoryItems = [
  { name: "AI DESIGN", meta: "06 PROJECTS", preview: "/projects/ai/app-overview.jpg", color: "126,178,201" },
  { name: "POSTER DESIGN", meta: "07 PROJECTS", preview: "/projects/posters/mv-cover.jpg", color: "202,146,118" },
  { name: "PAINTING & CALLIGRAPHY", meta: "15 PROJECTS", preview: "/projects/paintings/mountain-folds-v3.jpg", color: "127,166,139" },
  { name: "PRESENTATION", meta: "03 DECKS", preview: "/projects/ppt/5010-01.jpg", color: "137,150,191" },
  { name: "PHOTOGRAPHY", meta: "14 PROJECTS", preview: "/projects/photography/sunset-heaven.jpg", color: "224,176,105" },
];

type ProjectItem = {
  src: string;
  alt: string;
  label: string;
  type?: "video" | "deck" | "website";
  pages?: number;
  downloadSrc?: string;
  downloadLabel?: string;
};
type ProjectSection = { title: string; meta: string; slideGrid?: boolean; items: ProjectItem[] };

const projectSections: ProjectSection[] = [
  {
    title: "AI DESIGN",
    meta: "06 PROJECTS",
    items: [
      { src: "https://nmti-testing.netlify.app/", alt: "nmti-testing.netlify.app 网站作品", label: "nmti-testing.netlify.app", type: "website" },
      { src: "https://forseason.netlify.app/", alt: "forseason.netlify.app 网站作品", label: "forseason.netlify.app", type: "website" },
      { src: "https://raw.githubusercontent.com/soloooopickle/portofolio/main/public/projects/ai/birthday-gift-web.mp4", alt: "生日礼盒", label: "生日礼盒", type: "video" },
      { src: "/projects/ai/character-guide.png", alt: "角色图鉴", label: "角色图鉴" },
      { src: "/projects/ai/app-overview.jpg", alt: "app概览", label: "app概览" },
      { src: "/projects/ai/puppy.jpg", alt: "角色形象puppy", label: "角色形象puppy" },
    ],
  },
  {
    title: "POSTER DESIGN",
    meta: "07 PROJECTS",
    items: [
      { src: "/projects/posters/mv-cover.jpg", alt: "南京农业大学毕业MV-Cover", label: "南京农业大学毕业MV-Cover" },
      { src: "/projects/posters/graduation-poster.jpg", alt: "南京农业大学毕业海报", label: "南京农业大学毕业海报" },
      { src: "/projects/posters/opera-event.jpg", alt: "戏曲活动海报", label: "戏曲活动海报" },
      { src: "/projects/posters/event-invitation.jpg", alt: "活动邀请函", label: "活动邀请函" },
      { src: "/projects/posters/poster-bg-3.jpg", alt: "海报背景3", label: "海报背景3" },
      { src: "/projects/posters/lecture-stage-bg.jpg", alt: "讲座舞台背景", label: "讲座舞台背景" },
      { src: "/projects/posters/intangible-heritage-event.jpg", alt: "非遗活动海报", label: "非遗活动海报" },
    ],
  },
  {
    title: "PAINTING & CALLIGRAPHY",
    meta: "15 PROJECTS",
    items: [
      { src: "/projects/paintings/colorful-buddha.jpg", alt: "七彩佛头", label: "七彩佛头" },
      { src: "/projects/paintings/thousand-li-landscape.jpg", alt: "千里江山图", label: "千里江山图" },
      { src: "/projects/paintings/nanjing-ag-main-building.jpg", alt: "南京农业大学主楼", label: "南京农业大学主楼" },
      { src: "/projects/paintings/nanjing-ag-anniversary.jpg", alt: "南农校庆", label: "南农校庆" },
      { src: "/projects/paintings/night-daisy.jpg", alt: "夜间小雏菊", label: "夜间小雏菊" },
      { src: "/projects/paintings/mountain-folds-v3.jpg", alt: "岩峦叠翠", label: "岩峦叠翠" },
      { src: "/projects/paintings/drawing.jpg", alt: "手绘", label: "手绘" },
      { src: "/projects/paintings/forest-spring.jpg", alt: "林泉闲致", label: "林泉闲致" },
      { src: "/projects/paintings/water-lily-v3.jpg", alt: "睡莲", label: "睡莲" },
      { src: "/projects/paintings/campfire-forest.jpg", alt: "篝火树林", label: "篝火树林" },
      { src: "/projects/paintings/art-lettering.jpg", alt: "艺术字", label: "艺术字" },
      { src: "/projects/paintings/samoyed.jpg", alt: "萨摩耶", label: "萨摩耶" },
      { src: "/projects/paintings/orchid-v3.jpg", alt: "蝴蝶兰", label: "蝴蝶兰" },
      { src: "/projects/paintings/reading-cat.jpg", alt: "读书小猫", label: "读书小猫" },
      { src: "/projects/paintings/dragon-year-spring.jpg", alt: "龙年春年", label: "龙年春年" },
    ],
  },
  {
    title: "PRESENTATION",
    meta: "03 DECKS",
    slideGrid: true,
    items: [
      { src: "/projects/ppt/decks/simulation-analysis-of-structural-resilience.pdf", alt: "Simulation Analysis of Structural Resilience 完整演示文稿", label: "Simulation Analysis of Structural Resilience", type: "deck", pages: 23, downloadSrc: "/projects/ppt/decks/simulation-analysis-of-structural-resilience.pdf", downloadLabel: "DOWNLOAD" },
      { src: "/projects/ppt/decks/waterloo-south-renewal-project.pdf", alt: "WATERLOO SOUTH RENEWAL PROJECT 完整演示文稿", label: "WATERLOO SOUTH RENEWAL PROJECT", type: "deck", pages: 34, downloadSrc: "https://raw.githubusercontent.com/soloooopickle/portofolio/main/public/projects/ppt/decks/waterloo-south-renewal-project.pptx", downloadLabel: "DOWNLOAD PPTX" },
      { src: "/projects/ppt/decks/poster.pdf", alt: "poster 完整演示文稿", label: "poster", type: "deck", pages: 1, downloadSrc: "/projects/ppt/decks/poster.pptx", downloadLabel: "DOWNLOAD PPTX" },
    ],
  },
  {
    title: "PHOTOGRAPHY",
    meta: "14 PROJECTS",
    items: [
      { src: "/projects/photography/gerringong.jpg", alt: "Gerringong", label: "Gerringong" },
      { src: "/projects/photography/kiama.jpg", alt: "Kiama", label: "Kiama" },
      { src: "/projects/photography/season.jpg", alt: "SEASON", label: "SEASON" },
      { src: "/projects/photography/sunset.jpg", alt: "Sunset", label: "Sunset" },
      { src: "/projects/photography/hello.jpg", alt: "你好", label: "你好" },
      { src: "/projects/photography/kennedy-town-waterfront.jpg", alt: "坚尼地城海傍", label: "坚尼地城海傍" },
      { src: "/projects/photography/golden-mountain-v2.jpg", alt: "日照金山", label: "日照金山" },
      { src: "/projects/photography/sunset-heaven.jpg", alt: "日落天堂", label: "日落天堂" },
      { src: "/projects/photography/one-year-after-graduation.jpg", alt: "毕业一年", label: "毕业一年" },
      { src: "/projects/photography/autumn-pilu-temple.jpg", alt: "毗卢寺的秋", label: "毗卢寺的秋" },
      { src: "/projects/photography/love.jpg", alt: "爱", label: "爱" },
      { src: "/projects/photography/autumn.jpg", alt: "秋", label: "秋" },
      { src: "/projects/photography/flower-photography.jpg", alt: "花卉影相", label: "花卉影相" },
      { src: "/projects/photography/baotu-spring-water.jpg", alt: "趵突泉水", label: "趵突泉水" },
    ],
  },
];

export default function Home() {
  const stageRef = useRef<HTMLDivElement>(null);
  const directoryRef = useRef<HTMLElement>(null);
  const directoryPreviewRef = useRef<HTMLDivElement>(null);
  const projectIndexRef = useRef<HTMLDivElement>(null);
  const pageCursorRef = useRef<HTMLDivElement>(null);
  const [activeTheme, setActiveTheme] = useState(0);
  const [activePages, setActivePages] = useState(() => projectSections.map(() => 0));

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const cards = Array.from(stage.querySelectorAll<HTMLElement>(".carousel-card"));
    const step = (Math.PI * 2) / cards.length;
    let rotation = 0;
    let target = 0;
    let velocity = 0;
    let dragging = false;
    let lastX = 0;
    let frame = 0;

    const shortest = (value: number) => {
      while (value > Math.PI) value -= Math.PI * 2;
      while (value < -Math.PI) value += Math.PI * 2;
      return value;
    };

    const render = () => {
      const radius = Math.min(window.innerWidth * 0.23, 360);
      cards.forEach((card, index) => {
        const angle = shortest(rotation + index * step);
        const depth = (Math.cos(angle) + 1) / 2;
        const focus = Math.pow(depth, 4);
        const x = Math.sin(angle) * radius;
        const scale = 0.09 + focus * 0.91;
        card.style.transform = `translate3d(${x}px,0,${depth * 120}px) translate(-50%,-50%) scale(${scale}) rotateY(${-angle * 0.42}rad)`;
        card.style.filter = `blur(${(1 - Math.pow(depth, 1.4)) * 9}px) saturate(${0.35 + depth * 0.65})`;
        card.style.opacity = String(0.32 + Math.pow(depth, 1.7) * 0.68);
        card.style.zIndex = String(Math.round(depth * 100));
        card.dataset.front = depth > 0.94 ? "true" : "false";
      });
    };

    const focusCard = (index: number) => {
      target = rotation + shortest(-index * step - rotation);
    };

    const animate = () => {
      if (!dragging) {
        velocity *= 0.92;
        target += velocity;
        rotation += (target - rotation) * 0.12;
      }
      render();
      frame = requestAnimationFrame(animate);
    };

    const enterHandlers = cards.map((card, index) => {
      const handler = () => { if (!dragging) focusCard(index); };
      card.addEventListener("pointerenter", handler);
      card.addEventListener("click", handler);
      return handler;
    });

    const pointerDown = (event: PointerEvent) => {
      dragging = true;
      velocity = 0;
      lastX = event.clientX;
      stage.setPointerCapture(event.pointerId);
      stage.classList.add("is-dragging");
    };
    const pointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const delta = event.clientX - lastX;
      lastX = event.clientX;
      velocity = delta * 0.00085;
      rotation += delta * 0.0065;
      target = rotation;
      render();
    };
    const release = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      stage.classList.remove("is-dragging");
      if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
      target = Math.round((target + velocity * 15) / step) * step;
    };

    stage.addEventListener("pointerdown", pointerDown);
    stage.addEventListener("pointermove", pointerMove);
    stage.addEventListener("pointerup", release);
    stage.addEventListener("pointercancel", release);
    window.addEventListener("resize", render);
    render();
    animate();

    return () => {
      cancelAnimationFrame(frame);
      cards.forEach((card, index) => {
        card.removeEventListener("pointerenter", enterHandlers[index]);
        card.removeEventListener("click", enterHandlers[index]);
      });
      stage.removeEventListener("pointerdown", pointerDown);
      stage.removeEventListener("pointermove", pointerMove);
      stage.removeEventListener("pointerup", release);
      stage.removeEventListener("pointercancel", release);
      window.removeEventListener("resize", render);
    };
  }, []);

  const activeSection = projectSections[activeTheme];
  const activePage = activePages[activeTheme];
  const totalPages = activeSection.items.length;
  const pageNumber = String(activePage + 1).padStart(2, "0");
  const pageTotal = String(totalPages).padStart(2, "0");

  const turnPage = (direction: number) => {
    setActivePages((pages) => pages.map((page, index) => index === activeTheme ? (page + direction + totalPages) % totalPages : page));
  };

  useEffect(() => {
    const root = projectIndexRef.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>(".project-section"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = sections.indexOf(visible.target as HTMLElement);
      if (index >= 0) setActiveTheme(index);
    }, { threshold: [0.35, 0.55, 0.75] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const projectIndex = projectIndexRef.current;
    const siteHeader = document.querySelector<HTMLElement>(".site-header");
    if (!projectIndex || !siteHeader) return;
    const observer = new IntersectionObserver((entries) => {
      const inProjects = entries.some((entry) => entry.isIntersecting);
      siteHeader.classList.toggle("is-project-nav", inProjects);
      if (!inProjects) siteHeader.classList.remove("is-open");
    }, { threshold: .02 });
    const monogram = siteHeader.querySelector<HTMLElement>(".monogram");
    const openOnTap = (event: MouseEvent) => {
      if (!siteHeader.classList.contains("is-project-nav") || window.matchMedia("(hover: hover)").matches) return;
      if (!siteHeader.classList.contains("is-open")) {
        event.preventDefault();
        siteHeader.classList.add("is-open");
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!siteHeader.contains(event.target as Node)) siteHeader.classList.remove("is-open");
    };
    observer.observe(projectIndex);
    monogram?.addEventListener("click", openOnTap);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      observer.disconnect();
      monogram?.removeEventListener("click", openOnTap);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") turnPage(1);
      if (event.key === "ArrowLeft") turnPage(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalPages]);

  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="RachelDDD 首页">R<span>°</span></a>
        <nav aria-label="作品分类">
          {navItems.map((item, index) => (
            <a
              className={index === activeTheme ? "is-active" : ""}
              href={`#category-${index + 1}`}
              key={item}
              onClick={(event) => {
                event.preventDefault();
                setActiveTheme(index);
                setActivePages((pages) => pages.map((page, pageIndex) => pageIndex === index ? 0 : page));
                window.history.replaceState(null, "", `#category-${index + 1}`);
                document.getElementById(`category-${index + 1}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {item}
            </a>
          ))}
          <a className="project-nav-contact" href="mailto:dingzhiyin1025@gmail.com">CONTACT</a>
        </nav>
        <div className="contact-menu">
          <button className="contact" type="button" aria-haspopup="true">联系我 <span aria-hidden="true">↗</span></button>
          <div className="contact-details" aria-label="联系方式">
            <a href="tel:+8618013836608"><small>TEL</small><strong>+86 18013836608</strong></a>
            <a href="mailto:dingzhiyin1025@gmail.com"><small>EMAIL</small><strong>dingzhiyin1025@gmail.com</strong></a>
          </div>
        </div>
      </header>

      <section className="hero" id="top" aria-label="RachelDDD 视觉设计作品集">
        <div className="intro-meta"><span>VISUAL DESIGNER · DING ZHIYIN</span></div>
        <div className="name-lockup" aria-label="Rachel DDD"><span>Rachel</span><span>DDD.</span></div>
        <p className="instruction"><span className="dot" /> Drag to rotate<br />Hover to focus</p>

        <div className="carousel-stage" ref={stageRef} aria-label="拖拽浏览作品">
          <div className="carousel-ring">
            {works.map((work) => (
              <button className="carousel-card" key={work.src} aria-label={work.alt}>
                <img src={work.src} alt={work.alt} />
              </button>
            ))}
          </div>
        </div>
        <div className="index-mark">001 / PORTFOLIO</div>
      </section>

      <section
        className="directory-page"
        id="directory"
        aria-label="作品目录"
        ref={directoryRef}
        onPointerMove={(event) => {
          const directory = directoryRef.current;
          if (!directory || event.pointerType === "touch") return;
          const rect = directory.getBoundingClientRect();
          directory.style.setProperty("--light-x", `${event.clientX - rect.left}px`);
          directory.style.setProperty("--light-y", `${event.clientY - rect.top}px`);
          const items = Array.from(directory.querySelectorAll<HTMLElement>(".directory-item"));
          let closestIndex = 0;
          let closestDistance = Infinity;
          items.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            const distance = Math.abs(event.clientY - (itemRect.top + itemRect.height / 2));
            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          });
          items.forEach((item, index) => item.classList.toggle("is-focused", index === closestIndex));
        }}
      >
        <div className="directory-light" aria-hidden="true" />
        <div className="directory-preview" ref={directoryPreviewRef} aria-hidden="true"><img src={directoryItems[0].preview} alt="" /></div>
        <header className="directory-header"><span>( INDEX )</span><span>SELECTED WORK · 2026</span><span>05 CATEGORIES</span></header>
        <div className="directory-list">
          {directoryItems.map((item, index) => (
            <a
              className={`directory-item${index === 2 ? " is-focused" : ""}`}
              href={`#category-${index + 1}`}
              key={item.name}
              onPointerEnter={(event) => {
                const preview = directoryPreviewRef.current;
                if (!preview || !directoryRef.current) return;
                directoryRef.current.querySelectorAll(".directory-item").forEach((other) => other.classList.toggle("is-focused", other === event.currentTarget));
                preview.querySelector("img")!.src = item.preview;
                directoryRef.current.style.setProperty("--directory-rgb", item.color);
                preview.classList.add("is-visible");
              }}
              onPointerLeave={() => directoryPreviewRef.current?.classList.remove("is-visible")}
              onClick={(event) => {
                event.preventDefault();
                setActiveTheme(index);
                setActivePages((pages) => pages.map((page, pageIndex) => pageIndex === index ? 0 : page));
                window.history.replaceState(null, "", `#category-${index + 1}`);
                document.getElementById(`category-${index + 1}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span><h2>{item.name}</h2><em>{item.meta}</em><b>↗</b>
            </a>
          ))}
        </div>
        <footer className="directory-footer"><span>MOVE TO EXPLORE</span><span>CLICK TO ENTER</span></footer>
      </section>

      <div
        className="project-index"
        ref={projectIndexRef}
        onPointerMove={(event) => {
          if (event.pointerType === "touch" || !pageCursorRef.current) return;
          const hoveredSection = (event.target as Element).closest<HTMLElement>(".project-section");
          if (hoveredSection) setActiveTheme(Number(hoveredSection.dataset.theme));
          const direction = event.clientX < window.innerWidth / 2 ? -1 : 1;
          pageCursorRef.current.style.left = `${event.clientX + 18}px`;
          pageCursorRef.current.style.top = `${event.clientY + 18}px`;
          pageCursorRef.current.querySelector("span")!.textContent = `${direction > 0 ? "NEXT" : "PREV"} (${pageNumber}/${pageTotal})`;
          projectIndexRef.current?.classList.add("is-cursor-active");
        }}
        onPointerLeave={() => projectIndexRef.current?.classList.remove("is-cursor-active")}
        onClick={(event) => {
          if ((event.target as Element).closest("a, button")) return;
          const section = (event.target as Element).closest<HTMLElement>(".project-section");
          const themeIndex = section ? Number(section.dataset.theme) : activeTheme;
          const direction = event.clientX < window.innerWidth / 2 ? -1 : 1;
          setActiveTheme(themeIndex);
          setActivePages((pages) => pages.map((page, index) => index === themeIndex
            ? (page + direction + projectSections[themeIndex].items.length) % projectSections[themeIndex].items.length
            : page));
        }}
      >
        {projectSections.map((section, sectionIndex) => {
          const sectionPage = activePages[sectionIndex];
          return (
          <section className={`project-section${sectionIndex === activeTheme ? " is-theme-active" : ""}`} id={`category-${sectionIndex + 1}`} data-theme={sectionIndex} key={section.title}>
          <header className="project-heading">
            <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
            <h2>{section.title}</h2>
            <span>{section.meta}</span>
          </header>
          <div className={`masonry-grid${section.slideGrid ? " masonry-grid--slides" : ""}`}>
            {section.items.map((item, index) => (
              <figure
                className={`project-item ${index === sectionPage ? "is-active" : index < sectionPage ? "is-before" : "is-after"}`}
                key={item.src}
              >
                {item.type === "website" ? (
                  <div className="website-viewer">
                    <iframe src={item.src} title={item.alt} loading="lazy" />
                    <a className="website-launch" href={item.src} target="_blank" rel="noreferrer">VISIT WEBSITE ↗</a>
                  </div>
                ) : item.type === "deck" ? (
                  <div className="deck-viewer">
                    <iframe src={`${item.src}#toolbar=0&navpanes=0&view=FitH`} title={`${item.alt}，共 ${item.pages} 页`} loading="lazy" />
                    <div className="deck-actions">
                      <span>{String(item.pages).padStart(2, "0")} {item.pages === 1 ? "PAGE" : "PAGES"}</span>
                      <a href={item.src} target="_blank" rel="noreferrer">OPEN PDF ↗</a>
                      <a href={item.downloadSrc} download>{item.downloadLabel}</a>
                    </div>
                  </div>
                ) : item.type === "video" ? (
                  <video src={item.src} autoPlay={sectionIndex === activeTheme && index === sectionPage} muted loop playsInline preload="metadata" />
                ) : (
                  <img src={item.src} alt={item.alt} loading="lazy" />
                )}
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="page-status" aria-live="polite"><span>{String(sectionPage + 1).padStart(2, "0")}</span><i /><span>{String(section.items.length).padStart(2, "0")}</span></div>
        </section>
          );
        })}
        <div className="page-cursor" ref={pageCursorRef} aria-hidden="true"><b>↖</b><span>NEXT ({pageNumber}/{pageTotal})</span></div>
      </div>
    </main>
  );
}
