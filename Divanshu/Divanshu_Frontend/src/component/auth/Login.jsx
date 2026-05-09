// // // import React from 'react'

// // import { useState } from "react"
// // import { useNavigate } from "react-router-dom"
// // import { toast, ToastContainer } from "react-toastify"
// // import { login } from "../../services/userService";
// // import { RingLoader } from "react-spinners";

// // // const override = {
// // //     display: "block",
// // //     margin: "0 auto",
// // //     borderColor: "red",
// // // };

// // function Login() {

// //     let [color, setColor] = useState("#2BC5D4");
// //     let [loading, setLoading] = useState(false);

// //     const [email, setEmail] = useState("")
// //     const [password, setPassword] = useState("")

// //     const getEmail = (e) => {
// //         setEmail(e.target.value)
// //     }

// //     const getPassword = (e) => {
// //         setPassword(e.target.value)
// //     }

// //     const nav = useNavigate()

// //     // function handleForm(e) {
// //     //     e.preventDefault()
// //     //     if (email == "" || password == "") {
// //     //         console.log("All fields are required!")
// //     //         toast.error("All fields are required!")
// //     //     }
// //     //     else if (email == "admin@gmail.com" && password == "123") {
// //     //         console.log("Login Successfully")
// //     //         toast.success("Login Successfully")

// //     //         sessionStorage.setItem("email", email)

// //     //         setTimeout(() => {
// //     //             nav("/admin/home")
// //     //         }, 2000);
// //     //     }
// //     //     else {
// //     //         console.log("Invalid Credentials")
// //     //         toast.warning("Invalid Credentials")
// //     //     }
// //     // }

// //     const submit = async (e) => {
// //         e.preventDefault()
// //         setLoading(true)
// //         try {
// //             let payload = {
// //                 email: email,
// //                 password: password
// //             }


// //             // let res = await login(formData);

// //             login(payload).then((res) => {

// //             if (res.data.success) {
// //                 setLoading(false)
// //                 toast.success(res.data.message)
// //                 console.log("User data: ", res.data.data);
                
// //                 localStorage.setItem("userType", res.data.data.userType)
// //                 localStorage.setItem("token", res.data.token)
// //                 localStorage.setItem("_id", res.data.data._id)
// //                 localStorage.setItem("isLoggedIn", true)
// //                 localStorage.setItem("email", res.data.data.email)
// //                 localStorage.setItem("user", JSON.stringify(res.data?.data))

// //                 if(res.data.data.userType == 1){
// //                     nav('/admin/home')
// //                 }else if(res.data.data.userType == 2){
// //                     localStorage.setItem("learnerMentorId", res.data.learnerMentorId)
// //                     nav('/learnermentor/dashboard')

// //                 }else{
// //                     toast.error("Invalid UserType")
// //                 }
// //             } else {
// //                  setLoading(false);
// //                 toast.error(res.data.message)
// //             }
// //         })
// //         }
// //          catch (err) {
           
// //             console.log(err);
// //             toast.error(err)
// //         } 
    
// //     }

// //     return (

// //         <>


// //             {loading && (
// //                  <div className="d-flex justify-content-center pt-3 align-item-center"
// //                  style={{
// //                     position:"fixed",
// //                     display:"flex",
// //                     justifyContent:"center",
// //                     alignItems:"center",
// //                     backgroundColor:"rgba(0,0,0,0.5)",
// //                     height:"100%",
// //                     width:"100%",
// //                     zIndex:"9999",
// //                     top: 0,
// //                     left: 0,
// //                  }}>
// //                     <RingLoader
// //                         color={color}
// //                         // loading={loading}
// //                         // cssOverride={override}
// //                         size={100}
// //                     />
// //                     </div>
// //             )}
              
          

