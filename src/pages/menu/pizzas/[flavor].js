import Head from "next/head";
import Image from "next/image";

import Header from "../../../components/headers";

import { pizzas } from "../../../data/menu.json";

const Flavor = ({ flavor }) => {
  const pizza = pizzas.find((pizza) => pizza.slug === flavor);

  return (
    <div className="container">
      <Head>
        <title>Pizzaton - Pizza {pizza.name}</title>
      </Head>
      <Header />

      <main>
        <h1>{pizza.name}</h1>
        <h1>{pizza.price}</h1>

        <Image
          src={pizza.photo}
          alt={`Foto da pizza ${pizza.name}`}
          width={600}
          height={338}
        />
      </main>
    </div>
  );
};

export default Flavor;

// Busca dados em tempo de build
export async function getStaticProps({ params }) {
  return { props: { ...params } };
}

// Especificar as rotas dinamicas para pré-rendenização baseado em dados
export async function getStaticPaths() {
  return {
    paths: pizzas.map(({ slug }) => `/menu/pizzas/${slug}`),
    fallback: false,
  };
}
