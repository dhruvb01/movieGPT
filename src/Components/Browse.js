import Header from './Header'
import useNowMovies from '../customHooks/useNowMovies';
import Primary from './Pimary'
import Secondary from './Secondary'
import usePopular from '../customHooks/usePopular';
import useUpcm from '../customHooks/useUpcm';
import { useSelector } from 'react-redux'
import Gptsearch from './Gptsearch';
function Browse() {

  useNowMovies()
  usePopular()
  useUpcm()
  
  const toggle=useSelector((store)=>store.gptsearch)

  return ( <div className="">
    <Header></Header>
{
  toggle?<Gptsearch/>:<><Primary></Primary>
  <Secondary></Secondary></>
}
    
    </div>
  )
}

export default Browse