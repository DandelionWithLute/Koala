import Image from "next/image";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <section className={styles.firstPage}>
      <div className={styles.firstContainer}>
        <div className={styles.firstImageContainer}>
          <Image src="/kp1.jpg" alt="kp1" width={500} height={500} />
        </div>
        <div className={styles.firstTextContainer}>
          <a>
            <b>The</b> koala (Phascolarctos cinereus), sometimes called the
            koala bear, is an arboreal herbivorous marsupial native to
            Australia. It is the only extant representative of the family
            Phascolarctidae and its closest living relatives are the wombats.
            The koala is found in coastal areas of the mainland's eastern and
            southern regions, inhabiting Queensland, New South Wales, Victoria,
            and South Australia. It is easily recognisable by its stout,
            tailless body and large head with round, fluffy ears and large, dark
            nose. The koala has a body length of 60–85 cm (24–33 in) and weighs
            4–15 kg (9–33 lb). Fur colour ranges from silver grey to chocolate
            brown. Koalas from the northern populations are typically smaller
            and lighter in colour than their counterparts further south. These
            populations possibly are separate subspecies, but this is disputed.
          </a>
        </div>
      </div>
      <div className={styles.firstBottomContainer}>firstBottomContainer</div>
    </section>
  );
}