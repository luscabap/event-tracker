import { useRecoilValue } from "recoil";
import { eventosFiltradosState } from "./seletores";

const useLitaDeEventos = () => {
    return useRecoilValue(eventosFiltradosState);
}

export default useLitaDeEventos;