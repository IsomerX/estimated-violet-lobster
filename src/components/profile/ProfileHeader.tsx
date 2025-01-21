"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Link as LinkIcon } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="relative h-[300px] w-full">
      {/* Cover Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1707343843344-011332037abb"
          alt="Cover"
          className="h-full w-full object-cover"
        />
      </div>
      
      {/* Profile Info */}
      <div className="absolute -bottom-24 left-8 flex items-end space-x-6">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="rounded-full border-4 border-white"
        >
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            alt="Profile"
            className="h-40 w-40 rounded-full object-cover"
          />
        </motion.div>
        
        <div className="mb-6 text-white">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-lg text-gray-200">Senior Software Engineer</p>
        </div>
      </div>
    </div>
  );
}
