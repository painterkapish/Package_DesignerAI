export default function SignInUI({email, password, setEmail, setPassword, onSignIn, error, message, loading}){
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Sign In</h2>
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
            <button className={styles.button} onClick={onSignIn} disabled={loading}>
                Sign In
            </button>
            {error && <p className={styles.error}>{error}</p>}
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}

const styles = {
    container: "flex flex-col items-center justify-center w-full max-w-md mx-auto bg-[#232323] px-8 rounded-x1 shadow",
    title: "text-2x1 font-bold mb-4 text-white",
    input: "mb-2 px-4 py-2 rounded w-full bg-[#1a1a1a] text-gray-100",
    button: "py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition w-full",
    error: "text-red-400 mt-2",
    message: "text-green-400 mt-2"
};