export interface SimulacaoRequest {
  valor_imovel: number;
  percentual_entrada: number;
  anos_contrato: number;
}

export interface SimulacaoResponse {
  valor_entrada: string;
  valor_financiado: string;
  total_a_guardar: string;
  parcela_mensal: string;
}

