import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below
const data = [{"Title":"Edgedancer (The Stormlight Archive)","Author":"Brandon Sanderson","My Rating":4,"Average Rating":4.24,"Number of Pages":204.0},{"Title":"Memoirs of a Geisha","Author":"Arthur Golden","My Rating":5,"Average Rating":4.14,"Number of Pages":503.0},{"Title":"East of Eden","Author":"John Steinbeck","My Rating":0,"Average Rating":4.4,"Number of Pages":601.0},{"Title":"A Long Obedience in the Same Direction: Discipleship in an Instant Society","Author":"Eugene H. Peterson","My Rating":5,"Average Rating":4.26,"Number of Pages":216.0}]
const data1 = [
    {
        name: {
            firstName: 'John',
            lastName: 'Doe',
        },
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Charleston',
        state: 'South Carolina',
    },
];

const MaterialTable = () => {
    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name',
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Address',
            },
            {
                accessorKey: 'city',
                header: 'City',
            },
            {
                accessorKey: 'state',
                header: 'State',
            },
        ],
        [],
    );

    return <MaterialReactTable columns={columns} data={data} />;
};

export default MaterialTable;