// //             {/* Header Start */}
// //             <div className="container-fluid bg-breadcrumb">
// //                 <div className="container text-center py-5" style={{ maxWidth: 900 }}>
// //                     <h3
// //                         className="text-white display-3 mb-4 wow fadeInDown"
// //                         data-wow-delay="0.1s"
// //                     >
// //                         Login
// //                     </h3>
// //                     <ol
// //                         className="breadcrumb justify-content-center mb-0 wow fadeInDown"
// //                         data-wow-delay="0.3s"
// //                     >
// //                         <li className="breadcrumb-item">
// //                             <a href="index.html">Home</a>
// //                         </li>
// //                         <li className="breadcrumb-item">
// //                             <a href="#">Pages</a>
// //                         </li>
// //                         <li className="breadcrumb-item active text-primary">Login</li>
// //                     </ol>
// //                 </div>
// //             </div>
// //             {/* Header End */}
// //             <ToastContainer></ToastContainer>
        

// //             {/* Contact Start */}
// //             <div className="container-fluid contact py-5">
// //                 <div className="container py-5">
// //                     <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
// //                         <div className="sub-style mb-4">
// //                             <h4 className="sub-title text-white px-3 mb-0">Login Here</h4>
// //                         </div>

// //                     </div>
// //                     <div className="row g-4 align-items-center d-flex justify-content-center">
// //                         <div
// //                             className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
// //                             data-wow-delay="0.1s"
// //                         >
// //                             <h2 className="display-5 text-white mb-2 text-center ">Login</h2>

// //                             <form onSubmit={submit}>
// //                                 <div className="row g-3">

// //                                     <div className="col-12">
// //                                         <div className="form-floating">
// //                                             <input
// //                                                 type="email"
// //                                                 className="form-control bg-transparent border border-white"
// //                                                 id="email"
// //                                                 placeholder="Your Email"
// //                                                 value={email}
// //                                                 // onInput={(e) => {
// //                                                 //     setEmail(e.target.value)
// //                                                 // }
// //                                                 // }
// //                                                 onChange={getEmail}
// //                                             />
// //                                             <label htmlFor="email" className="text-dark">Your Email</label>
// //                                         </div>
// //                                     </div>

// //                                     <div className="col-12">
// //                                         <div className="form-floating">
// //                                             <input
// //                                                 type="password"
// //                                                 className="form-control bg-transparent border border-white"
// //                                                 id="password"
// //                                                 placeholder="Password"
// //                                                 value={password}
// //                                                 // onInput={(e) => {
// //                                                 //     setPassword(e.target.value)
// //                                                 // }}
// //                                                 onChange={getPassword}
// //                                             />
// //                                             <label htmlFor="password" className="text-dark">Password</label>
// //                                         </div>
// //                                     </div>

// //                                     <div className="col-12">
// //                                         <button className="btn btn-light text-primary w-100 py-3" type="submit">
// //                                             Login
// //                                         </button>
// //                                     </div>
// //                                 </div>
// //                             </form>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             {/* Contact End */}
// //         </>

// //     )



    
// // }

// // export default Login


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import { login } from "../../services/userService";
// import { RingLoader } from "react-spinners";

// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

//   *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//   .zl-root {
//     font-family: 'Inter', sans-serif;
//     min-height: 100vh;
//     background: #eef2f7;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 24px 16px;
//   }

//   /* ── Loading overlay ── */
//   .zl-overlay {
//     position: fixed; inset: 0; z-index: 9999;
//     background: rgba(15, 23, 42, 0.55);
//     backdrop-filter: blur(6px);
//     display: flex; flex-direction: column;
//     align-items: center; justify-content: center; gap: 16px;
//   }
//   .zl-overlay-text {
//     font-size: 13px; font-weight: 500;
//     color: rgba(255,255,255,0.65);
//     letter-spacing: 0.06em; text-transform: uppercase;
//   }

//   /* ── Outer card wrapper ── */
//   .zl-card {
//     width: 100%;
//     max-width: 1020px;
//     min-height: 560px;
//     background: #fff;
//     border-radius: 24px;
//     box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06);
//     display: flex;
//     overflow: hidden;
//   }

