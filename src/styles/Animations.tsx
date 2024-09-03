import { keyframes } from "styled-components";

export const BaloonsLeft = keyframes`

    0% {
            -webkit-transform: translate(10px, 10px);
                    transform: translate(10px, 10px);
    }
    25% {
        -webkit-transform: translate(10px, 0);
                transform: translate(10px, 0);
    }
    50% {
        -webkit-transform: translate(0, -10px);
                transform: translate(0, -10px);
    }
    75% {
        -webkit-transform: translate(0, 0);
                transform: translate(0, 0);
    }
    100% {
        -webkit-transform: translate(10px, 10px);
                transform: translate(10px, 10px);
    }  

`

export const BaloonsRight = keyframes`
    0% {
		-webkit-transform: translate(-10px, 0px);
		        transform: translate(-10px, 0px);
	}
	25% {
		-webkit-transform: translate(0px, -10px);
		        transform: translate(0px, -10px);
	}
	50% {
		-webkit-transform: translate(0, 10px);
		        transform: translate(0, 10px);
	}
	75% {
		-webkit-transform: translate(0, 0);
		        transform: translate(0, 0);
	}
	100% {
		-webkit-transform: translate(-10px, 0px);
		        transform: translate(-10px, 0px);
	}
`

export const FirewWorkStars = keyframes`
    0% {
		-webkit-transform: scale(0);
		        transform: scale(0);
	}
	50% {
		-webkit-transform: scale(3);
		        transform: scale(3);
	}
	100% {
		-webkit-transform: scale(3);
		        transform: scale(3);
	}
`

export const kidsJump = keyframes`
    0% {
		transform: translateY(0);
	}
	30% {
		transform: translateY(0);
	}
	60% {
		transform: translateY(-20px);
	}
	90% {
		transform: translateY(0);
	}
`

export const showSubMenu = keyframes`
	0% {
		height: 66px;
		/* opacity: 0; */
	}
	25% {
		height: 132px;
		/* opacity: 0.25; */
	}
	50% {
		height: 188px;
		/* opacity: 0.5; */
	}
	
	100% {
		height: 264px;
		/* opacity: 1; */
	}
`

export const fadeIn = keyframes`
    from {
      /* visibility: hidden; */
      opacity: 0;
    }  
    to {
      /* visibility: visible; */
      opacity: 1;
    }
`

export const modalIn = keyframes`
	from {
		transform: translateY(-150%);
		opacity: 0;
  	}
	to {
		transform: translateY(0%);
		opacity: 1;
	}
`

export const modalOut = keyframes`
	from {
		transform: translateY(0%);
		opacity: 1;
  	}
	to {
		transform: translateY(150%);
		opacity: 0;
	}
`