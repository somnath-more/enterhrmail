import React from "react";
import { FaPlus, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import GenericModal from "../GenericModal";
import NewTemplate from "../NewTemplate";
import { useNavigate } from "react-router";
import PreviewTemplate from "../PreviewTemplate";

const templates = [
  { title: "NODE JS Template", skills: "ReactJs,Javascript" },
  { title: "UX Template", skills: "ReactJs,Javascript" },
  { title: "Marketing Template", skills: "ReactJs,Javascript" },
];

const DashboardBody = () => {
  const navigate = useNavigate();
  const [isNewTemplateModalOpen, setIsNewTemplateModalOpen] = React.useState(false);
  const [isEditModeOpen,setISEditModeOpen] = React.useState(false);
   const [isViewModeOpen,setIsViewModeOpen] = React.useState(false);
   const [selectedTemplate, setSelectedTemplate] = React.useState({});
  

  const handleOpenCreateNewTemplateModal = () => {
    setIsNewTemplateModalOpen(true);
  };
  const handleOpenSendToHrMail= () => {
    navigate("/send-to-hr-mail");
  }
  const handleViewTemplate = (template: any) => {
    setIsViewModeOpen(true);
    setSelectedTemplate(template);
    console.log(template);
  }
  const handleEditTemplate = (template: any) => {
    setISEditModeOpen(true);

    console.log(template);
  }
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      {/* Saved Templates Header */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Saved Templates</h2>
          <button onClick={() => handleOpenCreateNewTemplateModal()}  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            New Template
          </button>
        </div>

        {/* Templates List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {templates.map((template, idx) => (
            <div key={idx} className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-sm">{template.title}</h3>
              <p className="text-gray-600 text-xs mb-2">Skills: {template.skills}</p>
              <div className="flex space-x-4 text-blue-500 text-sm">
                <button onClick={()=> handleViewTemplate(template)} className="hover:underline">View</button>
                <button onClick={()=> handleEditTemplate(template)} className="hover:underline">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex justify-around flex-wrap gap-4">
        <button onClick={() => handleOpenCreateNewTemplateModal()} className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow">
          <FaPlus />
          <span>New Template</span>
        </button>
        <button
          onClick={() => handleOpenSendToHrMail()}
         className="flex items-center justify-center gap-2 px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow">
          <FaPaperPlane />
          <span>Send Profile</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 shadow">
          <MdEmail />
          <span>View Sent Emails</span>
        </button>
      </div>
      {isNewTemplateModalOpen && <GenericModal  title="Create New Template" children={<NewTemplate closeModal={() => setIsNewTemplateModalOpen(false)} />} closeModal={() => setIsNewTemplateModalOpen(false)} />}
      {isEditModeOpen && <GenericModal  title="Edit Template" children={<NewTemplate selectedTemplate={selectedTemplate} closeModal={() => setISEditModeOpen(false)} />} closeModal={() => setISEditModeOpen(false)} />}
      {isViewModeOpen && <GenericModal  title="View Template" children={<PreviewTemplate previewTemplateData={selectedTemplate} closeModal={() => setIsViewModeOpen(false)} />} closeModal={() => setIsViewModeOpen(false)} />}
    </main>
  );
};

export default DashboardBody;
