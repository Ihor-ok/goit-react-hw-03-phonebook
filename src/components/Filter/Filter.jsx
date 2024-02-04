import css from './Filter.module.css'

export default function Filter({ value, onChange }) {
  
  return (
    <div className={css.filter}>
        <label  htmlFor="">
         Find contacts by name   <input type="text" value={value} onChange={onChange} />  
        </label>
    </div>
        

  )
};