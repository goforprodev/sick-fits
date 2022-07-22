import Link from "next/link"
import Nav from "./Nav"
import styled from "styled-components"

const Logo = styled.h1`
// background:red;
// display:inline-block;
// font-size:3rem;
// margin-left:2rem;
// position:relative;
// z-index:2;
// transform:skew(-7deg);
// text-transform:uppercase;
// a{
// 	color:white;
// 	text-decoration:none;
// }

`

const HeaderStyles = styled.header`
.bar{
	// display:grid;
	// grid-template-columns:auto 1fr;
	// border-bottom:10px solid var(--black,black);
	// justify-content:space-between;
	// align-items:center;
}

.sub-bar{
	
}
`
export default function Header(){
	return(
		<HeaderStyles>
			<div className = "bar">
				<Logo>
					<Link href="/">
					 👟Acube feets
					</Link>
				</Logo>
			</div>
			<div className = "sub-bar">
				<p>Search</p>
			</div>
			<Nav/>
		</HeaderStyles>

		)
}