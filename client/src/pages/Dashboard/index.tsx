import Footer from '../../components/organisms/Footer';
import DashboardBody from '../../components/organisms/DashboardBody';
import Header from '../../components/organisms/Header';

const Dashboard = () => {
return (
    <div className="flex h-screen bg-gray-100">
        {/* <Sidebar/> */}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            {/* if mobile view then show hamburger and on Click or onHover show sidebar or else show header */}
             
            <Header/>
            {/* MAIN */}
            <DashboardBody/>

{/* FOOTER */}
            <Footer/>

        </div>
    </div>
);
}

export default Dashboard
