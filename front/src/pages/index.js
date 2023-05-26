import { gql } from '@apollo/client';
import { print } from 'graphql';

import HeaderHtml from '../components/Home/HeaderHtml';
import Header from '../components/Home/Header';
import FirstContent from '../components/Home/FirstContent';
import Services from '../components/Home/Services';
import About from '../components/Home/About';

export default function Home({ services }) {
  return (
    <>
      <HeaderHtml />
      <div className='container'>
        <Header />
        <main>
          <FirstContent />
          <Services servicesList={services} />
          <About />
        </main>
        <footer>
          <span>by Erick Gabriel</span>
        </footer>
      </div>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 40px 0 120px;
          gap: 90px;
        }
        .calendar-container {
          opacity: 0;
          animation: fadeIn 1.2s cubic-bezier(0.4, 0, 1, 1) forwards;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 40px;
        }
        footer {
          position: absolute;
          background: hsl(0, 0%, 10%);
          width: 100vw;
          height: 200px;
          color: #e9e9e9;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          font-weight: 300;
        }
        .link {
          color: #e9e9e9;
        }
        .link:hover {
          color: var(--color-primary);
        }
      `}</style>
    </>
  );
}

export const getStaticProps = async () => {
  const SCHEMA = gql`
    query {
      services {
        _id
        name
        description
        price
      }
    }
  `;

  // se n tiver nenhum serviço registrado, vai aparecer esses de exemplo
  let services = [
    {
      _id: 1,
      name: 'Relaxante Buddha',
      description:
        'Uma experiência de Bem-Estar exclusiva Buddha Spa! Iniciamos com uma massagem corporal profundamente relaxante e única.',
      price: '179,00',
    },
    {
      _id: 2,
      name: 'Shiatsu',
      description:
        'Uma imersão no Oriente. Com toques vigorosos nos pontos energéticos do corpo, o shiatsu alivia dores e tensões musculares, relaxando toda cadeia muscular, trazendo equilíbrio, recuperação e leveza.',
      price: '284,00',
    },
    {
      _id: 1,
      name: 'Drenagem Linfática',
      description:
        'Massagem realizada com movimentos suaves e precisos, atuando sobre o sistema linfático, ajudando a eliminar edemas. Também auxilia na eliminação de toxinas e melhora a nutrição das células.',
      price: '228,00',
    },
  ];

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: print(SCHEMA) }),
    });
    const { data } = await res.json();
    services = data.services;
  } catch (error) {}

  return {
    props: {
      services,
    },
    revalidate: 600,
  };
};

Home.getLayout = (page) => <>{page}</>;