//   /* ══════════════════════════
//      LEFT — Blue panel
//   ══════════════════════════ */
//   .zl-left {
//     width: 42%;
//     flex-shrink: 0;
//     background: #2563eb;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     padding: 36px 40px 44px;
//     overflow: hidden;
//   }

//   /* Dot grid pattern */
//   .zl-left::before {
//     content: '';
//     position: absolute; inset: 0;
//     background-image: radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px);
//     background-size: 28px 28px;
//     pointer-events: none;
//   }

//   /* Subtle inner glow */
//   .zl-left::after {
//     content: '';
//     position: absolute; inset: 0;
//     background: radial-gradient(ellipse 80% 60% at 110% 110%, rgba(37,99,235,0) 0%, rgba(29,78,216,0.6) 100%);
//     pointer-events: none;
//   }

//   /* Logo row */
//   .zl-logo {
//     display: flex;
//     align-items: center;
//     gap: 12px;
//     position: relative; z-index: 1;
//   }
//   .zl-logo-icon {
//     width: 46px; height: 46px;
//     background: rgba(255,255,255,0.18);
//     border-radius: 12px;
//     display: flex; align-items: center; justify-content: center;
//     backdrop-filter: blur(4px);
//     border: 1px solid rgba(255,255,255,0.25);
//     flex-shrink: 0;
//   }
//   .zl-logo-name {
//     font-size: 22px;
//     font-weight: 800;
//     color: #fff;
//     letter-spacing: -0.03em;
//   }

//   /* Bottom text */
//   .zl-left-bottom { position: relative; z-index: 1; }
//   .zl-headline {
//     font-size: clamp(1.7rem, 2.8vw, 2.2rem);
//     font-weight: 800;
//     color: #fff;
//     line-height: 1.18;
//     letter-spacing: -0.03em;
//     margin-bottom: 16px;
//   }
//   .zl-subtext {
//     font-size: 15px;
//     color: rgba(255,255,255,0.72);
//     line-height: 1.65;
//     font-weight: 400;
//     max-width: 280px;
//   }

//   /* ══════════════════════════
//      RIGHT — Form panel
//   ══════════════════════════ */
//   .zl-right {
//     flex: 1;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 48px 52px;
//     background: #fff;
//   }
//   .zl-form-inner { width: 100%; max-width: 380px; }

//   /* Heading */
//   .zl-welcome {
//     font-size: clamp(1.6rem, 2.5vw, 2rem);
//     font-weight: 800;
//     color: #0f172a;
//     letter-spacing: -0.03em;
//     margin-bottom: 6px;
//     display: flex; align-items: center; gap: 8px;
//   }
//   .zl-sub {
//     font-size: 14.5px;
//     color: #64748b;
//     margin-bottom: 36px;
//     font-weight: 400;
//   }

//   /* Field */
//   .zl-field { margin-bottom: 20px; }
//   .zl-field-top {
//     display: flex; align-items: center; justify-content: space-between;
//     margin-bottom: 8px;
//   }
//   .zl-label {
//     font-size: 13px;
//     font-weight: 600;
//     color: #1e293b;
//   }
//   .zl-forgot {
//     font-size: 13px;
//     font-weight: 600;
//     color: #2563eb;
//     text-decoration: none;
//     transition: color 0.15s;
//   }
//   .zl-forgot:hover { color: #1d4ed8; text-decoration: underline; }

