// Arquivo: db_cnaes.js
// Este é o nosso banco de dados isolado. 
// Para adicionar novos, basta copiar uma linha e alterar os dados.

const dbEnquadramento = {
    // PADRÃO: "CNAE_SEM_PONTUACAO": { servico: "COD_LC116", desc_lc: "DESCRIÇÃO", anexos: ["ANEXOS"], regra: "SUA EXPLICAÇÃO" }
    
    // --- T.I. E SOFTWARE ---
    "6201500": { 
        servico: "01.01", 
        desc_lc: "Análise e desenvolvimento de sistemas.", 
        anexos: ["III", "V"], 
        regra: "Sujeito ao FATOR R. Tributa no Anexo III (Folha >= 28%) ou Anexo V (Folha < 28%)." 
    },
    "6311900": { 
        servico: "01.03", 
        desc_lc: "Processamento de dados e congêneres.", 
        anexos: ["III"], 
        regra: "Tributação direta pelo Anexo III. Não entra no Fator R." 
    },
    
    // --- ENGENHARIA E CONSTRUÇÃO CIVIL ---
    "7112000": { 
        servico: "07.01", 
        desc_lc: "Engenharia, agronomia, arquitetura, urbanismo, paisagismo e congêneres.", 
        anexos: ["III", "V"], 
        regra: "Sujeito ao FATOR R. Tributa no Anexo III ou V." 
    },
    "4120400": { 
        servico: "07.02", 
        desc_lc: "Execução, por administração, empreitada ou subempreitada, de obras de construção civil.", 
        anexos: ["IV"], 
        regra: "Tributação exclusiva pelo Anexo IV. O INSS Patronal (CPP) de 20% é pago em guia separada." 
    },

    // --- SAÚDE ---
    "8630502": { 
        servico: "04.01", 
        desc_lc: "Medicina e biomedicina.", 
        anexos: ["III", "V"], 
        regra: "Sujeito ao FATOR R. Tributa no Anexo III ou V." 
    },
    "9602502": { 
        servico: "06.02", 
        desc_lc: "Esteticistas, tratamento de pele, depilação e congêneres.", 
        anexos: ["III"], 
        regra: "Tributação direta pelo Anexo III. Sem Fator R." 
    }
    
    // Continue adicionando os milhares de CNAEs aqui embaixo, sempre com uma vírgula no final de cada bloco!
};
