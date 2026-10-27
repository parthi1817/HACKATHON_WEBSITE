import React, { useState } from 'react';
import { Search, ShieldCheck, Users, Mail, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { lookupTeam } from '../supabaseClient';

export default function TeamPortal({ onSelectTeamForSubmission }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const results = await lookupTeam(searchQuery);
      setSearchResults(results || []);
      setHasSearched(true);
    } catch (err) {
      console.error(err);
      setSearchResults([]);
      setHasSearched(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span className="live-pill" style={{ marginBottom: '14px' }}>
          <ShieldCheck size={14} />
          <span>REGISTRATION CHECK-IN</span>
        </span>
        <h2 style={{
          fontSize: '2.8rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          marginBottom: '12px'
        }}>
          Team Verification <span className="text-gradient">Portal</span>
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.05rem',
          maxWidth: '650px',
          margin: '0 auto'
        }}>
          Search your Team Name or Registered Email (from your Google Form submission) to confirm your Team ID, member roster, and payment verification.
        </p>
      </div>

      {/* Search Input Bar */}
      <form 
        onSubmit={handleSearch}
        className="glass-panel"
        style={{
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '32px',
          border: '1px solid rgba(142, 56, 255, 0.35)'
        }}
      >
        <Search color="#ff2a7a" size={22} style={{ flexShrink: 0 }} />
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter Team Name, Team ID (e.g. FM-101), or Team Leader's Email..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            fontSize: '1rem',
            fontFamily: 'var(--font-body)',
            outline: 'none'
          }}
        />
        <button 
          type="submit"
          disabled={loading}
          className="btn-primary"
          style={{ padding: '10px 22px', fontSize: '0.9rem', flexShrink: 0 }}
        >
          {loading ? 'Searching...' : 'Lookup Team'}
        </button>
      </form>

      {/* Results Display */}
      {hasSearched && (
        <div>
          {searchResults.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {searchResults.map((team) => (
                <div 
                  key={team.team_id}
                  className="glass-panel"
                  style={{
                    padding: '28px',
                    borderLeft: '4px solid #10b981',
                    background: 'linear-gradient(135deg, rgba(20, 25, 48, 0.8) 0%, rgba(10, 13, 26, 0.9) 100%)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '14px',
                    marginBottom: '18px'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          background: 'rgba(255, 42, 122, 0.15)',
                          color: '#ff4f93',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 42, 122, 0.3)'
                        }}>
                          {team.team_id}
                        </span>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700 }}>
                          {team.team_name || `Team ${team.leader_name || team.team_id}`}
                        </h3>
                        {!team.team_name && (
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: '4px' }}>
                            (Auto-assigned from Leader Name)
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
                        Track: <strong style={{ color: '#ffffff' }}>{team.track || 'General / Open Track (Selection at Check-in)'}</strong>
                      </p>
                    </div>

                    {/* Payment Badge */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      color: '#34d399',
                      fontSize: '0.82rem',
                      fontWeight: 700
                    }}>
                      <CheckCircle2 size={16} />
                      <span>₹200 Registration {team.payment_status || 'Verified'} ✓</span>
                    </div>
                  </div>

                  {/* Team Members List */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '12px',
                    padding: '16px',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '12px'
                    }}>
                      <Users size={16} color="#38bdf8" />
                      <span>ROSTER ({team.members?.length || 1} MEMBER{team.members?.length > 1 ? 'S' : ''}) • MAX 4</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                      {team.members?.map((member, idx) => {
                        const email = team.member_emails?.[idx] || (idx === 0 ? team.leader_email : null);
                        return (
                          <div 
                            key={idx}
                            style={{
                              background: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid var(--border-subtle)',
                              padding: '10px 14px',
                              borderRadius: '8px',
                              fontSize: '0.85rem'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                              <span style={{ color: idx === 0 ? '#ff2a7a' : 'var(--text-secondary)', fontWeight: 700, fontSize: '0.78rem' }}>
                                {idx === 0 ? '👑 TEAM LEADER' : `MEMBER ${idx + 1}`}
                              </span>
                            </div>
                            <div style={{ fontWeight: 600, color: '#ffffff' }}>{member}</div>
                            {email && (
                              <div style={{ fontSize: '0.75rem', color: '#38bdf8', marginTop: '3px', wordBreak: 'break-all' }}>
                                {email}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Mail size={14} color="#ff2a7a" />
                        <span>Leader Email: <strong>{team.leader_email}</strong></span>
                      </div>
                      {team.leader_phone && (
                        <span>• Phone: <strong>{team.leader_phone}</strong></span>
                      )}
                    </div>

                    <button 
                      onClick={() => onSelectTeamForSubmission(team.team_id)}
                      className="btn-primary"
                      style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                    >
                      <span>Proceed to Project Submission</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
              <AlertCircle size={40} color="#f59e0b" style={{ margin: '0 auto 14px auto' }} />
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>
                No Matching Team Record Found
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto' }}>
                We couldn't find a registration matching "{searchQuery}". Please check for typos, or allow a few minutes if you recently filled out the Google Form.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
