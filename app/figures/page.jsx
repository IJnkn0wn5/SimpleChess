'use client'

import styles from "@/app/figures/fpage.module.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

    const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
    color: 'white',
    border: '2px solid #ffffffff',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
    }));

    const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
    ))(({ theme }) => ({
    backgroundColor: '#816352',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
        {
        transform: 'rotate(90deg)',
        },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: '#816352',
    }),
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor: '#47372dff',
    padding: theme.spacing(2),
    borderTop: '1px solid #ffffffff',
    }));

    export default function Figures() {
        const [expanded, setExpanded] = React.useState('panel1');
        const handleChange = (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
        };

        function openChessWindow(){
            window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
         }
        return (
                 <div className={styles.body}>

                    <a href="./" className={styles.backButton}>
                        <img src="./backbutton.png" alt="" />
                        <p>На главную</p>
                    </a>

                    <div className={styles.btncontainer}>
                        <button onClick={openChessWindow} className={styles.openChessButton}> Открыть шахматы в новом окне </button>
                    </div>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <div className={styles.finfo}>
                                <img src="./peshka.png" alt="" />
                                <p>Пешка - такая то такая то</p>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={styles.fhod}>
                                <img src="./pinfo.png" alt="" />
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <div className={styles.finfo}>
                                <img src="./peshka.png" alt="" />
                                <p>Пешка - такая то такая то</p>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={styles.fhod}>
                                <img src="./pinfo.png" alt="" />
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                            <div className={styles.finfo}>
                                <img src="./peshka.png" alt="" />
                                <p>Пешка - такая то такая то</p>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={styles.fhod}>
                                <img src="./pinfo.png" alt="" />
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                            <div className={styles.finfo}>
                                <img src="./peshka.png" alt="" />
                                <p>Пешка - такая то такая то</p>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={styles.fhod}>
                                <img src="./pinfo.png" alt="" />
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                            <div className={styles.finfo}>
                                <img src="./peshka.png" alt="" />
                                <p>Пешка - такая то такая то</p>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={styles.fhod}>
                                <img src="./pinfo.png" alt="" />
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                            <div className={styles.finfo}>
                                <img src="./peshka.png" alt="" />
                                <p>Пешка - такая то такая то</p>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={styles.fhod}>
                                <img src="./pinfo.png" alt="" />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
        )
    }
   

