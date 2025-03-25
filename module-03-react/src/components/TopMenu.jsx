import '/src/styles/components.css'

export default function TopMenu() {
  return (
    <div className="top-menu">
      <input type='text' placeholder='I’m looking for...'/>
      <a href="#"><img  src="../src/assets/settings.svg" alt="settings" width='35' height='30' /></a>
    </div>
  );
}
