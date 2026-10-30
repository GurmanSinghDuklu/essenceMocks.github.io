import './PriceList.css'
import { PRICE_GROUPS, formatPrice } from '../../prices'

export default function PriceList({ groups }) {
  return (
    <div className="pl-grid">
      {groups.map(id => {
        const { title, note, items } = PRICE_GROUPS[id]
        return (
          <div className="pl-group" key={id}>
            <h3>{title}</h3>
            {note && <p className="pl-note">{note}</p>}
            <ul>
              {items.map(([name, price]) => (
                <li key={name}><span>{name}</span><span className="pl-price">{formatPrice(price)}</span></li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
