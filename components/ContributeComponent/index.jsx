import React from "react"
import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import Contributepage from "./Contributepage"
import Seo from "../SeoComponents/Seo"
const index = () => {
  const title = "CSI"
  const description ="Catalysing Social Impact [CSI] is a space for everyone. Whether you are a thinker, doer, investor or just an observer, we have opportunities for everyone to come together to ignite positive changes in the field of social impact through strategic initiatives."
  const path = "https://catalysingsocialimpact.in/sdg.html"
  const metaImage = ""
  return (
    <>
      <Contributepage />
      <Seo
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
    </>
  )
}

export default index
