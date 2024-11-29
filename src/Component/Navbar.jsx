import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Cart from './Cart';
import { TextField } from '@mui/material';
import FoodData from '../Component/FoodItemsData';
import { useDispatch } from 'react-redux';
import { addData } from '../Redux/Slices/DataToDisplaySlice';
import Logo from '../Assets/swiggyLogo.png';
import "bootstrap-icons/font/bootstrap-icons.css";

const pages = ['Breakfast', 'Lunch', 'Dinner'];

function Navbar() {
    // State for managing user search input
    const [userSearch, setUserSearch] = React.useState('');

    // Handle change in search input with a delay
    const handleChange = (e) => {
        setTimeout(() => {
            setUserSearch(e.target.value);
        }, 2000);
    };

    const dispatch = useDispatch();

    // Effect to update the displayed food items based on user search
    React.useEffect(() => {
        const dataToDisplay = FoodData.filter(item => item.foodName.toLowerCase().includes(userSearch));
        console.log(userSearch); // Debugging log for current search input
        dispatch(addData(dataToDisplay));
    }, [userSearch, dispatch]);

    // Handle click on the logo to reset the food items displayed
    const handleLogoClick = () => {
        const items = FoodData.filter(item => item.foodName.toLowerCase().includes(''));
        dispatch(addData(items));
    };

    // Search bar label with an icon
    const searchLabel = (
        <span>
            <i className="bi bi-search"></i> Search for your favorite food
        </span>
    );

    return (
        <AppBar position="static" color="transparent">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ padding: '5px' }}>
                    {/* Logo with click functionality */}
                    <img
                        src={Logo}
                        height={40}
                        alt="Swiggy Logo"
                        style={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor: 'pointer' }}
                        onClick={handleLogoClick}
                    />

                    {/* Navigation buttons */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, paddingLeft: 3 }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    my: 2,
                                    color: 'black',
                                    display: 'block',
                                    alignProperty: 'center',
                                    fontWeight: 'bold',
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Search bar */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, paddingLeft: { xs: 3, sm: 10, lg: 10 } }}>
                        <TextField
                            id="outlined-basic"
                            color="warning"
                            label={searchLabel}
                            variant="outlined"
                            sx={{
                                width: { xs: 100, sm: 300, md: 300, lg: 700, xl: 900 }, // Responsive widths
                                maxWidth: 900, // Ensures it doesn't exceed this width on larger screens
                            }}
                            onChange={handleChange}
                        />
                    </Box>

                    {/* Cart section */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <div style={{ flex: 1 }}>
                            {/* Placeholder for additional elements */}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Cart />
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
