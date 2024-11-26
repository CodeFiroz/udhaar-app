import style from './entryform.module.css'

const EntryForm = () => {
  return (
    <>
    
    <div className={style.entryform}>

        <form action="">

            <div className={style.options}>

                <div>
                    <input type="radio" className={style.given} name="type" id="gave" value="Gave" />
                    <label htmlFor="gave">You Gave</label>
                </div>

                <div>
                    <input type="radio" className={style.take} name="type" id="take"  value="Take"/>
                    <label htmlFor="take">You Take</label>
                </div>

            </div>

            <label htmlFor="customer">Choose Customer</label>
            <select name="customer" id="customer">
                <option value="Customer 01">Customer 01</option>
                <option value="Customer 01">Customer 02</option>
                <option value="Customer 01">Customer 03</option>
                <option value="Customer 01">Customer 04</option>
            </select>

            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" id="amount" placeholder='$00.00' />

            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" />

            <button>Submit Transaction</button>

        </form>

    </div>

    </>
  )
}

export default EntryForm