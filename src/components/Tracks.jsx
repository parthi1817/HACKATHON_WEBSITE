import React, { useState } from 'react';
import { Cpu, ShieldCheck, HeartHandshake, Sparkles, ChevronRight, CheckCircle } from 'lucide-react';

export default function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState('all');

  const tracks = [
    {
      id: 'ai',
      title: 'Artificial Intelligence & Smart Agents',
      tag: 'HOT DOMAIN',
      color: '#ff2a7a',
      icon: Cpu,
      description: 'Harness machine learning, intelligent automation, conversational agents, or computer vision to solve everyday friction.',
      ideas: [
        'Domain-specific autonomous agent workflows',
        'Real-time multi-modal assistants for accessibility',
        'Intelligent productivity tools and automated pipelines'
      ]
    },
    {
      id: 'web3',
      title: 'FinTech, Security & Decentralized Tech',
      tag: 'SECURITY FOCUS',
      color: '#8e38ff',
      icon: ShieldCheck,
      description: 'Engineer transparent, privacy-first systems, secure transactional networks, decentralized credentials, or fraud detection tools.',
      ideas: [
        'Micro-payment protocols or wallet-free onboarding',
        'AI-driven smart contract vulnerability scanner',
        'Decentralized proof of identity / credentials'
      ]
    },
    {
      id: 'social',
      title: 'EdTech, HealthTech & Social Impact',
      tag: 'HUMAN CENTRIC',
      color: '#2a75ff',
      icon: HeartHandshake,
      description: 'Build applications that improve lives: accessible education tools, mental well-being trackers, or climate action dashboards.',
      ideas: [
        'Gamified adaptive learning platforms for rural students',
        'Emergency response coordinator with offline sync',
        'Community health data telemetry with instant insights'
      ]
    },
    {
      id: 'open',
      title: 'Open Innovation & Wildcard',
      tag: 'UNLIMITED CREATIVITY',
      color: '#00d2ff',
      icon: Sparkles,
      description: 'No boundaries. If you have an unconventional idea, crazy game, developer tool, or creative tool, build it and blow the judges away.',
      ideas: [
        'Developer developer experience (DevEx) CLI / tool',
        'Interactive real-time multiplayer browser experience',
        'Novel hardware-software integration or IoT dashboard'
      ]
    }
  ];

  const filteredTracks = selectedTrack === 'all' 
    ? tracks 
    : tracks.filter(t => t.id === selectedTrack);

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span className="live-pill" style={{ marginBottom: '14px' }}>
          <Sparkles size={14} />
          <span>CHOOSE YOUR ARENA</span>
        </span>
        <h2 style={{
          fontSize: '2.8rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          marginBottom: '12px'
        }}>
          Hackathon <span className="text-gradient">Tracks & Domains</span>
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          maxWidth: '650px',
          margin: '0 auto'
        }}>
          Every participating team (1 to 4 members) can pick one of the four curated problem tracks or propose their own vision under Open Innovation.
        </p>
      </div>

      {/* Filter Buttons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '36px'
      }}>
        <button
          onClick={() => setSelectedTrack('all')}
          style={{
            background: selectedTrack === 'all' ? 'var(--gradient-forma)' : 'rgba(255, 255, 255, 0.05)',
            color: selectedTrack === 'all' ? '#ffffff' : 'var(--text-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '9999px',
            padding: '8px 20px',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          All Domains
        </button>
        {tracks.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTrack(t.id)}
            style={{
              background: selectedTrack === t.id ? t.color : 'rgba(255, 255, 255, 0.05)',
              color: selectedTrack === t.id ? '#ffffff' : 'var(--text-secondary)',
              border: `1px solid ${selectedTrack === t.id ? t.color : 'var(--border-subtle)'}`,
              borderRadius: '9999px',
              padding: '8px 20px',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {t.title.split('&')[0]}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {filteredTracks.map((track) => {
          const Icon = track.icon;
          return (
            <div 
              key={track.id}
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `3px solid ${track.color}`
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: `${track.color}18`,
                    border: `1px solid ${track.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} color={track.color} />
                  </div>
                  <span style={{
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: track.color,
                    background: `${track.color}15`,
                    padding: '3px 10px',
                    borderRadius: '6px',
                    border: `1px solid ${track.color}35`
                  }}>
                    {track.tag}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  marginBottom: '12px'
                }}>
                  {track.title}
                </h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {track.description}
                </p>

                {/* Example prompts */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '14px',
                  marginBottom: '20px'
                }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Inspiration & Starting Points:
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {track.ideas.map((idea, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={14} color={track.color} style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{idea}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  OPEN FOR TEAMS 1–4
                </span>
                <span style={{
                  color: track.color,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  Select Track <ChevronRight size={14} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
