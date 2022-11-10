import friburguenseImage from '../Assets/CompPage/friburguense.svg'
import tmfImage from '../Assets/CompPage/projeto-tmf.svg'

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
            members: ['alguem', 'alguem', 'alguem', 'alguem', 'alguem', 'alguem'],
            opinions: ['dskadksoapdka', 'msakdlmsakdlas', 'dsaklmsakdlsmadlas', 'salçds,açlds,alçdsa,ç'],
            
        },
        {
            title: "Projeto TMF",
            image: tmfImage,
            content: `O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibição 
            de produtos e serviços oferecidos pela empresa. O site conta com o catálogo de produtos, além da 
            possibilidade de agendamento de orçamento dos serviços oferecidos pela funcionalidade de 
            envio de e-mails. Também há páginas de informações sobre a empresa e um mapa integrado exibindo a 
            localização da mesma.`,
            members: ['alguem', 'alguem', 'alguem', 'alguem', 'alguem', 'alguem'],
            opinions: ['dskadksoapdka', 'msakdlmsakdlas', 'dsaklmsakdlsmadlas', 'salçds,açlds,alçdsa,ç'],
            acess: 'https://usinagemtmf.com.br/'
        },
    ],
}