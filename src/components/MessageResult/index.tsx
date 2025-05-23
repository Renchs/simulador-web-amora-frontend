import type { SimulacaoResponse } from "../../types/api"

interface MessageResultProps {
  dataResponse: SimulacaoResponse;
}

export function MessageResult({ dataResponse }: MessageResultProps) {
  return (
    <div className="w-72 md:w-96 h-52 flex flex-col items-center justify-around border border-zinc-300 rounded-md">
      <h3 className="w-64 md:w-80 font-semibold">Resultado da simulação</h3>
      <div className="w-64 md:w-80 flex justify-between">
        <p>Valor da entrada</p>
        <p className="font-semibold">R$ {dataResponse.valor_entrada}</p>
      </div>
      <div className="w-64 md:w-80 flex justify-between">
        <p>Valor financiado</p>
        <p className="font-semibold">R$ {dataResponse.valor_financiado}</p>
      </div>
      <div className="w-64 md:w-80 flex justify-between">
        <p>Total a guardar</p>
        <p className="font-semibold">R$ {dataResponse.total_a_guardar}</p>
      </div>
      <div className="w-64 md:w-80 flex justify-between">
        <p>Parcela mensal</p>
        <p className="font-semibold">R$ {dataResponse.parcela_mensal}</p>
      </div>
    </div>
  )
}
