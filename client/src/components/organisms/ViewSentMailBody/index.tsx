import React from 'react'

const DUMMYMAILS = [
    {
        id:1,
        name:"John Doe",
        email:"jdoe@company",
        company:"Google"
    },{
        id:2,
        name:"John Doe",
        email:"jdoe@company",
        company:"Microsoft"
    },{
        id:3,
        name:"Roman Cens",
        email:"roman@cens.com",
        company:"Google"
    },{
        id:4,
        name:"NIKKY JONES",
        email:"nikky@jones",
        company:"ZS Solutions"
    }

]
const ViewSentMailBody = () => {
  return (
    // WHITE BG and height cover avalable space
    // h-full used to set height 100% as parent
    <div className='p-4 space-y-2 mt-4 bg-white h-full'>
        {
            DUMMYMAILS.map((mail) => (
                // bg hover
                <div key={mail.id} className='flex justify-between items-center border-b border-gray-200 py-2 hover:bg-gray-100'>
                    <p>{mail?.name}</p>
                    <p>{mail.company}</p>
                    <p>{mail.email}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ViewSentMailBody
