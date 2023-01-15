import './Pricing.css';

export function Pricing() {
  return (
    <div className='pricing-container'>
      <div className='pricing-card'>
        <h2>Plan standardowy</h2>
        <p className='price'>9.99$/miesiąc</p>
        <ul>
          <li>Możliwość dodania nieograniczonej liczby użytkowników</li>
          <li>500MB miejsca na bazie danych</li>
        </ul>
        <button>Wybierz plan</button>
      </div>

      <div className='pricing-card'>
        <h2>Plan rozszerzony</h2>
        <p className='price'>19.99$/miesiąc</p>
        <ul>
          <li>Możliwość dodania nieograniczonej liczby użytkowników</li>
          <li>2GB miejsca na bazie danych</li>
        </ul>
        <button>Wybierz plan</button>
      </div>

      <div className='pricing-card'>
        <h2>Plan premium</h2>
        <p className='price'>19.99$/miesiąc</p>
        <ul>
          <li>Możliwość dodania nieograniczonej liczby użytkowników</li>
          <li>10GB miejsca na bazie danych</li>
          <li>Dostępność dedykowanego opiekuna technicznego</li>
        </ul>
        <button>Wybierz plan</button>
      </div>
    </div>
  );
}
