import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Globe3D = () => {
  const globeRef = useRef();
  const pointsRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.1;
      // Manual distortion effect
      const scale = 1 + Math.sin(t * 0.5) * 0.05;
      globeRef.current.scale.set(scale, scale, scale);
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.1;
    }
  });

  // Generate points on sphere surface
  const generatePoints = () => {
    const points = [];
    const count = 200;
    
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const x = 1.02 * Math.cos(theta) * Math.sin(phi);
      const y = 1.02 * Math.sin(theta) * Math.sin(phi);
      const z = 1.02 * Math.cos(phi);
      
      points.push({ x, y, z });
    }
    
    return points;
  };

  const points = generatePoints();

  return (
    <group>
      {/* Main Globe - using standard sphereGeometry instead of MeshDistortMaterial */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#0d1117"
          roughness={0.2}
          metalness={0.8}
          opacity={0.9}
          transparent
        />
      </mesh>
      
      {/* Points on surface */}
      <group ref={pointsRef}>
        {points.map((point, i) => (
          <mesh key={i} position={[point.x, point.y, point.z]}>
            <sphereGeometry args={[0.01, 8, 8]} />
            <meshBasicMaterial 
              color={i % 3 === 0 ? '#00e5a0' : i % 3 === 1 ? '#5b8dee' : '#ff6b35'} 
              transparent 
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>
      
      {/* Rim light */}
      <pointLight position={[2, 2, 2]} intensity={0.5} color="#00e5a0" />
    </group>
  );
};

export default Globe3D;
