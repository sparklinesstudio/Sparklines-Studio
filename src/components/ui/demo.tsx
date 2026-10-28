"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ParticleSphere, type ImageEntry } from "@/components/ui/cosmos-3d-orbit-gallery";

export default function Demo() {
  const images: ImageEntry[] = [
    { url: "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754956/image_6_umbc1s.webp", width: 2.8, height: 1.575 },
    { url: "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754956/image_5_lrkzwt.webp", width: 2.8, height: 1.575 },
    { url: "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754957/image_9_jazm8w.webp", width: 2.8, height: 1.575 },
    { url: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714905/decadentdepictions_ssspin.io_1790714806.jpg", width: 1.0, height: 1.78 },
    { url: "https://res.cloudinary.com/vt5gqi1c/video/upload/f_auto,q_auto,w_500,so_0/v1790714840/minipagebioarchive_ssspin.io_1790714828.jpg", width: 1.0, height: 1.78 },
    { url: "/api/proxy-image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F20%2F4f%2F2b%2F204f2bad9d4e2652f5bb09b70d95d506.jpg", width: 1.8, height: 1.8 },
    { url: "/api/proxy-image?url=https%3A%2F%2Fi.pinimg.com%2F736x%2F6b%2Fb7%2F93%2F6bb793b3d44ded26b6f65a08afbb6603.jpg", width: 1.8, height: 1.8 },
  ];

  return (
    <div className="w-full h-screen bg-black relative">
      <div className="fixed top-20 left-0 right-0 z-10 p-6 pointer-events-none">
        <h1 className="max-w-[750px] mx-auto text-white text-center font-instrument-serif px-6 md:text-6xl text-4xl text-balance tracking-tight font-normal">
          The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.
        </h1>
      </div>

      <Canvas camera={{ position: [0, 6, 22], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <ParticleSphere images={images} theme="blue" />
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
