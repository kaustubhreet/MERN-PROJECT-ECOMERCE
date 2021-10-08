import styled from 'styled-components';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './contact.css';
const footer=()=>{
	
const Box = styled.div`
padding: 80px 60px;
background: #f8f9fa;
position: relative;
bottom: 0;

width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`
 const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

 const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

 const FooterLink = styled.a`
color: #000;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

 const Heading = styled.p`
font-size: 24px;
color: #000;
margin-bottom: 40px;
font-weight: bold;
`;

	
	return(	
<Box>

<h1 style={{ color: "black", 
textAlign: "center", 
marginTop: "-50px" }}>
Footer Section
</h1><br/>
<Container>
<Row>
<Column>
<Heading>About Us</Heading>
<FooterLink href="#">Aim</FooterLink>
<FooterLink href="#">Vision</FooterLink>
<FooterLink href="#">Testimonials</FooterLink>
</Column>
<Column>
<Heading>Services</Heading>
<FooterLink href="#">Writing</FooterLink>
<FooterLink href="#">Internships</FooterLink>
<FooterLink href="#">Coding</FooterLink>
<FooterLink href="#">Teaching</FooterLink>
</Column>
<Column>
<Heading>Contact Us</Heading>
<FooterLink href="#">Uttar Pradesh</FooterLink>
<FooterLink href="#">Ahemdabad</FooterLink>
<FooterLink href="#">Indore</FooterLink>
<FooterLink href="#">Mumbai</FooterLink>
</Column>
<Column>
<Heading>Social Media</Heading>
<FooterLink href="#">
<i className="fa fa-facebook">
<span style={{ marginLeft: "10px" }}>
Facebook
</span>
</i>
</FooterLink>
<FooterLink href="#">
<i className=" fa fa-instagram ">
<span style={{ marginLeft: "10px" }}>
Instagram
</span>
</i>
</FooterLink>
<FooterLink href="#">
<i className="fa fa-twitter">
<span style={{ marginLeft: "10px" }}>
Twitter
</span>
</i>
</FooterLink>
<FooterLink href="#">
<i className="fa fa-youtube">
<span style={{ marginLeft: "10px" }}>
Youtube
</span>
</i>
</FooterLink>
</Column>
</Row>
</Container>
</Box>
);
};
	
export default footer;