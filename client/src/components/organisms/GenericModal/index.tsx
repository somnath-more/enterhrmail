import React from 'react'

interface Props {
    children: React.ReactNode,
    title: string,
    closeModal: () => void,
    isNewTemplateModalOpen?: boolean
}

const GenericModal: React.FC<Props> = ({ children,title,closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
 
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full h-[100vh] overflow-y-scroll">
             {/* ADD HEADER title and close button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
        {children}
      </div>
    </div>
  )
}

export default GenericModal