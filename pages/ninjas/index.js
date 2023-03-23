import styles from "@/styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <main className={styles.main}>
      <h1>All ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
          <span className={styles.single}>
            <h3>{ninja.name}</h3>
          </span>
        </Link>
      ))}
    </main>
  );
};

export default Ninjas;
