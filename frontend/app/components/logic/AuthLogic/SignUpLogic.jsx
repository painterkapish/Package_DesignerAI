'use client';
import { useState } from 'react';
import { supabase } from '../../../../lib/supabaseClient';
import SignUpUI from '../../ui/Auth/SignUpUI';

export default function SignUpLogic() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSignUp = async () => {
    setError(null);
    setMessage(null);
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else setMessage('Check your email for a confirmation link!');
  };

  return (
    <SignUpUI
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSignUp={onSignUp}
      error={error}
      message={message}
      loading={loading}
    />
  );
}