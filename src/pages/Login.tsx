import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Three.js setup with eco-themed animation
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create animated earth/globe with more detailed wireframe
    const globeGeometry = new THREE.SphereGeometry(0.8, 64, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x4696D2,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Create floating particles representing carbon molecules
    const particles = [];
    const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0x82C92C,
      transparent: true,
      opacity: 0.7
    });

    for (let i = 0; i < 30; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      particles.push(particle);
      scene.add(particle);
    }

    // Create organic flowing lines
    const curves = [];
    for (let i = 0; i < 3; i++) {
      const points = [];
      for (let j = 0; j < 50; j++) {
        const angle = (j / 50) * Math.PI * 2;
        points.push(new THREE.Vector3(
          Math.cos(angle + i) * (1.5 + i * 0.3),
          Math.sin(angle * 2 + i) * 0.5,
          Math.sin(angle + i) * (1.5 + i * 0.3)
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points, true);
      const geometry = new THREE.TubeGeometry(curve, 100, 0.01, 8, true);
      const material = new THREE.MeshBasicMaterial({
        color: i === 0 ? 0x4696D2 : 0x82C92C,
        transparent: true,
        opacity: 0.3
      });
      const mesh = new THREE.Mesh(geometry, material);
      curves.push(mesh);
      scene.add(mesh);
    }

    camera.position.z = 4;
    sceneRef.current = { scene, camera, renderer, globe, particles, curves };

    // Enhanced animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Rotate globe slowly
      globe.rotation.y += 0.003;
      globe.rotation.x = Math.sin(time * 0.5) * 0.1;
      
      // Animate particles in organic motion
      particles.forEach((particle, index) => {
        particle.position.y += Math.sin(time * 2 + index) * 0.005;
        particle.position.x += Math.cos(time * 1.5 + index) * 0.003;
        particle.rotation.x += 0.01;
        particle.rotation.y += 0.02;
      });
      
      // Animate flowing curves
      curves.forEach((curve, index) => {
        curve.rotation.y += 0.001 * (index + 1);
        curve.rotation.z = Math.sin(time + index) * 0.1;
      });
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    
    // // Simulate API call
    // await new Promise(resolve => setTimeout(resolve, 2000));
    // setIsLoading(false);
    
    console.log('Login data:', formData);
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      {/* Three.js Background */}
      <div ref={mountRef} className="fixed inset-0 z-0" />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-blue-500/5 z-10" />
      
      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Card with glassmorphism effect */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-3" >
                Welcome Back
              </h1>
              <p className="text-gray-600 text-lg">
                Continue your sustainable journey
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Email Field */}
              <div className="group">
                <div className="block text-sm font-semibold text-gray-700 mb-3" >
                  Email Address
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-blue-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/90 text-gray-900 placeholder-gray-500"
                    
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="group">
                <div className="block text-sm font-semibold text-gray-700 mb-3" >
                  Password
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-blue-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/90 text-gray-900 placeholder-gray-500"
                    
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-700" >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors" >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!isFormValid || isLoading}
                className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-500 transform flex items-center justify-center space-x-2 ${
                  isFormValid && !isLoading
                    ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 hover:from-blue-700 hover:via-blue-600 hover:to-green-600 hover:scale-[1.02] shadow-xl hover:shadow-2xl'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-lg">Signing In...</span>
                  </div>
                ) : (
                  <>
                    <span className="text-lg">Sign In</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/80 text-gray-500 font-medium" >
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  
                >
                  <svg className="w-5 h-5 text-red-500 mr-3" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                  
                >
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-medium">Facebook</span>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center pt-6 border-t border-gray-100">
                <p className="text-gray-600" >
                  Don't have an account?{' '}
                  <a href="/register" className="text-blue-600 hover:text-blue-700 font-bold transition-colors hover:underline">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Additional eco-friendly message */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 max-w-sm mx-auto" >
              Every login counts towards building a more sustainable future. 🌱
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;