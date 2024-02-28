import { useRecoilValue } from "recoil";
import { listaDeEventosState } from "../atom";

const useLitaDeEventos = () => {
    return useRecoilValue(listaDeEventosState);
}

export default useLitaDeEventos;