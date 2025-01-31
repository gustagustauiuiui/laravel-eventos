export type Atividade = {
    uuid: string,
    titulo: string,
    horario_inicio: string,
    horario_fim: string,
    data_inicio: string,
    data_fim: string,
}

export type Convidado = {
    nome: string,
    email: string,
    imagemUrl?: string,
}

export type Entrada = {
    tipo: "Gratuita" | "Paga",
    categoria: string,
    quantidade: number,
    expira: boolean,
    valdiade_inicio?: string,
    validade_fim?: string, 
}

export type Evento = {
    imagemUrl: string,
    titulo: string,
    data: string,
    descricao: string,
    atividades: Array<Atividade>,
    formato: "Online" | "Presencial" | "Híbbrido",
    convidados: Array<Convidado>,
}

