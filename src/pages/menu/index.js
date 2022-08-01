import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../../components/headers";
import { pizzas } from "../../data/menu.json";

const Menu = () => (
  <div className="container">
    <Head>
      <title>Pizzaton - Menu</title>
    </Head>
    <Header />

    <main>
      <h1>Menu</h1>

      {pizzas.map(({ name, price, slug, photo }) => (
        <div key={name}>
          <Link href={`/menu/pizzas/${slug}`}>
            <a>
              <Image
                src={photo}
                alt={`Foto da pizza ${name}`}
                width={300}
                height={169}
              />
              <p>
                {name} ({price})
              </p>
            </a>
          </Link>
        </div>
      ))}
    </main>
  </div>
);

export default Menu;