//   /* Input */
//   .zl-input-wrap { position: relative; }
//   .zl-input {
//     width: 100%;
//     padding: 14px 16px 14px 46px;
//     background: #f1f5f9;
//     border: 1.5px solid transparent;
//     border-radius: 12px;
//     font-family: 'Inter', sans-serif;
//     font-size: 14.5px;
//     color: #0f172a;
//     outline: none;
//     transition: all 0.2s;
//   }
//   .zl-input::placeholder { color: #94a3b8; }
//   .zl-input:focus {
//     background: #fff;
//     border-color: #2563eb;
//     box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
//   }
//   .zl-input.has-right { padding-right: 46px; }
//   .zl-icon-l {
//     position: absolute; left: 15px; top: 50%;
//     transform: translateY(-50%);
//     color: #94a3b8; display: flex; pointer-events: none;
//     transition: color 0.2s;
//   }
//   .zl-input:focus ~ .zl-icon-l { color: #2563eb; }
//   .zl-icon-r {
//     position: absolute; right: 15px; top: 50%;
//     transform: translateY(-50%);
//     color: #94a3b8; cursor: pointer; display: flex;
//     transition: color 0.15s;
//   }
//   .zl-icon-r:hover { color: #2563eb; }

//   /* Submit button — matches screenshot exactly */
//   .zl-submit {
//     width: 100%;
//     padding: 15px 24px;
//     border-radius: 12px;
//     border: none;
//     background: #2563eb;
//     color: #fff;
//     font-family: 'Inter', sans-serif;
//     font-size: 16px;
//     font-weight: 700;
//     cursor: pointer;
//     transition: all 0.2s;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 10px;
//     margin-top: 28px;
//     letter-spacing: -0.01em;
//     box-shadow: 0 4px 16px rgba(37,99,235,0.35);
//   }
//   .zl-submit:hover:not(:disabled) {
//     background: #1d4ed8;
//     transform: translateY(-1px);
//     box-shadow: 0 8px 24px rgba(37,99,235,0.40);
//   }
//   .zl-submit:active:not(:disabled) { transform: translateY(0); }
//   .zl-submit:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }
//   .zl-submit-arrow { display: flex; transition: transform 0.2s; }
//   .zl-submit:hover:not(:disabled) .zl-submit-arrow { transform: translateX(4px); }

//   /* Divider */
//   .zl-divider {
//     display: flex; align-items: center; gap: 12px;
//     margin: 24px 0; font-size: 12.5px; color: #94a3b8;
//   }
//   .zl-divider::before, .zl-divider::after {
//     content: ''; flex: 1; height: 1px; background: #e2e8f0;
//   }

//   /* Social */
//   .zl-social { display: flex; gap: 10px; }
//   .zl-social-btn {
//     flex: 1; padding: 11px 0;
//     background: #f8fafc;
//     border: 1.5px solid #e2e8f0;
//     border-radius: 11px;
//     display: flex; align-items: center; justify-content: center; gap: 7px;
//     font-family: 'Inter', sans-serif; font-size: 13.5px; font-weight: 500;
//     color: #475569; cursor: pointer; text-decoration: none;
//     transition: all 0.18s;
//   }
//   .zl-social-btn:hover {
//     border-color: #93c5fd; color: #2563eb; background: #eff6ff;
//     transform: translateY(-1px);
//   }

//   /* Sign up */
//   .zl-signup {
//     text-align: center; margin-top: 24px;
//     font-size: 13.5px; color: #64748b;
//   }
//   .zl-signup a { color: #2563eb; font-weight: 600; text-decoration: none; }
//   .zl-signup a:hover { text-decoration: underline; }

//   /* ── Responsive ── */
//   @media (max-width: 820px) {
//     .zl-card { flex-direction: column; max-width: 480px; border-radius: 20px; }
//     .zl-left { width: 100%; min-height: 220px; padding: 28px 32px; }
//     .zl-left-bottom .zl-headline { font-size: 1.5rem; }
//     .zl-right { padding: 36px 32px; }
//   }
//   @media (max-width: 480px) {
//     .zl-root { padding: 16px; }
//     .zl-left { padding: 24px; }
//     .zl-right { padding: 28px 20px; }
//     .zl-card { border-radius: 16px; }
//   }
// `;

