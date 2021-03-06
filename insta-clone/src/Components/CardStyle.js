import styled from "styled-components";

export const StyledCard = styled.section`
	border: 1px solid #cdcdcd;
	max-width: 70%;
	border-radius: 4px;
	&:not(:last-child) {
		margin-bottom: 5rem;
	}
`;

export const Card__header = styled.div`
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
`;

export const Card__thumbnail = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 1rem;
`;

export const Card__username = styled.span`
	font-weight: 700;
`;

export const Card__bannerImg = styled.img`
	max-width: 100%;
	height: auto;
	display: block;
`;

export const Card__icons = styled.div`
	font-size: 2rem;
	padding: 1.5rem;
`;

export const Card__likes = styled.div`
    padding: 0 1.5rem;
    font-size: 1.4rem;
    font-weight: 700;K
`;

export const Card__comments = styled.div`
	padding: 1.5rem 1.5rem;
	&:not(:last-child) {
		margin-bottom: 1rem;
	}
`;

export const Card__comment = styled.div`
	font-size: 1.4rem;
	position: relative;
	&:hover {
		opacity: 1;
		visibility: visible;
	}
`;

export const Card__commentClose = styled.span`
	color: #999;
	position: absolute;
	right: 1rem;
	top: 0;
	cursor: pointer;
	opacity: 0;
	visibility: hidden;
	transition: all 0.3s;
	opacity: 1;
	visibility: visible;
`;

export const Card__commentUser = styled.span`
	font-weight: 700;
	margin-right: 0.4rem;
`;

export const Card__lastComment = styled.span`
	font-size: 1.2rem;
	text-transform: uppercase;
	color: #aaa;
	border-bottom: 1px solid #eee;
	padding-bottom: 0.5rem;
`;

export const Card__inputWrapper = styled.div`
	padding: 1rem 1.5rem;
	display: flex;
	align-items: center;
`;

export const Card__input = styled.input`
	display: block;
	flex-grow: 1;
	border: none;
	&:focus {
		outline: more;
	}
	&::placeholder {
		color: #999;
	}
`;

