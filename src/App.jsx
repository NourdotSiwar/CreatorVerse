import { useRoutes }  from 'react-router-dom';
import { useState } from 'react';
import ViewCreator from './pages/ViewCreator.jsx';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import { Link } from 'react-router-dom';
import './App.css';

function App() {

  let routes = useRoutes([
    {
      path: '/add-creator',
      element: <AddCreator/>
    },
    {
      path: '/edit-creator',
      element: <EditCreator/>
    },
    {
      path: '/view-creator',
      element: <ViewCreator/>
    },
    {
      path: '/',
      element: <ShowCreators/>
    },
  ]);

  const LinkStyle = {
    textDecoration: 'none',
    color: 'white', 
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Times New Roman',
  }

  const [buttonClicked, setButtonClicked] = useState(false);

  if (buttonClicked) {
    // scroll down to half of the page smoothly
    window.scrollTo({top: window.innerHeight/2, behavior: 'smooth'});
  }

  return (
    <>
      <div className="frontpage-div">
          <h1 >CREATORVERSE</h1>
            <div className="frontpage-btn-group">
              <Link style={LinkStyle} to={"/"} onClick={() => setButtonClicked(true)}>View Creator</Link>
              
              <Link style={LinkStyle} to={"/add-creator"}>Add Creator</Link>
            </div>
      </div>
        {routes}
    </>
  )
}

export default App;
