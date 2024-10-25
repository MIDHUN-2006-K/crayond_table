import React from 'react';
import { Table, TableFooter, TablePagination, TableContainer, Paper } from '@mui/material';

function PaginationComponenent({ count, page, rowsPerPage, onPageChange, onRowsPerPageChange }) {
    return (
        <TableContainer component={Paper}>
            <Table>
                
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={count}
                        page={page}
                        onPageChange={onPageChange}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={onRowsPerPageChange}
                    />
                
            </Table>
        </TableContainer>
    );
}

export default PaginationComponenent;
