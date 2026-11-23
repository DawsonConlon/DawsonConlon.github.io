(() => {
  const C = window.CONTENT;
  const $ = (s) => document.querySelector(s);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Links & static text ---------- */
  $("#status").textContent = C.status;
  $("#pitch").textContent = C.pitch;
  $("#year").textContent = new Date().getFullYear();
  ["#resumeBtn", "#resumeBtn2"].forEach((s) => ($(s).href = C.links.resume));
  ["#ghBtn", "#ghBtn2"].forEach((s) => ($(s).href = C.links.github));
  ["#liBtn", "#liBtn2"].forEach((s) => ($(s).href = C.links.linkedin));
  const mail = $("#mailLink");
  mail.href = "mailto:" + C.links.email;
  mail.textContent = C.links.email;

  /* ---------- Typing roles ---------- */
  const roleEl = $("#roleText");
  if (reduced) {
    roleEl.textContent = C.roles.join(" · ");
  } else {
    let r = 0, i = 0, deleting = false;
    const tick = () => {
      const word = C.roles[r];
      i += deleting ? -1 : 1;
      roleEl.textContent = word.slice(0, i);
      let delay = deleting ? 45 : 85;
      if (!deleting && i === word.length) { deleting = true; delay = 1600; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % C.roles.length; delay = 300; }
      setTimeout(tick, delay);
    };
    tick();
  }

  /* ---------- Metrics ---------- */
  const fmt = (v, d = 0) => v.toLocaleString("en-CA", { minimumFractionDigits: d, maximumFractionDigits: d });
  const metrics = $("#metrics");
  C.metrics.forEach((m) => {
    const card = el("div", "metric reveal");
    card.innerHTML = `
      <div class="metric-value grad" data-target="${m.value}" data-dec="${m.decimals || 0}"
           data-pre="${esc(m.prefix || "")}" data-suf="${esc(m.suffix || "")}">${esc(m.prefix || "")}${fmt(m.value, m.decimals)}${esc(m.suffix || "")}</div>
      <p class="metric-label">${esc(m.label)}</p>
      <span class="metric-src">${esc(m.src)}</span>`;
    metrics.appendChild(card);
  });
  const countUp = (node) => {
    const t = +node.dataset.target, d = +node.dataset.dec, pre = node.dataset.pre, suf = node.dataset.suf;
    if (reduced) return;
    const start = performance.now(), dur = 1600;
    const step = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      node.textContent = pre + fmt(t * e, d) + suf;
      if (p < 1) requestAnimationFrame(step);
      else node.textContent = pre + fmt(t, d) + suf; // always land on the exact locked value
    };
    requestAnimationFrame(step);
  };

  /* ---------- About ---------- */
  $("#aboutText").innerHTML = C.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#facts").innerHTML = C.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");

  /* ---------- Experience ---------- */
  const tl = $("#timeline");
  C.experience.forEach((j, idx) => {
    const li = el("li", "job reveal");
    const id = "job-body-" + idx;
    li.innerHTML = `
      <article class="job-card">
        <div class="job-top">
          <div><h3>${esc(j.title)}</h3><div class="job-org">${esc(j.org)} · ${esc(j.place)}</div></div>
          <span class="job-dates">${esc(j.dates)}</span>
        </div>
        <p class="job-headline">${esc(j.headline)}</p>
        <ul class="tags">${j.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>
        <button class="job-toggle" aria-expanded="${idx === 0}" aria-controls="${id}">
          <span class="chev">▸</span> <span class="lbl">${idx === 0 ? "Hide details" : "Show details"}</span>
        </button>
        <div class="job-body${idx === 0 ? " open" : ""}" id="${id}"><div>
          <ul class="bullets">${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          ${j.repo ? `<a class="repo-link" href="${j.repo}" target="_blank" rel="noopener">View the RAG bot code ↗</a>` : ""}
        </div></div>
      </article>`;
    tl.appendChild(li);
  });
  tl.addEventListener("click", (e) => {
    const btn = e.target.closest(".job-toggle");
    if (!btn) return;
    const open = btn.getAttribute("aria-expanded") !== "true";
    btn.setAttribute("aria-expanded", open);
    btn.querySelector(".lbl").textContent = open ? "Hide details" : "Show details";
    document.getElementById(btn.getAttribute("aria-controls")).classList.toggle("open", open);
  });

  /* ---------- Projects ---------- */
  const grid = $("#projectGrid");
  C.projects.forEach((p, idx) => {
    const card = el("article", "project reveal" + (p.featured ? " featured" : ""));
    card.dataset.cats = p.cats.join(" ");
    card.innerHTML = `
      <div class="project-head">
        <div>
          <span class="badge">${esc(p.badge)}</span>
          <h3>${esc(p.title)}</h3>
          <div class="project-meta">${esc(p.dates)} · ${esc(p.kind)}</div>
        </div>
        <div class="project-stat"><b class="grad">${esc(p.stat.value)}</b><span>${esc(p.stat.label)}</span></div>
      </div>
      <p class="project-blurb">${esc(p.blurb)}</p>
      <ul class="bullets">${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      <div class="project-foot">
        <ul class="tags">${p.stack.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>
        ${p.repo ? `<a class="repo-link" href="${p.repo}" target="_blank" rel="noopener">Code ↗</a>` : `<span class="repo-note">${esc(p.repoNote || "")}</span>`}
      </div>`;
    grid.appendChild(card);
  });
  const filters = $("#filters");
  C.filters.forEach(([key, label], i) => {
    const b = el("button", "filter", esc(label));
    b.dataset.key = key;
    b.setAttribute("aria-pressed", i === 0);
    filters.appendChild(b);
  });
  filters.addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    filters.querySelectorAll(".filter").forEach((f) => f.setAttribute("aria-pressed", f === b));
    const k = b.dataset.key;
    let shown = 0;
    document.querySelectorAll(".project").forEach((c) => {
      const hit = k === "all" || c.dataset.cats.split(" ").includes(k);
      c.classList.toggle("is-hidden", !hit);
      if (hit) { c.classList.add("in"); shown++; }
    });
    $("#emptyMsg").hidden = shown > 0;
  });

  /* ---------- Skills / education ---------- */
  $("#skillsGrid").innerHTML = C.skills.map(([g, items]) => `
    <div class="skill-group reveal"><h3>${esc(g)}</h3>
      <ul class="chips">${items.map((s) => `<li class="chip">${esc(s)}</li>`).join("")}</ul></div>`).join("");
  const medal = `<svg class="medal" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2h8l-2.5 6h-3z"/><circle cx="12" cy="15" r="6"/><path d="M10.5 13.2l1.5-1v5.6"/></svg>`;
  const cred = (x, icon = "") => `<li class="reveal"><div><b>${icon}${esc(x.title)}</b><span>${esc(x.org)}</span></div><time>${esc(x.dates)}</time></li>`;
  $("#eduList").innerHTML = C.education.map((e) => cred(e)).join("");
  $("#awardList").innerHTML = C.awards.map((a) => cred(a, medal)).join("");

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      const v = en.target.querySelector(".metric-value");
      if (v) countUp(v);
      io.unobserve(en.target);
    });
  }, { threshold: 0.15 });
  if (!reduced) document.documentElement.classList.add("anim");
  document.querySelectorAll(".reveal").forEach((n, i) => {
    n.style.transitionDelay = (i % 3) * 50 + "ms";
    io.observe(n);
  });

  /* ---------- Nav: scrolled state + active link ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const links = [...document.querySelectorAll(".nav-links a")];
  const secIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["about", "experience", "projects", "skills", "contact"].forEach((id) => secIO.observe(document.getElementById(id)));

  /* ---------- Theme toggle ---------- */
  $("#themeToggle").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = cur === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Hero canvas: a live scatter plot fitting its own regression line ----------
     Fills the whole hero. Points steer around the text block, and connecting lines and the
     regression line are never drawn over it, so nothing crosses the words. */
  const cv = $("#heroCanvas");
  const ctx = cv.getContext("2d");
  const hero = $(".hero");
  let W, H, pts = [], zone = null, yMin = 0.03, dpr = Math.min(devicePixelRatio || 1, 2);
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const PAD = 22;
  const measureZone = () => {
    const base = cv.getBoundingClientRect();
    // Measure the words and buttons themselves, not the full-width blocks that hold them.
    const parts = [...document.querySelectorAll(".hero-inner > *")].map((n) => {
      const r = document.createRange(); r.selectNodeContents(n);
      const t = r.getBoundingClientRect();
      return t.width ? t : n.getBoundingClientRect();
    });
    const pitch = $("#pitch");
    if (pitch) parts.push(pitch.getBoundingClientRect()); // full measure, so it holds while text types
    if (!parts.length) return null;
    return {
      x0: Math.min(...parts.map((r) => r.left)) - base.left - PAD,
      y0: Math.min(...parts.map((r) => r.top)) - base.top - PAD,
      x1: Math.max(...parts.map((r) => r.right)) - base.left + PAD,
      y1: Math.max(...parts.map((r) => r.bottom)) - base.top + PAD,
    };
  };
  const inZone = (x, y) => (zone && x > zone.x0 && x < zone.x1 && y > zone.y0 && y < zone.y1) || y < yMin * H;
  const crossesZone = (ax, ay, bx, by) => {
    for (let t = 0; t <= 1; t += 0.125) if (inZone(ax + (bx - ax) * t, ay + (by - ay) * t)) return true;
    return false;
  };
  const resize = () => {
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    zone = measureZone();
    // keep points below the fixed nav bar so nothing sits behind the menu links
    const navEl = $("#nav");
    yMin = Math.max(0.03, ((navEl ? navEl.getBoundingClientRect().height : 0) + 10) / H);
    const n = Math.round(Math.min(110, (W * H) / 12000));
    pts = [];
    let guard = 0;
    while (pts.length < n && guard++ < 5000) {
      const x = Math.random(), y = 0.72 - 0.4 * x + (Math.random() - 0.5) * 0.95;
      if (y < yMin || y > 0.97 || inZone(x * W, y * H)) continue;
      pts.push({ x, y, vx: (Math.random() - 0.5) * 0.0006, vy: (Math.random() - 0.5) * 0.0006, r: 1.5 + Math.random() * 2.2 });
    }
  };
  const draw = () => {
    const a1 = css("--accent"), a2 = css("--accent-2"), line = css("--line");
    ctx.clearRect(0, 0, W, H);
    // grid across the whole hero (faint background texture)
    ctx.strokeStyle = line; ctx.globalAlpha = 0.55; ctx.lineWidth = 1;
    const g = 56;
    for (let x = (W % g) / 2; x < W; x += g) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = (H % g) / 2; y < H; y += g) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    ctx.globalAlpha = 1;
    // links between near points, skipped where they would cross the text
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const ax = pts[i].x * W, ay = pts[i].y * H, bx = pts[j].x * W, by = pts[j].y * H;
      const d = Math.hypot(ax - bx, ay - by);
      if (d < 120 && !crossesZone(ax, ay, bx, by)) {
        ctx.strokeStyle = a2; ctx.globalAlpha = (1 - d / 120) * 0.35;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
    // least-squares fit, drawn everywhere except over the text block
    let sx = 0, sy = 0, sxy = 0, sxx = 0;
    pts.forEach((p) => { sx += p.x; sy += p.y; sxy += p.x * p.y; sxx += p.x * p.x; });
    const n = pts.length, m = (n * sxy - sx * sy) / (n * sxx - sx * sx || 1), b = (sy - m * sx) / n;
    ctx.save();
    if (zone) {
      ctx.beginPath(); ctx.rect(0, 0, W, H);
      ctx.rect(zone.x0, zone.y0, zone.x1 - zone.x0, zone.y1 - zone.y0);
      ctx.clip("evenodd");
    }
    {
      ctx.beginPath(); ctx.rect(0, yMin * H, W, H); ctx.clip();
    }
    const grd = ctx.createLinearGradient(0, 0, W, 0);
    grd.addColorStop(0, a1); grd.addColorStop(1, a2);
    ctx.strokeStyle = grd; ctx.lineWidth = 2.5; ctx.globalAlpha = 0.85;
    ctx.setLineDash([10, 8]);
    ctx.beginPath(); ctx.moveTo(0, b * H); ctx.lineTo(W, (m + b) * H); ctx.stroke();
    ctx.restore();
    ctx.setLineDash([]); ctx.globalAlpha = 1;
    // points
    pts.forEach((p) => {
      ctx.fillStyle = p.y > m * p.x + b ? a1 : a2;
      ctx.globalAlpha = 0.9;
      ctx.beginPath(); ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1;
  };
  const step = () => {
    pts.forEach((p) => {
      const nx = p.x + p.vx, ny = p.y + p.vy;
      if (nx < 0 || nx > 1) p.vx *= -1;
      if (ny < yMin || ny > 0.97) p.vy *= -1;
      if (inZone(nx * W, ny * H)) {
        // bounce off whichever edge of the text block it hit
        if (!inZone(p.x * W, ny * H)) p.vy *= -1; else p.vx *= -1;
      }
      p.x += p.vx; p.y += p.vy;
    });
    draw();
    if (heroVisible) requestAnimationFrame(step);
  };
  let heroVisible = true;
  resize();
  addEventListener("resize", () => { resize(); if (reduced) draw(); });
  document.fonts && document.fonts.ready.then(() => { zone = measureZone(); });
  if (reduced) draw();
  else {
    new IntersectionObserver(([en]) => {
      const was = heroVisible; heroVisible = en.isIntersecting;
      if (heroVisible && !was) requestAnimationFrame(step);
    }).observe(cv);
    requestAnimationFrame(step);
  }
  // redraw once on theme change for reduced-motion users
  $("#themeToggle").addEventListener("click", () => reduced && draw());
})();
