export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  technologies: string[];
  description: string;
  metrics: ProjectMetric[];
  github: string;
};

export const projects: Project[] = [
  {
    id: 'vidbrain',
    number: '01',
    title: 'VIDBRAIN',
    subtitle: 'AI Video Summarization System',
    year: '2023 \u2013 2024',
    category: 'NLP / Speech / Vector Search',
    technologies: ['Whisper', 'HDBSCAN', 'LLMs', 'FAISS', 'Python', 'FFmpeg', 'FastAPI'],
    description: 'AI pipeline that converts long-form videos into concise, topic-focused summaries with transcription, HDBSCAN semantic clustering, and vector search.',
    metrics: [
      { value: '<60s', label: 'Processing Time (10m Video)' },
      { value: '94%', label: 'Topic Clustering Accuracy' }
    ],
    github: 'https://github.com/Aniketkrish1/VidBrain'
  },
  {
    id: 'motion-analysis',
    number: '02',
    title: '3D MOTION ANALYSIS',
    subtitle: 'Markerless Biomechanics Capture',
    year: '2023 \u2013 2024',
    category: 'Computer Vision / Biomechanics',
    technologies: ['OpenCV', 'MediaPipe', 'Python', 'NumPy', 'Matplotlib', 'Streamlit'],
    description: 'Markerless motion capture system analyzing athlete biomechanics from standard video, providing a cost-effective alternative to sensor-based hardware.',
    metrics: [
      { value: '92%', label: 'Skeleton Extraction Accuracy' },
      { value: '30%', label: 'Reduction in Manual Analysis' }
    ],
    github: 'https://github.com/Aniketkrish1/3D-Motion-Analysis-for-Sports'
  },
  {
    id: 'aura',
    number: '03',
    title: 'AURA',
    subtitle: 'Adaptive Unified Response Assistant',
    year: '2024 \u2013 2025',
    category: 'Agentic AI / RAG / Context Routers',
    technologies: ['Python', 'LLMs', 'Agentic AI', 'Pydantic', 'FastAPI', 'Vector DB'],
    description: 'Adaptive AI assistant engineered for multi-turn reasoning, dynamic context selection, and automated task execution across heterogeneous datasets.',
    metrics: [
      { value: '3\u00d7', label: 'Faster Context Retrieval' },
      { value: '98%', label: 'Intent Classification' }
    ],
    github: 'https://github.com/Aniketkrish1/Adaptive-Unified-Response-Assistant-'
  },
  {
    id: 'field-encryptor',
    number: '04',
    title: 'FIELD ENCRYPTOR',
    subtitle: 'Zero-Trust Data Protection Infrastructure',
    year: '2026',
    category: 'Security / Cryptography / Infrastructure',
    technologies: ['JavaScript', 'Cryptography', 'Node.js', 'Security', 'REST APIs'],
    description: 'Lightweight, high-performance security utility for granular field-level encryption and secure payload transmission across distributed backend services.',
    metrics: [
      { value: '<2ms', label: 'Encryption Latency' },
      { value: 'AES-256', label: 'Field Standard' }
    ],
    github: 'https://github.com/Aniketkrish1/Field-encryptor'
  },
  {
    id: 'audio-extractor',
    number: '05',
    title: 'AUDIO SUBTITLE EXTRACTOR',
    subtitle: 'Multimodal Media Signal Pipeline',
    year: '2025',
    category: 'Media Signal / FFmpeg / Parsing',
    technologies: ['Python', 'FFmpeg', 'JavaScript', 'Media Processing', 'FastAPI'],
    description: 'Automated signal processing utility designed to extract, segment, and align audio streams and subtitle metadata from complex multi-track video containers.',
    metrics: [
      { value: '10\u00d7', label: 'Faster Track Extraction' },
      { value: '100%', label: 'Stream Alignment' }
    ],
    github: 'https://github.com/Aniketkrish1/Audio-Subtitle_Extractor'
  }
];
