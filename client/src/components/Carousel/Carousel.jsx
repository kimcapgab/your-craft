
import BevPreview from '../BevPreview/BevPreview'


export default function Carosel ({bevs}) {

  const newest = bevs
    .reverse()
    .map((bev, index) =>
      index < 3 ? (
        <BevPreview
          _id={bev._id}
          name={bev.name}
          imgURL={bev.imgURL}
          key={index}
        />
      ) : null
  )
  
  return (
    <div >
      <div>LATEST</div>
      <div>{newest}</div>
    </div>
  )
}