// import React from 'react'
// // import UsedCars from "../../layout/Pages/SearchUsedCars/index"
// const index = () => {
//     return (
//         <>
//             {/* <UsedCars/> */}
//         </>
//     )
// }

// export default index
import MetaTags from "../../components/MetaTags"
import UsedCars from "../../layout/Sections/Sections/UsedCars/UsedCarsContainer"
import PageMeta from "../../Utils/constants/language/en/pageData"
const index = () => {
    return (
        <>
        <MetaTags
        title={PageMeta.advanceFilters.title}
        description={PageMeta.advanceFilters.description}
        canonical={PageMeta.advanceFilters.canonical}
        keywords={PageMeta.advanceFilters.keywords}
      />
            <UsedCars/>
        </>
    )
}

export default index
