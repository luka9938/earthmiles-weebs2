import "react";
import styles from "./campaign.module.css";
import NewCampaignData from "@/components/NewCampaignData/NewCampaignData";
import Menu from "@/components/Menu";

export default function NewCampaign() {
  return (
    <>
      <main className={styles.background}>
        <div className={styles.background_green}>
          <Menu />
          <article className={styles.container}>
            <div className={styles.headline}>
              <h1 className={styles.h1}>Create campaign</h1>
            </div>
            <NewCampaignData />
          </article>
        </div>
      </main>
    </>
  );
}
