import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 21"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M8.75 17.612v4.638a.751.751 0 001.354.444l2.713-3.692zM23.685.139a.75.75 0 00-.782-.054l-22.5 11.75a.752.752 0 00.104 1.375l6.255 2.138 13.321-11.39L9.775 16.377l10.483 3.583a.753.753 0 00.984-.599l2.75-18.5a.751.751 0 00-.307-.722z"
        fill="#5b64b5"
        data-original="#000000"
      />
    </svg>
  )
}

export default SvgComponent
