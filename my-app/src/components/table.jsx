import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { TablePagination } from '@mui/material';
import performanceImage from '../assets/performance.png';
import "../App.css";
import maleImage from '../assets/george.jpeg'
import femaleImage from '../assets/emilia.jpeg'
import stevanImage from '../assets/stevan.jpeg'
import PaginationComponenent from './pagination';

const createData = (name, designation, department, signals, overall_performance, reportin_to, role, email, experience, status) => {
    return { name, designation, department, signals, overall_performance, reportin_to, role, email, experience, status };
};

const rows = [
    createData(
        {
            image: maleImage,
            name: 'George Fernandes'
        },
        'Visual Designer', 
        'Design', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }], 
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Employee',
        'george@gmail.com',
        '3 Yrs 4 Mon', 
        'Active'
    ),

    createData(
        {
            image: femaleImage,
            name: 'Emilia Clarke'
        },
        'Software Engineer', 
        'Engineering', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }],
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Manager',
        'emilia@gmail.com',
        '3 Yrs 2 Mon', 
        'Active'
    ),
    createData(
        {
            image: maleImage,
            name: 'George Fernandes'
        },
        'Visual Designer', 
        'Design', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }], 
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Employee',
        'george@gmail.com',
        '3 Yrs 4 Mon', 
        'Active'
    ),

    createData(
        {
            image: femaleImage,
            name: 'Emilia Clarke'
        },
        'Software Engineer', 
        'Engineering', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }],
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Manager',
        'emilia@gmail.com',
        '3 Yrs 2 Mon', 
        'Active'
    ),
    createData(
        {
            image: maleImage,
            name: 'George Fernandes'
        },
        'Visual Designer', 
        'Design', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }], 
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Employee',
        'george@gmail.com',
        '3 Yrs 4 Mon', 
        'Active'
    ),

    createData(
        {
            image: femaleImage,
            name: 'Emilia Clarke'
        },
        'Software Engineer', 
        'Engineering', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }],
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Manager',
        'emilia@gmail.com',
        '3 Yrs 2 Mon', 
        'Active'
    ),
    createData(
        {
            image: maleImage,
            name: 'George Fernandes'
        },
        'Visual Designer', 
        'Design', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }], 
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Employee',
        'george@gmail.com',
        '3 Yrs 4 Mon', 
        'Active'
    ),

    createData(
        {
            image: femaleImage,
            name: 'Emilia Clarke'
        },
        'Software Engineer', 
        'Engineering', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }],
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Manager',
        'emilia@gmail.com',
        '3 Yrs 2 Mon', 
        'Active'
    ),
    createData(
        {
            image: maleImage,
            name: 'George Fernandes'
        },
        'Visual Designer', 
        'Design', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }], 
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Employee',
        'george@gmail.com',
        '3 Yrs 4 Mon', 
        'Active'
    ),

    createData(
        {
            image: femaleImage,
            name: 'Emilia Clarke'
        },
        'Software Engineer', 
        'Engineering', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }],
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Manager',
        'emilia@gmail.com',
        '3 Yrs 2 Mon', 
        'Active'
    ),
    createData(
        {
            image: maleImage,
            name: 'George Fernandes'
        },
        'Visual Designer', 
        'Design', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }], 
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Employee',
        'george@gmail.com',
        '3 Yrs 4 Mon', 
        'Active'
    ),

    createData(
        {
            image: femaleImage,
            name: 'Emilia Clarke'
        },
        'Software Engineer', 
        'Engineering', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }],
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Manager',
        'emilia@gmail.com',
        '3 Yrs 2 Mon', 
        'Active'
    ),
    createData(
        {
            image: maleImage,
            name: 'George Fernandes'
        },
        'Visual Designer', 
        'Design', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }], 
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Employee',
        'george@gmail.com',
        '3 Yrs 4 Mon', 
        'Active'
    ),

    createData(
        {
            image: femaleImage,
            name: 'Emilia Clarke'
        },
        'Software Engineer', 
        'Engineering', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }],
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Manager',
        'emilia@gmail.com',
        '3 Yrs 2 Mon', 
        'Active'
    ),
    createData(
        {
            image: maleImage,
            name: 'George Fernandes'
        },
        'Visual Designer', 
        'Design', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }], 
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Employee',
        'george@gmail.com',
        '3 Yrs 4 Mon', 
        'Active'
    ),

    createData(
        {
            image: femaleImage,
            name: 'Emilia Clarke'
        },
        'Software Engineer', 
        'Engineering', 
        [{ color: '#007C32', letter: 'C' }, 
        { color: '#4C9E29', letter: 'E' }, 
        { color: '#F2B824', letter: 'T' }, 
        { color: '#F2EB24', letter: 'D' }, 
        { color: '#DE1010', letter: 'U' }],
        performanceImage, 
        {
            image1: stevanImage,
            name:'Stevan'
        },
        'Manager',
        'emilia@gmail.com',
        '3 Yrs 2 Mon', 
        'Active'
    ),
];

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});

