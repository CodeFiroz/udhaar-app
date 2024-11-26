import style from './transaction.module.css'
import Link from 'next/link'

const TransactionCard = () => {
  return (
    <>

    <div className={style.transactionCard}>
       <div className={style.user}>
       <div className={style.avatar}>
            <span>J</span>
        </div>
        <div className={style.userInfo}>
            <h3>John Doe</h3>
            <p>03 days ago</p>
        </div>
       </div>


        <div className={style.transactionInfo}>
            <h4 className={style.give}>$ 3000</h4>
            <Link href="#"><i className="fi fi-brands-whatsapp"></i></Link>
        </div>

    </div>    
    
    </>
  )
}

export default TransactionCard