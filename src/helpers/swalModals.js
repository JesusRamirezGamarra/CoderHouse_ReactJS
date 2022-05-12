
import swal from "sweetalert";

export const swalSuccess = (name, count) => {
    swal({
    title: "Producto agregado ! ",
    text: `Agregaste ${name} X ${count}`,
    icon: "success",
    });
};

export const swalWarning = () => {
    swal({
    title: "No se pudo agregar al carrito !",
    text: `La cantidad ingresada supera al stock`,
    icon: "warning",
    });
};

export const swalEmpty = () => {
    swal({
    title: "Carrito vacío",
    text: `Se ha vaciado su carrito con éxito`,
    icon: "success",
    });
};

export const swalDeleteSucces = (name) => {
    swal(`${name} eliminado`, {
    buttons: false,
    timer: 800,
    });
};

export const swalAddFavs = () => {
    swal("Producto agregado a favoritos", {
    icon: "success",
    buttons: false,
    timer: 800,
    });
};
export const swalSuccessBuy = (buyId) => {
    swal({
    title: "Su compra se ha realizado con exito",
    text: `Su número de compra es: ${buyId}`,
    icon: "success",
    });
};
