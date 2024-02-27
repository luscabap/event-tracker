import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import { useSetRecoilState } from 'recoil';
import { listaDeEventosState } from '../../../state/atom';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  
  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

  const alterarStatus = () => {
    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !evento.completo

    setListaDeEventos(listaAntiga => {
      const indice = listaAntiga.findIndex(e => e.id === evento.id)
      return [...listaAntiga.slice(0, indice), eventoAlterado, ...listaAntiga.slice(indice + 1)]
    })
  }

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox