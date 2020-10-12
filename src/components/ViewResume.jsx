// // import React from 'react'
// // import { BlobProvider } from '@react-pdf/renderer'
// import Resume from '../images/ksage_resume.pdf'
// // const ViewResume = () => (
// //   <BlobProvider document={Resume}>
// //     {({ url }) => (
// //       <a href={url} target="_blank" rel="noopener noreferrer">
// //         resume
// //       </a>
// //     )}
// //   </BlobProvider>
// // )

// // export default ViewResume;
// import { PDFDownloadLink} from '@react-pdf/renderer'

// const App = () => (
//   <div>
//     <PDFDownloadLink document={Resume} fileName="somename.pdf">
//       {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
//     </PDFDownloadLink>
//   </div>)