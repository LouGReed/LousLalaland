"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-purple-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h1 className="text-white text-xl font-bold">Lou's Lalaland</h1>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              <button className="bg-purple-700 hover:bg-purple-600 text-white font-medium py-2 px-6 transition-colors duration-300">
                Home
              </button>
              <Link href="/login">
                <button className="bg-purple-700 hover:bg-purple-600 text-white font-medium py-2 px-6 transition-colors duration-300">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Headshot */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative">
                <Image
                  src="/lou-headshot.svg"
                  alt="Lou's headshot"
                  width={300}
                  height={300}
                  className="rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-full bg-royal-blue opacity-20"></div>
              </div>
            </div>
            
            {/* Right - Text Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Welcome to{" "}
                  <span className="text-royal-blue">Lou's Lalaland</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl">
                  Creative Technologist & Storyteller
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                  Crafting digital experiences that blend creativity with cutting-edge technology. 
                  I bring stories to life through innovative design and thoughtful development.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-royal-blue hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    View Projects
                  </button>
                  <button className="border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-royal-blue hover:text-blue-700 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-royal-blue">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work showcasing the intersection of creativity and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/project-1.svg"
                  alt="Interactive Web Application"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-royal-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Interactive Web Application</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A dynamic web platform featuring real-time data visualization and user interaction. 
                  Built with modern frameworks and responsive design principles.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-royal-blue bg-opacity-10 text-royal-blue rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-royal-blue bg-opacity-10 text-royal-blue rounded-full text-sm font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-royal-blue bg-opacity-10 text-royal-blue rounded-full text-sm font-medium">Node.js</span>
                </div>
                <button className="text-royal-blue hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors duration-300">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/project-2.svg"
                  alt="Data Visualization Dashboard"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-royal-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Visualization Dashboard</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  An intuitive analytics dashboard that transforms complex data into beautiful, 
                  actionable insights through interactive charts and visualizations.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-royal-blue bg-opacity-10 text-royal-blue rounded-full text-sm font-medium">D3.js</span>
                  <span className="px-3 py-1 bg-royal-blue bg-opacity-10 text-royal-blue rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-royal-blue bg-opacity-10 text-royal-blue rounded-full text-sm font-medium">SQL</span>
                </div>
                <button className="text-royal-blue hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors duration-300">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group md:col-span-2 xl:col-span-1">
              <div className="relative overflow-hidden">
                <Image
                  src="/project-3.svg"
                  alt="Mobile Storytelling App"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-royal-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Storytelling App</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A cross-platform mobile application that empowers users to create and share 
                  multimedia stories with intuitive gestures and rich media integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-royal-blue bg-opacity-10 text-royal-blue rounded-full text-sm font-medium">React Native</span>
                  <span className="px-3 py-1 bg-royal-blue bg-opacity-10 text-royal-blue rounded-full text-sm font-medium">Firebase</span>
                  <span className="px-3 py-1 bg-royal-blue bg-opacity-10 text-royal-blue rounded-full text-sm font-medium">Swift</span>
                </div>
                <button className="text-royal-blue hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors duration-300">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Ready to bring your ideas to life?
          </p>
          <button className="bg-royal-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            Let's Work Together
          </button>
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              © 2024 Lou's Lalaland. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
