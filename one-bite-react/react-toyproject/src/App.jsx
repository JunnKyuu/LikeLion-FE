import Header from './components/Header';
import ShortCutContainer from './components/ShortCutContainer';
import HomeBanner from './components/HomeBanner';

const App = () => {
  return (
    <>
      <Header />
      <section className="mx-40">
        <ShortCutContainer />
        <HomeBanner />
      </section>
    </>
  );
};

export default App;
