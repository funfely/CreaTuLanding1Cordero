const ItemListContainer = ({ greeting }) => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>{greeting}</h2>
    </section>
  );
};

const styles = {
  container: {
    margin: '50px auto',
    padding: '30px',
    maxWidth: '600px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '1.5rem',
    color: '#444',
    fontWeight: '600',
  },
};

export default ItemListContainer;
