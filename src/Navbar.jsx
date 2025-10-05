
import { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Switch,
  Box,
  Button,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useStore } from "./store"

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
   const { score } = useStore()

  // Zustand store
  const {
    metric,
    setMetric,
    reverse,
    setReverse,
    compare,
    filterCategory,
    loadCategoryData,
  } = useStore()

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget)
  const handleMenuClose = () => setAnchorEl(null)

  const handleMetricChange = (event) => setMetric(event.target.value)
  const handleReverseChange = (event) => setReverse(event.target.checked)
  const handleCategoryChange = (event) => loadCategoryData(event.target.value)

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#2b2929ff", p: { xs: 1, md: 2 } }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Başlık */}
        <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" ,fontSize:{xs:20,md:28}}}>
          Card Comparator
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2,marginRight:10 }}>
          <Button sx={{fontSize:20,fontWeight:"bold"}}
            color={filterCategory === "naruto" ? "success" : "inherit"}
            onClick={() => loadCategoryData("naruto")}
          >
            Naruto
          </Button>
          <Button sx={{fontSize:20,fontWeight:"bold"}}
            color={filterCategory === "onepiece" ? "success" : "inherit"}
            onClick={() => loadCategoryData("onepiece")}
          >
            One Piece
          </Button>
          <Button sx={{fontSize:20,fontWeight:"bold"}}
            color={filterCategory === "bleach" ? "success" : "inherit"}
            onClick={() => loadCategoryData("bleach")}
          >
            Bleach
          </Button>
        </Box>

       

        {/* Büyük ekran: metric + reverse + kategori + compare */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
      
     
          {/* Metric */}
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="metric-label" sx={{ color: "white" }}>
              Metric
            </InputLabel>
            <Select
              labelId="metric-label"
              value={metric}
              onChange={handleMetricChange}
              sx={{ color: "white" }}
            >
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="speed">Speed</MenuItem>
              <MenuItem value="price">Price</MenuItem>
            </Select>
          </FormControl>

          {/* Reverse */}
         <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
           <Typography sx={{ color: "white", mr: 1 }}>Reverse</Typography>
            <Switch
             checked={reverse}
             onChange={handleReverseChange}
             sx={{
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#c49ccf",
                opacity: 1,
              },
                "& .MuiSwitch-track": {
                backgroundColor: "#1e1e1e",
                opacity: 1,
             },
          }}
           />
        </Box>

          {/* Compare */}
          <Button
            variant="contained"
            color="secondary"
            sx={{ ml: 2 }}
            onClick={compare}
          >
            Compare
          </Button>
        </Box>

        {/* Küçük ekran: hamburger menü */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={compare}
            sx={{ mr: 2 }}
          >
            Compare
          </Button>

          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>

          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <Box sx={{ px: 2 }}>
              {/* Kategori */}
              <FormControl sx={{ mt: 1, minWidth: 140 }} size="small">
                <InputLabel id="category-label-xs">Category</InputLabel>
                <Select
                  labelId="category-label-xs"
                  value={filterCategory}
                  onChange={(e) => {
                    handleCategoryChange(e)
                    handleMenuClose()
                  }}
                >
                  <MenuItem value="naruto">Naruto</MenuItem>
                  <MenuItem value="onepiece">One Piece</MenuItem>
                  <MenuItem value="bleach">Bleach</MenuItem>
                </Select>
              </FormControl>

              {/* Metric */}
              <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
                <InputLabel id="metric-label-xs">Metric</InputLabel>
                <Select
                  labelId="metric-label-xs"
                  value={metric}
                  onChange={(e) => {
                    handleMetricChange(e)
                    handleMenuClose()
                  }}
                >
                  <MenuItem value="rating">Rating</MenuItem>
                  <MenuItem value="speed">Speed</MenuItem>
                  <MenuItem value="price">Price</MenuItem>
                </Select>
              </FormControl>

              {/* Reverse */}
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography sx={{ mr: 1 }}>Reverse</Typography>
                <Switch
                  checked={reverse}
                  onChange={(e) => {
                    handleReverseChange(e)
                    handleMenuClose()
                  }}
                />
              </Box>
            </Box>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
