import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const styles = {
        container: {
            background: '#fff',
            minWidth: '280px',
            padding: '1.5rem',
            boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            position: 'relative',
            zIndex: 1,
        },
        outerContainer: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
            position: 'relative',
        },
        title: {
            position: 'absolute',
            top: '8%',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#333',
            zIndex: 0,
        },
        inputField: {
            position: 'relative',
            marginBottom: '1rem',
        },
        input: {
            outline: 'none',
            fontSize: '0.9rem',
            color: 'rgba(0, 0, 0, 0.7)',
            width: '100%',
            border: 'none',
            borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
            paddingBottom: '5px',
            background: 'transparent',
        },
        submitButton: {
            marginTop: '1.5rem',
            padding: '0.5rem',
            width: '100%',
            background: 'linear-gradient(to left, #007bff, #0056b3)', // Blue color gradient
            cursor: 'pointer',
            color: '#fff', // White text color
            fontSize: '0.8rem',
            fontWeight: '300',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            border: 'none',
            textAlign: 'center',
            display: 'block', // Ensures it takes up full width
            textDecoration: 'none',
            margin: '0 auto', // Centers the button horizontally
        },
        footer: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '1rem',
            fontSize: '0.7rem',
            textAlign: 'center',
        },
        link: {
            color: '#000',
            textDecoration: 'none',
            fontWeight: '600',
            margin: '0.2rem 0',
        },
    };

    return (
        <div style={styles.outerContainer}>
            <div style={styles.title}>OSINT Tool</div>
            <main style={styles.container}>
                <h2 style={{ fontSize: '1.5rem' }}>Login</h2>
                <form>
                    <div style={styles.inputField}>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter Your Username"
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputField}>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Your Password"
                            style={styles.input}
                        />
                    </div>
                    <Link to="/search" style={styles.submitButton}>Log In</Link>
                </form>
                <div style={styles.footer}>
                    <Link to="/signup" style={styles.link}>Sign up</Link>
                    <Link to="/forgotpassword" style={styles.link}>Forgot password</Link>
                </div>
            </main>
        </div>
    );
};

export default Login;
