import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import CartItems from './CartItems';
import { Alert, AlertTitle } from '@mui/material';
import { removeAllItemsFromCart } from '../Redux/Slices/CartItems';
import styles from './Cart.module.css';

const Cart = () => {
    // States to manage modal visibility and order placement status
    const [open, setOpen] = React.useState(false);
    const [isOrderPlaced, setIsOrderPlaced] = React.useState(false);

    // Open modal
    const handleOpen = () => setOpen(true);

    // Close modal and reset order status
    const handleClose = () => {
        setIsOrderPlaced(false);
        setOpen(false);
    };

    // Redux selectors to fetch cart items and total quantity
    const cartItems = useSelector((state) => state.cartItems.cartItems);
    const totalQuantity = useSelector((state) => state.cartItems.totalQuantity);
    const dispatch = useDispatch();

    // Handle "Order Now" button click, clear cart items, and show success message
    const handleOrder = () => {
        dispatch(removeAllItemsFromCart());
        setIsOrderPlaced(true);

        // Auto-close modal and reset order status after 2 seconds
        setTimeout(() => {
            setOpen(false);
            setIsOrderPlaced(false);
        }, 2000);
    };

    let totalAmt = 0; // Variable to calculate total amount of items in cart

    return (
        <div>
            {/* Shopping cart icon with badge showing total quantity */}
            <Badge badgeContent={totalQuantity} color="primary">
                <ShoppingCartIcon
                    color="black"
                    fontSize="large"
                    onClick={handleOpen}
                    style={{ cursor: 'pointer', opacity: 0.8 }}
                />
            </Badge>

            {/* Modal for displaying cart items and order details */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.modalStyle}>
                    {isOrderPlaced ? (
                        // Success message after placing the order
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            Order Placed Successfully. We Will Deliver It Soon...
                        </Alert>
                    ) : (
                        <>
                            {/* Header for the cart */}
                            <Typography
                                variant="h4"
                                sx={{ textAlign: 'center', margin: 2.5, fontWeight: 'bold' }}
                            >
                                Cart Items
                            </Typography>

                            {/* Display cart items if available; otherwise show "No Items in Cart" */}
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => {
                                    totalAmt += item.price * item.quantity; // Calculate total amount
                                    return <CartItems key={item.id} item={item} />;
                                })
                            ) : (
                                <Typography variant="h6" className={styles.noItemsText}>
                                    No Items in Cart
                                </Typography>
                            )}

                            {/* Total amount display */}
                            <Box className={styles.totalAmountBox}>
                                {totalAmt > 0 && (
                                    <>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            Total Amount
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            Rs {totalAmt}
                                        </Typography>
                                    </>
                                )}
                            </Box>

                            {/* Buttons for closing modal and placing order */}
                            <Box className={styles.buttonGroup}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={handleClose}
                                    sx={{
                                        width: { xs: '100%', sm: 'auto' },
                                    }}
                                >
                                    Close
                                </Button>
                                <Button
                                    variant="contained"
                                    color="success"
                                    disabled={totalQuantity <= 0}
                                    onClick={handleOrder}
                                    sx={{
                                        width: { xs: '100%', sm: 'auto' },
                                    }}
                                >
                                    Order Now
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default Cart;
