import React from 'react';
import Biryani from '../Assets/img/biryani.avif';
import Dosa from '../Assets/img/dosa.avif';
import Paratha from '../Assets/img/paratha.avif';
import Cakes from '../Assets/img/cakes.avif';
import Idli from '../Assets/img/idli.avif';
import Poha from '../Assets/img/poha.avif';
import Upma from '../Assets/img/upma.avif';
import Omelette from '../Assets/img/omlete.avif';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { useDispatch } from 'react-redux';
import { addData } from '../Redux/Slices/DataToDisplaySlice';
import FoodData from '../Component/FoodItemsData';
import styled from 'styled-components';
import styles from './Category.module.css';

// Styled-component for the title text
const TextNode = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 150%;
`;

// Array of images with their names for the categories
const images = [
    { src: Biryani, name: 'biryani' },
    { src: Cakes, name: 'cake' },
    { src: Dosa, name: 'dosa' },
    { src: Paratha, name: 'paratha' },
    { src: Idli, name: 'idli' },
    { src: Poha, name: 'poha' },
    { src: Upma, name: 'upma' },
    { src: Omelette, name: 'omelette' },
];

function Category() {
    const dispatch = useDispatch(); // Redux hook to dispatch actions

    // Function to update the displayed data based on the selected food category
    const updateDataToDisplay = (food) => {
        // Filter FoodData to match the selected category
        const dataToDisplay = FoodData.filter(item => item.foodName.toLowerCase().includes(food.toLowerCase()));
        dispatch(addData(dataToDisplay)); // Dispatch the filtered data to Redux store
    };

    return (
        <div>
            <CssBaseline /> {/* Ensures consistent baseline styling */}
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: 'white', marginTop: 3 }}>
                    {/* Header section with title */}
                    <div className={styles.header}>
                        <TextNode>What's on your mind?</TextNode>
                    </div>
                    {/* Grid displaying category images */}
                    <div className={styles.imageGrid}>
                        {images.map((item, index) => (
                            <div key={index} className={styles.imageWrapper}>
                                <img
                                    src={item.src} // Image source
                                    alt={item.name} // Alt text for accessibility
                                    className={styles.image} // Class for image styling
                                    onClick={() => updateDataToDisplay(item.name)} // Handle image click
                                />
                            </div>
                        ))}
                    </div>
                    {/* Divider line */}
                    <hr className={styles.divider} />
                </Box>
            </Container>
        </div>
    );
}

export default Category;
