import style from './quickreview.module.css';

const QuickReview = () => {
  return (
    <>

    <div className={style.quickreview}>

            <div className={style.box}>
                <i className="fi fi-rr-users-alt"></i>
                <div>
                    <h2>32</h2>
                    <p>Total Customers</p>
                </div>
            </div>

            <div className={style.box}>
            <i className="fi fi-rr-sack-dollar"></i>
                <div>
                    <h2>$ 2000</h2>
                    <p>You will get</p>
                </div>
            </div>

            <div className={style.box}>
            <i className="fi fi-rr-hand-holding-usd"></i>
                <div>
                    <h2>$ 400</h2>
                    <p>You will give</p>
                </div>
            </div>

    </div>

    </>
  )
}

export default QuickReview