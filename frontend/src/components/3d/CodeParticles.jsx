import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const CodeParticles = () => {
  const codeSnippets = [
    { text: 'const', position: [-3, 2, -2], color: '#5b8dee' },
    { text: 'function', position: [3, 1.5, -3], color: '#ff9166' },
    { text: '=>', position: [-2, -1, -1], color: '#00e5a0' },
    { text: 'async', position: [2, -1.5, -2], color: '#5b8dee' },
    { text: 'await', position: [-3.5, 0, -4], color: '#00e5a0' },
    { text: 'import', position: [3.5, 0.5, -3.5], color: '#ff9166' },
    { text: '{...}', position: [0, 2.5, -5], color: '#6b7a8d' },
    { text: 'return', position: [1, -2, -3], color: '#00e5a0' },
  ];

  return (
    <group>
      {codeSnippets.map((snippet, i) => (
        <FloatingCode key={i} {...snippet} delay={i * 0.5} />
      ))}
    </group>
  );
};

const FloatingCode = ({ text, position, color, delay }) => {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() + delay;
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t * 0.5) * 0.3;
      ref.current.rotation.y = Math.sin(t * 0.3) * 0.2;
    }
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.3}
      color={color}
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.01}
      outlineColor="#000000"
    >
      {text}
    </Text>
  );
};

export default CodeParticles;