import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Eye, EyeOff, Mail, Lock, Leaf, Globe } from 'lucide-react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    name : '',
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

    // Three.js setup with nature-inspired animations
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create multiple interconnected spheres representing sustainability network
    const globes = [];
    const globeGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    
    for (let i = 0; i < 3; i++) {
      const globeMaterial = new THREE.MeshBasicMaterial({
        color: i === 0 ? 0x4696D2 : i === 1 ? 0x82C92C : 0x4696D2,
        wireframe: true,
        transparent: true,
        opacity: 0.3 + i * 0.1
      });
      const globe = new THREE.Mesh(globeGeometry, globeMaterial);
      globe.position.set(
        Math.cos(i * Math.PI * 2 / 3) * 1.5,
        Math.sin(i * Math.PI * 2 / 3) * 1.5,
        0
      );
      globes.push(globe);
      scene.add(globe);
    }

    // Create floating eco-elements (leaves, seeds, etc.)
    const ecoElements = [];
    const leafGeometry = new THREE.PlaneGeometry(0.15, 0.08);
    const seedGeometry = new THREE.SphereGeometry(0.03, 12, 12);
    
    for (let i = 0; i < 25; i++) {
      const isLeaf = i % 2 === 0;
      const geometry = isLeaf ? leafGeometry : seedGeometry;
      const material = new THREE.MeshBasicMaterial({
        color: isLeaf ? 0x82C92C : 0x4696D2,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
      });
      
      const element = new THREE.Mesh(geometry, material);
      element.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      );
      element.rotation.z = Math.random() * Math.PI;
      ecoElements.push(element);
      scene.add(element);
    }

    // Create connecting lines between globes
    const connections = [];
    for (let i = 0; i < globes.length; i++) {
      const nextIndex = (i + 1) % globes.length;
      const points = [globes[i].position, globes[nextIndex].position];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x82C92C,
        transparent: true,
        opacity: 0.4
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      connections.push(line);
      scene.add(line);
    }

    camera.position.z = 5;
    sceneRef.current = { scene, camera, renderer, globes, ecoElements, connections };

    // Advanced animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Rotate interconnected globes
      globes.forEach((globe, index) => {
        globe.rotation.y += 0.002 * (index + 1);
        globe.rotation.x += 0.001 * (index + 1);
        globe.position.y = Math.sin(time + index * Math.PI / 3) * 0.3;
      });
      
      // Animate eco elements with natural movement
      ecoElements.forEach((element, index) => {
        element.position.y += Math.sin(time * 1.5 + index) * 0.008;
        element.position.x += Math.cos(time * 0.8 + index) * 0.005;
        element.rotation.z += 0.005;
        
        // Create gentle floating motion
        if (element.position.y > 4) element.position.y = -4;
        if (element.position.x > 5) element.position.x = -5;
      });
      
      // Pulse connection lines
      connections.forEach((connection, index) => {
        connection.material.opacity = 0.2 + Math.sin(time * 2 + index) * 0.2;
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
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    console.log('SignIn data:', formData);
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
      {/* Three.js Background */}
      <div ref={mountRef} className="fixed inset-0 z-0" />
      
      {/* Dynamic Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-cyan-500/10 z-10" />
      <div className="fixed inset-0 bg-gradient-to-bl from-blue-500/5 via-transparent to-green-500/5 z-10" />
      
      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          {/* Card with advanced glassmorphism */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 p-10 transform transition-all duration-700 hover:scale-[1.01] hover:shadow-3xl hover:bg-white/75">
            {/* Header with icons */}
            <div className="text-center mb-10">
              <div className="flex justify-center items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-6xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Sloop Script Pro, cursive' }}>
                Sign In
              </h1>
              <p className="text-gray-600 text-xl font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Access your carbon impact dashboard
              </p>
            </div>

            {/* Form */}
            <div className="space-y-8">
              {/* Email Field with enhanced styling */}
              <div className="group">
                <div className="flex items-center space-x-2 mb-3">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <div className="text-sm font-bold text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Your Name
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-500 bg-white/80 text-gray-900 placeholder-gray-400 text-lg"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    placeholder="Enter your name"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-green-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center space-x-2 mb-3">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <div className="text-sm font-bold text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Email Address
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-500 bg-white/80 text-gray-900 placeholder-gray-400 text-lg"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    placeholder="your.email@example.com"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-green-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Password Field with enhanced styling */}
              <div className="group">
                <div className="flex items-center space-x-2 mb-3">
                  <Lock className="w-4 h-4 text-green-500" />
                  <div className="text-sm font-bold text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Password
                  </div>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 pr-14 border-2 border-gray-200 rounded-2xl focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-500 bg-white/80 text-gray-900 placeholder-gray-400 text-lg"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    placeholder="••••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                  </button>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      onClick={() => setRememberMe(!rememberMe)}
                      className={`w-5 h-5 rounded-lg border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
                        rememberMe
                          ? 'bg-gradient-to-r from-blue-500 to-green-500 border-transparent'
                          : 'border-gray-300 hover:border-blue-400'
                      }`}
                    >
                      {rememberMe && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 font-medium cursor-pointer" onClick={() => setRememberMe(!rememberMe)} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Keep me signed in
                  </div>
                </div>
                {/* <a href="/login" className="text-sm text-blue-600 hover:text-blue-700 font-bold transition-colors hover:underline" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Already have an account? login
                </a> */}
              </div>

              {/* Enhanced Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!isFormValid || isLoading}
                className={`w-full py-5 px-8 rounded-2xl font-bold text-white transition-all duration-700 transform relative overflow-hidden ${
                  isFormValid && !isLoading
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-green-600 hover:from-blue-700 hover:via-cyan-600 hover:to-green-700 hover:scale-[1.02] shadow-2xl hover:shadow-blue-500/25'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <div className="relative z-10">
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xl">Signing In...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-xl">Access Dashboard</span>
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              {/* Enhanced Divider */}
              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-6 py-2 bg-white/90 text-gray-500 font-bold rounded-full border border-gray-100" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Or sign in with
                  </span>
                </div>
              </div>

              {/* Enhanced Social Login */}
              <div className="grid grid-cols-2 gap-6">
                <button
                  type="button"
                  className="group flex items-center justify-center px-6 py-4 border-2 border-gray-200 rounded-2xl hover:bg-red-50 hover:border-red-200 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <svg className="w-6 h-6 text-red-500 mr-3 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="font-bold">Google</span>
                </button>
                <button
                  type="button"
                  className="group flex items-center justify-center px-6 py-4 border-2 border-gray-200 rounded-2xl hover:bg-blue-50 hover:border-blue-200 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <svg className="w-6 h-6 text-blue-600 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-bold">Facebook</span>
                </button>
              </div>

              {/* Login Link with enhanced styling */}
              <div className="text-center pt-8 border-t-2 border-gray-100">
                <p className="text-lg text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Already have an account?{' '}
                  <a href="/login" className="text-blue-600 hover:text-blue-700 font-bold transition-all duration-300 hover:underline hover:decoration-2 underline-offset-4">
                    login
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Additional eco message with animation */}
          <div className="text-center mt-10 transform hover:scale-105 transition-transform duration-500">
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/30">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Leaf className="w-5 h-5 text-green-600 animate-pulse" />
                <Globe className="w-5 h-5 text-blue-600 animate-bounce" />
              </div>
              <p className="text-sm text-gray-600 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Track, reduce, and offset your carbon footprint with precision 🌱
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;