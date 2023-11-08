import { useSelector } from "react-redux";

import isEven from "../helpers/isEven"

export default function getSquareColor(whiteToMove, rank, file) {
    if (isEven(rank) === isEven(file)) {
        return "antiquewhite"
    } else {
        return "chocolate"
    }
}