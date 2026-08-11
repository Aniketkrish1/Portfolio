'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from '@/lib/utils/sound';

// 1. VIDBRAIN CLUSTER & SUMMARY SIMULATOR
export function VidBrainSimulator() {
  const [viewMode, setViewMode] = useState<'animated' | 'cluster' | 'timeline'>('animated');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(100);
  const [step, setStep] = useState(3); // 0: input, 1: transcribe, 2: cluster, 3: summarized

  const [activeTopic, setActiveTopic] = useState<string>('all');
  const [isClustering, setIsClustering] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const handleStartProcessing = () => {
    playClickSound(1200, 0.04);
    setIsProcessing(true);
    setProgress(0);
    setStep(0);

    // Step 0: Ingesting video
    setTimeout(() => {
      setStep(1); // Whisper Transcription
      setProgress(35);
    }, 600);

    setTimeout(() => {
      setStep(2); // HDBSCAN Clustering
      setProgress(70);
    }, 1200);

    setTimeout(() => {
      setStep(3); // Summary Complete
      setProgress(100);
      setIsProcessing(false);
    }, 1800);
  };

  const topics = [
    { id: 'all', label: 'All Segments (10m Video)', count: 24 },
    { id: 'arch', label: 'Vector Indexing & Architecture', count: 8, color: '#3ecf8e' },
    { id: 'model', label: 'Whisper Transcripts & HDBSCAN', count: 10, color: '#60a5fa' },
    { id: 'eval', label: 'Latent Space Benchmarks', count: 6, color: '#a78bfa' },
  ];

  const chapters = [
    {
      timestamp: '01:14 - 03:40',
      title: 'Vector Indexing & Partitioning',
      summary: 'Architecting high-dimensional vector embeddings with FAISS partitions for sub-second topic retrieval.',
      metrics: 'Dense Similarity: 0.94'
    },
    {
      timestamp: '03:42 - 07:10',
      title: 'Whisper Audio Transcription & HDBSCAN',
      summary: 'Running Whisper Large v3 for speech-to-text, then applying HDBSCAN density clustering to drop redundant noise.',
      metrics: 'Semantic Accuracy: 94%'
    },
    {
      timestamp: '07:12 - 09:58',
      title: 'LLM Multi-Document Summary Generation',
      summary: 'Passing semantic cluster centroids to LLM for concise, bulleted chapter summaries with zero hallucination.',
      metrics: 'Processing Time: <60s'
    }
  ];

  const handleTopicChange = (id: string) => {
    playClickSound(900, 0.02);
    setIsClustering(true);
    setActiveTopic(id);
    setTimeout(() => setIsClustering(false), 300);
  };

  return (
    <div className="w-full bg-[#0d0d10] border border-[#1f1f23] rounded-2xl p-5 font-mono text-xs text-[#8a8a8e]">
      {/* Header with Representation Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1f1f23] pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3ecf8e] animate-pulse" />
          <span className="text-[#f0ece5] font-semibold">VIDBRAIN // Video-to-Summary AI Pipeline</span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex bg-[#070709] border border-[#1f1f23] p-1 rounded-full text-[10px]">
          <button
            onClick={() => {
              playClickSound(1000, 0.02);
              setViewMode('animated');
            }}
            className={`px-3 py-1 rounded-full transition-all ${
              viewMode === 'animated'
                ? 'bg-[#3ecf8e] text-[#0a0a0b] font-bold shadow-sm'
                : 'text-[#8a8a8e] hover:text-[#f0ece5]'
            }`}
          >
            ⚡ Live Converter
          </button>
          <button
            onClick={() => {
              playClickSound(1000, 0.02);
              setViewMode('cluster');
            }}
            className={`px-3 py-1 rounded-full transition-all ${
              viewMode === 'cluster'
                ? 'bg-[#3ecf8e] text-[#0a0a0b] font-bold shadow-sm'
                : 'text-[#8a8a8e] hover:text-[#f0ece5]'
            }`}
          >
            📊 Latent Clusters
          </button>
          <button
            onClick={() => {
              playClickSound(1000, 0.02);
              setViewMode('timeline');
            }}
            className={`px-3 py-1 rounded-full transition-all ${
              viewMode === 'timeline'
                ? 'bg-[#3ecf8e] text-[#0a0a0b] font-bold shadow-sm'
                : 'text-[#8a8a8e] hover:text-[#f0ece5]'
            }`}
          >
            ⏱ Chapter Scrubber
          </button>
        </div>
      </div>

      {viewMode === 'animated' ? (
        /* Representation 0: Animated Raw Video -> AI Summary Converter Playground */
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-[#070709] border border-[#1f1f23] p-3 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-base">📹</span>
              <div>
                <div className="text-[#f0ece5] font-bold text-[11px]">10-Minute Raw Tech Presentation (.mp4)</div>
                <div className="text-[10px] text-[#555558]">5,200 Words Speech Transcript → 3 Bullet Summary</div>
              </div>
            </div>
            <button
              onClick={handleStartProcessing}
              disabled={isProcessing}
              className="bg-[#3ecf8e] hover:bg-[#34b87d] text-[#0a0a0b] px-4 py-2 rounded-full font-bold text-[11px] shadow-[0_0_15px_rgba(62,207,142,0.3)] transition-all flex items-center gap-1.5"
            >
              {isProcessing ? <span className="animate-spin">⚙</span> : <span>▶</span>}
              <span>{isProcessing ? 'Processing...' : 'Run VidBrain AI'}</span>
            </button>
          </div>

          {/* Dynamic Stage Progress Bar */}
          {isProcessing && (
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-[#3ecf8e]">
                <span>
                  {step === 0 && '[1/3] Extracting Audio & Whisper Transcription...'}
                  {step === 1 && '[2/3] HDBSCAN Latent Semantic Clustering...'}
                  {step === 2 && '[3/3] Generating Zero-Hallucination Bullet Summary...'}
                </span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-[#1f1f23] h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className="bg-[#3ecf8e] h-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Animated 3-Stage Visual Pipeline Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Stage 1: Raw Input */}
            <div className="bg-[#070709] border border-[#1f1f23] p-3.5 rounded-xl space-y-2 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] text-[#555558]">
                <span>INPUT // VIDEO SIGNAL</span>
                <span className="text-[#3ecf8e]">10:00</span>
              </div>
              <div className="h-16 bg-[#111113] rounded-lg border border-[#1f1f23] relative overflow-hidden flex items-center justify-center">
                <motion.div
                  animate={isProcessing ? { x: ['-100%', '100%'] } : {}}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-[#3ecf8e]/30 to-transparent pointer-events-none"
                />
                <div className="flex items-center gap-1">
                  {[20, 50, 80, 40, 90, 60, 30, 70, 40, 60].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={isProcessing ? { height: [`${h}%`, `${100 - h}%`, `${h}%`] } : { height: `${h}%` }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                      className="w-1 bg-[#8a8a8e] rounded-full"
                    />
                  ))}
                </div>
              </div>
              <div className="text-[10px] text-[#8a8a8e] text-center">
                Audio Waveform & Transcripts
              </div>
            </div>

            {/* Stage 2: AI Processing Core */}
            <div className="bg-[#070709] border border-[#3ecf8e]/40 p-3.5 rounded-xl space-y-2 flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-center text-[10px] text-[#3ecf8e] font-bold">
                <span>AI ENGINE // HDBSCAN</span>
                <span>COMPRESS</span>
              </div>
              <div className="h-16 flex items-center justify-center">
                {isProcessing ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="w-10 h-10 border-2 border-[#3ecf8e] border-t-transparent rounded-full flex items-center justify-center text-[10px] text-[#3ecf8e]"
                  >
                    AI
                  </motion.div>
                ) : (
                  <div className="text-center space-y-1">
                    <div className="text-[#3ecf8e] font-bold text-sm">94% Compression</div>
                    <div className="text-[9px] text-[#555558]">5,200 words ➔ 3 key concepts</div>
                  </div>
                )}
              </div>
              <div className="text-[10px] text-[#3ecf8e] text-center font-bold">
                Deduplication & Clustering
              </div>
            </div>

            {/* Stage 3: Instant AI Summary Output */}
            <div className="bg-[#070709] border border-[#3ecf8e] p-3.5 rounded-xl space-y-2 flex flex-col justify-between shadow-[0_0_15px_rgba(62,207,142,0.1)]">
              <div className="flex justify-between items-center text-[10px] text-[#3ecf8e] font-bold">
                <span>OUTPUT // AI SUMMARY</span>
                <span>&lt; 60s</span>
              </div>
              <div className="space-y-1.5 text-[10px] text-[#f0ece5]">
                <div className="flex items-start gap-1.5">
                  <span className="text-[#3ecf8e]">✓</span>
                  <span className="truncate">FAISS Vector Indexing</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#3ecf8e]">✓</span>
                  <span className="truncate">Whisper + HDBSCAN Density</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#3ecf8e]">✓</span>
                  <span className="truncate">Zero Hallucination Bullet Output</span>
                </div>
              </div>
              <div className="text-[10px] text-[#3ecf8e] text-center font-bold">
                Production Ready Summary
              </div>
            </div>
          </div>
        </div>
      ) : viewMode === 'cluster' ? (
        <>
          {/* Representation 1: HDBSCAN Cluster Visualizer */}
          <div className="flex flex-wrap gap-2 mb-4">
            {topics.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTopicChange(t.id)}
                className={`px-3 py-1.5 rounded-full border text-[11px] transition-all ${
                  activeTopic === t.id
                    ? 'bg-[#3ecf8e] text-[#0a0a0b] border-[#3ecf8e] font-bold shadow-[0_0_12px_rgba(62,207,142,0.3)]'
                    : 'bg-[#111113] text-[#8a8a8e] border-[#1f1f23] hover:border-[#3ecf8e]/40 hover:text-[#f0ece5]'
                }`}
              >
                {t.label} ({t.count})
              </button>
            ))}
          </div>

          <div className="h-44 bg-[#070709] border border-[#1f1f23] rounded-xl p-4 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(62,207,142,0.06)_0,transparent_70%)]" />
            
            {isClustering ? (
              <div className="text-center text-[#3ecf8e] font-mono text-xs animate-pulse">
                [HDBSCAN] Computing latent embeddings distance matrix...
              </div>
            ) : (
              <div className="w-full h-full relative">
                {[
                  { id: 'n1', x: 20, y: 35, topic: 'arch', label: 'Vector Indexing (0.94)' },
                  { id: 'n2', x: 35, y: 65, topic: 'arch', label: 'FAISS Partitioning' },
                  { id: 'n3', x: 55, y: 30, topic: 'model', label: 'Whisper Large v3' },
                  { id: 'n4', x: 75, y: 70, topic: 'model', label: 'HDBSCAN Density' },
                  { id: 'n5', x: 80, y: 25, topic: 'eval', label: 'Topic Compression' },
                  { id: 'n6', x: 45, y: 80, topic: 'model', label: 'Semantic Deduplication' },
                ].map((node) => {
                  const matches = activeTopic === 'all' || activeTopic === node.topic;
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: matches ? 1 : 0.4, opacity: matches ? 1 : 0.2 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-[#111113]/90 border border-[#3ecf8e]/40 px-2.5 py-1 rounded-full text-[10px] text-[#f0ece5] shadow-lg"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e]" />
                      <span>{node.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Representation 2: Interactive Video Scrubber & Transcript Summarizer */}
          <div className="space-y-3">
            <div className="bg-[#070709] border border-[#1f1f23] p-3 rounded-xl space-y-2">
              <div className="flex justify-between items-center text-[10px] text-[#555558]">
                <span>VIDEO SCRUBBER TIMELINE (10:00 TOTAL)</span>
                <span className="text-[#3ecf8e]">Chapter {activeChapter + 1} of 3</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {chapters.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playClickSound(1100, 0.02);
                      setActiveChapter(idx);
                    }}
                    className={`p-2 rounded-lg border text-left text-[10px] transition-all ${
                      activeChapter === idx
                        ? 'bg-[#3ecf8e]/10 border-[#3ecf8e] text-[#3ecf8e] font-bold'
                        : 'bg-[#111113] border-[#1f1f23] text-[#8a8a8e] hover:border-[#3ecf8e]/30'
                    }`}
                  >
                    <div className="text-[9px] text-[#8a8a8e]">{ch.timestamp}</div>
                    <div className="truncate text-[#f0ece5] mt-0.5">{ch.title}</div>
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-[#070709] border border-[#3ecf8e]/40 p-4 rounded-xl space-y-2"
              >
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-[#3ecf8e] font-bold">
                    📌 CHAPTER SUMMARY // [{chapters[activeChapter].timestamp}]
                  </span>
                  <span className="bg-[#3ecf8e]/10 text-[#3ecf8e] px-2 py-0.5 rounded font-mono">
                    {chapters[activeChapter].metrics}
                  </span>
                </div>
                <div className="text-xs text-[#f0ece5] leading-relaxed">
                  {chapters[activeChapter].summary}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </>
      )}

      <div className="mt-3 flex justify-between text-[10px] text-[#555558]">
        <span>Pipeline: Speech-to-Text → Embedding → Clustering → Summarization</span>
        <span className="text-[#3ecf8e]">Processing Time: &lt;60s / 10m</span>
      </div>
    </div>
  );
}

// 2. 3D MOTION ANALYSIS SIMULATOR
export function MotionAnalysisSimulator() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [angle, setAngle] = useState(132);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setAngle((prev) => (prev > 165 ? 115 : prev + 3));
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full bg-[#0d0d10] border border-[#1f1f23] rounded-2xl p-5 font-mono text-xs text-[#8a8a8e]">
      <div className="flex items-center justify-between border-b border-[#1f1f23] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#60a5fa] animate-pulse" />
          <span className="text-[#f0ece5] font-semibold">3D MOTION // Biomechanics Telemetry</span>
        </div>
        <button
          onClick={() => {
            playClickSound();
            setIsPlaying(!isPlaying);
          }}
          className="text-[10px] bg-[#111113] hover:bg-[#1a1a1d] text-[#60a5fa] border border-[#60a5fa]/30 px-2.5 py-1 rounded-full transition-colors"
        >
          {isPlaying ? 'Pause Capture' : 'Play Live Signal'}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4 text-center">
        <div className="bg-[#070709] border border-[#1f1f23] p-2.5 rounded-xl">
          <div className="text-[10px] text-[#555558]">KNEE FLEXION</div>
          <div className="text-lg font-bold text-[#60a5fa]">{angle}°</div>
        </div>
        <div className="bg-[#070709] border border-[#1f1f23] p-2.5 rounded-xl">
          <div className="text-[10px] text-[#555558]">FPS RATE</div>
          <div className="text-lg font-bold text-[#3ecf8e]">60 FPS</div>
        </div>
        <div className="bg-[#070709] border border-[#1f1f23] p-2.5 rounded-xl">
          <div className="text-[10px] text-[#555558]">KEYPOINTS</div>
          <div className="text-lg font-bold text-[#f0ece5]">33 Joints</div>
        </div>
      </div>

      <div className="h-40 bg-[#070709] border border-[#1f1f23] rounded-xl flex items-center justify-center relative overflow-hidden">
        {/* Synthetic Biomechanics Skeleton View */}
        <svg className="w-32 h-32 text-[#60a5fa]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          {/* Head */}
          <circle cx="50" cy="20" r="6" stroke="#3ecf8e" strokeWidth="2" />
          {/* Spine */}
          <line x1="50" y1="26" x2="50" y2="55" stroke="#f0ece5" />
          {/* Arms */}
          <line x1="50" y1="35" x2="30" y2="45" />
          <line x1="50" y1="35" x2="70" y2="45" />
          {/* Legs with dynamic angle simulation */}
          <line x1="50" y1="55" x2="35" y2="75" />
          <line x1="35" y1="75" x2={35 - (angle - 120) / 4} y2="92" stroke="#3ecf8e" strokeWidth="2.5" />
          <line x1="50" y1="55" x2="65" y2="75" />
          <line x1="65" y1="75" x2="68" y2="92" />
          {/* Keypoints */}
          <circle cx="35" cy="75" r="2.5" fill="#3ecf8e" />
          <circle cx="50" cy="35" r="2.5" fill="#60a5fa" />
        </svg>

        <div className="absolute bottom-2 right-3 text-[10px] text-[#3ecf8e]">
          MediaPipe + OpenCV Inference: Active
        </div>
      </div>
    </div>
  );
}

// 3. AURA RAG ROUTER SIMULATOR
export function AuraSimulator() {
  const [selectedPrompt, setSelectedPrompt] = useState(0);

  const prompts = [
    { query: 'Explain vector database indexing strategies for RAG', intent: 'TECHNICAL_EXPLANATION', target: 'FAISS / HNSW Vector Store' },
    { query: 'Calculate user transaction anomaly score from raw logs', intent: 'DATA_PIPELINE', target: 'FastAPI Anomaly Engine' },
    { query: 'Retrieve latest system deployment status', intent: 'METRICS_QUERY', target: 'Telemetry Router' },
  ];

  return (
    <div className="w-full bg-[#0d0d10] border border-[#1f1f23] rounded-2xl p-5 font-mono text-xs text-[#8a8a8e]">
      <div className="flex items-center justify-between border-b border-[#1f1f23] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
          <span className="text-[#f0ece5] font-semibold">AURA // Multi-Turn Intent Router Playground</span>
        </div>
        <span className="text-[10px] text-[#a78bfa] bg-[#a78bfa]/10 border border-[#a78bfa]/30 px-2 py-0.5 rounded-full">
          3× Fast Context
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {prompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              playClickSound(1000, 0.02);
              setSelectedPrompt(idx);
            }}
            className={`w-full text-left p-2.5 rounded-xl border text-[11px] transition-all flex items-center justify-between ${
              selectedPrompt === idx
                ? 'bg-[#a78bfa]/10 border-[#a78bfa] text-[#f0ece5]'
                : 'bg-[#070709] border-[#1f1f23] text-[#8a8a8e] hover:border-[#a78bfa]/40'
            }`}
          >
            <span className="truncate">&quot;{p.query}&quot;</span>
            <span className="text-[10px] text-[#a78bfa] font-bold ml-2">SELECT</span>
          </button>
        ))}
      </div>

      <div className="bg-[#070709] border border-[#1f1f23] rounded-xl p-4 space-y-2 text-[11px]">
        <div className="flex justify-between">
          <span className="text-[#555558]">DETECTED INTENT:</span>
          <span className="text-[#a78bfa] font-bold">{prompts[selectedPrompt].intent}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#555558]">ROUTER TARGET:</span>
          <span className="text-[#3ecf8e] font-bold">{prompts[selectedPrompt].target}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#555558]">LATENCY BENCHMARK:</span>
          <span className="text-[#f0ece5]">14ms Context Assembly</span>
        </div>
      </div>
    </div>
  );
}

// 4. FIELD ENCRYPTOR SIMULATOR
export function FieldEncryptorSimulator() {
  const [rawText, setRawText] = useState('user_ssn_9482');
  const [encrypted, setEncrypted] = useState('enc_aes256_b9f1a04d83e2');
  const [isTyping, setIsTyping] = useState(false);

  const handleEncrypt = (val: string) => {
    playClickSound(1200, 0.015);
    setRawText(val);
    setIsTyping(true);
    setEncrypted(`enc_aes256_${Math.random().toString(36).substring(2, 12)}`);
    setTimeout(() => setIsTyping(false), 300);
  };

  return (
    <div className="w-full bg-[#0d0d10] border border-[#1f1f23] rounded-2xl p-5 font-mono text-xs text-[#8a8a8e]">
      <div className="flex items-center justify-between border-b border-[#1f1f23] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3ecf8e] animate-pulse" />
          <span className="text-[#f0ece5] font-semibold">FIELD ENCRYPTOR // Zero-Trust AES-256 Utility</span>
        </div>
        <span className="text-[10px] text-[#3ecf8e] bg-[#3ecf8e]/10 border border-[#3ecf8e]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-bold">
          <span>🔒</span>
          <span>&lt; 2ms Latency</span>
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-[10px] text-[#555558] block mb-1">RAW PAYLOAD FIELD (INPUT)</label>
          <input
            type="text"
            value={rawText}
            onChange={(e) => handleEncrypt(e.target.value)}
            placeholder="Type plaintext to encrypt..."
            className="w-full bg-[#070709] border border-[#1f1f23] focus:border-[#3ecf8e] px-3.5 py-2.5 rounded-xl text-[#f0ece5] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-[10px] text-[#555558]">ENCRYPTED CIPHERTEXT (SECURE TRANSMISSION)</label>
            <span className="text-[10px] text-[#3ecf8e]">● AES-256 GCM</span>
          </div>
          <div className={`w-full bg-[#070709] border ${isTyping ? 'border-[#3ecf8e] shadow-[0_0_15px_rgba(62,207,142,0.3)]' : 'border-[#3ecf8e]/40'} p-3.5 rounded-xl text-[#3ecf8e] break-all font-bold transition-all duration-200 flex items-center justify-between`}>
            <span>{encrypted}</span>
            <span className="text-[10px] text-[#3ecf8e] bg-[#3ecf8e]/10 px-2 py-0.5 rounded font-mono ml-2 shrink-0">
              ENCRYPTED 🔒
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. AUDIO SUBTITLE EXTRACTOR SIMULATOR
export function AudioExtractorSimulator() {
  const [activeStream, setActiveStream] = useState<'audio' | 'subtitle'>('audio');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractProgress, setExtractProgress] = useState(100);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const subtitles = [
    { time: '00:01.200 --> 00:04.850', text: 'Initializing FFmpeg multi-track signal demuxer...' },
    { time: '00:04.900 --> 00:08.300', text: 'Extracting stream #0:1 (Audio: AAC / 48kHz / 320kbps)...' },
    { time: '00:08.350 --> 00:12.100', text: 'Extracting stream #0:2 (Subtitle: SubRip / VTT metadata)...' },
    { time: '00:12.150 --> 00:15.800', text: 'Stream alignment complete. Output generated with 100% frame sync.' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [subtitles.length]);

  const handleRunExtraction = () => {
    playClickSound(1100, 0.04);
    setIsExtracting(true);
    setExtractProgress(0);

    const interval = setInterval(() => {
      setExtractProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExtracting(false);
          return 100;
        }
        return prev + 20;
      });
    }, 120);
  };

  return (
    <div className="w-full bg-[#0d0d10] border border-[#1f1f23] rounded-2xl p-5 font-mono text-xs text-[#8a8a8e]">
      <div className="flex items-center justify-between border-b border-[#1f1f23] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse" />
          <span className="text-[#f0ece5] font-semibold">AUDIO & SUBTITLE // FFmpeg Signal Demuxer</span>
        </div>
        <button
          onClick={handleRunExtraction}
          disabled={isExtracting}
          className="text-[10px] bg-[#fbbf24]/10 hover:bg-[#fbbf24]/20 text-[#fbbf24] border border-[#fbbf24]/40 px-2.5 py-1 rounded-full transition-colors flex items-center gap-1.5"
        >
          {isExtracting ? (
            <span className="animate-spin">⚙</span>
          ) : (
            <span>▶</span>
          )}
          <span>{isExtracting ? 'Demuxing Signal...' : 'Run Demuxer (10×)'}</span>
        </button>
      </div>

      {/* Mode Selectors */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => {
            playClickSound();
            setActiveStream('audio');
          }}
          className={`flex-1 py-2 rounded-xl border text-[11px] transition-all flex items-center justify-center gap-2 ${
            activeStream === 'audio'
              ? 'bg-[#fbbf24] text-[#0a0a0b] border-[#fbbf24] font-bold shadow-[0_0_12px_rgba(251,191,36,0.25)]'
              : 'bg-[#070709] text-[#8a8a8e] border-[#1f1f23] hover:border-[#fbbf24]/40'
          }`}
        >
          <span>🎵</span>
          <span>Audio Stream (.aac / .mp3)</span>
        </button>
        <button
          onClick={() => {
            playClickSound();
            setActiveStream('subtitle');
          }}
          className={`flex-1 py-2 rounded-xl border text-[11px] transition-all flex items-center justify-center gap-2 ${
            activeStream === 'subtitle'
              ? 'bg-[#fbbf24] text-[#0a0a0b] border-[#fbbf24] font-bold shadow-[0_0_12px_rgba(251,191,36,0.25)]'
              : 'bg-[#070709] text-[#8a8a8e] border-[#1f1f23] hover:border-[#fbbf24]/40'
          }`}
        >
          <span>💬</span>
          <span>Subtitle Stream (.vtt / .srt)</span>
        </button>
      </div>

      {/* Live Extraction Progress Bar */}
      {isExtracting && (
        <div className="mb-4 space-y-1">
          <div className="flex justify-between text-[10px] text-[#fbbf24]">
            <span>Demuxing tracks...</span>
            <span>{extractProgress}%</span>
          </div>
          <div className="w-full bg-[#1f1f23] h-1.5 rounded-full overflow-hidden">
            <motion.div
              className="bg-[#fbbf24] h-full"
              initial={{ width: 0 }}
              animate={{ width: `${extractProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      )}

      {/* Interactive Display Canvas */}
      <div className="h-32 bg-[#070709] border border-[#1f1f23] rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
        {activeStream === 'audio' ? (
          <div className="w-full flex flex-col items-center space-y-3">
            <div className="flex items-center justify-center gap-1.5 w-full h-16 px-4">
              {[45, 75, 30, 95, 60, 100, 40, 85, 55, 90, 35, 70, 95, 50, 80, 40, 90, 65, 35, 75].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h}%`, `${110 - h}%`, `${h}%`] }}
                  transition={{ duration: 0.6 + (i % 3) * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1.5 bg-[#fbbf24] rounded-full shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                />
              ))}
            </div>
            <div className="flex justify-between w-full text-[10px] text-[#555558] border-t border-[#1f1f23]/60 pt-2 px-2">
              <span>Codec: AAC LC / Dual Channel</span>
              <span className="text-[#fbbf24] font-bold">Bitrate: 320 kbps</span>
            </div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={subtitleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-2 max-w-md px-2"
            >
              <div className="text-[10px] text-[#fbbf24] font-bold bg-[#fbbf24]/10 border border-[#fbbf24]/30 px-3 py-1 rounded-full w-fit mx-auto">
                {subtitles[subtitleIndex].time}
              </div>
              <div className="text-xs text-[#f0ece5] font-semibold leading-relaxed">
                &quot;{subtitles[subtitleIndex].text}&quot;
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <div className="mt-3 flex justify-between text-[10px] text-[#555558]">
        <span>Engine: FFmpeg + Python Demux Router</span>
        <span className="text-[#fbbf24]">Alignment: 100% Stream Sync</span>
      </div>
    </div>
  );
}
