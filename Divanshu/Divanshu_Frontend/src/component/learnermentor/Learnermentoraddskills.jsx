


import { useState } from "react";
import { addSkills } from "../../services/skillService";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  .ask-root {
    font-family: 'DM Sans', sans-serif;
    background: #f5f6fa;
    min-height: 100vh;
  }

  /* ── Hero ── */
  .ask-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2044 100%);
    padding: 52px 24px 44px;
    position: relative;
    overflow: hidden;
  }
  .ask-hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 60% 70% at 90% 50%, rgba(99,102,241,.18) 0%, transparent 70%),
      radial-gradient(ellipse 35% 45% at 5%  80%, rgba(16,185,129,.10) 0%, transparent 60%);
    pointer-events: none;
  }
  .ask-hero-inner {
    position: relative;
    max-width: 560px;
    margin: 0 auto;
  }
  .ask-breadcrumb {
    display: flex; align-items: center; gap: 6px;
    font-size: 11.5px; color: rgba(255,255,255,.45);
    margin-bottom: 16px; letter-spacing: .05em; text-transform: uppercase;
  }
  .ask-breadcrumb a { color: rgba(255,255,255,.45); text-decoration: none; }
  .ask-breadcrumb a:hover { color: rgba(255,255,255,.75); }
  .ask-breadcrumb .sep { color: rgba(255,255,255,.22); }
  .ask-breadcrumb .active { color: #818cf8; }
  .ask-hero h1 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.7rem, 3.5vw, 2.4rem);
    font-weight: 700; color: #fff;
    margin: 0 0 6px; letter-spacing: -.02em;
  }
  .ask-hero p { color: rgba(255,255,255,.48); font-size: 13.5px; margin: 0; font-weight: 300; }

  /* ── Body ── */
  .ask-body {
    max-width: 560px;
    margin: 0 auto;
    padding: 36px 20px 64px;
  }

  /* ── Card ── */
  .ask-card {
    background: #fff;
    border-radius: 20px;
    border: 1.5px solid #e8eaf0;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(15,23,42,.06);
  }
  .ask-card-header {
    padding: 22px 28px 20px;
    border-bottom: 1px solid #f1f5f9;
    display: flex; align-items: center; gap: 14px;
  }
  .ask-card-icon {
    width: 44px; height: 44px; border-radius: 12px;
    background: linear-gradient(135deg, #6366f1, #818cf8);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .ask-card-header h2 {
    font-family: 'Sora', sans-serif;
    font-size: 17px; font-weight: 600;
    color: #0f172a; margin: 0 0 2px;
  }
  .ask-card-header p { font-size: 12.5px; color: #94a3b8; margin: 0; }
  .ask-card-body { padding: 28px; }

  /* ── Fields ── */
  .ask-field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 20px; }
  .ask-field:last-of-type { margin-bottom: 0; }
  .ask-label {
    font-size: 12.5px; font-weight: 500; color: #475569;
    display: flex; align-items: center; gap: 6px;
  }
  .ask-label svg { color: #94a3b8; flex-shrink: 0; }
  .ask-required { color: #f87171; }

  .ask-input {
    width: 100%;
    padding: 11px 13px;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    font-size: 13.5px;
    font-family: 'DM Sans', sans-serif;
    background: #fafbfc;
    color: #1e293b;
    outline: none;
    transition: border-color .18s, box-shadow .18s;
    box-sizing: border-box;
    appearance: none;
  }
  .ask-input:focus {
    border-color: #818cf8;
    box-shadow: 0 0 0 3px rgba(129,140,248,.12);
    background: #fff;
  }
  .ask-input::placeholder { color: #cbd5e1; }

  /* File input */
  .ask-input[type="file"] {
    padding: 8px 13px; cursor: pointer;
  }
  .ask-input[type="file"]::-webkit-file-upload-button {
    background: #eef2ff; color: #6366f1;
    border: none; border-radius: 6px;
    padding: 5px 12px; font-size: 12px;
    font-family: 'DM Sans', sans-serif; font-weight: 500;
    cursor: pointer; margin-right: 10px;
    transition: background .15s;
  }
  .ask-input[type="file"]::-webkit-file-upload-button:hover {
    background: #e0e7ff;
  }

  /* ── Thumbnail preview ── */
  .ask-preview-wrap {
    display: flex; align-items: center; gap: 14px;
    margin-top: 10px;
  }
  .ask-preview-img {
    width: 72px; height: 72px;
    border-radius: 14px;
    object-fit: cover;
    border: 2px solid #e2e8f0;
    display: block; flex-shrink: 0;
    background: #f1f5f9;
  }
  .ask-preview-placeholder {
    width: 72px; height: 72px;
    border-radius: 14px;
    border: 2px dashed #e2e8f0;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    background: #f8fafc;
    color: #cbd5e1;
  }
  .ask-preview-meta { font-size: 12px; color: #94a3b8; line-height: 1.5; }
  .ask-preview-name { font-size: 12.5px; font-weight: 500; color: #475569; margin-bottom: 2px; }

  /* ── Status toggle ── */
  .ask-status-group {
    display: flex; gap: 8px;
  }
  .ask-status-btn {
    flex: 1;
    padding: 10px 0;
    border-radius: 10px;
    border: 1.5px solid #e2e8f0;
    background: #fafbfc;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px; font-weight: 500;
    color: #64748b;
    cursor: pointer;
    transition: all .18s;
    display: flex; align-items: center; justify-content: center; gap: 6px;
  }
  .ask-status-btn:hover { border-color: #c7d2fe; color: #6366f1; }
  .ask-status-btn.active-pending {
    background: #fef3c7; border-color: #fbbf24; color: #d97706;
  }
  .ask-status-btn.active-completed {
    background: #d1fae5; border-color: #34d399; color: #059669;
  }

  /* ── Divider ── */
  .ask-divider { border: none; border-top: 1px solid #f1f5f9; margin: 22px 0; }

  /* ── Submit ── */
  .ask-submit {
    width: 100%;
    padding: 13px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg, #6366f1, #818cf8);
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 15px; font-weight: 600;
    cursor: pointer;
    transition: opacity .18s, transform .15s;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    margin-top: 24px;
    box-shadow: 0 4px 16px rgba(99,102,241,.28);
  }
  .ask-submit:hover:not(:disabled) { opacity: .92; transform: translateY(-1px); }
  .ask-submit:disabled { opacity: .6; cursor: not-allowed; transform: none; }

  /* ── Info banner ── */
  .ask-info-banner {
    display: flex; align-items: flex-start; gap: 10px;
    background: #eef2ff; border: 1px solid #c7d2fe;
    border-radius: 10px; padding: 12px 14px;
    margin-bottom: 20px;
    font-size: 12.5px; color: #4338ca; line-height: 1.5;
  }
  .ask-info-banner svg { flex-shrink: 0; margin-top: 1px; }
`;

/* ── Icons ── */
const Icon = {
  skill: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.7"><circle cx="10" cy="7" r="4" /><path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" /></svg>,
  text: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="1" y1="3" x2="13" y2="3" /><line x1="1" y1="7" x2="10" y2="7" /><line x1="1" y1="11" x2="8" y2="11" /></svg>,
  image: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="2" width="12" height="10" rx="2" /><circle cx="4.5" cy="5.5" r="1" /><polyline points="1 10 4.5 6.5 7 9 9.5 7 13 10" /></svg>,
  status: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5" /><polyline points="4.5 7 6.5 9 9.5 5" /></svg>,
  arrow: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#fff" strokeWidth="2"><line x1="3" y1="7.5" x2="12" y2="7.5" /><polyline points="8.5 4 12 7.5 8.5 11" /></svg>,
  info: <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5" /><line x1="7" y1="5" x2="7" y2="5.01" /><line x1="7" y1="7" x2="7" y2="10" /></svg>,
  pending: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5" /><polyline points="7 4 7 7 9.5 9" /></svg>,
  completed: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5" /><polyline points="4.5 7 6.5 9 9.5 5" /></svg>,
  placeholder: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="4" width="24" height="20" rx="4" /><circle cx="9" cy="11" r="2" /><polyline points="2 20 9 13 13 17 18 12 26 20" /></svg>,
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
function Learnermentoraddskills() {
  const [skillName, setSkillName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbPreview, setThumbPreview] = useState(null);
  const [status, setStatus] = useState(1);   // 1 = Pending, 0 = Completed
  const [submitting, setSubmitting] = useState(false);

  const learnermentorId = localStorage.getItem("learnerMentorId");

  const nav = useNavigate();

  const handleThumb = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setThumbPreview(URL.createObjectURL(file));
    }
  };

  // const submit = async (e) => {
  //     e.preventDefault();
  //     try {
  //         setSubmitting(true);
  //         const formData = new FormData();
  //         formData.append("skillName", skillName);
  //         formData.append("thumbnail", thumbnail);
  //         formData.append("status", status);
  //         formData.append("learnermentorId", learnermentorId);



  //         const res = await addSkills(formData);
  //         if (res.data.success) {
  //             toast.success(res.data.message);
  //             nav("/learnermentor/manageskills");
  //         } else {
  //             toast.error(res.data.message);
  //         }
  //     } catch (err) {
  //         console.log(err);
  //     } finally {
  //         setSubmitting(false);
  //     }
  // };

  const submit = async (e) => {
    e.preventDefault();

    try {

      setSubmitting(true);

      const learnermentorId =
        localStorage.getItem("learnerMentorId");

      const formData = new FormData();

      formData.append("skillName", skillName);

      formData.append("thumbnail", thumbnail);

      formData.append("status", status);

      formData.append(
        "learnermentorId",
        learnermentorId
      );

      const res = await addSkills(formData);

      if (res.data.success) {

        toast.success(res.data.message);

        nav("/learnermentor/manageskills");

      } else {

        toast.error(res.data.message);
      }

    } catch (err) {

      console.log(err);

    } finally {

      setSubmitting(false);
    }
  };



  return (
    <div className="ask-root">
      <style>{styles}</style>
      <ToastContainer position="top-right" />

      {/* ── Hero ── */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Add Skills
          </h3>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Learner Mentor</a>
            </li>
            <li className="breadcrumb-item active text-primary">Add Skills</li>
          </ol>
        </div>
      </div>
      {/* ── Body ── */}
      <div className="ask-body">
        <div className="ask-card">

          {/* Card header */}
          <div className="ask-card-header">
            <div className="ask-card-icon">{Icon.skill}</div>
            <div>
              <h2>Skill Details</h2>
              <p>Fields marked <span style={{ color: '#f87171' }}>*</span> are required</p>
            </div>
          </div>

          <div className="ask-card-body">

            {/* <div className="ask-info-banner">
                            {Icon.info}
                            <span>Skills are categories that group related sessions together. Choose a clear, descriptive name and a recognisable thumbnail.</span>
                        </div> */}

            <form onSubmit={submit}>

              {/* Skill Name */}
              <div className="ask-field">
                <label className="ask-label">
                  {Icon.text} Skill Name <span className="ask-required">*</span>
                </label>
                <input
                  className="ask-input"
                  type="text"
                  placeholder="e.g. Web Development, Data Science…"
                  value={skillName}
                  onChange={e => setSkillName(e.target.value)}
                  required
                />
              </div>
                    
              <hr className="ask-divider" />

              {/* Thumbnail */}
              <div className="ask-field">
                <label className="ask-label">
                  {Icon.image} Thumbnail
                </label>
                <input
                  className="ask-input"
                  type="file"
                  accept="image/*"
                  onChange={handleThumb}
                />
                <div className="ask-preview-wrap">
                  {thumbPreview ? (
                    <img src={thumbPreview} alt="Preview" className="ask-preview-img" />
                  ) : (
                    <div className="ask-preview-placeholder">{Icon.placeholder}</div>
                  )}
                  <div>
                    {thumbnail
                      ? <div className="ask-preview-name">{thumbnail.name}</div>
                      : null}
                    <div className="ask-preview-meta">
                      Recommended: 400×400 px<br />
                      JPG or PNG · max 2 MB
                    </div>
                  </div>
                </div>
              </div>
 
              <hr className="ask-divider" />


              <button className="ask-submit" type="submit" disabled={submitting}>
                {submitting ? "Saving…" : <>{Icon.arrow} Add Skill</>}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learnermentoraddskills;