// import { useState } from "react"
// // import { addSkills } from "../../services/Service";
// import { toast, ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { addRequest } from "../../services/requestService";

// function Addrequest() {


//     const [date, setDate] = useState("")
//     const [paymentStatus, setPaymentStatus] = useState(0)
//     const [requestStatus, setRequestStatus] = useState(0)

//     const nav = useNavigate()



 

//     const submit = async (e) => {
//         try {
//             e.preventDefault();

//             let formData = new FormData;
//             formData.append("date", date)
//             formData.append("paymentStatus", paymentStatus)
//             formData.append("requestStatus", requestStatus)

//             console.log("Formdata: ", formData)

//             let res = await addRequest(formData)

//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 nav('/admin/manageskills')
//             } else {
//                 toast.error(res.data.message);
//             }
//         }
//         catch (err) {
//             console.log(err)
//         }

//     }


//     return (
//         <>
//             {/* Header Start */}
//             <div className="container-fluid bg-breadcrumb">
//                 <div className="container text-center py-5" style={{ maxWidth: 900 }}>
//                     <h3
//                         className="text-white display-3 mb-4 wow fadeInDown"
//                         data-wow-delay="0.1s"
//                     >
//                         Add Request
//                     </h3>
//                     <ol
//                         className="breadcrumb justify-content-center mb-0 wow fadeInDown"
//                         data-wow-delay="0.3s"
//                     >
//                         <li className="breadcrumb-item">
//                             <a href="index.html">Home</a>
//                         </li>
//                         <li className="breadcrumb-item">
//                             <a href="#">Admin</a>
//                         </li>
//                         <li className="breadcrumb-item active text-primary">Add Request</li>
//                     </ol>
//                 </div>
//             </div>
//             {/* Header End */}
//             <ToastContainer></ToastContainer>
//             {/* Contact Start */}
//             <div className="container-fluid contact py-5">
//                 <div className="container py-5">
//                     <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
//                         <div className="sub-style mb-4">
//                             <h4 className="sub-title text-white px-3 mb-0">Add Request</h4>
//                         </div>
//                         <p className="mb-0 text-black-50">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
//                             deleniti amet at atque sequi quibusdam cumque itaque repudiandae
//                             temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
//                             saepe in ab? Repellat!
//                         </p>
//                     </div>
//                     <div className="row g-4 align-items-center d-flex justify-content-center">
//                         <div
//                             className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
//                             data-wow-delay="0.1s"
//                         >
//                             <h2 className="display-5 text-white mb-2 text-center ">Add Request</h2>
//                             <p className="mb-4 text-white">
//                                 The contact form is currently inactive. Get a functional and working
//                                 contact form with Ajax &amp; PHP in a few minutes. Just copy and
//                                 paste the files, add a little code and you're done.{" "}
//                                 <a
//                                     className="text-dark fw-bold"
//                                     href="https://htmlcodex.com/contact-form"
//                                 >
//                                     Download Now
//                                 </a>
//                                 .
//                             </p>
//                             <form onSubmit={submit}>
//                                 <div className="row g-3">

//                                     <div className="col-12">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="date"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="Date"
//                                                 placeholder="Date"
//                                                 //  value={email}
//                                                 // onInput={(e) => {
//                                                 //     setEmail(e.target.value)
//                                                 // }
//                                                 // }
//                                                 onChange={((e) => setDate(e.target.value))}
//                                             />
//                                             <label htmlFor="Date" className="text-dark">Date</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-12">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="text"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="PaymentStatus"
//                                                 placeholder="PaymentStatus"
//                                                 // value={password}
//                                                 // onInput={(e) => {
//                                                 //     setPassword(e.target.value) }}
//                                                 onChange={((e) => setPaymentStatus(e.target.files[0]))}
//                                             />
//                                             <label htmlFor="PaymentStatus" className="text-dark">Payment Status</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-12">
//                                         <div className="form-floating">
//                                             <input
//                                                 type="text"
//                                                 className="form-control bg-transparent border border-white"
//                                                 id="RequestStatus"
//                                                 placeholder="RequestStatus"
//                                                 //  value={email}
//                                                 // onInput={(e) => {
//                                                 //     setEmail(e.target.value)
//                                                 // }
//                                                 // }
//                                                 onChange={((e) => setRequestStatus(e.target.value))}
//                                             />
//                                             <label htmlFor="RequestStatus" className="text-dark">Request Status</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-12">
//                                         <button className="btn btn-light text-primary w-100 py-3" type="submit">
//                                             Add Request
//                                         </button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Contact End */}
//         </>

//     )
// }

// export default Addrequest
