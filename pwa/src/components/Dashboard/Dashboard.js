import LineChart from './Chart';
import { useHistory } from "react-router-dom";
import styles from './Dashboard.module.css';

const Dashboard = () =>{

    const history = useHistory();

const logout = () => {
      localStorage.clear();
      history.push("/login");
  };
  
    return (    
        <>
        <nav className="navbar navbar-light bg-primary">
            <a className= "navbar-brand text-light" >Welcome to Dashboard</a>
            <a className= 'navbar-pull-right text-light'> 
                <button type= 'button' className= 'btn btn-link text-light' onClick ={() => logout()}>
                    Log Out
                </button> 
            </a>
            </nav>
            <div className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}>
                <LineChart/>
            </div>
        </>     
    )
}

export default Dashboard;