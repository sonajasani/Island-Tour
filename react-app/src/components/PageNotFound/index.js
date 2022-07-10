import { NavLink } from 'react-router-dom';
import notFound from '../../images/error-404.gif'
import './PageNotFound.css'

function PageNotFound() {



  return (
    <div className="not-found-page">
      <div className="not-found-info">
        <img src={notFound} alt="NotFound"></img>
        <NavLink to='/' exact={true} className='page-not-found-link'>
          Go To Home Page..!
        </NavLink>
      </div>
    </div>
  )
}


export default PageNotFound;
