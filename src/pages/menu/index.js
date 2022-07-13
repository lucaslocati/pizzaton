import Head from "next/Head";
import Link from "next/Link";
import Image from "next/Image";

import Header from "../../components/headerss";
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
