import React from "react"
import ContentLoader from "react-content-loader"

const TodoLoader = (props) => (
  <ContentLoader
    height={160}
    width="100%"
    backgroundColor="transparent"
    {...props}
  >
    <circle cx="40%" cy="86" r="8" />
    <circle cx="50%" cy="86" r="8" />
    <circle cx="60%" cy="86" r="8" />
  </ContentLoader>
)

export { TodoLoader }

