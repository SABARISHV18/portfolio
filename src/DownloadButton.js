import YourResumePDF from './DownloadResume.pdf';

const downloadResume = () => {
  // Create a link element
  const downloadLink = document.createElement('a');
  downloadLink.href = YourResumePDF;
  downloadLink.download = 'Resume.pdf';

  // Append the link to the document
  document.body.appendChild(downloadLink);

  // Trigger a click on the link
  downloadLink.click();

  // Remove the link from the document
  document.body.removeChild(downloadLink);
};

const DownloadResumeButton = () => {
  return (
    <button size='large' onClick={downloadResume}>Download Resume</button>
  );
};

export default DownloadResumeButton;