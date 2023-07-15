import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';
import resume from "../assets/Resume - Meenakshi Kathriesan.pdf"

import "../css/resume.css"

const Resume = () => {


    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

    return (
        <div >
            <div className="body">
            <Link to={resume} target="_blank" className="btn btn-primary"> Download</Link>
       
            </div>
            <Document file={resume} onLoadError={console.error}>
                <Page pageNumber={1} devicePixelRatio={1.2} width={window.innerWidth} renderTextLayer={false}/>
            </Document>

        </div>
    )
}

export default Resume