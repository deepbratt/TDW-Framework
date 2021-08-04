import React from 'react'
import ListBannerContainer from '../../Sections/Sections/ListingBanner/ListBannerContainer'
import Section from '../../../components'
import {carTitle,carSubTitle,carData} from "../Utils/Text"
const index = () => {
    return (
        <Section>
            <ListBannerContainer carTitle={carTitle} carSubTitle={carSubTitle} carArray={carData}   />
        </Section>
    )
}

export default index
