
import { Person } from "@/models";
import { removeFavorite } from "@/redux/states/favorite";
import { AppStore } from "@/redux/store";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

const FavoriteTable = () => {

    const favoritePeople = useSelector((store: AppStore) => store.favorites);
    const dispatch = useDispatch();
    const handleClick = (person: Person) => {
        dispatch(removeFavorite(person));
        
    };
    // COLUMNS CONFIGURATION
    const colums = [
        {
            field: 'actions',
            type: 'actions',
            sortable: false,
            headerName: '',
            width: 50,
            renderCell: (params: GridRenderCellParams) => (
                <>
                    {
                        <IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
                            <Delete />
                        </IconButton>
                    }
                </>
            )
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
        },
        {
            field: 'category',
            headerName: 'Categories',
            flex: 1,
        },
        {
            field: 'company',
            headerName: 'Company',
            flex: 1,
        },
        {
            field: 'levelOfHappiness',
            headerName: 'Level of happiness',
            flex: 1,
        }
    ];

    // PAGE GRID CONFIG (5 PEOPLE)
    const pageSize = 5;

    return (
        <DataGrid
            rows={favoritePeople}
            columns={colums}
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            pageSize={pageSize}
            rowsPerPageOptions={[pageSize]}
            getRowId={(row: any) => row.id}
        />
    )
}
export default FavoriteTable