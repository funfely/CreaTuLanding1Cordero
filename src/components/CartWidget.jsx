const CartWidget = () => {
  return (
    <button style={styles.button}>
      <span style={styles.icon}>🛒</span>
      <span style={styles.count}>1</span>
    </button>
  );
};

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0077cc',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '999px',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    gap: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  },
  icon: {
    fontSize: '1.2rem',
    filter: 'drop-shadow(0 0 1px #fff)',
  },
  count: {
    backgroundColor: '#fff',
    color: '#0077cc',
    borderRadius: '999px',
    padding: '4px 10px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
};

export default CartWidget;
