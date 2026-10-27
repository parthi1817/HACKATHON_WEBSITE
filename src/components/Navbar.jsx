import React from 'react';
import { Sparkles, Terminal, Shield, Clock } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'tracks', label: 'Tracks & Themes' },
    { id: 'war-room', label: '24h War Room' },
    { id: 'submission', label: 'Submit Project' },
    { id: 'team-portal', label: 'Check-in Portal' },
    { id: 'organizers', label: 'ForMa & Leads' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      background: 'rgba(6, 7, 18, 0.8)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Section */}
        <div 
          onClick={() => setActiveTab('overview')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            position: 'relative',
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            padding: '3px',
            background: 'var(--gradient-forma)',
            boxShadow: '0 0 15px rgba(255, 42, 122, 0.4)'
          }}>
            <img 
              src="/forma-logo.png" 
              alt="ForMa Club Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '9px',
                background: '#ffffff'
              }} 
            />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.35rem',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #ffffff 30%, #ff2a7a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                ForMa
              </span>
              <span style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                fontWeight: 600
              }}>
                ×
              </span>
              <span style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: '#38bdf8',
                background: 'rgba(56, 189, 248, 0.1)',
                padding: '2px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(56, 189, 248, 0.25)'
              }}>
                AKSHATH
              </span>
            </div>
            <div style={{
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span>24H ONLINE HACKATHON</span>
              <span>•</span>
              <span style={{ color: '#ec4899' }}>OCT 30-31, 2026</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(255, 255, 255, 0.03)',
          padding: '4px',
          borderRadius: '9999px',
          border: '1px solid var(--border-subtle)'
        }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  background: isActive ? 'var(--gradient-forma)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '7px 16px',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: 'var(--font-display)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(255, 42, 122, 0.4)' : 'none'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Live Status CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="live-pill">
            <span className="live-dot"></span>
            <span>24H VIRTUAL</span>
          </div>

          <button 
            onClick={() => setActiveTab('war-room')}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <Sparkles size={16} />
            <span>Enter War Room</span>
          </button>
        </div>
      </div>
    </header>
  );
}
