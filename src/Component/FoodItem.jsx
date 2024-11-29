import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FoodItemCss from './FoodItem.module.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/Slices/CartItems';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Stack, TextField } from '@mui/material';

export default function FoodItem(props) {
    // State to manage quantity of the item being added to the cart
    const [quantity, setQuantity] = React.useState(1);

    // State to manage the message displayed in the snackbar
    const [snackbarMsg, setSnackbarMsg] = React.useState('Item Added To Cart!');

    // Function to update the quantity based on user input
    const handleQuantityUpdate = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    // State to control the visibility of the snackbar
    const [open, setOpen] = React.useState(false);

    // Function to show the snackbar
    const handleSnackbar = () => {
        setOpen(true);
    };

    // Function to close the snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    // Hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Function to add the item to the cart
    const addItemToCart = () => {
        // Check if the quantity is valid
        if (quantity <= 0) {
            setSnackbarMsg("Invalid Quantity. Please Try Again!");
            return handleSnackbar();
        }

        // Create the item object with the required details
        const item = {
            ...props.Food,
            quantity: quantity,
            imageurl: props.imageUrl
        };

        // Set success message, reset quantity, and dispatch action to add item to cart
        setSnackbarMsg("Item Added To Cart!");
        handleSnackbar();
        setQuantity(1);
        dispatch(addProduct(item));
    };

    return (
        <>
            {/* Snackbar for displaying success or error messages */}
            <Snackbar 
                sx={{ marginTop: { lg: 10 } }} 
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
                open={open} 
                autoHideDuration={1000} 
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={snackbarMsg === "Invalid Quantity. Please Try Again!" ? "error" : "success"}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarMsg}
                </Alert>
            </Snackbar>

            {/* Card displaying the food item */}
            <Card variant="plain" className={FoodItemCss.card}>
                <Box sx={{ position: 'relative' }}>
                    {/* Aspect ratio wrapper for the image */}
                    <AspectRatio ratio="4/3" className={FoodItemCss.aspectRatio}>
                        <figure>
                            <img
                                src={props.imageUrl}
                                loading="lazy"
                                alt={props.Food.foodName}
                                className={FoodItemCss.image}
                            />
                        </figure>
                    </AspectRatio>

                    {/* Overlay with options */}
                    <CardCover
                        className={`${FoodItemCss.cardCover} gradient-cover`}
                        sx={{
                            '&:hover, &:focus-within': {
                                opacity: 1,
                            },
                        }}
                    >
                        <div>
                            <Box
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    background: 'rgb(59, 62, 69,0.7)',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    flexGrow: 1,
                                    flexWrap: 'wrap',
                                    alignSelf: 'flex-end',
                                }}
                            >
                                {/* Display the food name */}
                                <Stack direction={'row'} marginRight={1}>
                                    <Typography level="h2" noWrap sx={{ fontSize: { xs: 'sm', md: 'lg' }, flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        <Link
                                            overlay
                                            underline="none"
                                            sx={{
                                                color: '#fff',
                                                display: 'block',
                                            }}
                                        >
                                            {props.Food.foodName}
                                        </Link>
                                    </Typography>
                                </Stack>

                                {/* Quantity input and Add to Cart button */}
                                <Stack direction={'row'} spacing={1}>
                                    <IconButton
                                        size="sm"
                                        variant="solid"
                                        color="neutral"
                                        className={FoodItemCss.iconButton}
                                    >
                                        <span>
                                            <TextField
                                                type='number'
                                                size="small"
                                                value={quantity}
                                                onChange={handleQuantityUpdate}
                                                inputProps={{
                                                    min: 1,
                                                }}
                                                focused
                                                sx={{
                                                    width: 70,
                                                    input: { color: 'white' },
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'transparent',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'transparent',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'transparent',
                                                        },
                                                    },
                                                }}
                                            />
                                        </span>
                                    </IconButton>

                                    <IconButton
                                        size="sm"
                                        variant="solid"
                                        color="neutral"
                                        className={FoodItemCss.iconButtonCart}
                                    >
                                        <span onClick={addItemToCart}><AddShoppingCartIcon /></span>
                                    </IconButton>
                                </Stack>
                            </Box>
                        </div>
                    </CardCover>
                </Box>

                {/* Display restaurant name, price, and delivery time */}
                <Box className={FoodItemCss.foodItem}>
                    <Typography sx={{ fontSize: 'xl', fontWeight: 'bold' }}>
                        {props.Food.restaurantName}
                    </Typography>

                    <Typography sx={{ fontSize: 'xl', fontWeight: 'bold', color: 'green' }}>
                        Rs.{props.Food.price}
                    </Typography>
                    <Chip
                        variant="outlined"
                        color="neutral"
                        size="md"
                        sx={{
                            py: 0.7,
                            px: 2,
                            marginTop: 0.3,
                            borderRadius: '16px',
                            borderColor: 'black',
                            '&.MuiChip-outlined': {
                                borderColor: 'black',
                            },
                        }}
                    >
                        {props.Food.timeForDelivery}
                    </Chip>
                </Box>
            </Card>
        </>
    );
}
