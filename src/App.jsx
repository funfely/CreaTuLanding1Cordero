import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div style={styles.appContainer}>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Funfely Servicios TI!" />
    </div>
  );
}

const styles = {
  appContainer: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '40px 20px',
  },
};

export default App;
