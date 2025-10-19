import {Item} from "../Item/Item";
import {userCartContext} from "../../context/CartContext/useCartContext";

export const ItemDetail = ({detail}) => {

    const {addItem } = userCartContext();

    return (
        <Item {...detail}>
            <button onClick={() => {
                addItem(detail);
                }}
            >
                Enviar al carrito
            </button>
        </Item>

    );
}