import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Float } from '@react-three/drei';

const FloatingLaptop = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, 0]} rotation={[0.1, -0.3, 0]}>
        <RoundedBox args={[3, 0.1, 2]} radius={0.05} smoothness={4} position={[0, -0.8, 0.3]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        
        <group position={[0, 0, 0]} rotation={[-0.2, 0, 0]}>
          <RoundedBox args={[3, 2, 0.1]} radius={0.05} smoothness={4}>
            <meshStandardMaterial color="#0d1117" metalness={0.9} roughness={0.1} />
          </RoundedBox>
          
          <mesh position={[0, 0, 0.06]}>
            <planeGeometry args={[2.6, 1.6]} />
            <meshBasicMaterial color="#00e5a0" opacity={0.1} transparent />
          </mesh>
          
          <CodeLines />
        </group>
        
        <mesh position={[0, -0.75, 0.5]}>
          <planeGeometry args={[2.8, 1.8]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.5} roughness={0.5} />
        </mesh>
        
        <pointLight position={[0, 0, 1]} intensity={1} color="#00e5a0" distance={5} decay={2} />
      </group>
    </Float>
  );
};

const CodeLines = () => {
  const lines = [
    { y: 0.5, width: 1.8, color: '#5b8dee' },
    { y: 0.3, width: 2.0, color: '#00e5a0' },
    { y: 0.1, width: 1.5, color: '#ff9166' },
    { y: -0.1, width: 2.2, color: '#5b8dee' },
    { y: -0.3, width: 1.3, color: '#6b7a8d' },
    { y: -0.5, width: 1.9, color: '#00e5a0' },
  ];

  return (
    <group position={[-0.8, 0, 0.07]}>
      {lines.map((line, i) => (
        <mesh key={i} position={[line.width / 2, line.y, 0]}>
          <planeGeometry args={[line.width, 0.08]} />
          <meshBasicMaterial color={line.color} opacity={0.6} transparent />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingLaptop;