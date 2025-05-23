import { useId, useState } from "react"
import { Input } from "./components/Input"
import { api } from "./api/api";
import { type SimulacaoResponse, type SimulacaoRequest } from "./types/api";
import { MessageResult } from "./components/MessageResult";

function App() {

  const [contractTime, setContractTime] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [inputPercentage, setinputPercentage] = useState("");

  const [dataResponse, setDataResponse] = useState<SimulacaoResponse>();

  const idInput = useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: SimulacaoRequest = {
      valor_imovel: Number(propertyValue),
      percentual_entrada: Number(inputPercentage),
      anos_contrato: Number(contractTime)
    }

    try {
      const response = await api.post("/simulacao", data)
      setDataResponse(response.data)

    } catch (error) {
      console.error('Erro ao enviar:', error);
    }

  };

  return (
    <section className="w-full h-[900px] md:h-[700px] flex flex-col md:flex-row gap-6 md:pt-8 md:justify-center items-center font-manrope">
      <form onSubmit={handleSubmit} className="w-[320px] max-h-[749px] md:h-[500px] p-4 flex flex-col items-center justify-start border border-primary/10 rounded-md gap-6">
        <div className="flex flex-col h-[483px] justify-around">
          <div className="w-72 flex gap-2">
            <img className="w-7" src="/calculator.svg" alt="Icone de calculadora" />
            <h1 className="text-xl font-semibold">Simular compra</h1>
          </div>
          <Input
            title="Valor do imóvel"
            placeholder="Digite o valor do imóvel"
            min={1}
            onChange={(value) => setPropertyValue(value)}
          />
          <Input
            title="Percentual de entrada"
            placeholder="Digite a porcentagem do valor"
            min={5}
            max={20}
            onChange={(value) => setinputPercentage(value)}
          />
          <div className="flex flex-col h-24 justify-around">
            <label id={idInput} className="font-semibold">Tempo de contrato</label>
            <select
              id={idInput}
              className="w-72 h-8 text-sm border border-zinc-300 rounded-sm pl-4 focus:outline-none"
              value={contractTime}
              onChange={(e) => setContractTime(e.target.value)}
            >
              <option value="" disabled>Escolha o tempo estimado</option>
              <option value="1">1 ano</option>
              <option value="2">2 anos</option>
              <option value="3">3 anos</option>
              <option value="4">4 anos</option>
              <option value="5">5 anos</option>
            </select>
          </div>
          <button className="w-72 h-11 cursor-pointer rounded-md bg-primary hover:bg-secondary text-secondary hover:text-primary transition-colors duration-300 ease-in-out" type="submit">Realizar Simulação</button>
        </div>
        <div className="md:hidden">
          {dataResponse && (
            <MessageResult dataResponse={dataResponse} />
          )}
        </div>
      </form>
      <div className="hidden md:block">
        {dataResponse && (
          <MessageResult dataResponse={dataResponse} />
        )}
      </div>
    </section>
  )
}

export default App
