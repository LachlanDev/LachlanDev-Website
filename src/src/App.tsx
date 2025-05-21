import { Card, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProfileHeader } from "./components/profile-header";
import { SocialLinks } from "./components/social-links";

export default function App() {
  return (
    <div className="min-h-screen bg-content1 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto bg-[#121214]">
        <ProfileHeader />
        
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-white mb-2">LachlanDev</h1>
          <p className="text-gray-300 mb-6">
           Full-Stack Developer, creator, and tech enthusiast. Building tools and sharing knowledge.
          </p>
          
          <Divider className="my-6" />
          
          <section className="mb-8">
            <h2 className="text-lg font-medium mb-4 flex items-center gap-2 text-white">
              <Icon icon="lucide:link" className="text-primary" />
              Connect With Me
            </h2>
            <SocialLinks />
          </section>
          
          <Divider className="my-6" />
                      
          <footer className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} LachlanDev. All rights reserved.</p>
          </footer>
        </div>
      </Card>
    </div>
  );
}
