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
      <div className={styles.firstBottomContainer}>
        <div className={styles.FBCTitle}>Koala's History with Human</div>
        <div className={styles.FBCDesc}>
          The first written reference to the koala was recorded by John Price,
          servant of John Hunter, the Governor of New South Wales. Price
          encountered the "cullawine" on 26 January 1798, during an expedition
          to the Blue Mountains,[63] but his remarks would first be published in
          Historical Records of Australia, nearly a century later.[2]: 8  In
          1802, French-born explorer Francis Louis Barrallier encountered the
          animal when his two Aboriginal guides, returning from a hunt, brought
          back two koala feet they were intending to eat. Barrallier preserved
          the appendages and sent them and his notes to Hunter's successor,
          Philip Gidley King, who forwarded them to Joseph Banks. Similar to
          Price, Barrallier's notes were not published until 1897.[2]: 9–10 
          Reports of the "Koolah" appeared in the Sydney Gazette in late 1803,
          and helped provide the impetus for King to send the artist John Lewin
          to paint watercolours of the animal. Lewin painted three pictures, one
          of which was used as a print in Georges Cuvier's Le Règne Animal (The
          Animal Kingdom) (1827).
        </div>
      </div>
    </section>
  );
}
