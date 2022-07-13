import Head from "next/head";

import Header from "../components/headers";
import { slogan, address, phone, whatsapp } from "../data/pizzaton.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzaton</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header />

        <main>
          <h2 className="slogan">{slogan}</h2>
          <div className="info">
            <p>
              <strong>Endereço:</strong>
              {address}
            </p>
            <p>
              <strong>Telefone:</strong>
              {phone}
            </p>
            <p>
              <strong>Whatsapp:</strong>
              {whatsapp}
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