// /* ── Icons ── */
// const Ic = {
//   logo: (
//     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//     </svg>
//   ),
//   mail: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="2" y="4" width="20" height="16" rx="2"/>
//       <polyline points="2,4 12,13 22,4"/>
//     </svg>
//   ),
//   lock: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="3" y="11" width="18" height="11" rx="2"/>
//       <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//     </svg>
//   ),
//   eye: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//       <circle cx="12" cy="12" r="3"/>
//     </svg>
//   ),
//   eyeOff: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
//       <line x1="1" y1="1" x2="23" y2="23"/>
//     </svg>
//   ),
//   arrowRight: (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//       <line x1="5" y1="12" x2="19" y2="12"/>
//       <polyline points="12 5 19 12 12 19"/>
//     </svg>
//   ),
//   google: (
//     <svg width="16" height="16" viewBox="0 0 24 24">
//       <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//       <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//       <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//       <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//     </svg>
//   ),
//   github: (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="#1e293b">
//       <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
//     </svg>
//   ),
// };

// function Login() {
//   const [email, setEmail]       = useState("");
//   const [password, setPassword] = useState("");
//   const [showPass, setShowPass] = useState(false);
//   const [loading, setLoading]   = useState(false);
//   const nav = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       login({ email, password }).then((res) => {
//         if (res.data.success) {
//           setLoading(false);
//           toast.success(res.data.message);
//           localStorage.setItem("userType",   res.data.data.userType);
//           localStorage.setItem("token",      res.data.token);
//           localStorage.setItem("_id",        res.data.data._id);
//           localStorage.setItem("isLoggedIn", true);
//           localStorage.setItem("email",      res.data.data.email);
//           localStorage.setItem("user",       JSON.stringify(res.data?.data));
//           if (res.data.data.userType == 1) nav("/admin/home");
//           else if (res.data.data.userType == 2) {
//             localStorage.setItem("learnerMentorId", res.data.learnerMentorId);
//             nav("/learnermentor/dashboard");
//           } else toast.error("Invalid UserType");
//         } else {
//           setLoading(false);
//           toast.error(res.data.message);
//         }
//       });
//     } catch (err) {
//       console.log(err);
//       toast.error("Something went wrong. Please try again.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="zl-root">
//       <style>{styles}</style>
//       <ToastContainer position="top-right" />

//       {/* Loading overlay */}
//       {loading && (
//         <div className="zl-overlay">
//           <RingLoader color="#2563eb" size={60} />
//           <span className="zl-overlay-text">Signing you in…</span>
//         </div>
//       )}

//       {/* ── Main card ── */}
//       <div className="zl-card">

//         {/* LEFT — Blue branding */}
//         <div className="zl-left">
//           {/* Logo */}
//           <div className="zl-logo">
//             <div className="zl-logo-icon">{Ic.logo}</div>
//             <span className="zl-logo-name">LearnerMentor</span>
//           </div>

//           {/* Bottom content */}
//           <div className="zl-left-bottom">
//             <h2 className="zl-headline">
//               Empowering<br />
//               Your Learning<br />
//               Journey
//             </h2>
//             <p className="zl-subtext">
//               Connect with expert mentors, attend live sessions, and grow your skills in one powerful ecosystem.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT — Form */}
//         <div className="zl-right">
//           <div className="zl-form-inner">

//             <h1 className="zl-welcome">Welcome Back 👋</h1>
//             <p className="zl-sub">Login to continue your journey.</p>

//             <form onSubmit={submit}>

//               {/* Email */}
//               <div className="zl-field">
//                 <div className="zl-field-top">
//                   <label className="zl-label">Email Address</label>
//                 </div>
//                 <div className="zl-input-wrap">
//                   <span className="zl-icon-l">{Ic.mail}</span>
//                   <input
//                     className="zl-input"
//                     type="email"
//                     placeholder="you@example.com"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                     required
//                     autoComplete="email"
//                   />
//                 </div>
//               </div>

