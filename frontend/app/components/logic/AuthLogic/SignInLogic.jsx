'use client';
import { useState } from 'react';
import { supabase } from '../../../../lib/supabaseClient';
import SignInUI from '../../ui/Auth/SignInUI';

export default function SignInLogic() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSignIn = async () => {
    setError(null);
    setMessage(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else setMessage('Signed in successfully!');
  };

  return (
    <SignInUI
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSignIn={onSignIn}
      error={error}
      message={message}
      loading={loading}
    />
  );
}