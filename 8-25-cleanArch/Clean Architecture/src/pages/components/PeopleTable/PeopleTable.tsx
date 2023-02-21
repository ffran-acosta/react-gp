import { Person } from "@/models";
import { addFavorite } from "@/redux/states/favorite";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid"
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const PeopleTable = () => {
    //FOR CHECKBOX, Trabaja sonre el moedelo de <Person>
    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

    const statePeople = useSelector((store: AppStore) => store.people);
    const favoritePeople = useSelector((store: AppStore) => store.favorites);
    //Find people and 
    const findPerson = (person: Person) => !!favoritePeople.find(p => p.id === person.id);
    const filterPerson = (person: Person) => favoritePeople.filter(p => p.id !== person.id);

    const dispatch = useDispatch();
    const handleChange = (person: Person) => {
        const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
        dispatch(addFavorite(filteredPeople));
        setSelectedPeople(filteredPeople);
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
                <>{<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />}</>
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
            rows={statePeople}
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
export default PeopleTable