//               {/* Password */}
//               <div className="zl-field">
//                 <div className="zl-field-top">
//                   <label className="zl-label">Password</label>
//                   <a href="#" className="zl-forgot">Forgot Password?</a>
//                 </div>
//                 <div className="zl-input-wrap">
//                   <span className="zl-icon-l">{Ic.lock}</span>
//                   <input
//                     className="zl-input has-right"
//                     type={showPass ? "text" : "password"}
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                     required
//                     autoComplete="current-password"
//                   />
//                   <span className="zl-icon-r" onClick={() => setShowPass(p => !p)}>
//                     {showPass ? Ic.eyeOff : Ic.eye}
//                   </span>
//                 </div>
//               </div>

//               {/* Submit */}
//               <button className="zl-submit" type="submit" disabled={loading}>
//                 <span>{loading ? "Signing in…" : "Login"}</span>
//                 {!loading && <span className="zl-submit-arrow">{Ic.arrowRight}</span>}
//               </button>

//             </form>

//             {/* Divider */}
//             <div className="zl-divider">or continue with</div>

//             {/* Social */}
//             <div className="zl-social">
//               <a href="#" className="zl-social-btn">{Ic.google} Google</a>
//               <a href="#" className="zl-social-btn">{Ic.github} GitHub</a>
//             </div>

