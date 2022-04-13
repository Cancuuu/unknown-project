import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";

export default function Home() {
  return (
    <div className="h-screen px-4 bg-[#F3F3F3]">
      <div className="flex justify-center w-full">
        <nav className="fixed bottom-0 md:w-[400px] lg:w-[600px] w-[350px] rounded-t-[100px] py-2 px-8 shadow-2xl shadow-black flex justify-around">
          <IconButton>
            <ExploreIcon sx={{ fontSize: 32, color: "#00B5A2" }} />
          </IconButton>
          <IconButton>
            <FavoriteIcon sx={{ fontSize: 32, color: "#76C466" }} />
          </IconButton>

          <IconButton>
            <WorkspacesIcon sx={{ fontSize: 32, color: "#FF505B" }} />
          </IconButton>

          <IconButton>
            <SearchIcon sx={{ fontSize: 32, color: "#FF7D00" }} />
          </IconButton>

          <IconButton>
            <AccountCircleIcon sx={{ fontSize: 32, color: "#F7D14E" }} />
          </IconButton>
        </nav>
      </div>
    </div>
  );
}
