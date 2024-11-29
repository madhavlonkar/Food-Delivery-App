import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, deleteItemFromCart } from '../Redux/Slices/CartItems';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './CartItems.module.css';

function CartItems({ item }) {
    const dispatch = useDispatch(); // Used to dispatch actions to Redux store

    return (
        <Box className={styles.cartItemBox}>
            {/* Image container for the product */}
            <Box className={styles.imageContainer}>
                <img src={item.imageurl} alt={item.foodName} className={styles.productImage} />
            </Box>

            {/* Details and actions for the product */}
            <Box className={styles.detailsContainer}>
                {/* Product name and price */}
                <Stack direction="column" spacing={1} className={styles.textContainer}>
                    <Typography variant="h6" component="div">
                        {item.foodName}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Rs {item.price * item.quantity} {/* Calculate total price for the product */}
                    </Typography>
                </Stack>

                {/* Action buttons for quantity management and deletion */}
                <Stack direction="row" alignItems="center" spacing={2} className={styles.actionsContainer}>
                    {/* Decrease quantity button */}
                    <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => {
                            dispatch(decreaseQuantity(item.id)); // Dispatch action to decrease quantity
                        }}
                        className={styles.quantityButton}
                    >
                        -
                    </Button>

                    {/* Display current quantity */}
                    <Typography variant="body2" className={styles.quantityDisplay}>
                        {item.quantity}
                    </Typography>

                    {/* Increase quantity button */}
                    <Button
                        variant="outlined"
                        color="success"
                        size="small"
                        onClick={() => dispatch(increaseQuantity(item.id))} // Dispatch action to increase quantity
                        className={styles.quantityButton}
                    >
                        +
                    </Button>

                    {/* Delete item button */}
                    <DeleteIcon
                        fontSize="large"
                        color="primary"
                        className={styles.deleteIcon}
                        onClick={() => dispatch(deleteItemFromCart(item.id))} // Dispatch action to delete item
                    />
                </Stack>
            </Box>
        </Box>
    );
}

export default CartItems;
