import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2, MessageSquare } from "lucide-react";
import AuthImagePattern from "../components/AuthImagePattern";  

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {login,isLoggingIn} = useAuthStore();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    login(formData);
  };
 
 return (
    <div className="min-h-screen grid lg:grid-cols-2 items-center pt-20">
      {/* left side */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-primary group-hover:text-primary/80 transition-colors" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-sm text-gray-500">Sign in to your account</p>
            </div>
          </div>
          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                  <Mail className="size-5 text-base-content/60" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                  <Lock className="size-5 text-blue-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10 pr-10`}
                  placeholder="********"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center z-20"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="size-5 text-blue-400" /> : <Eye className="size-5 text-blue-400" />}
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-full disabled:bg-primary/50" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <><Loader2 className="size-5 animate-spin" />Signing in... </>
              ) : "Sign in"}
            </button>
            <div className="text-center text-sm text-gray-500">
              Don&apos;t have an account? <Link to="/signup" className="text-primary hover:underline">Create account</Link>
            </div>
          </form>
        </div>
      </div>
      {/* right side */}
      <AuthImagePattern
        title="Welcome back!"
        subtitle="Sign in to continue your conversations and catch up with your messages."
      />
    </div>
  );
};

export default LoginPage;
