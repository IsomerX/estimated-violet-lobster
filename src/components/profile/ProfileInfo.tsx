"use client";

import { Mail, MapPin, Link as LinkIcon } from "lucide-react";

export default function ProfileInfo() {
  return (
    <div className="mt-28 px-8">
      <div className="flex items-center space-x-4 text-muted-foreground">
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4" />
          <span>john.doe@example.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4" />
          <span>San Francisco, CA</span>
        </div>
        <div className="flex items-center space-x-2">
          <LinkIcon className="h-4 w-4" />
          <a href="#" className="hover:text-primary">github.com/johndoe</a>
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Passionate software engineer with over 8 years of experience building scalable web applications.
          Focused on creating beautiful user experiences and clean, maintainable code.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {["TypeScript", "React", "Node.js", "Next.js", "TailwindCSS", "GraphQL"].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-secondary px-4 py-1 text-sm text-secondary-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
