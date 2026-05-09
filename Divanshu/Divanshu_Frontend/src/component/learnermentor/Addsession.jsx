import { useEffect, useState } from "react";
import { addSession } from "../../services/sessionService";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { allSkills } from "../../services/skillService";
import Select from "react-select";

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */


/* ── Tiny icon helpers ── */
const Icon = {
  session:  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.7"><rect x="2" y="3" width="16" height="14" rx="3"/><line x1="2" y1="7" x2="18" y2="7"/><line x1="6" y1="11" x2="8" y2="11"/><line x1="6" y1="14" x2="10" y2="14"/></svg>,
  label:    (s) => <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">{s}</svg>,
  calendar: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="2" width="12" height="11" rx="2"/><line x1="1" y1="6" x2="13" y2="6"/><line x1="4" y1="1" x2="4" y2="3"/><line x1="10" y1="1" x2="10" y2="3"/></svg>,
  text:     <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="1" y1="3" x2="13" y2="3"/><line x1="1" y1="7" x2="10" y2="7"/><line x1="1" y1="11" x2="8" y2="11"/></svg>,
  clock:    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5"/><polyline points="7 4 7 7 9.5 9.5"/></svg>,
  dollar:   <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="7" y1="1" x2="7" y2="13"/><path d="M10 3.5H5.5A2 2 0 0 0 5.5 7.5h3A2 2 0 0 1 8.5 11.5H4"/></svg>,
  link:     <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5.5 8.5a3 3 0 0 0 4.24 0l1.5-1.5a3 3 0 0 0-4.24-4.24L6 3.76"/><path d="M8.5 5.5a3 3 0 0 0-4.24 0L2.76 7a3 3 0 0 0 4.24 4.24L8 10.24"/></svg>,
  youtube:  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="3" width="12" height="8" rx="2.5"/><polygon points="5.5 5 9.5 7 5.5 9" fill="currentColor" stroke="none"/></svg>,
  image:    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="2" width="12" height="10" rx="2"/><circle cx="4.5" cy="5.5" r="1"/><polyline points="1 10 4.5 6.5 7 9 9.5 7 13 10"/></svg>,
  skill:    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="5" r="3"/><path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5"/></svg>,
  arrow:    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#fff" strokeWidth="2"><line x1="3" y1="7.5" x2="12" y2="7.5"/><polyline points="8.5 4 12 7.5 8.5 11"/></svg>,
  free:     <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="7" r="5.5"/><polyline points="4.5 7 6.5 9 9.5 5"/></svg>,
  paid:     <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="7" y1="1" x2="7" y2="13"/><path d="M10 3.5H5.5A2 2 0 0 0 5.5 7.5h3A2 2 0 0 1 8.5 11.5H4"/></svg>,
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
function AddSession() {
  const [sessionName, setSessionName]   = useState("");
  const [date, setDate]                 = useState("");
  const [descryption, setDescryption]   = useState("");
  const [price, setPrice]               = useState(0);
  const [thumbnail, setThumbnail]       = useState(null);
  const [thumbPreview, setThumbPreview] = useState(null);
  const [duration, setDuration]         = useState("");
  const [sessionType, setSessionType]   = useState("1");
  const [meetingLink, setMeetingLink]   = useState("");
  const [youtubeLink, setYoutubeLink]   = useState("");
  const [isPaid, setIsPaid]             = useState(0);
  const [options, setOptions]           = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitting, setSubmitting]     = useState(false);

  const nav = useNavigate();

  const fetchSkills = async () => {
    try {
      const res = await allSkills();
      if (res.data.success) {
        setOptions(res.data.data.map(s => ({ value: s._id, label: s.skillName })));
      }
    } catch (err) { console.log(err); }
  };

  useEffect(() => { fetchSkills(); }, []);

  const handleThumb = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setThumbPreview(URL.createObjectURL(file));
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const id = localStorage.getItem("learnerMentorId");
      const formData = new FormData();
      formData.append("sessionName", sessionName);
      formData.append("date", date);
      formData.append("descryption", descryption);
      formData.append("price", price);
      formData.append("thumbnail", thumbnail);
      formData.append("duration", duration);
      formData.append("sessionType", sessionType);
      formData.append("meetingLink", meetingLink);
      formData.append("youtubeLink", youtubeLink);
      formData.append("isPaid", isPaid);
      formData.append("skillId", selectedOption?.value);
      formData.append("mentorId", id);

      const res = await addSession(formData);
      if (res.data.success) {
        toast.success(res.data.message);
        nav("/learnermentor/managesession");
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
    <div className="as-root">
      {/* <style>{styles}</style> */}
      <ToastContainer position="top-right" />

      {/* Header Start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h3
                        className="text-white display-3 mb-4 wow fadeInDown"
                        data-wow-delay="0.1s"
                    >
                        Add Session
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
                        <li className="breadcrumb-item active text-primary">Add Session</li>
                    </ol>
                </div>
            </div>
            {/* Header End */}
      {/* ── Body ── */}
      <div className="as-body">
        <div className="as-card">

          {/* Card header */}
          <div className="as-card-header">
            <div className="as-card-icon">{Icon.session}</div>
            <div>
              <h2>Session Details</h2>
              <p>All fields marked <span style={{color:'#f87171'}}>*</span> are required</p>
            </div>
          </div>

          <div className="as-card-body">
            <form onSubmit={submit}>

              {/* ── Section 1: Basic Info ── */}
              <div className="as-section">
                <div className="as-section-label">Basic Information</div>
                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="as-field">
                      <label className="as-label">{Icon.text} Session Name <span className="as-required">*</span></label>
                      <input
                        className="as-input"
                        type="text"
                        placeholder="e.g. Introduction to React"
                        value={sessionName}
                        onChange={e => setSessionName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="as-field">
                      <label className="as-label">{Icon.calendar} Date <span className="as-required">*</span></label>
                      <input
                        className="as-input"
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="as-field">
                      <label className="as-label">{Icon.text} Description</label>
                      <textarea
                        className="as-input"
                        rows={3}
                        placeholder="Brief overview of what this session covers…"
                        value={descryption}
                        onChange={e => setDescryption(e.target.value)}
                        style={{ resize: 'vertical', minHeight: 80 }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="as-field">
                      <label className="as-label">{Icon.clock} Duration (minutes) <span className="as-required">*</span></label>
                      <input
                        className="as-input"
                        type="number"
                        placeholder="e.g. 60"
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                        min={1}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="as-field">
                      <label className="as-label">{Icon.skill} Related Skill</label>
                      <Select
                        className="as-react-select"
                        classNamePrefix="react-select"
                        value={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="Select a skill…"
                        isClearable
                      />
                    </div>
                  </div>

                </div>
              </div>

              <hr className="as-divider" />

              {/* ── Section 2: Pricing ── */}
              <div className="as-section">
                <div className="as-section-label">Pricing &amp; Type</div>
                <div className="row g-3">

                  <div className="col-12">
                    <div className="as-field">
                      <label className="as-label">Session Type <span className="as-required">*</span></label>
                      <div className="as-toggle-group">
                        <button
                          type="button"
                          className={`as-toggle-btn ${!isPaid  ? "active-free" : ""}`}
                          onClick={() => { setIsPaid(0); }}
                        >
                          {Icon.free} Free
                        </button>
                        <button
                          type="button"
                          className={`as-toggle-btn ${isPaid ? "active-paid" : ""}`}
                          onClick={() => { setIsPaid(1); }}
                        >
                          {Icon.paid} Paid
                        </button>
                      </div>
                    </div>
                  </div>

                  {isPaid == 1 && (
                    <div className="col-md-6">
                      <div className="as-field">
                        <label className="as-label">{Icon.dollar} Price (₹) <span className="as-required">*</span></label>
                        <input
                          className="as-input"
                          type="number"
                          placeholder="e.g. 499"
                          value={price}
                          onChange={e => setPrice(e.target.value)}
                          min={0}
                          required
                        />
                      </div>
                    </div>
                  )}

                </div>
              </div>

              <hr className="as-divider" />

              {/* ── Section 3: Links ── */}
              <div className="as-section">
                <div className="as-section-label">Session Links</div>
                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="as-field">
                      <label className="as-label">{Icon.link} Meeting Link</label>
                      <input
                        className="as-input"
                        type="url"
                        placeholder="https://meet.google.com/…"
                        value={meetingLink}
                        onChange={e => setMeetingLink(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="as-field">
                      <label className="as-label">{Icon.youtube} YouTube Link</label>
                      <input
                        className="as-input"
                        type="url"
                        placeholder="https://youtube.com/watch?v=…"
                        value={youtubeLink}
                        onChange={e => setYoutubeLink(e.target.value)}
                      />
                    </div>
                  </div>

                </div>
              </div>

              <hr className="as-divider" />

              {/* ── Section 4: Thumbnail ── */}
              <div className="as-section">
                <div className="as-section-label">Thumbnail</div>
                <div className="as-field">
                  <label className="as-label">{Icon.image} Upload Image</label>
                  <div className="as-thumb-row">
                    {thumbPreview && (
                      <img src={thumbPreview} alt="Preview" className="as-thumb-preview" />
                    )}
                    <div style={{ flex: 1 }}>
                      <input
                        className="as-input"
                        type="file"
                        accept="image/*"
                        onChange={handleThumb}
                      />
                      <div className="as-helper">Recommended: 400×400px, JPG or PNG, max 2 MB</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Submit ── */}
              <button className="as-submit" type="submit" disabled={submitting}>
                {submitting ? "Publishing…" : <>{Icon.arrow} Publish Session</>}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddSession;
