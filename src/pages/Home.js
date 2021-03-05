import React from 'react'
import { Col, Grid, Row } from 'rsuite'
import Navbar from '../components/Navbar/Navbar'
import { useMediaQuery } from '../misc/custom-hooks';

const Home = () => {

    const isMobile = useMediaQuery('(max-width: 992px)');

    return (
        <Grid fluid className={isMobile ? "" : "h-100"}>
            <Row>
                <Navbar />
            </Row>
        </Grid>
    )
}

export default Home
