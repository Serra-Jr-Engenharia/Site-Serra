import friburguenseImage from '../assets/CompAssets/friburguense.svg'
import tmfImage from '../assets/CompAssets/projeto-tmf.svg'

export const compData = {

    // Adiciona novos projetos no carrosel da página de computação
    computingProjects: [
        {
            title:"Projeto Friburguense",
            image: friburguenseImage,
            content:`O projeto consistiu no desenvolvimento de um Website voltado à aquisição de planos 
            de sócio torcedor do Friburguense Atlético Clube. O site contém as funcionalidades de cadastro e 
            login, com um sistema de pagamentos integrado. Além disso, possui uma aba dedicada aos patrocinadores 
            do clube, com um slider para exibição de seus logotipos.`,
        },
        {
            title: "Projeto TMF",
            image: tmfImage,
            content: `O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibição 
            de produtos e serviços oferecidos pela empresa. O site conta com o catálogo de produtos, além da 
            possibilidade de agendamento de orçamento dos serviços oferecidos pela funcionalidade de 
            envio de e-mails. Também há páginas de informações sobre a empresa e um mapa integrado exibindo a 
            localização da mesma.`,
        },
    ],
}