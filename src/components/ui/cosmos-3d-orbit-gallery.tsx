"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

// ============================================================================
// Per-image dimensions so each image renders in its native aspect ratio.
// width & height are in Three.js world units.
// ============================================================================
export interface ImageEntry {
  url: string;
  width: number;
  height: number;
}

export interface ParticleSphereProps {
  images: ImageEntry[];
  theme?: "blue" | "warm" | "default";
  particleCount?: number;
  sphereRadius?: number;
  rotationSpeedY?: number;
  rotationSpeedX?: number;
}

export function ParticleSphere({
  images,
  theme = "default",
  particleCount = 1500,
  sphereRadius = 9,
  rotationSpeedY = 0.0005,
  rotationSpeedX = 0.0,
}: ParticleSphereProps) {
  const PARTICLE_COUNT = particleCount;
  const PARTICLE_SIZE_MIN = 0.005;
  const PARTICLE_SIZE_MAX = 0.012;
  const SPHERE_RADIUS = sphereRadius;
  const POSITION_RANDOMNESS = 3.5;
  const ROTATION_SPEED_X = rotationSpeedX;
  const ROTATION_SPEED_Y = rotationSpeedY;
  const PARTICLE_OPACITY = 0.9;

  const validImages = useMemo(() => {
    return images && images.length > 0
      ? images
      : [
          {
            url: "https://res.cloudinary.com/dbwrnwa3l/image/upload/v1790754956/image_6_umbc1s.webp",
            width: 2.4,
            height: 1.35,
          },
        ];
  }, [images]);

  const IMAGE_COUNT = validImages.length;
  const groupRef = useRef<THREE.Group>(null);

  // Load all textures (Drei hook must receive a stable array of URLs)
  const urls = useMemo(() => validImages.map((img) => img.url), [validImages]);
  const rawTextures = useTexture(urls);
  const textures = useMemo(
    () => (Array.isArray(rawTextures) ? rawTextures : [rawTextures]),
    [rawTextures]
  );

  // ──────────────────────────────────────────────────────────────
  // BACKGROUND PARTICLES — scattered around the sphere surface
  // ──────────────────────────────────────────────────────────────
  const particles = useMemo(() => {
    const list: Array<{
      position: [number, number, number];
      scale: number;
      color: THREE.Color;
    }> = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
      const r = SPHERE_RADIUS + (Math.random() - 0.5) * POSITION_RANDOMNESS;

      list.push({
        position: [
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.cos(phi),
          r * Math.sin(theta) * Math.sin(phi),
        ],
        scale:
          Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) +
          PARTICLE_SIZE_MIN,
        color:
          theme === "blue"
            ? new THREE.Color().setHSL(
                0.54 + Math.random() * 0.12, // electric cyan → azure
                0.85,
                0.55 + Math.random() * 0.35
              )
            : new THREE.Color().setHSL(
                0.05 + Math.random() * 0.1, // warm gold/orange
                0.8,
                0.6 + Math.random() * 0.3
              ),
      });
    }
    return list;
  }, [PARTICLE_COUNT, SPHERE_RADIUS, POSITION_RANDOMNESS, PARTICLE_SIZE_MIN, PARTICLE_SIZE_MAX, theme]);

  // ──────────────────────────────────────────────────────────────
  // ORBITING IMAGES — arranged in a flat equatorial ring
  // Each image face outward from the ring
  // ──────────────────────────────────────────────────────────────
  const orbitingImages = useMemo(() => {
    return validImages.map((img, i) => {
      const angle = (i / IMAGE_COUNT) * Math.PI * 2;
      const x = SPHERE_RADIUS * Math.cos(angle);
      const z = SPHERE_RADIUS * Math.sin(angle);
      const y = 0;

      const position = new THREE.Vector3(x, y, z);
      const outwardDir = position.clone().normalize();
      const matrix = new THREE.Matrix4();
      matrix.lookAt(
        position,
        position.clone().add(outwardDir),
        new THREE.Vector3(0, 1, 0)
      );
      const euler = new THREE.Euler().setFromRotationMatrix(matrix);

      return {
        position: [x, y, z] as [number, number, number],
        rotation: [euler.x, euler.y, euler.z] as [number, number, number],
        textureIndex: i % textures.length,
        width: img.width,
        height: img.height,
      };
    });
  }, [IMAGE_COUNT, SPHERE_RADIUS, textures.length, validImages]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += ROTATION_SPEED_Y;
      groupRef.current.rotation.x += ROTATION_SPEED_X;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Background star-particles */}
      {particles.map((p, i) => (
        <mesh key={`p-${i}`} position={p.position} scale={p.scale}>
          <sphereGeometry args={[1, 6, 4]} />
          <meshBasicMaterial color={p.color} transparent opacity={PARTICLE_OPACITY} />
        </mesh>
      ))}

      {/* Orbiting image planes — each uses its own width × height */}
      {orbitingImages.map((img, i) => (
        <mesh key={`img-${i}`} position={img.position} rotation={img.rotation}>
          <planeGeometry args={[img.width, img.height]} />
          <meshBasicMaterial
            map={textures[img.textureIndex]}
            side={THREE.DoubleSide}
            transparent={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default ParticleSphere;