//             {/* Sign up */}
//             <div className="zl-signup">
//               Don't have an account? <a href="/register">Sign up free →</a>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../../services/userService";
import { RingLoader } from "react-spinners";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .zl-root {
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    background: #eef2f7;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 16px;
  }

  /* ── Loading overlay ── */
  .zl-overlay {
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(15, 23, 42, 0.55);
    backdrop-filter: blur(6px);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 16px;
  }
  .zl-overlay-text {
    font-size: 13px; font-weight: 500;
    color: rgba(255,255,255,0.65);
    letter-spacing: 0.06em; text-transform: uppercase;
  }

  /* ── Outer card wrapper ── */
  .zl-card {
    width: 100%;
    max-width: 1020px;
    min-height: 560px;
    background: #fff;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06);
    display: flex;
    overflow: hidden;
  }

  /* ══════════════════════════
     LEFT — Blue panel
  ══════════════════════════ */
  .zl-left {
    width: 42%;
    flex-shrink: 0;
    background: #2563eb;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 36px 40px 44px;
    overflow: hidden;
  }

  /* Dot grid pattern */
  .zl-left::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px);
    background-size: 28px 28px;
    pointer-events: none;
  }

  /* Subtle inner glow */
  .zl-left::after {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 60% at 110% 110%, rgba(37,99,235,0) 0%, rgba(29,78,216,0.6) 100%);
    pointer-events: none;
  }

  /* Logo row */
  .zl-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative; z-index: 1;
  }
  .zl-logo-icon {
    width: 46px; height: 46px;
    background: rgba(255,255,255,0.18);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255,255,255,0.25);
    flex-shrink: 0;
  }
  .zl-logo-name {
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.03em;
  }

  /* Bottom text */
  .zl-left-bottom { position: relative; z-index: 1; }
  .zl-headline {
    font-size: clamp(1.7rem, 2.8vw, 2.2rem);
    font-weight: 800;
    color: #fff;
    line-height: 1.18;
    letter-spacing: -0.03em;
    margin-bottom: 16px;
  }
  .zl-subtext {
    font-size: 15px;
    color: rgba(255,255,255,0.72);
    line-height: 1.65;
    font-weight: 400;
    max-width: 280px;
  }

  /* ══════════════════════════
     RIGHT — Form panel
  ══════════════════════════ */
  .zl-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px 52px;
    background: #fff;
  }
  .zl-form-inner { width: 100%; max-width: 380px; }

  /* Heading */
  .zl-welcome {
    font-size: clamp(1.6rem, 2.5vw, 2rem);
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.03em;
    margin-bottom: 6px;
    display: flex; align-items: center; gap: 8px;
  }
  .zl-sub {
    font-size: 14.5px;
    color: #64748b;
    margin-bottom: 36px;
    font-weight: 400;
  }

  /* Field */
  .zl-field { margin-bottom: 20px; }
  .zl-field-top {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 8px;
  }
  .zl-label {
    font-size: 13px;
    font-weight: 600;
    color: #1e293b;
  }
  .zl-forgot {
    font-size: 13px;
    font-weight: 600;
    color: #2563eb;
    text-decoration: none;
    transition: color 0.15s;
  }
  .zl-forgot:hover { color: #1d4ed8; text-decoration: underline; }

  /* Input */
  .zl-input-wrap { position: relative; }
  .zl-input {
    width: 100%;
    padding: 14px 16px 14px 46px;
    background: #f1f5f9;
    border: 1.5px solid transparent;
    border-radius: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 14.5px;
    color: #0f172a;
    outline: none;
    transition: all 0.2s;
  }
  .zl-input::placeholder { color: #94a3b8; }
  .zl-input:focus {
    background: #fff;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
  }
  .zl-input.has-right { padding-right: 46px; }
  .zl-icon-l {
    position: absolute; left: 15px; top: 50%;
    transform: translateY(-50%);
    color: #94a3b8; display: flex; pointer-events: none;
    transition: color 0.2s;
  }
  .zl-input:focus ~ .zl-icon-l { color: #2563eb; }
  .zl-icon-r {
    position: absolute; right: 15px; top: 50%;
    transform: translateY(-50%);
    color: #94a3b8; cursor: pointer; display: flex;
    transition: color 0.15s;
  }
  .zl-icon-r:hover { color: #2563eb; }

  /* Submit button — matches screenshot exactly */
  .zl-submit {
    width: 100%;
    padding: 15px 24px;
    border-radius: 12px;
    border: none;
    background: #2563eb;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 28px;
    letter-spacing: -0.01em;
    box-shadow: 0 4px 16px rgba(37,99,235,0.35);
  }
  .zl-submit:hover:not(:disabled) {
    background: #1d4ed8;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(37,99,235,0.40);
  }
  .zl-submit:active:not(:disabled) { transform: translateY(0); }
  .zl-submit:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }
  .zl-submit-arrow { display: flex; transition: transform 0.2s; }
  .zl-submit:hover:not(:disabled) .zl-submit-arrow { transform: translateX(4px); }

  /* Divider */
  .zl-divider {
    display: flex; align-items: center; gap: 12px;
    margin: 24px 0; font-size: 12.5px; color: #94a3b8;
  }
  .zl-divider::before, .zl-divider::after {
    content: ''; flex: 1; height: 1px; background: #e2e8f0;
  }

  /* Social */
  .zl-social { display: flex; gap: 10px; }
  .zl-social-btn {
    flex: 1; padding: 11px 0;
    background: #f8fafc;
    border: 1.5px solid #e2e8f0;
    border-radius: 11px;
    display: flex; align-items: center; justify-content: center; gap: 7px;
    font-family: 'Inter', sans-serif; font-size: 13.5px; font-weight: 500;
    color: #475569; cursor: pointer; text-decoration: none;
    transition: all 0.18s;
  }
  .zl-social-btn:hover {
    border-color: #93c5fd; color: #2563eb; background: #eff6ff;
    transform: translateY(-1px);
  }

  /* Sign up */
  .zl-signup {
    text-align: center; margin-top: 24px;
    font-size: 13.5px; color: #64748b;
  }
  .zl-signup a { color: #2563eb; font-weight: 600; text-decoration: none; }
  .zl-signup a:hover { text-decoration: underline; }

  /* ── Responsive ── */
  @media (max-width: 820px) {
    .zl-card { flex-direction: column; max-width: 480px; border-radius: 20px; }
    .zl-left { width: 100%; min-height: 220px; padding: 28px 32px; }
    .zl-left-bottom .zl-headline { font-size: 1.5rem; }
    .zl-right { padding: 36px 32px; }
  }
  @media (max-width: 480px) {
    .zl-root { padding: 16px; }
    .zl-left { padding: 24px; }
    .zl-right { padding: 28px 20px; }
    .zl-card { border-radius: 16px; }
  }
`;

/* ── Icons ── */
const Ic = {
  logo: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  mail: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <polyline points="2,4 12,13 22,4"/>
    </svg>
  ),
  lock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  eye: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  eyeOff: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ),
  arrowRight: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  google: (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1e293b">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
};

function Login() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      login({ email, password }).then((res) => {
        if (res.data.success) {
          setLoading(false);
          toast.success(res.data.message);
          localStorage.setItem("userType",   res.data.data.userType);
          localStorage.setItem("token",      res.data.token);
          localStorage.setItem("_id",        res.data.data._id);
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("email",      res.data.data.email);
          localStorage.setItem("user",       JSON.stringify(res.data?.data));
          if (res.data.data.userType == 1) nav("/admin/home");
          else if (res.data.data.userType == 2) {
            localStorage.setItem("learnerMentorId", res.data.learnerMentorId);
            nav("/learnermentor/dashboard");
          } else toast.error("Invalid UserType");
        } else {
          setLoading(false);
          toast.error(res.data.message);
        }
      });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="zl-root">
      <style>{styles}</style>
      <ToastContainer position="top-right" />

      {/* Loading overlay */}
      {loading && (
        <div className="zl-overlay">
          <RingLoader color="#2563eb" size={60} />
          <span className="zl-overlay-text">Signing you in…</span>
        </div>
      )}

      {/* ── Main card ── */}
      <div className="zl-card">

        {/* LEFT — Blue branding */}
        <div className="zl-left">
          {/* Logo */}
          <div className="zl-logo">
            <div className="zl-logo-icon">{Ic.logo}</div>
            <span className="zl-logo-name">LearnerMentor</span>
          </div>

          {/* Bottom content */}
          <div className="zl-left-bottom">
            <h2 className="zl-headline">
              Empowering<br />
              Your Learning<br />
              Journey
            </h2>
            <p className="zl-subtext">
              Connect with expert mentors, attend live sessions, and grow your skills in one powerful ecosystem.
            </p>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="zl-right">
          <div className="zl-form-inner">

            <h1 className="zl-welcome">Welcome Back 👋</h1>
            <p className="zl-sub">Login to continue your journey.</p>

            <form onSubmit={submit}>

              {/* Email */}
              <div className="zl-field">
                <div className="zl-field-top">
                  <label className="zl-label">Email Address</label>
                </div>
                <div className="zl-input-wrap">
                  <span className="zl-icon-l">{Ic.mail}</span>
                  <input
                    className="zl-input"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="zl-field">
                <div className="zl-field-top">
                  <label className="zl-label">Password</label>
                  <a href="#" className="zl-forgot">Forgot Password?</a>
                </div>
                <div className="zl-input-wrap">
                  <span className="zl-icon-l">{Ic.lock}</span>
                  <input
                    className="zl-input has-right"
                    type={showPass ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                  <span className="zl-icon-r" onClick={() => setShowPass(p => !p)}>
                    {showPass ? Ic.eyeOff : Ic.eye}
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button className="zl-submit" type="submit" disabled={loading}>
                <span>{loading ? "Signing in…" : "Login"}</span>
                {!loading && <span className="zl-submit-arrow">{Ic.arrowRight}</span>}
              </button>

            </form>

            {/* Divider */}
            <div className="zl-divider">or continue with</div>

            {/* Social */}
            {/* <div className="zl-social">
              <a href="#" className="zl-social-btn">{Ic.google} Google</a>
              <a href="#" className="zl-social-btn">{Ic.github} GitHub</a>
            </div> */}

            {/* Sign up */}
            <div className="zl-signup">
              Don't have an account? <a href="/register">Sign up free →</a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;