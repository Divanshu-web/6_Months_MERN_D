// // import React from 'react'

// function AdminContact() {
//   return (
//     <>
//   {/* Header Start */}
//   <div className="container-fluid bg-breadcrumb">
//     <div className="container text-center py-5" style={{ maxWidth: 900 }}>
//       <h3
//         className="text-white display-3 mb-4 wow fadeInDown"
//         data-wow-delay="0.1s"
//       >
//         Contact Us
//       </h3>
//       <ol
//         className="breadcrumb justify-content-center mb-0 wow fadeInDown"
//         data-wow-delay="0.3s"
//       >
//         <li className="breadcrumb-item">
//           <a href="index.html">Home</a>
//         </li>
//         <li className="breadcrumb-item">
//           <a href="#">Admin</a>
//         </li>
//         <li className="breadcrumb-item active text-primary">Contact</li>
//       </ol>
//     </div>
//   </div>
//   {/* Header End */}
//   {/* Contact Start */}
//   <div className="container-fluid contact py-5">
//     <div className="container py-5">
//       <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
//         <div className="sub-style mb-4">
//           <h4 className="sub-title text-white px-3 mb-0">Contact Us</h4>
//         </div>
//         <p className="mb-0 text-black-50">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
//           deleniti amet at atque sequi quibusdam cumque itaque repudiandae
//           temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
//           saepe in ab? Repellat!
//         </p>
//       </div>
//       <div className="row g-4 align-items-center">
//         <div
//           className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
//           data-wow-delay="0.1s"
//         >
//           <h2 className="display-5 text-white mb-2">Get in Touch</h2>
//           <p className="mb-4 text-white">
//             The contact form is currently inactive. Get a functional and working
//             contact form with Ajax &amp; PHP in a few minutes. Just copy and
//             paste the files, add a little code and you're done.{" "}
//             <a
//               className="text-dark fw-bold"
//               href="https://htmlcodex.com/contact-form"
//             >
//               Download Now
//             </a>
//             .
//           </p>
//           <form>
//             <div className="row g-3">
//               <div className="col-lg-12 col-xl-6">
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control bg-transparent border border-white"
//                     id="name"
//                     placeholder="Your Name"
//                   />
//                   <label htmlFor="name">Your Name</label>
//                 </div>
//               </div>
//               <div className="col-lg-12 col-xl-6">
//                 <div className="form-floating">
//                   <input
//                     type="email"
//                     className="form-control bg-transparent border border-white"
//                     id="email"
//                     placeholder="Your Email"
//                   />
//                   <label htmlFor="email">Your Email</label>
//                 </div>
//               </div>
//               <div className="col-lg-12 col-xl-6">
//                 <div className="form-floating">
//                   <input
//                     type="phone"
//                     className="form-control bg-transparent border border-white"
//                     id="phone"
//                     placeholder="Phone"
//                   />
//                   <label htmlFor="phone">Your Phone</label>
//                 </div>
//               </div>
//               <div className="col-lg-12 col-xl-6">
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control bg-transparent border border-white"
//                     id="project"
//                     placeholder="Project"
//                   />
//                   <label htmlFor="project">Your Project</label>
//                 </div>
//               </div>
//               <div className="col-12">
//                 <div className="form-floating">
//                   <input
//                     type="text"
//                     className="form-control bg-transparent border border-white"
//                     id="subject"
//                     placeholder="Subject"
//                   />
//                   <label htmlFor="subject">Subject</label>
//                 </div>
//               </div>
//               <div className="col-12">
//                 <div className="form-floating">
//                   <textarea
//                     className="form-control bg-transparent border border-white"
//                     placeholder="Leave a message here"
//                     id="message"
//                     style={{ height: 160 }}
//                     defaultValue={""}
//                   />
//                   <label htmlFor="message">Message</label>
//                 </div>
//               </div>
//               <div className="col-12">
//                 <button className="btn btn-light text-primary w-100 py-3">
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="col-lg-2 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
//           <div className="bg-transparent rounded">
//             <div className="d-flex flex-column align-items-center text-center mb-4">
//               <div
//                 className="bg-white d-flex align-items-center justify-content-center mb-3"
//                 style={{ width: 90, height: 90, borderRadius: 50 }}
//               >
//                 <i className="fa fa-map-marker-alt fa-2x text-primary" />
//               </div>
//               <h4 className="text-dark">Addresses</h4>
//               <p className="mb-0 text-white">
//                 123 ranking Street, New York, USA
//               </p>
//             </div>
//             <div className="d-flex flex-column align-items-center text-center mb-4">
//               <div
//                 className="bg-white d-flex align-items-center justify-content-center mb-3"
//                 style={{ width: 90, height: 90, borderRadius: 50 }}
//               >
//                 <i className="fa fa-phone-alt fa-2x text-primary" />
//               </div>
//               <h4 className="text-dark">Mobile</h4>
//               <p className="mb-0 text-white">+012 345 67890</p>
//               <p className="mb-0 text-white">+012 345 67890</p>
//             </div>
//             <div className="d-flex flex-column align-items-center text-center">
//               <div
//                 className="bg-white d-flex align-items-center justify-content-center mb-3"
//                 style={{ width: 90, height: 90, borderRadius: 50 }}
//               >
//                 <i className="fa fa-envelope-open fa-2x text-primary" />
//               </div>
//               <h4 className="text-dark">Email</h4>
//               <p className="mb-0 text-white">info@example.com</p>
//               <p className="mb-0 text-white">info@example.com</p>
//             </div>
//           </div>
//         </div>
//         <div
//           className="col-lg-5 col-xl-5 wow fadeInRight"
//           data-wow-delay="0.3s"
//         >
//           <div className="d-flex justify-content-center mb-4">
//             <a
//               className="btn btn-lg-square btn-light rounded-circle mx-2"
//               href=""
//             >
//               <i className="fab fa-facebook-f" />
//             </a>
//             <a
//               className="btn btn-lg-square btn-light rounded-circle mx-2"
//               href=""
//             >
//               <i className="fab fa-twitter" />
//             </a>
//             <a
//               className="btn btn-lg-square btn-light rounded-circle mx-2"
//               href=""
//             >
//               <i className="fab fa-instagram" />
//             </a>
//             <a
//               className="btn btn-lg-square btn-light rounded-circle mx-2"
//               href=""
//             >
//               <i className="fab fa-linkedin-in" />
//             </a>
//           </div>
//           <div className="rounded h-100">
//             <iframe
//               className="rounded w-100"
//               style={{ height: 500 }}
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Contact End */}
// </>

