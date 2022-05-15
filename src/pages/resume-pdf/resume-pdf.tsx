import React, { useState } from 'react';
import TopNav from '../../components/topnav';
import styles from './styles.module.css';
import {Document, Page, pdfjs} from 'react-pdf';
import CV from '../../assets/CV.pdf'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePdf = () => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <main className={styles.main}>
      <TopNav />
      <div className={styles.pdfContainer}>
        <Document file={CV}>
          <Page pageNumber={pageNumber} width={400}/>
        </Document>
      </div>
      <div className={styles.controls}>
        <button onClick={() => setPageNumber(1)}><BsChevronCompactLeft /></button>
        <span>Page {pageNumber} of 2</span>
        <button onClick={() => setPageNumber(2)}><BsChevronCompactRight /></button>
      </div>
    </main>
  )
}

export default ResumePdf
