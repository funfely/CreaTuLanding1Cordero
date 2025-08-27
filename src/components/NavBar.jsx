import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>🛍️ Funfely</h1>
      <ul style={styles.links}>
        <li><a style={styles.link} href="#">Inicio</a></li>
        <li><a style={styles.link} href="#">Servicios</a></li>
        <li><a style={styles.link} href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '15px 30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#333',
  },
  links: {
    display: 'flex',
    gap: '35px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    fontSize: '1rem',
    color: '#0077cc',
    fontWeight: '500',
    transition: 'color 0.2',
    padding: '4px 8px',
  },
};

export default NavBar;

