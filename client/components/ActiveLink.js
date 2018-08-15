import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"

const ActiveLink = ({ children, router, href }) => {
  let classes = "border-b-2"
  if (router.pathname === href) {
    classes += " border-orange-darker"
  } else {
    classes += " border-transparent hover:border-grey-light"
  }
  return (
    <Link href={href}>
      <a className={classes} style={{ textDecoration: "none" }}>
        {children}
      </a>
    </Link>
  )
}

export default withRouter(ActiveLink)
