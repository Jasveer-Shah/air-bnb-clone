import React from 'react'
import './Banner.css';
import { Button } from '@material-ui/core'
function Banner() {
    return (
        <div className="banner">

            <div className="banner-search">
                    <Button className="search-button" variant='outlined'>Search Dates</Button>
            </div>

            <div className="banner-info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
                <Button variant='outlined'>
                    Explore nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
