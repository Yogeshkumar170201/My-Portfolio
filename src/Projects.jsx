import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Projects = ()=>{
    return(
        <div className = 'projects-outer'>
            <h1 style = {{textAlign:'center'}}> Projects </h1>
            <Accordion className = 'projects-inner'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography> Attendance Using Face Recognition </Typography>
                    &nbsp;&nbsp;
                    <a style = {{color:"#0000ff"}} href = 'https://github.com/Yogeshkumar170201/Attendance-System-Using-Face-Recognition' target = '_blank' > Project Link </a>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Developed a python program which can take attendance by recognizing faces based on some feeded data. The
                        libraries used for making the project are face-recognition, dlib, OpenCV, Numpy
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className = 'projects-inner'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Sudoku Solver</Typography>
                    &nbsp;&nbsp;
                    <a style = {{color:"#0000ff"}} href = 'https://github.com/Yogeshkumar170201/Sudoku-Solver' target = '_blank' > Project Link </a>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Made a web page using HTML, CSS, Javascript which solves any Sudoku board and project is based upon a
                        backtracking algorithm.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Projects