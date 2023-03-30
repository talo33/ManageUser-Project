import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button} from '@mui/material'
import FormDialog from '../Component/Dialog'
import { axiosClient } from '../Api/axiosClient'

function DataGridmember ()  {

    const[tabledata, setTabledata] = useState([]);
    const [formdata, setFormdata] = useState({name: "", email: "", phone: ""});
    const [open, setOpen] = React.useState(false);
    
    const url=`http://localhost:8000/v1/user/`
    
    useEffect(() => {
        GetUser();
    },[]);
    const token = localStorage.getItem("accesstoken");
    const GetUser = () => {
        fetch(url, {headers: {token: `Bearer ${token}`} })
        .then(resp=>resp.json())
        .then(resp=>setTabledata(resp?.map((user) => {
            return {
              id: user._id,
              username: user.username,
              email: user.email,
              phone: user.phone,
              ...resp
            };
          }),))
        
    }
    

    const columns = [
        {field: "id", hideable: true},
        {field: "username", headername: "Name", flex: 1},
        {field: "email", headername: "Email", flex: 1},
        {field: "phone", headername: "Phone", flex: 1},
        {field: "actions",type: "actions" ,flex: 1 ,getActions: (params)=>
        [
            // <Button variant="outlined" color="primary" onClick={()=>handleUpdate(params.row)}>Update</Button>,
            <Button variant="outlined" color="secondary" onClick={()=>handleDelete(params.id)}>Delete</Button>
        ]
        }
        
    ];

    // const rows = data.map((row) => ({
    //     id: row.id,
    //     city: row.team.city,
    //     abbreviation: row.team.abbreviation,
    //     conference: row.team.conference,
    //     division: row.team.division,
    // }))

    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setFormdata({name: "", email: "", phone: ""})
    };

    const onChange=(e)=>{
        const {value,id} = e.target;
        setFormdata({...formdata,[id]:value})
    };

    const handleFormSubmit=()=> {
        console.log(formdata);
        if(formdata.id){
            fetch(url+`/${formdata.id}`, {method:"PUT", 
                        body:JSON.stringify(formdata),
                        headers:{'content-type':"application/json"}
                        })
            .then(resp=>resp.json())
            .then(resp=>
                {handleClose()
                GetUser()
                
            })
            .catch(error=>console.log(error))
            
        }
        else{        
            fetch(url, {method:"POST", 
                        body:JSON.stringify(formdata),
                        headers:{'content-type':"application/json"}
                        })
            .then(resp=>resp.json())
            .then(resp=>
                {handleClose()
                GetUser()
                setFormdata({name: "", email: "", phone: ""})
            })
        }
    };
    
    const handleDelete=(id)=>{
        const confirm =window.confirm("Are you sure, you want to delete this user", id)
        console.log(id)
        if(confirm){
            // fetch(`${url}${id}/delete/?id=${id}`, {method:"DELETE", headers: {token: `Bearer ${token}`}})
            // .then(resp=>resp.json())
            // .then(resp=>GetUser())
            axiosClient.delete(`v1/user/${id}/delete/`, {params: {id: id}, headers: {token: `Bearer ${token}`}})
        }
        GetUser();
    };

    // const handleUpdate=(oldData)=>{
    //     console.log(oldData)
    //     setFormdata(oldData)
    //     handleClickOpen()
        
    // };
    
    return (
        
        <div 
            className="datagrid" 
            style={{
                height: 500, 
                width: "80%", 
                marginTop: "20px", 

            }}>
            
            <p style={{
                display: "flex", 
                justifyContent: "center", 
                paddingBottom: "px", 
                fontSize: "40px", 
                color: "#264653"
                }}>
                <i>User management Page</i>
            </p>
            <hr style={{margin: "0 25% 20px 25%", width: "50%"}}/>
            
            {/* <Grid align="left">
                <Button variant='contained' color='primary' onClick={handleClickOpen}>Add User</Button>
            </Grid> */}
            
            <DataGrid
                sx={{ 
                    ".MuiTablePagination-selectLabel": {
                        marginTop: "15px",
                    },
                    ".MuiTablePagination-displayedRows": {
                        marginTop: "18px",
                    },
                    
                    ".MuiDataGrid-columnHeaders": {
                        borderTop: "none",
                        backgroundColor: "#0f4c5c",
                        color: "#fff",
                    },
                    // ".MuiSvgIcon-root": {
                    //     color: "black",
                    // },
                    ".MuiDataGrid-virtualScrollerContent": {
                        bgcolor: "#edf2f4",
                    },
                    ".MuiDataGrid-footerContainer": {
                        backgroundColor: "#0f4c5c",
                    },
                    ".MuiSvgIcon-root": {
                        color: "#fff"
                    },
                    ".MuiToolbar-root ": {
                        color: "#fff"
                    },
                    ".MuiDataGrid-selectedRowCount ": {
                        color: "lightgray"
                    },
                 }}
                 
                // checkboxSelection disableRowSelectionOnClick {...tabledata}         
                rows={tabledata}
                columns={columns}
                initialState={{
                    ...tabledata.initialState,
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 15]}
                
                />
            <FormDialog 
                open={open} 
                handleClose={handleClose} 
                data={formdata} 
                onChange={onChange} 
                handleFormSubmit={handleFormSubmit}
            />
            
        </div>
    )
}

export default DataGridmember
