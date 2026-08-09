'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export default function TenfortyPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const shouldReduceMotion = useReducedMotion();

  const nodes = [
    { id: 'image', label: 'IMAGE', y: 20 },
    { id: 'azure', label: 'AZURE OCR', y: 90 },
    { id: 'extraction', label: 'STRUCTURED EXTRACTION', y: 160 },
    { id: 'pydantic', label: 'PYDANTIC VALIDATION', y: 230 },
    { id: 'api', label: 'BACKEND API', y: 300 },
  ];

  const paddleNode = { id: 'paddle', label: 'PADDLE OCR', x: 220, y: 125 };

  const bottomNodes = [
    { id: 'db', label: 'DATABASE', x: -90, y: 370 },
    { id: 'rag', label: 'RAG', x: 0, y: 370 },
    { id: 'auth', label: 'AUTH', x: 90, y: 370 },
  ];

  const userNode = { id: 'user', label: 'USER', y: 440 };

  const getAnimationProps = (delay: number) => {
    if (shouldReduceMotion) {
      return {
        initial: { stroke: '#3ecf8e', fill: '#1a1a1d' },
        animate: { stroke: '#3ecf8e', fill: '#1a1a1d' },
        textInitial: { fill: '#f0ece5' },
        textAnimate: { fill: '#f0ece5' },
        lineInitial: { pathLength: 1 },
        lineAnimate: { pathLength: 1 },
      };
    }
    return {
      initial: { stroke: '#1f1f23', fill: '#111113' },
      animate: isInView ? { stroke: '#3ecf8e', fill: '#1a1a1d' } : { stroke: '#1f1f23', fill: '#111113' },
      textInitial: { fill: '#8a8a8e' },
      textAnimate: isInView ? { fill: '#f0ece5' } : { fill: '#8a8a8e' },
      lineInitial: { pathLength: 0 },
      lineAnimate: isInView ? { pathLength: 1 } : { pathLength: 0 },
      transition: { duration: 0.5, delay },
    };
  };

  const Node = ({ x = 0, y, label, delay, width = 180 }: { x?: number; y: number; label: string; delay: number; width?: number }) => {
    const props = getAnimationProps(delay);
    return (
      <g transform={`translate(${x}, ${y})`}>
        <motion.rect
          x={-width / 2}
          y={0}
          width={width}
          height={40}
          rx={4}
          initial={props.initial}
          animate={props.animate}
          transition={props.transition}
          strokeWidth={1.5}
        />
        <motion.text
          x={0}
          y={24}
          textAnchor="middle"
          className="font-mono text-xs"
          initial={props.textInitial}
          animate={props.textAnimate}
          transition={props.transition}
        >
          {label}
        </motion.text>
      </g>
    );
  };

  const Line = ({ d, dashed = false }: { d: string; dashed?: boolean }) => {
    return (
      <path
        d={d}
        fill="none"
        stroke="#1f1f23"
        strokeWidth={1.5}
        strokeDasharray={dashed ? "4,4" : "none"}
      />
    );
  };

  const AnimatedLine = ({ d, delay, dashed = false }: { d: string; delay: number; dashed?: boolean }) => {
    const props = getAnimationProps(delay);
    return (
      <motion.path
        d={d}
        fill="none"
        stroke={shouldReduceMotion || isInView ? "#3ecf8e" : "transparent"}
        strokeWidth={1.5}
        strokeDasharray={dashed ? "4,4" : "none"}
        initial={props.lineInitial}
        animate={props.lineAnimate}
        transition={props.transition}
      />
    );
  };

  return (
    <div ref={containerRef} className="flex justify-center w-full py-8 overflow-hidden">
      <svg width="450" height="520" viewBox="-160 -10 480 510" className="max-w-full">
        {/* Main vertical lines */}
        {nodes.slice(0, -1).map((node, i) => (
          <g key={`line-${i}`}>
            <Line d={`M0,${node.y + 40} L0,${nodes[i + 1].y}`} />
            <AnimatedLine d={`M0,${node.y + 40} L0,${nodes[i + 1].y}`} delay={0.3 * (i + 1)} />
          </g>
        ))}

        {/* Fallback branch lines */}
        <Line d={`M90,110 L140,110 L140,145 L150,145`} dashed />
        <AnimatedLine d={`M90,110 L140,110 L140,145 L150,145`} delay={0.6} dashed />
        <Line d={`M140,145 L140,180 L90,180`} dashed />
        <AnimatedLine d={`M140,145 L140,180 L90,180`} delay={0.9} dashed />

        <text x="145" y="105" className="font-mono text-[10px]" fill="#555558">fallback</text>

        {/* Bottom row connections */}
        <Line d={`M0,340 L0,355 L-90,355 L-90,370`} />
        <AnimatedLine d={`M0,340 L0,355 L-90,355 L-90,370`} delay={1.8} />
        
        <Line d={`M0,340 L0,370`} />
        <AnimatedLine d={`M0,340 L0,370`} delay={1.8} />
        
        <Line d={`M0,340 L0,355 L90,355 L90,370`} />
        <AnimatedLine d={`M0,340 L0,355 L90,355 L90,370`} delay={1.8} />

        {/* User connection */}
        <Line d={`M-90,410 L-90,425 L0,425 L0,440`} />
        <AnimatedLine d={`M-90,410 L-90,425 L0,425 L0,440`} delay={2.1} />
        
        <Line d={`M0,410 L0,440`} />
        <AnimatedLine d={`M0,410 L0,440`} delay={2.1} />
        
        <Line d={`M90,410 L90,425 L0,425 L0,440`} />
        <AnimatedLine d={`M90,410 L90,425 L0,425 L0,440`} delay={2.1} />

        {/* Nodes */}
        {nodes.map((node, i) => (
          <Node key={node.id} y={node.y} label={node.label} delay={0.3 * i} />
        ))}

        <Node x={paddleNode.x} y={paddleNode.y} label={paddleNode.label} delay={0.6} width={140} />

        {bottomNodes.map((node) => (
          <Node key={node.id} x={node.x} y={node.y} label={node.label} delay={1.8} width={75} />
        ))}

        <Node y={userNode.y} label={userNode.label} delay={2.1} />
      </svg>
    </div>
  );
}