function MyTable() {
    const [page, setPage] = React.useState(0);
    const [rowPerPage, setRowPerPage] = React.useState(5);
    const [statusToggles, setStatusToggles] = React.useState(rows.map(row => row.status === "Active"));

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPage = (event) => {
        setRowPerPage(+event.target.value);
        setPage(0);
    };

    const handleToggle = (index) => {
        const newToggles = [...statusToggles];
        newToggles[index] = !newToggles[index];
        setStatusToggles(newToggles);
    };

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper} className='table-container' sx={{ fontFamily: "Nunito Sans, sans-serif", overflow: "auto" }}>
                <div style={{ overflowX: 'auto' }}>
                    <Table stickyHeader>
                        <TableHead>
                        <TableRow>
                            <TableCell align='center' sx={{ fontWeight: 'medium', fontSize: '18px', lineHeight: '27px', color: "#353448" }}>Name</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 'medium', fontSize: '18px', lineHeight: '27px', color: "#353448" }}>Designation</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 'medium', fontSize: '18px', lineHeight: '27px', color: "#353448" }}>Department</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 'medium', fontSize: '18px', lineHeight: '27px', color: "#353448" }}>Signals</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 'medium', fontSize: '18px', lineHeight: '27px', color: "#353448" }}>Overall Performance</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 'medium', fontSize: '18px', lineHeight: '27px', color: "#353448" }}>Reporting To</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 'medium', fontSize: '18px', lineHeight: '27px', color: "#353448" }}>Role</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 'medium', fontSize: '18px', lineHeight: '27px', color: "#353448" }}>Email</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 'medium', fontSize: '18px', lineHeight: '27px', color: "#353448" }}>Experience</TableCell>
                            <TableCell align='center' sx={{ fontWeight: 'medium', fontSize: '18px', lineHeight: '27px', color: "#353448" }}>Status</TableCell>
                            <TableCell align='center' style={{ position: 'sticky', right: 0, background: 'white', zIndex: 1, fontWeight: 'medium', fontSize: '18px', lineHeight: '27px', color: "#353448" }}>Actions</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowPerPage, page * rowPerPage + rowPerPage).map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar src={row.name.image} alt={row.name.name} sx={{ marginRight: '10px' }} />
                                            <Typography sx={{width:"50px",fontSize:"14px"}}>{row.name.name}</Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">{row.designation}</TableCell>
                                    <TableCell align="center">{row.department}</TableCell>
                                    <TableCell align="center">
                                        {row.signals.map((signal, idx) => (
                                            <Avatar key={idx} sx={{ width: 25, height: 25, bgcolor: signal.color, marginRight: '5px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <Typography variant="body1" sx={{ color: 'white' }}>{signal.letter}</Typography>
                                            </Avatar>
                                        ))}
                                    </TableCell>
                                    <TableCell align="center">
                                        <img src={row.overall_performance} alt="Performance" style={{ width: 48, height: 32 }} />
                                    </TableCell>
                                    <TableCell align="left">
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar src={row.reportin_to.image1} alt={row.reportin_to.name} sx={{ marginRight: '10px' }} />
                                            <Typography sx={{width:"50px",fontSize:"14px"}}>{row.reportin_to.name}</Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">{row.role}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.experience}</TableCell>
                                    <TableCell align="center">
                                        <Switch checked={statusToggles[index]} onChange={() => handleToggle(index)} color="primary" />
                                        <Typography sx={{ marginLeft: 1, width: "50px" }}>
                                            {statusToggles[index] ? "Active" : "Inactive"}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center" style={{ position: 'sticky', right: 0, background: 'white', zIndex: 1, borderLeft: "1px solid #E3E3E3", opacity: "1" }}>
                                        <Button variant="contained" sx={{ bgcolor: "#49C792" }}>Add Feedback</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <PaginationComponenent
                        count={rows.length}
                        page={page}
                        rowsPerPage={rowPerPage}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleRowsPerPage}
                        rows={rows}
                    />
                </div>
            </TableContainer>
        </ThemeProvider>
    );
}

export default MyTable;
