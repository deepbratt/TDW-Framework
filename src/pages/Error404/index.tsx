import MetaTags from '../../components/MetaTags';
import PageMeta from '../../Utils/constants/language/en/pageData';
import svg from './error_404.svg';
import './styles.css';

function Error404() {
  return (
    <>
      <MetaTags
        title={PageMeta.error.title}
        canonical={PageMeta.error.canonical}
      />
      <section className="error-page">
        <img src={svg} alt="Error 404" />
        <a href="/"><button>Home</button></a>
      </section>      
    </>
  )
}

export default Error404;
