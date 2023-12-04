import "react";
import styles from "./campaign.module.css";
import NewCampaignData from "@/components/NewCampaignData/NewCampaignData";

export default function Buyers({ data }) {
  return (
    <>
      <title>Find buyer | EDC</title>

      <div className={styles.wrapper}>
        <h1 className={styles.h1}>Create campaign</h1>
        <NewCampaignData />
      </div>
    </>
  );
}
