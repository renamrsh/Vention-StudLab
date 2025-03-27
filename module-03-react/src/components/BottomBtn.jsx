import '/src/styles/components.css'

export default function BottomBtn({ loadMore }) {
  return (
    <div className='bottom'>
      <button onClick={loadMore} className='bottom__btn'>load more</button>
    </div>
  );
}
