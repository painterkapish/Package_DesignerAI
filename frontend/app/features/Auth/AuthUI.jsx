import React from 'react';

export default function AuthFormUI({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSignUp,
  onSignIn,
  error,
  message
}) {
  return (
    <div style={{maxWidth : 320, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 8}}>
      <input value={email} onChange={onEmailChange} placeholder="Email" type="email" style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
      <input value={password} onChange={onPasswordChange} type='password' placeholder='Password' style={{padding: 8, borderRadius: 4, border: '1px solid #ccc'}} />
      <button onClick={onSignUp} style={{padding: 8, borderRadius: 4, background: '#6366f1', color: '#000000', border: 'none'}}>
        Sign Up
      </button>
      <button onClick={onSignIn} style={{padding: 8, borderRadius: 4, background: '#10b981', color: '#000000', border: 'none'}}>
        Sign In
      </button>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {message && <p style={{color: 'green'}}>{message}</p>}
    </div>
  );
} 