import React from 'react';
import { Heart, Baby, Bone, Brain, Zap, ScanLine, Sparkles, Star } from 'lucide-react';
import { services } from '../data/hospitalData';

const iconMap = {
  Heart,
  Baby,
  Bone,
  Brain,
  Zap,
  ScanLine
};

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-gray-50 via-purple-50/50 to-pink-50/50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="text-purple-500 animate-spin-slow" size={24} />
            <span className="text-purple-600 font-semibold">Our Medical Specialties</span>
            <Star className="text-pink-500 animate-spin-slow" size={24} />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Our Medical Services
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            We offer comprehensive healthcare services across multiple specialties, 
            providing expert care with the latest medical technology and techniques. ✨
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-fadeInUp animation-delay-600">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-purple-100/50 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <IconComponent className="text-purple-600 group-hover:animate-bounce" size={32} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">{service.name}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                <button className="group/btn text-purple-600 font-medium hover:text-purple-700 transition-all duration-300 flex items-center space-x-2 transform hover:translate-x-2">
                  <Sparkles className="group-hover/btn:animate-spin" size={16} />
                  <span>Learn More</span>
                  <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-3xl p-8 lg:p-12 text-white text-center overflow-hidden animate-fadeInUp animation-delay-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="animate-pulse" size={24} />
              <h3 className="text-4xl font-bold">More Services Available</h3>
              <Sparkles className="animate-pulse" size={24} />
            </div>
            <p className="text-xl mb-8 text-white/90">
            We also offer specialized services in Dermatology, Ophthalmology, Oncology, 
            Physical Therapy, Laboratory Services, and more.
          </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2 transform hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold text-lg">Diagnostic Services</h4>
                <ul className="space-y-1 text-white/80">
                <li>• Laboratory Testing</li>
                <li>• Medical Imaging</li>
                <li>• Cardiac Testing</li>
              </ul>
            </div>
              <div className="space-y-2 transform hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold text-lg">Surgical Services</h4>
                <ul className="space-y-1 text-white/80">
                <li>• Minimally Invasive Surgery</li>
                <li>• Outpatient Procedures</li>
                <li>• Robotic Surgery</li>
              </ul>
            </div>
              <div className="space-y-2 transform hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold text-lg">Wellness Programs</h4>
                <ul className="space-y-1 text-white/80">
                <li>• Preventive Care</li>
                <li>• Health Screenings</li>
                <li>• Nutrition Counseling</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;