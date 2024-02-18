import { Divider, IconButton, InputBase, Paper } from "@mui/material"
import PageTitle from "../Shared/PageTitle/PageTitle"
import { MenuOutlined, Search } from "@mui/icons-material"
import useUsers from "../../Hooks/useUsers";
import Loader from "../../Utils/Loader/Loader";

const AllReceipt = () => {
    const [users, isLoading, refetch] = useUsers();
    if (isLoading) {
      return <Loader width="20" center="center" />;
    }
  
    const handleSearch = (e) => {
      e.preventDefault();
    };
  return (
    <div> <div>
    <div className="flex items-center">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold bg-blue-400 max-w-fit px-5 py-2 rounded-md text-white">
          Total Receipts : <span>{users.length}</span>
        </h1>
      </div>
        <PageTitle title="All Receipt" />
      <div className="flex-1 flex justify-end">
        <Paper
          component="form"
          onSubmit={handleSearch}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            maxWidth: 500,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuOutlined />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Packages"
            name="search"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            type="submit"
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <Search />
          </IconButton>
        </Paper>
      </div>
    </div>

    <div className="relative overflow-x-auto shadow-md rounded-md">
      <table className="w-full text-left rtl:text-right ">
        <thead className="text-lg uppercase bg-blue-400 text-white ">
          <tr>
            <th scope="col" className="px-6 py-3">
              User name
            </th>
            <th scope="col" className="px-6 py-3">
              Transaction ID
            </th>
           
            <th scope="col" className="px-6 py-3 text-center">
              Booking Id
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Check in date
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Check out date
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Payment Date
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Amount
            </th>
            
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </div>
  </div></div>
  )
}

export default AllReceipt