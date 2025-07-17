'use client';

import React, { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import AuthFormUI from './AuthUI';

export default function AuthLogic() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSignUp = async () => {
    setError(null);
    setMessage(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else setMessage('Check your email for a confirmation link!');
  };

  const handleSignIn = async () => {
    setError(null);
    setMessage(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else setMessage('Signed in successfully!');
  };

  return (
    <AuthFormUI
      email={email}
      password={password}
      onEmailChange={e => setEmail(e.target.value)}
      onPasswordChange={e => setPassword(e.target.value)}
      onSignUp={handleSignUp}
      onSignIn={handleSignIn}
      error={error}
      message={message}
    />
  );
} 