//   )
// }

// export default AdminContact


function Learnermentorcontact() {

/* ─────────────────────────────────────────────
   Styles
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  .ac-root {
    font-family: 'DM Sans', sans-serif;
    background: #f5f6fa;
    min-height: 100vh;
  }

  /* ── Hero ── */
  .ac-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2044 100%);
    padding: 52px 24px 44px;
    position: relative;
    overflow: hidden;
  }
  .ac-hero::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 65% 75% at 88% 50%, rgba(99,102,241,.18) 0%, transparent 70%),
      radial-gradient(ellipse 35% 45% at 6%  80%, rgba(16,185,129,.10) 0%, transparent 60%);
    pointer-events: none;
  }
  .ac-hero-inner {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  .ac-breadcrumb {
    display: flex; align-items: center; gap: 6px;
    font-size: 11.5px; color: rgba(255,255,255,.45);
    margin-bottom: 16px; letter-spacing: .05em; text-transform: uppercase;
  }
  .ac-breadcrumb a { color: rgba(255,255,255,.45); text-decoration: none; }
  .ac-breadcrumb a:hover { color: rgba(255,255,255,.75); }
  .ac-breadcrumb .sep { color: rgba(255,255,255,.22); }
  .ac-breadcrumb .active { color: #818cf8; }
  .ac-hero h1 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(1.7rem, 3.5vw, 2.4rem);
    font-weight: 700; color: #fff;
    margin: 0 0 6px; letter-spacing: -.02em;
  }
  .ac-hero p { color: rgba(255,255,255,.48); font-size: 13.5px; margin: 0; font-weight: 300; }

  /* ── Body ── */
  .ac-body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px 64px;
  }

  /* ── Card base ── */
  .ac-card {
    background: #fff;
    border-radius: 18px;
    border: 1.5px solid #e8eaf0;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(15,23,42,.05);
  }

  /* ── Form card ── */
  .ac-form-card { height: 100%; display: flex; flex-direction: column; }
  .ac-card-header {
    padding: 22px 28px 18px;
    border-bottom: 1px solid #f1f5f9;
    display: flex; align-items: center; gap: 14px;
  }
  .ac-card-icon {
    width: 44px; height: 44px; border-radius: 12px;
    background: linear-gradient(135deg, #6366f1, #818cf8);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .ac-card-header h2 {
    font-family: 'Sora', sans-serif;
    font-size: 17px; font-weight: 600;
    color: #0f172a; margin: 0 0 2px;
  }
  .ac-card-header p { font-size: 12.5px; color: #94a3b8; margin: 0; }
  .ac-card-body { padding: 26px 28px; flex: 1; }

  /* ── Form fields ── */
  .ac-field { display: flex; flex-direction: column; gap: 5px; }
  .ac-label {
    font-size: 12.5px; font-weight: 500; color: #475569;
    display: flex; align-items: center; gap: 6px;
  }
  .ac-label svg { color: #94a3b8; }
  .ac-required { color: #f87171; }
  .ac-input, .ac-textarea {
    width: 100%;
    padding: 10px 13px;
    border: 1.5px solid #e2e8f0; border-radius: 10px;
    font-size: 13.5px; font-family: 'DM Sans', sans-serif;
    background: #fafbfc; color: #1e293b;
    outline: none; transition: border-color .18s, box-shadow .18s;
    box-sizing: border-box;
  }
  .ac-input:focus, .ac-textarea:focus {
    border-color: #818cf8;
    box-shadow: 0 0 0 3px rgba(129,140,248,.12);
    background: #fff;
  }
  .ac-input::placeholder, .ac-textarea::placeholder { color: #cbd5e1; }
  .ac-textarea { resize: vertical; min-height: 130px; }

  /* ── Submit ── */
  .ac-submit {
    width: 100%;
    padding: 13px;
    border-radius: 12px; border: none;
    background: linear-gradient(135deg, #6366f1, #818cf8);
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 15px; font-weight: 600;
    cursor: pointer;
    transition: opacity .18s, transform .15s;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    box-shadow: 0 4px 16px rgba(99,102,241,.28);
  }
  .ac-submit:hover { opacity: .92; transform: translateY(-1px); }

  /* ── Info card ── */
  .ac-info-card {
    height: 100%;
    display: flex; flex-direction: column; gap: 0;
  }
  .ac-info-item {
    display: flex; align-items: flex-start; gap: 16px;
    padding: 22px 24px;
    border-bottom: 1px solid #f1f5f9;
    transition: background .15s;
  }
  .ac-info-item:last-child { border-bottom: none; }
  .ac-info-item:hover { background: #f8fafc; }
  .ac-info-icon {
    width: 46px; height: 46px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .ac-info-icon.purple { background: #eef2ff; color: #6366f1; }
  .ac-info-icon.green  { background: #d1fae5; color: #059669; }
  .ac-info-icon.blue   { background: #dbeafe; color: #2563eb; }
  .ac-info-text { flex: 1; min-width: 0; }
  .ac-info-label {
    font-family: 'Sora', sans-serif;
    font-size: 13px; font-weight: 600;
    color: #0f172a; margin: 0 0 4px;
  }
  .ac-info-value {
    font-size: 13px; color: #64748b; line-height: 1.6; margin: 0;
  }
  .ac-info-value a { color: #6366f1; text-decoration: none; }
  .ac-info-value a:hover { text-decoration: underline; }

  /* ── Social card ── */
  .ac-social-row {
    display: flex; gap: 8px; padding: 20px 24px;
    border-bottom: 1px solid #f1f5f9;
    flex-wrap: wrap;
  }
  .ac-social-btn {
    display: flex; align-items: center; gap: 6px;
    padding: 8px 14px;
    border-radius: 10px; border: 1.5px solid #e2e8f0;
    background: #fff; color: #475569;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 500;
    text-decoration: none; cursor: pointer;
    transition: all .18s;
  }
  .ac-social-btn:hover { border-color: #c7d2fe; color: #6366f1; background: #eef2ff; }
  .ac-social-btn.fb:hover  { border-color: #bfdbfe; color: #1d4ed8; background: #dbeafe; }
  .ac-social-btn.tw:hover  { border-color: #bae6fd; color: #0369a1; background: #e0f2fe; }
  .ac-social-btn.ig:hover  { border-color: #fbcfe8; color: #be185d; background: #fce7f3; }
  .ac-social-btn.li:hover  { border-color: #bfdbfe; color: #1d4ed8; background: #dbeafe; }

  /* ── Map wrapper ── */
  .ac-map-wrap {
    flex: 1;
    padding: 0;
    border-radius: 0 0 18px 18px;
    overflow: hidden;
    min-height: 280px;
  }
  .ac-map-wrap iframe {
    width: 100%; height: 100%; min-height: 280px;
    display: block; border: none;
  }

  /* ── Divider ── */
  .ac-divider { border: none; border-top: 1px solid #f1f5f9; margin: 20px 0; }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .ac-body { padding: 28px 16px 48px; }
    .ac-card-body { padding: 20px; }
    .ac-card-header { padding: 18px 20px 14px; }
  }
`;

/* ── Icons ── */
const Icon = {
  contact: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.7"><path d="M2 3h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><polyline points="1 4 10 11 19 4"/></svg>,
  user:    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="5" r="2.5"/><path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5"/></svg>,
  mail:    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="3" width="12" height="8" rx="1.5"/><polyline points="1 3 7 8 13 3"/></svg>,
  phone:   <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 2h3l1.5 3.5-2 1.2a8 8 0 0 0 3.8 3.8l1.2-2L13 10v3a1 1 0 0 1-1 1A11 11 0 0 1 1 3a1 1 0 0 1 1-1z"/></svg>,
  project: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="4" width="12" height="9" rx="1.5"/><path d="M4.5 4V3a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 9.5 3v1"/></svg>,
  subject: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="1" y1="3" x2="13" y2="3"/><line x1="1" y1="7" x2="10" y2="7"/><line x1="1" y1="11" x2="8" y2="11"/></svg>,
  message: <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M1 1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4l-3 3V2a1 1 0 0 1 1-1z"/></svg>,
  send:    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#fff" strokeWidth="2"><line x1="14" y1="1" x2="1" y2="8"/><line x1="14" y1="1" x2="9" y2="14"/><line x1="1" y1="8" x2="9" y2="14"/></svg>,
  pin:     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 1C6.24 1 4 3.24 4 6c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z"/><circle cx="9" cy="6" r="2"/></svg>,
  phoneL:  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2.5 2.5h3.5l2 4.5-2.5 1.5A10 10 0 0 0 10.5 13l1.5-2.5 4.5 2v3.5a1.5 1.5 0 0 1-1.5 1.5A15.5 15.5 0 0 1 1 4a1.5 1.5 0 0 1 1.5-1.5z"/></svg>,
  mailL:   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="1" y="4" width="16" height="10" rx="2"/><polyline points="1 4 9 10 17 4"/></svg>,
  fb:      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  tw:      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
  ig:      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  li:      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
};

  return (
    <div className="ac-root">
      <style>{styles}</style>

       {/* Header Start */}
   <div className="container-fluid bg-breadcrumb">
     <div className="container text-center py-5" style={{ maxWidth: 900 }}>
       <h3
         className="text-white display-3 mb-4 wow fadeInDown"
         data-wow-delay="0.1s"
       >
         Contact Us
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
         <li className="breadcrumb-item active text-primary">Contact</li>
       </ol>
     </div>
   </div>
   {/* Header End */}
 {/* <h1>Get in Touch</h1>
          <p>Reach out to us — we're happy to help with any query or project.</p> */}
      {/* ── Body ── */}
      <div className="ac-body">
        <div className="row g-4 align-items-stretch">

          {/* ── Left: Contact Form ── */}
          <div className="col-lg-6">
            <div className="ac-card ac-form-card">
              <div className="ac-card-header">
                <div className="ac-card-icon">{Icon.contact}</div>
                <div>
                  <h2>Send a Message</h2>
                  <p>We'll get back to you within 24 hours</p>
                </div>
              </div>
              <div className="ac-card-body">
                <form>
                  <div className="row g-3">

                    <div className="col-sm-6">
                      <div className="ac-field">
                        <label className="ac-label">{Icon.user} Your Name <span className="ac-required">*</span></label>
                        <input className="ac-input" type="text" placeholder="John Doe" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="ac-field">
                        <label className="ac-label">{Icon.mail} Email Address <span className="ac-required">*</span></label>
                        <input className="ac-input" type="email" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="ac-field">
                        <label className="ac-label">{Icon.phone} Phone Number</label>
                        <input className="ac-input" type="tel" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="ac-field">
                        <label className="ac-label">{Icon.project} Project</label>
                        <input className="ac-input" type="text" placeholder="Your project name" />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="ac-field">
                        <label className="ac-label">{Icon.subject} Subject <span className="ac-required">*</span></label>
                        <input className="ac-input" type="text" placeholder="How can we help?" />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="ac-field">
                        <label className="ac-label">{Icon.message} Message <span className="ac-required">*</span></label>
                        <textarea className="ac-textarea" placeholder="Tell us about your enquiry…" />
                      </div>
                    </div>

                    <div className="col-12" style={{ marginTop: 4 }}>
                      <button type="submit" className="ac-submit">
                        {Icon.send} Send Message
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* ── Right: Info + Map ── */}
          <div className="col-lg-6 d-flex flex-column gap-4">

            {/* Contact info card */}
            <div className="ac-card ac-info-card">

              {/* Social row */}
              <div className="ac-social-row">
                <a href="#" className="ac-social-btn fb">{Icon.fb} Facebook</a>
                <a href="#" className="ac-social-btn tw">{Icon.tw} Twitter</a>
                <a href="#" className="ac-social-btn ig">{Icon.ig} Instagram</a>
                <a href="#" className="ac-social-btn li">{Icon.li} LinkedIn</a>
              </div>

              {/* Address */}
              <div className="ac-info-item">
                <div className="ac-info-icon purple">{Icon.pin}</div>
                <div className="ac-info-text">
                  <div className="ac-info-label">Our Address</div>
                  <p className="ac-info-value">123 Ranking Street, New York, USA</p>
                </div>
              </div>

              {/* Phone */}
              <div className="ac-info-item">
                <div className="ac-info-icon green">{Icon.phoneL}</div>
                <div className="ac-info-text">
                  <div className="ac-info-label">Phone</div>
                  <p className="ac-info-value">
                    <a href="tel:+01234567890">+012 345 67890</a><br />
                    <a href="tel:+01234567890">+012 345 67890</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="ac-info-item">
                <div className="ac-info-icon blue">{Icon.mailL}</div>
                <div className="ac-info-text">
                  <div className="ac-info-label">Email</div>
                  <p className="ac-info-value">
                    <a href="mailto:info@example.com">info@example.com</a><br />
                    <a href="mailto:info@example.com">support@example.com</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Map card */}
            <div className="ac-card" style={{ overflow: 'hidden', borderRadius: 18, flex: 1, minHeight: 240 }}>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                style={{ width: '100%', height: '100%', minHeight: 240, display: 'block', border: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Learnermentorcontact;
