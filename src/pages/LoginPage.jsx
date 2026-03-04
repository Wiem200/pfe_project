import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (isRegister) {
      if (!name || !email || !password) {
        setError("Please fill in all fields.");
        return;
      }
      setSuccess("Account created! You can now sign in.");
      setIsRegister(false);
      setName("");
      setEmail("");
      setPassword("");
    } else {
      if (!email || !password) {
        setError("Please enter your credentials.");
        return;
      }
      if (email === "admin@mediatron.tn" && password === "admin123") {
        setSuccess("Welcome! Logged in");
      } else {
        setError("Invalid email or password.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#000D68] flex items-center justify-center relative p-6 font-sans overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-[-120px] left-1/2 w-[500px] h-[300px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#9C19E0]/40 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-120px] left-1/2 w-[400px] h-[250px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#99DDCC]/40 to-transparent blur-3xl pointer-events-none"></div>

      <div className="bg-white/5 border border-[#9C19E0]/40 rounded-2xl p-10 w-full max-w-md relative z-10">
        {/* Badge */}
        <div className="inline-block border-2 border-[#FF5DA2] rounded-full text-[#FF5DA2] text-xs font-bold tracking-wider px-5 py-1 mb-6">
          MEDIATRON LAB
        </div>

        {/* Title */}
        <h1 className="text-[#9C19E0] text-3xl font-extrabold mb-2">
          {isRegister ? "Create Account" : "Platform Access"}
        </h1>
        <p className="text-[#99DDCC] text-sm mb-7">
          {isRegister
            ? "Register to join the research platform"
            : "Sign in to manage research and publications"}
        </p>

        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="flex flex-col gap-2">
              <label className="text-[#FF5DA2] text-xs font-bold tracking-wide">
                FULL NAME
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-[#FF5DA2]">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#000D68]/20 border border-[#9C19E0]/40 rounded-xl text-white text-sm py-3 pl-12 pr-4 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[#FF5DA2] text-xs font-bold tracking-wide">
              PROFESSIONAL EMAIL
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-[#FF5DA2]">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="name@mediatron.tn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#000D68]/20 border border-[#9C19E0]/40 rounded-xl text-white text-sm py-3 pl-12 pr-4 focus:outline-none"
              />
            </div>
          </div>

          {/* Password or Phone */}
          {!isRegister ? (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[#FF5DA2] text-xs font-bold tracking-wide">
                  PASSWORD
                </label>
                <button type="button" className="text-[#9C19E0] text-xs">
                  Reset password?
                </button>
              </div>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-[#FF5DA2]">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#000D68]/20 border border-[#9C19E0]/40 rounded-xl text-white text-sm py-3 pl-12 pr-12 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-[#FF5DA2]"
                >
                  {showPassword ? (
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <label className="text-[#FF5DA2] text-xs font-bold tracking-wide">
                PHONE NUMBER
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-[#FF5DA2]">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  placeholder="+216 XX XXX XXX"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#000D68]/20 border border-[#9C19E0]/40 rounded-xl text-white text-sm py-3 pl-12 focus:outline-none"
                />
              </div>
            </div>
          )}

          {error && <p className="text-[#FF5DA2] text-sm text-center">{error}</p>}
          {success && <p className="text-[#99DDCC] text-sm text-center">{success}</p>}

          <button className="bg-gradient-to-tr from-[#9C19E0] to-[#FF5DA2] text-white font-bold py-4 rounded-xl mt-1 flex items-center justify-center gap-2">
            <span>{isRegister ? "Create Account" : "Authenticate"}</span>
            <span className="text-lg">→</span>
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 mt-5">
          <span className="text-[#99DDCC] text-sm">
            {isRegister ? "Already have an account?" : "Don't have an account?"}
          </span>
          <button
            type="button"
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
              setSuccess("");
            }}
            className="text-[#FF5DA2] text-sm font-semibold"
          >
            {isRegister ? "Sign In" : "Create one"}
          </button>
        </div>

        <div className="text-[#99DDCC] text-xs text-center mt-7 pt-5 border-t border-[#9C19E0]/30 leading-6">
          Laboratoire de Recherche en Réseaux et Systèmes de Télécommunications
        </div>
      </div>
    </div>
  );
}
