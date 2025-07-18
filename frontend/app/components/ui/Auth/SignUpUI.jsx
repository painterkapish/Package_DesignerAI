
export default function SignUpUI({ email, password, setEmail, setPassword, onSignUp, error, message, loading }) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Sign Up</h2>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={onSignUp} disabled={loading}>
          Sign Up
        </button>
        {error && <p className={styles.error}>{error}</p>}
        {message && <p className={styles.message}>{message}</p>}
      </div>
    );
  }

const styles = {
    container: "flex flex-col items-center justify-center w-full max-w-md mx-auto bg-[#232323] p-8 rounded-xl shadow",
    title: "text-2xl font-bold mb-4 text-white",
    input: "mb-2 px-4 py-2 rounded w-full bg-[#1a1a1a] text-gray-100",
    button: "py-2 rounded bg-purple-600 text-white font-semibold hover:bg-purple-500 transition w-full",
    error: "text-red-400 mt-2",
    message: "text-green-400 mt-2"
};