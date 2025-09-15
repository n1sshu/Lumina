import { useState, useEffect } from 'react';
import { BookOpen, Users, Award, TrendingUp, Play, Star, ArrowRight, Menu, X, Mail, Phone} from 'lucide-react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LuminaLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const [stats, setStats] = useState({
    students: 0,
    posts: 0,
  });

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

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("http://localhost:5000/api/v1/count/counts");
        if (!res.ok) throw new Error("Failed to fetch stats");
        const data = await res.json();

        setStats({
          students: data.students || 0,
          posts: data.posts || 0,
        });
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    }

    fetchStats();
  }, []);

  const displayStats = [
    { number: stats.students.toLocaleString(), label: "Users Enrolled" },
    { number: stats.posts.toLocaleString(), label: "Posts Created" },
    { number: "99.9%", label: "Uptime" },
    { number: "150+", label: "Schools" },
  ];


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
              <Link to="/posts"><a  className="text-gray-300 hover:text-white transition-colors">Latest Posts</a></Link>
              <Link to="/about"><a  className="text-gray-300 hover:text-white transition-colors">About</a></Link> 
              
              <Link to={userAuth ? "/dashboard" : "/register"}>
               <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                Get Started
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-8">
              <Star className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm">Developed By Team Crimson</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Learning with{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                LUMINA
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
             Stay ahead with smart course guidance, personalized quiz planners, and progress tracking—all designed to help you learn smarter, not harder.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to={userAuth ? "/dashboard" : "/register"}><button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
       <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {displayStats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                succeed
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful features designed to make learning management effortless and engaging
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Daily Posts',
                description: 'Share knowledge, spark discussions, and stay connected with fresh posts every day.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Student Management',
                description: 'Simplify student management with real-time insights and organized dashboards.'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Smart Quiz',
                description: 'Assess smarter with AI-driven quizzes that adapt to each learner’s pace and progress.'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Smart Daily Planner',
                description: 'Boost productivity with an intelligent planner that keeps studies and activities aligned.'
              },
              {
                icon: <Play className="w-8 h-8" />,
                title: 'Smart Flashcards',
                description: 'Revise smarter using intelligent flashcards that prioritize what you need most.'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'AI Assistant',
                description: 'Your smart companion for learning,                                                   available 24/7'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 mb-6 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              your learning?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of students and educators already using Lumina to create exceptional learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to={userAuth ? "/dashboard" : "/register"}>
               <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              Get Started Today
             </button>
            </Link>
          </div>
        </div>
      </section>

   {/* Footer */}
    <footer className="bg-slate-900 text-white">
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
}