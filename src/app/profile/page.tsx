"use client";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInfo from "@/components/profile/ProfileInfo";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl">
        <ProfileHeader />
        <ProfileInfo />
      </div>
    </main>
  );
}
