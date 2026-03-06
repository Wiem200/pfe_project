import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
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
      setPhone("");
    } else {
      if (!email || !password) {
        setError("Please enter your credentials.");
        return;
      }
      if (email === "admin@mediatron.tn" && password === "admin123") {
        setSuccess("Welcome back!");
      } else {
        setError("Invalid email or password.");
      }
    }
  };

  return (
    <div
      style={{ fontFamily: "'Georgia', serif" }}
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden flex"
        style={{ minHeight: "560px" }}>

        {/* Left panel */}
        <div
          className="hidden md:flex flex-col justify-between p-10 w-5/12"
          style={{
            background: "linear-gradient(160deg, #6C3FC5 0%, #9B5DE5 60%, #C084FC 100%)",
          }}
        >
          <div>
            <div
              className="text-white text-xs font-bold tracking-widest uppercase mb-2"
              style={{ letterSpacing: "0.18em", fontFamily: "monospace" }}
            >
              Mediatron Lab
            </div>
          </div>

          <div>
            <h2
              className="text-white font-bold leading-tight mb-3"
              style={{ fontSize: "2.4rem", fontFamily: "'Georgia', serif" }}
            >
              {isRegister ? "Join the\nPlatform" : "Welcome\nBack!"}
            </h2>
            <p className="text-purple-200 text-sm leading-relaxed" style={{ maxWidth: "200px" }}>
              {isRegister
                ? "Create your research account to get started."
                : "Sign in to manage your research and publications."}
            </p>
          </div>

          <div className="text-purple-300 text-xs leading-relaxed" style={{ maxWidth: "220px" }}>
            Laboratoire de Recherche en Réseaux et Systèmes de Télécommunications
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col justify-center px-10 py-12">
          <div className="mb-8">
            <h1 className="text-gray-900 text-2xl font-bold mb-1">
              {isRegister ? "Create Account" : "Sign In"}
            </h1>
            <p className="text-gray-400 text-sm">
              {isRegister
                ? "Fill in your details to register."
                : "Enter your credentials to continue."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {isRegister && (
              <div>
                <label className="block text-gray-600 text-xs font-semibold mb-1 tracking-wide uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg text-gray-800 text-sm py-3 px-4 focus:outline-none focus:border-purple-400 bg-gray-50 transition"
                />
              </div>
            )}

            <div>
              <label className="block text-gray-600 text-xs font-semibold mb-1 tracking-wide uppercase">
                Work Email
              </label>
              <input
                type="email"
                placeholder="name@mediatron.tn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg text-gray-800 text-sm py-3 px-4 focus:outline-none focus:border-purple-400 bg-gray-50 transition"
              />
            </div>

            {isRegister && (
              <div>
                <label className="block text-gray-600 text-xs font-semibold mb-1 tracking-wide uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+216 XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg text-gray-800 text-sm py-3 px-4 focus:outline-none focus:border-purple-400 bg-gray-50 transition"
                />
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-gray-600 text-xs font-semibold tracking-wide uppercase">
                  Password
                </label>
                {!isRegister && (
                  <button type="button" className="text-purple-500 text-xs hover:underline">
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg text-gray-800 text-sm py-3 pl-4 pr-11 focus:outline-none focus:border-purple-400 bg-gray-50 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}
            {success && (
              <p className="text-green-600 text-xs text-center">{success}</p>
            )}

            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-lg mt-1 text-sm transition"
              style={{ background: "linear-gradient(90deg, #7C3AED, #A855F7)" }}
            >
              {isRegister ? "Create Account →" : "Sign In →"}
            </button>
          </form>

          <p className="text-gray-400 text-sm text-center mt-6">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsRegister(!isRegister);
                setError("");
                setSuccess("");
              }}
              className="text-purple-600 font-semibold hover:underline"
            >
              {isRegister ? "Sign In" : "Create one"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}