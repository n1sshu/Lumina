import { useState, useEffect } from 'react';
import { Code, Users, Zap, Laptop, Database, Globe, Github, Menu, X, Mail, Phone } from 'lucide-react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AboutPage = () => {

const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const { userAuth } = useSelector((state) => {
    return state.auth;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className=" bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              </div>
                <Link to="/"><img className="h-25 w-auto mt-3 filter brightness-0 invert" src="/logo.png" alt="" /></Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              
              <Link to = "/">
               <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
               Home
              </button>
              </Link>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10">
            <div className="px-6 py-4 space-y-3">
               <Link to="/posts"><a  className="block text-gray-300 hover:text-white transition-colors">Latest Posts</a></Link>
               <Link to="/about"><a  className="block text-gray-300 hover:text-white transition-colors">About</a></Link>

        <a  className="block text-gray-300 hover:text-white transition-colors"></a>
             <Link to={userAuth ? "/dashboard" : "/register"}> <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                Get Started
              </button>
            </Link>
  
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
           We are <span className="font-semibold">Team Crimson</span>, three students from C.W.W. Kanangara Central College Mathugama, passionate about technology and innovation.
          </p>
          
        </div>
      </div>


      {/* Team Members */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">The minds behind the project</p>
          </div>


          <div className="grid grid-cols-3 gap-6 justify-center">

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                RK
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Rayan Kumaranga</h3>
              <p className="text-blue-600 text-center mb-3 font-medium">Full-Stack Developer</p>

              <div className="flex flex-wrap gap-1 justify-center">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Node.js</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">MongoDB</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                DJ
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Dineth Jayathilaka</h3>
              <p className="text-blue-600 text-center mb-3 font-medium">Frontend Developer</p>
              <div className="flex flex-wrap gap-1 justify-center">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">TypeScript</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Tailwind</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                MB
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Mithum Buthsara</h3>
              <p className="text-blue-600 text-center mb-3 font-medium">Backend Developer</p>
              <div className="flex flex-wrap gap-1 justify-center">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">MongoDB</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Express</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Technology Stack</h2>
            <p className="text-lg text-gray-600">The powerful technologies we used to build this platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300">
              <div className="text-blue-600 mb-3 flex justify-center">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">React</h3>
              <span className="text-sm text-blue-600 font-medium">Frontend</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300">
              <div className="text-blue-600 mb-3 flex justify-center">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Node.js</h3>
              <span className="text-sm text-blue-600 font-medium">Backend</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300">
              <div className="text-blue-600 mb-3 flex justify-center">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">MongoDB</h3>
              <span className="text-sm text-blue-600 font-medium">Database</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300">
              <div className="text-blue-600 mb-3 flex justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tailwind CSS</h3>
              <span className="text-sm text-blue-600 font-medium">Styling</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300">
              <div className="text-blue-600 mb-3 flex justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Express.js</h3>
              <span className="text-sm text-blue-600 font-medium">Backend</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300">
              <div className="text-blue-600 mb-3 flex justify-center">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Github</h3>
              <span className="text-sm text-blue-600 font-medium">Source Control</span>
            </div>
          </div>
        </div>
      </div>

      {/* Development */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Development Philosophy</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-6 h-6 mr-3 mt-1 text-blue-200" />
                  <div>
                    <h3 className="font-semibold mb-1">User-Centric Design</h3>
                    <p className="text-blue-100">Every feature is built with the end user in mind</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 mr-3 mt-1 text-blue-200" />
                  <div>
                    <h3 className="font-semibold mb-1">Performance First</h3>
                    <p className="text-blue-100">Fast, efficient, and scalable solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Github className="w-6 h-6 mr-3 mt-1 text-blue-200" />
                  <div>
                    <h3 className="font-semibold mb-1">Clean Code</h3>
                    <p className="text-blue-100">Maintainable and well-documented codebase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">What Drives Us</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                We believe technology should make learning more accessible, engaging, and effective.
                That's why we've dedicated countless hours to perfecting every aspect of this platform.
              </p>
              <p className="text-blue-100 leading-relaxed">
                From seamless user interfaces to robust backend systems, we've built this LMS
                to grow with your educational needs and stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>

    {/* Footer */}
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
             <Link to="/"><img className="h-35 w-auto mt-3 filter brightness-0 invert" src="/logo.png" alt="" /></Link>
            </div>
            <p className="text-slate-300 text-sm">
              Empowering minds through innovative learning.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/posts"><a  className="text-gray-300 hover:text-white transition-colors">Latest Posts</a></Link>
              <Link to="/about"><a  className="text-gray-300 hover:text-white transition-colors">About</a></Link> 
              <Link to={userAuth ? "/dashboard" : "/register"}>
                <a  className="text-gray-300 hover:text-white transition-colors">Dashbord</a> 
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-white">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">support@lumina.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-slate-300">+94 76 1022 083</span>
              </div>

             <div className="flex space-x-3 pt-2">
              <a href="https://github.com/n1sshu/Lumina" target="_blank" rel="noopener noreferrer">
               <Github className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
               </a>
              <a href="https://cwwkcc.lk" target="_blank" rel="noopener noreferrer">
               <Globe className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
               </a>
            </div>

            </div>
          </div>
        </div>



        <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2025 Lumina LMS. All rights reserved.</p>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default AboutPage;