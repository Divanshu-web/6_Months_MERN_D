import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast , ToastContainer} from 'react-toastify';
import { register } from "../../services/userService";


function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [contact, setContact] = useState('')
  const [profession, setProfession] = useState('')
  const [skills, setSkills] = useState('')
  const [experience, setExperience] = useState('')
  const [profileImage, setProfileImage] = useState(null)


  const getName = (e) => {
    setName(e.target.value)
  }
  const getEmail = (e) => {
    setEmail(e.target.value)
  }
  const getPassword = (e) => {
    setPassword(e.target.value)
  }
  const getContact = (e) => {
    setContact(e.target.value)
  }
  const getProfession = (e) => {
    setProfession(e.target.value)
  }
  const getSkills = (e) => {
    setSkills(e.target.value)
  }
  const getExperience = (e) => {
    setExperience(e.target.value)
  }
  const getProfileImage = (e) => {
    setProfileImage(e.target.files[0])
  }



  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault();
    try {

      let formData = new FormData(); //used for multipart formdata handling

      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('contact', contact)
      formData.append('profession', profession)
      formData.append('skills', skills)
      formData.append('experience', experience)
      formData.append('profileImage', profileImage)


      let res = await register(formData)

      if (res.data.success) {
        toast.success(res.data.message)
        nav('/login')
      } else {
        toast.error(res.data.message)
      }

    }
    catch (err) {
      console.log(err)
    }
  }



  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Register
          </h3>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Register</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
<ToastContainer></ToastContainer>
      {/* Contact Start */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style mb-4 ">
              <h4 className="sub-title text-white px-3 mb-0">Register</h4>
            </div>

          </div>
          <div className="row g-4 align-items-center justify-content-center">
            <div
              className="col-lg-5 col-xl-5 contact-form wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <form onSubmit={submit}>
                <div className="row g-3 ">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent border border-white"
                        id="name" 
                        placeholder="Your Name" value={name}
                        onChange={getName}
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-transparent border border-white"
                        id="email"
                        placeholder="Your Email" value={email}
                        onChange={getEmail}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="Password"
                        className="form-control bg-transparent border border-white"
                        id="Password"
                        placeholder="Password" value={password}
                        onChange={getPassword}
                      />
                      <label htmlFor="Password">Password</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control bg-transparent border border-white"
                        id="Contact"
                        placeholder="Contact" value={contact}
                        onChange={getContact}
                      />
                      <label htmlFor="Contact">Contact</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent border border-white"
                        id="Profession"
                        placeholder="Profession" value={profession}
                        onChange={getProfession}
                      />
                      <label htmlFor="Profession">Profession</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent border border-white"
                        id="Skills"
                        placeholder="Skills" value={skills}
                        onChange={getSkills}
                      />
                      <label htmlFor="Skills">Skills</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-transparent border border-white"
                        id="Experience"
                        placeholder="Experience" value={experience}
                        onChange={getExperience}
                      />
                      <label htmlFor="Experience">Experience</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating">
                      <input
                        type="file"
                        className="form-control bg-transparent border border-white"
                        id="Profile Image"
                        placeholder="Profile Image" 
                        onChange={getProfileImage}
                      />
                      {/* <label htmlFor="Profile Image">Profile Image</label> */}
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-light text-primary w-100 py-3" type="submit">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      {/* Contact End */}
    </>

  )
}

export default Register
