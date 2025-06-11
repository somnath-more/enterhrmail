import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'
import SentToHrMailBody from '../../components/organisms/SendToHrMail'

const SentToHrMail = () => {
  return (
     <div className="flex h-screen bg-gray-100">
        {/* <Sidebar/> */}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <Header/>
            {/* MAIN */}
            <SentToHrMailBody/>
            <Footer/>

        </div>
    </div>
  )
}

export default SentToHrMail
