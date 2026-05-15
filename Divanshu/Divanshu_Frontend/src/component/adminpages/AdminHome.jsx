
import { useEffect, useState } from "react";
import { dashboard } from "../../services/userService";

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  .ah-root { font-family:'DM Sans',sans-serif; background:#f5f6fa; min-height:100vh; }

  /* ── Hero ── */
  .ah-hero {
    background:linear-gradient(135deg,#0f172a 0%,#1e293b 60%,#0f2044 100%);
    padding:52px 24px 44px; position:relative; overflow:hidden;
  }
  .ah-hero::before {
    content:''; position:absolute; inset:0;
    background:
      radial-gradient(ellipse 65% 75% at 88% 50%,rgba(99,102,241,.18) 0%,transparent 70%),
      radial-gradient(ellipse 35% 45% at 6%  80%,rgba(16,185,129,.10) 0%,transparent 60%);
    pointer-events:none;
  }
  .ah-hero-inner { position:relative; max-width:1200px; margin:0 auto; }
  .ah-breadcrumb {
    display:flex; align-items:center; gap:6px;
    font-size:11.5px; color:rgba(255,255,255,.45);
    margin-bottom:16px; letter-spacing:.05em; text-transform:uppercase;
  }
  .ah-breadcrumb a { color:rgba(255,255,255,.45); text-decoration:none; }
  .ah-breadcrumb a:hover { color:rgba(255,255,255,.75); }
  .ah-breadcrumb .sep { color:rgba(255,255,255,.22); }
  .ah-breadcrumb .active { color:#818cf8; }
  .ah-hero-top { display:flex; align-items:flex-end; justify-content:space-between; flex-wrap:wrap; gap:16px; }
  .ah-hero h1 {
    font-family:'Sora',sans-serif;
    font-size:clamp(1.7rem,3.5vw,2.4rem); font-weight:700; color:#fff;
    margin:0 0 6px; letter-spacing:-.02em;
  }
  .ah-hero p { color:rgba(255,255,255,.48); font-size:13.5px; margin:0; font-weight:300; }
  .ah-hero-date {
    font-size:12.5px; color:rgba(255,255,255,.35);
    display:flex; align-items:center; gap:6px;
    background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.08);
    border-radius:8px; padding:6px 12px; white-space:nowrap;
  }

  /* ── Body ── */
  .ah-body { max-width:1200px; margin:0 auto; padding:36px 20px 60px; }

  /* ── Section label ── */
  .ah-section-title {
    font-family:'Sora',sans-serif; font-size:13px; font-weight:600;
    color:#64748b; letter-spacing:.04em; text-transform:uppercase;
    margin-bottom:16px; display:flex; align-items:center; gap:8px;
  }
  .ah-section-title::after { content:''; flex:1; height:1px; background:#e2e8f0; }

  /* ══════════════════════════════
     STAT CARDS
  ══════════════════════════════ */
  .ah-stats { display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:18px; margin-bottom:36px; }

  .ah-stat-card {
    background:#fff; border-radius:16px; border:1.5px solid #e8eaf0;
    padding:22px 24px; display:flex; flex-direction:column; gap:16px;
    transition:box-shadow .2s, transform .2s, border-color .2s;
    position:relative; overflow:hidden;
  }
  .ah-stat-card:hover { box-shadow:0 8px 32px rgba(0,0,0,.08); transform:translateY(-2px); }

  /* Coloured top bar */
  .ah-stat-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; }
  .ah-stat-card.indigo::before  { background:linear-gradient(90deg,#6366f1,#818cf8); }
  .ah-stat-card.green::before   { background:linear-gradient(90deg,#10b981,#34d399); }
  .ah-stat-card.amber::before   { background:linear-gradient(90deg,#f59e0b,#fbbf24); }
  .ah-stat-card.rose::before    { background:linear-gradient(90deg,#f43f5e,#fb7185); }

  /* Background glow */
  .ah-stat-card::after {
    content:''; position:absolute; bottom:-30px; right:-30px;
    width:100px; height:100px; border-radius:50%;
    opacity:.06; transition:opacity .2s;
  }
  .ah-stat-card.indigo::after { background:#6366f1; }
  .ah-stat-card.green::after  { background:#10b981; }
  .ah-stat-card.amber::after  { background:#f59e0b; }
  .ah-stat-card.rose::after   { background:#f43f5e; }
  .ah-stat-card:hover::after  { opacity:.10; }

  .ah-stat-top { display:flex; align-items:flex-start; justify-content:space-between; position:relative; z-index:1; }
  .ah-stat-icon {
    width:48px; height:48px; border-radius:13px;
    display:flex; align-items:center; justify-content:center; flex-shrink:0;
  }
  .ah-stat-card.indigo .ah-stat-icon { background:#eef2ff; color:#6366f1; }
  .ah-stat-card.green  .ah-stat-icon { background:#d1fae5; color:#10b981; }
  .ah-stat-card.amber  .ah-stat-icon { background:#fef3c7; color:#f59e0b; }
  .ah-stat-card.rose   .ah-stat-icon { background:#ffe4e6; color:#f43f5e; }

  .ah-stat-badge {
    font-size:11px; font-weight:600; padding:3px 8px;
    border-radius:100px; display:flex; align-items:center; gap:4px;
    flex-shrink:0;
  }
  .ah-stat-badge.up   { background:#d1fae5; color:#059669; }
  .ah-stat-badge.down { background:#ffe4e6; color:#e11d48; }
  .ah-stat-badge.neu  { background:#f1f5f9; color:#64748b; }

  .ah-stat-bottom { position:relative; z-index:1; }
  .ah-stat-label { font-size:12.5px; color:#64748b; font-weight:500; margin-bottom:4px; }
  .ah-stat-value {
    font-family:'Sora',sans-serif; font-size:2rem; font-weight:800;
    color:#0f172a; line-height:1; letter-spacing:-.03em;
  }
  .ah-stat-sub { font-size:11.5px; color:#94a3b8; margin-top:5px; }

  /* Loading skeleton for stat cards */
  @keyframes shimmer { 0%{background-position:-600px 0} 100%{background-position:600px 0} }
  .ah-skel {
    background:linear-gradient(90deg,#f1f5f9 25%,#e2e8f0 50%,#f1f5f9 75%);
    background-size:600px 100%; animation:shimmer 1.4s infinite; border-radius:8px;
  }
  .ah-stat-card-skel { background:#fff; border-radius:16px; border:1.5px solid #e8eaf0; padding:22px 24px; }

  /* ══════════════════════════════
     QUICK LINKS / ACTIONS
  ══════════════════════════════ */
  .ah-actions { display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:14px; margin-bottom:36px; }
  .ah-action-btn {
    display:flex; align-items:center; gap:12px;
    padding:14px 16px; background:#fff;
    border-radius:12px; border:1.5px solid #e8eaf0;
    text-decoration:none; color:#1e293b;
    font-size:13.5px; font-weight:500;
    transition:all .18s; cursor:pointer;
  }
  .ah-action-btn:hover { border-color:#c7d2fe; color:#6366f1; background:#f8f9ff; transform:translateY(-1px); box-shadow:0 4px 16px rgba(99,102,241,.08); }
  .ah-action-icon {
    width:36px; height:36px; border-radius:9px;
    display:flex; align-items:center; justify-content:center; flex-shrink:0;
  }
  .ah-action-icon.a { background:#eef2ff; color:#6366f1; }
  .ah-action-icon.b { background:#d1fae5; color:#10b981; }
  .ah-action-icon.c { background:#fef3c7; color:#f59e0b; }
  .ah-action-icon.d { background:#ffe4e6; color:#f43f5e; }
  .ah-action-icon.e { background:#dbeafe; color:#3b82f6; }
  .ah-action-icon.f { background:#f3e8ff; color:#9333ea; }

  /* ══════════════════════════════
     ACTIVITY / RECENT SECTION
  ══════════════════════════════ */
  .ah-panels { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:36px; }
  @media(max-width:768px){ .ah-panels{ grid-template-columns:1fr; } }

  .ah-panel { background:#fff; border-radius:16px; border:1.5px solid #e8eaf0; overflow:hidden; }
  .ah-panel-header {
    padding:18px 22px; border-bottom:1px solid #f1f5f9;
    display:flex; align-items:center; justify-content:space-between;
  }
  .ah-panel-title {
    font-family:'Sora',sans-serif; font-size:14px; font-weight:600; color:#0f172a; margin:0;
  }
  .ah-panel-link { font-size:12px; color:#6366f1; text-decoration:none; font-weight:500; }
  .ah-panel-link:hover { text-decoration:underline; }
  .ah-panel-body { padding:0; }

  /* Activity list */
  .ah-activity-item {
    display:flex; align-items:center; gap:14px;
    padding:14px 22px; border-bottom:1px solid #f8fafc;
    transition:background .15s;
  }
  .ah-activity-item:last-child { border-bottom:none; }
  .ah-activity-item:hover { background:#f8fafc; }
  .ah-activity-dot {
    width:10px; height:10px; border-radius:50%; flex-shrink:0;
  }
  .ah-activity-dot.indigo { background:#6366f1; box-shadow:0 0 6px rgba(99,102,241,.4); }
  .ah-activity-dot.green  { background:#10b981; box-shadow:0 0 6px rgba(16,185,129,.4); }
  .ah-activity-dot.amber  { background:#f59e0b; box-shadow:0 0 6px rgba(245,158,11,.4); }
  .ah-activity-dot.rose   { background:#f43f5e; box-shadow:0 0 6px rgba(244,63,94,.4); }
  .ah-activity-text { flex:1; min-width:0; font-size:13px; color:#334155; }
  .ah-activity-text strong { font-weight:500; color:#0f172a; }
  .ah-activity-time { font-size:11px; color:#94a3b8; flex-shrink:0; }

  /* Progress bars */
  .ah-progress-item { padding:14px 22px; border-bottom:1px solid #f8fafc; }
  .ah-progress-item:last-child { border-bottom:none; }
  .ah-progress-header { display:flex; justify-content:space-between; margin-bottom:8px; }
  .ah-progress-label { font-size:13px; font-weight:500; color:#334155; }
  .ah-progress-pct { font-size:12px; font-weight:600; color:#475569; }
  .ah-progress-track {
    height:6px; border-radius:100px; background:#f1f5f9; overflow:hidden;
  }
  .ah-progress-fill { height:100%; border-radius:100px; transition:width .6s ease; }

  /* ── Responsive ── */
  @media(max-width:600px){
    .ah-stats { grid-template-columns:1fr 1fr; }
    .ah-actions { grid-template-columns:1fr 1fr; }
    .ah-body { padding:24px 16px 48px; }
  }
  @media(max-width:400px){
    .ah-stats { grid-template-columns:1fr; }
  }
`;

/* ── Icons ── */
const Ic = {
  session: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="3" width="20" height="18" rx="3" /><line x1="2" y1="9" x2="22" y2="9" /><line x1="7" y1="13" x2="9" y2="13" /><line x1="7" y1="17" x2="11" y2="17" /></svg>,
  request: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  skill: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="8" r="5" /><path d="M4 22c0-4.418 3.582-8 8-8s8 3.582 8 8" /></svg>,
  mentor: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  plus: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="2" x2="8" y2="14" /><line x1="2" y1="8" x2="14" y2="8" /></svg>,
  list: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><line x1="4" y1="4" x2="14" y2="4" /><line x1="4" y1="8" x2="14" y2="8" /><line x1="4" y1="12" x2="14" y2="12" /><circle cx="1.5" cy="4" r="1" fill="currentColor" stroke="none" /><circle cx="1.5" cy="8" r="1" fill="currentColor" stroke="none" /><circle cx="1.5" cy="12" r="1" fill="currentColor" stroke="none" /></svg>,
  arrow: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="2" y1="7" x2="12" y2="7" /><polyline points="8 3 12 7 8 11" /></svg>,
  clock: <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5" /><polyline points="7 4 7 7 9.5 9" /></svg>,
  up: <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2 7 5 3 8 7" /></svg>,
};

/* ─────────────────────────────────────────────
   Stat Card
───────────────────────────────────────────── */
function StatCard({ color, icon, label, value, sub, badge, badgeType, loading }) {
  if (loading) {
    return (
      <div className="ah-stat-card-skel">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
          <div className="ah-skel" style={{ width: 48, height: 48, borderRadius: 13 }} />
          <div className="ah-skel" style={{ width: 56, height: 22, borderRadius: 100 }} />
        </div>
        <div className="ah-skel" style={{ height: 12, width: "50%", marginBottom: 8 }} />
        <div className="ah-skel" style={{ height: 32, width: "60%" }} />
      </div>
    );
  }
  return (
    <div className={`ah-stat-card ${color}`}>
      <div className="ah-stat-top">
        <div className="ah-stat-icon">{icon}</div>
        {badge && (
          <span className={`ah-stat-badge ${badgeType || "neu"}`}>
            {badgeType === "up" && Ic.up} {badge}
          </span>
        )}
      </div>
      <div className="ah-stat-bottom">
        <div className="ah-stat-label">{label}</div>
        <div className="ah-stat-value">{value ?? "—"}</div>
        {sub && <div className="ah-stat-sub">{sub}</div>}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
function AdminHome() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const res = await dashboard();
      if (res.data.success) setData(res.data.data);
      else console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchDashboard(); }, []);

  const today = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const stats = [
    { color: "indigo", icon: Ic.session, label: "Total Sessions", value: data?.totalSessions, sub: "All learning sessions", badge: "+12%", badgeType: "up" },
    { color: "rose", icon: Ic.request, label: "Total Requests", value: data?.totalRequests, sub: "Learner enrolment requests", badge: "Pending", badgeType: "neu" },
    { color: "amber", icon: Ic.skill, label: "Total Skills", value: data?.totalSkills, sub: "Active skill categories", badge: "+3", badgeType: "up" },
    { color: "green", icon: Ic.mentor, label: "Total Learner-Mentors", value: data?.totallearnerMentor, sub: "Registered mentors on platform", badge: "Active", badgeType: "up" },
  ];

  const quickLinks = [
    { label: "Add Session", icon: <Ic />, iconKey: "a", href: "/learnermentor/addsession" },
    { label: "Manage Sessions", icon: null, iconKey: "b", href: "/learnermentor/managesession" },
    { label: "Add Skill", icon: null, iconKey: "c", href: "/admin/addskills" },
    { label: "Manage Skills", icon: null, iconKey: "d", href: "/admin/manageskills" },
    { label: "Manage Requests", icon: null, iconKey: "e", href: "/admin/managerequest" },
    { label: "Manage Mentors", icon: null, iconKey: "f", href: "/admin/managelearnermentor" },
  ];

  const quickLinkIcons = {
    a: Ic.plus,
    b: Ic.list,
    c: Ic.plus,
    d: Ic.list,
    e: Ic.list,
    f: Ic.list,
  };

  const activities = [
    { dot: "indigo", text: <><strong>New session</strong> "React Fundamentals" was created</>, time: "2m ago" },
    { dot: "green", text: <><strong>Mentor Rahul</strong> joined the platform</>, time: "18m ago" },
    { dot: "amber", text: <><strong>Skill "Python"</strong> was updated to Completed</>, time: "1h ago" },
    { dot: "rose", text: <><strong>3 new requests</strong> are awaiting approval</>, time: "2h ago" },
    { dot: "indigo", text: <><strong>Session "Node.js Advanced"</strong> was published</>, time: "3h ago" },
  ];

  const progress = [
    { label: "Sessions Filled", pct: 72, color: "#6366f1" },
    { label: "Requests Resolved", pct: 58, color: "#10b981" },
    { label: "Skills Completed", pct: 45, color: "#f59e0b" },
    { label: "Mentor Utilisation", pct: 83, color: "#f43f5e" },
  ];

  return (
    <div className="ah-root">
      <style>{styles}</style>

      {/* ── Hero ── */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Admin
          </h3>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Admin</a>
            </li>
            <li className="breadcrumb-item active text-primary">Home</li>
          </ol>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="ah-body">

        {/* ── Stat Cards ── */}
        <div className="ah-section-title">Overview</div>
        <div className="ah-stats">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} loading={loading} />
          ))}
        </div>

        {/* ── Quick Actions ── */}
        <div className="ah-section-title">Quick Actions</div>
        <div className="ah-actions" style={{ marginBottom: 36 }}>
          {quickLinks.map((l, i) => (
            <a key={i} href={l.href} className="ah-action-btn">
              <div className={`ah-action-icon ${l.iconKey}`}>
                {quickLinkIcons[l.iconKey]}
              </div>
              <span>{l.label}</span>
              <span style={{ marginLeft: "auto", color: "#94a3b8" }}>{Ic.arrow}</span>
            </a>
          ))}
        </div>

        {/* ── Panels ── */}
        <div className="ah-section-title">Activity &amp; Performance</div>
        <div className="ah-panels">

          {/* Recent activity */}
          <div className="ah-panel">
            <div className="ah-panel-header">
              <h3 className="ah-panel-title">Recent Activity</h3>
              <a href="#" className="ah-panel-link">View all →</a>
            </div>
            <div className="ah-panel-body">
              {activities.map((a, i) => (
                <div key={i} className="ah-activity-item">
                  <div className={`ah-activity-dot ${a.dot}`} />
                  <div className="ah-activity-text">{a.text}</div>
                  <div className="ah-activity-time">{Ic.clock} {a.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="ah-panel">
            <div className="ah-panel-header">
              <h3 className="ah-panel-title">Platform Performance</h3>
              <a href="#" className="ah-panel-link">Details →</a>
            </div>
            <div className="ah-panel-body">
              {progress.map((p, i) => (
                <div key={i} className="ah-progress-item">
                  <div className="ah-progress-header">
                    <span className="ah-progress-label">{p.label}</span>
                    <span className="ah-progress-pct">{p.pct}%</span>
                  </div>
                  <div className="ah-progress-track">
                    <div className="ah-progress-fill" style={{ width: `${p.pct}%`, background: p.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminHome;
