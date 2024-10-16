import React from 'react';

type InnerDaysPropsType = {
    innerDays: string[]
}

export const InnerDays: React.FC<InnerDaysPropsType> = (props:InnerDaysPropsType) => {
    return (
        <>
          {props.innerDays.map((date:string) => <td><span>ПН<br />{date}</span></td>)}  
        </>
    );
};



