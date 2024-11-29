import React, { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Typography } from '@mui/material';
import styles from './FoodSection.module.css'; 

// Styled component for the title
const TextNode = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 150%;
`;

function FoodSection() {
    // Fetch the data to display from the Redux store
    const dataToDisplay = useSelector((state) => state.DataToDisplay.data);

    // State for managing the start index of visible items and the current page
    const [startIndex, setStartIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // Number of items visible per page
    const visibleCount = 8;

    // Reset pagination when the data to display changes
    useEffect(() => {
        setStartIndex(0);
        setCurrentPage(1);
    }, [dataToDisplay]);

    // Function to handle "Next" pagination
    const handleNext = () => {
        if (startIndex + visibleCount < dataToDisplay.length) {
            setStartIndex((prev) => prev + visibleCount);
            setCurrentPage((prev) => prev + 1);
        }
    };

    // Function to handle "Previous" pagination
    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex((prev) => prev - visibleCount);
            setCurrentPage((prev) => prev - 1);
        }
    };

    // Extract the visible items for the current page
    const visibleItems = dataToDisplay.slice(startIndex, startIndex + visibleCount);

    // Total items and total pages for pagination display
    const totalItems = dataToDisplay.length;
    const totalPages = Math.ceil(totalItems / visibleCount);

    return (
        <div>
            {/* CssBaseline ensures consistent baseline styling */}
            <CssBaseline />
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: 'white', padding: '10px' }}>
                    {/* Header and pagination controls */}
                    <div className={styles.container}>
                        {/* Section title */}
                        <TextNode>Food You Would Like</TextNode>

                        {/* Pagination controls */}
                        <div className={styles.pagination}>
                            <p className={styles.pageInfo}>
                                Showing {currentPage} out of {totalPages}
                            </p>
                            <div className={styles.arrowContainer}>
                                {/* Previous arrow */}
                                <ArrowBackIosIcon
                                    onClick={handlePrev}
                                    className={`${styles.arrow} ${startIndex === 0 ? styles.disabled : ''}`}
                                    fontSize="large"
                                />
                                {/* Next arrow */}
                                <ArrowForwardIosIcon
                                    onClick={handleNext}
                                    className={`${styles.arrow} ${startIndex + visibleCount >= dataToDisplay.length ? styles.disabled : ''}`}
                                    fontSize="large"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Grid displaying the food items */}
                    <Grid container spacing={3}>
                        {visibleItems.length > 0 ? (
                            // Map visible items to Grid components
                            visibleItems.map((item) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                                    <FoodItem Food={item} imageUrl={item.imageurl} />
                                </Grid>
                            ))
                        ) : (
                            // Message when no items are available
                            <Grid item xs={12}>
                                <Typography variant="h6" component="div" color="red" sx={{ textAlign: 'center' }}>
                                    We Don't Have These Items Right Now
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default FoodSection;
