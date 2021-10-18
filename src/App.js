import {BrowserRouter as Router , Route,Link} from 'react-router-dom'
import introJs from 'intro.js';

import Login from './login'
import Home from './Home';
import './index.css';
import Feeds from './Feeds';
import Library from './Library';
import VideoLessons from './VideoLessons';
import Notes from './Notes'; 
import Feeds2 from './Feeds2'
import Notes2 from './Notes2';
import ChatList from './ChatList';
import Calender from './Calender';
import AllSearch from './AllSeach';
import Reminder from './Reminder';
import Payfee from './Payfee';
import Setting from './Settings';
import Profile from './Profile';
import SchoolProfile from './SchoolProfile';


function App() {
  return (
    <div className="App">
   
      
<Router>
<Route exact path='/' component={Home}/>
<Route exact path='/Home' component={Home}/>


<Route path='/Login' component={Login}/>
<Route path='/Feeds' component={Feeds}/>
<Route path='/Library' component={Library}/>
<Route path='/VideoLessons' component={VideoLessons}/>
<Route path='/Notes' component={Notes}/>
<Route path='/Notes2' component={Notes2}/>
<Route path='/Feeds2' component={Feeds2}/>
<Route path='/ChatList' component={ChatList}/>
<Route path='/Calender' component={Calender}/>
<Route path='/AllSearch' component={AllSearch}/>
<Route path='/Reminder' component={Reminder}/>
<Route path='/Payfee' component={Payfee}/>
<Route path='/Setting' component={Setting}/>
<Route path='/Profile' component={Profile}/>
<Route path='/SchoolProfile' component={SchoolProfile}/>


</Router>
    </div>
  );
}

export default App;
