import "react";
import styles from "./campaign.module.css";
import NewCampaignData from "@/components/NewCampaignData/NewCampaignData";

export default function Buyers({ data }) {
  return (
    <>
      <title>Find buyer | EDC</title>

      <main className={styles.background}>
        <article className={styles.container}>
          <div className={styles.headline}>
            <h1 className={styles.h1}>Create campaign</h1>
          </div>
          <NewCampaignData />
        </article>
      </main>
    </>
  );
}
