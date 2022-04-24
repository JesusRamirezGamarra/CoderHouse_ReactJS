import React from 'react'
import BannerSuperiorWithFunction from '../../components/atoms/Banner/SuperiorWithFunction'
import BannerSuperiorWithClassBased from '../../components/atoms/Banner/SuperiorWithClassBased'

const BannerContainer = () => {
const promocionPrincipal ="50"
const promocionSecundaria ="10"
const promocionPrincipalExtends ="30"
const promocionSecundariaExtends ="15"

    return (
        <>
            <BannerSuperiorWithClassBased promocionPrincipal={promocionPrincipal} promocionSecundaria={promocionSecundaria} />
            <BannerSuperiorWithFunction promocionPrincipal={promocionPrincipalExtends} promocionSecundaria={promocionSecundariaExtends} />

        </>
    )
}

export {BannerContainer}