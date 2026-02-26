function Form(){
  
  
    return(
        <>
        <div id="image">
  <div className="form-box bg-light shadow">
    <h2 className="fw-bold">Welcome back</h2>
    <p className="text-muted">Enter your email to log in to your account.</p>
    <div className="text-center mb-3">
      <button className="btn google-btn w-100 d-flex align-items-center justify-content-center gap-2">
        {/* Google Logo */}
        <svg width={18} height={18} viewBox="0 0 48 48">
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.74 1.22 9.25 3.6l6.9-6.9C35.64 2.5 30.21 0 24 0 14.82 0 6.86 5.4 2.98 13.29l8.06 6.26C13.17 13.09 18.17 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.5 24.5c0-1.63-.15-3.2-.43-4.7H24v9h12.65c-.55 2.97-2.2 5.48-4.7 7.18l7.28 5.66C43.94 37.29 46.5 31.46 46.5 24.5z"
          />
          <path
            fill="#FBBC05"
            d="M11.04 28.55A14.48 14.48 0 0 1 9.5 24c0-1.58.27-3.1.74-4.55l-8.06-6.26A23.94 23.94 0 0 0 0 24c0 3.87.93 7.53 2.56 10.79l8.48-6.24z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.21 0 11.64-2.05 15.52-5.57l-7.28-5.66c-2.02 1.36-4.6 2.16-8.24 2.16-5.83 0-10.83-3.59-12.96-8.55l-8.48 6.24C6.86 42.6 14.82 48 24 48z"
          />
        </svg>
        Login with Google
      </button>
    </div>
    <div className="text-center text-muted mb-3">or log in with email</div>
    <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" />
      </div>
      <div className="mb-3 password-wrapper">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" id="password" />
        {/* Eye Icon */}
        <svg
          onclick="togglePassword()"
          id="eyeIcon"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zm-8 4.5A4.5 4.5 0 1 1 8 3.5a4.5 4.5 0 0 1 0 9z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
        </svg>
      </div>
      <div className="text-end mb-3">
        <a href="#" className="fw-bold text-dark">
          Forgot password?
        </a>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-dark w-100 rounded-pill">
          Log in
        </button>
      </div>
    </form>
  </div>
</div>

        </>
    )
}
export default Form