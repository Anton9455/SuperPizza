import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { IOrderState } from '../../assets/scripts/types';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(id: number, name: string, count: number) {
    return { id, name, count };
}

export default function BasicTable(props: any) {
    const classes = useStyles();
    let rows: Array<any> = []
    props.pizza.forEach((value: any, key: number) => {
        if (value.count) {
            rows.push(createData(key, value.name, value.count))
        }
    })
    if (rows.length) {
        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Наименование</TableCell>
                            <TableCell align="right">Количество</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row: any) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.count}</TableCell>
                                <TableCell align="right">
                                    <IconButton edge="end" aria-label="delete" onClick={() => {
                                        props.editOrder(props.pizza.delete(row.id) ? new Map<number, IOrderState>(props.pizza) : new Map<number, IOrderState>());
                                    }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    } else {
        return <div>Корзина пуста</div>
    }
}
