import React from 'react';

function Block(props) {

    const [itr, setItr] = React.useState(0);

    function changeColor() {
        if (props.clickable) {
            if (itr === 0 || itr === 1) {
                setItr(2);
            } else if (itr === 2) {
                setItr(3)
            } else if (itr === 3) {
                setItr(1);
            }
        }
    }

    let style = {
        width: "100px",
        height: "100px",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: props.boColor,
        backgroundColor: props.baColor
    }

    let Array = [
        {
            borderColor: props.boColor,
            backgroundColor: props.baColor
        },
        {
            borderColor: "blue",
            backgroundColor: "red"
        },
        {
            borderColor: "green",
            backgroundColor: "blue"
        },
        {
            borderColor: "red",
            backgroundColor: "green"
        }
    ]

    return (
        <div style={{...style,...Array[itr]}} onClick={changeColor}>
        </div>
    );
}

export default Block;