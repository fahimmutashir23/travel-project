import Loader from "../../../Utils/Loader/Loader";
import AllPackagesTable from "./AllPackagesTable";
import useTourPackages from "../../../Hooks/useTourPackages";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import { MenuOutlined, Search } from "@mui/icons-material";
import PageTitle from "../../../components/Shared/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import useStat from "../../../Hooks/useStat";

const AllPackages = () => {
  const [searchValue, setSearchValue] = useState('');
  const [tourPackages, isLoading, refetch] = useTourPackages({}, searchValue);
  const [statistics] = useStat()

  const handleSearch = (e) => {
      e.preventDefault();
      const searchValue = e.target.search.value;
      setSearchValue(searchValue)
  };

  useEffect(() => {
    refetch()
  }, [searchValue])

  if (isLoading) {
    return <Loader width="20" center="center" />;
  } 

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold bg-blue-400 max-w-fit px-5 py-2 rounded-md text-white">
            Total Packages : <span>{statistics.totalPackages}</span>
          </h1>
        </div>
        <PageTitle title="All Packages" />
        <div className="flex-1 flex justify-end">
          <Paper
            component="form"
            onSubmit={handleSearch}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              maxWidth: 400,
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
                Package name
              </th>
              <th scope="col" className="px-6 py-3">
                Destination
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Duration
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                View
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Edit
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Delete
              </th>
            </tr>
          </thead>
            
          <tbody>
            {tourPackages.map((tourPackage) => (
              <AllPackagesTable
                key={tourPackage._id}
                tourPackage={tourPackage}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center mt-5 text-xl font-medium">{tourPackages.length === 0 && 'Packages not found.'}</p>
    </div>
  );
};

export default AllPackages;
