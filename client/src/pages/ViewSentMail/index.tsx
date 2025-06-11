import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'
import ViewSentMailBody from '../../components/organisms/ViewSentMailBody'

const ViewSentMail = () => {
  return (
     <div className="flex h-screen bg-gray-100">
        {/* <Sidebar/> */}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <Header/>
            {/* MAIN */}
            <ViewSentMailBody/>
            <Footer/>

        </div>
    </div>
  )
}

export default ViewSentMail
