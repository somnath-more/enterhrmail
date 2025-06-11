import React from 'react'

interface PreviewTemplateProps {
  closeModal?: () => void,
  previewTemplateData?: any
}

const defaultPreviewTemplateData = {
  Name: 'Somnath More',
  Email: 'somnath.more@example.com',
  'Notice Period': 15,
  Skills: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
  Experience: '5 years',
  Location: 'Pune, India'
}

const PreviewTemplate: React.FC<PreviewTemplateProps> = ({  previewTemplateData }) => {
  const data = previewTemplateData || defaultPreviewTemplateData

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 24, background: '#f9f9f9', borderRadius: 8, fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Candidate Details</h2>
      <table style={{ width: '100%', marginBottom: 24 }}>
        <tbody>
          {Object.entries(data).map(([key]) => (
            <tr key={key}>
              <td style={{ fontWeight: 'bold', padding: '8px 0', width: 140 }}>{key}:</td>
              <td style={{ padding: '8px 0' }}>
                {/* {Array.isArray(value) ? value.join(', ') : value} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center', color: '#555' }}>
        Thanks you !!.<br />
      </div>
    </div>
  )
}

export default PreviewTemplate