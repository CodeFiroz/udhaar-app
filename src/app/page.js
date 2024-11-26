import EntryForm from "./components/EntryForm/EntryForm";
import QuickReview from "./components/QuickReview/QuickReview";
import TransactionCard from "./components/TransactionCard/TransactionCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    
    <QuickReview />
    
    <div className={styles.gridColumn}>
    
    <div>
    <TransactionCard />
    </div>

    <div>
      <EntryForm />
    </div>

    </div>

     
    </>
  );
}
