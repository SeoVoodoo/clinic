import iconsSprite from "../../assets/images/svg-sprite/icons-sprite.svg";

type IconPropsType = {
    id: string,
    width?: string,
    height?: string,  
    viewBox?: string,
    fill?: string,
    stroke?: string    
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg 
            width={props.width || "50"} 
            
            height={props.height || "50"} 
            viewBox={props.viewBox || "0 0 50 50"} 
            fill={props.fill || "none"}
            stroke={props.stroke || "none"} 
            xmlns="http://www.w3.org/2000/svg"            
        >
            <use xlinkHref={`${iconsSprite}#${props.id}`}/>
        </svg>
    );
}