import '/src/styles/components.css'

export default function TopMenu({ search, setSearch }) {
  return (
    <div className="top-menu">
      <input className='top-menu__input' value={search} onChange={e => setSearch(e.target.value)} type='text' placeholder='i’m looking for...' />
      <a className='top-menu__filter' href="#">
        <img src="../src/assets/filter.svg" alt="settings" width='35' height='30' />
      </a>
    </div>
  );
}
