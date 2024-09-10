import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                {['dashboard', 'edit', 'delete'].map((path, index) => (
                    <li
                        key={path}
                        style={styles.li}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        <Link
                            to={`/${path}`}
                            style={hoverIndex === index ? {...styles.link, ...styles.linkHover} : styles.link}
                        >
                            {path.charAt(0).toUpperCase() + path.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        padding: '15px',
        background: 'linear-gradient(45deg, #1a1a1a, #444)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
        borderRadius: '10px',
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
    },
    li: {
        padding: '0 20px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '10px 20px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '30px',
        transition: 'background 0.3s ease, color 0.3s ease',
    },
    linkHover: {
        background: 'rgba(255, 255, 255, 0.3)',
        color: 'orange',
        borderBottom: '1px solid orange',
    },
};

export default Navigation;
