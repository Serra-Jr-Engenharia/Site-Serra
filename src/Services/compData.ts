import friburguenseImage from '../Assets/CompPage/friburguense.svg'
import tmfImage from '../Assets/CompPage/projeto-tmf.svg'
import milJoiasImage from '../Assets/CompPage/miljoias.svg'

export const compData = {

    // Adiciona novos projetos no carrosel da página de computação
    computingProjects: [
        {
            title:"Projeto Friburguense",
            image: [friburguenseImage],
            imageSize: '30vh',
            content:`O projeto consistiu no desenvolvimento de um Website voltado à aquisição de planos 
            de sócio torcedor do Friburguense Atlético Clube. O site contém as funcionalidades de cadastro e 
            login, com um sistema de pagamentos integrado. Além disso, possui uma aba dedicada aos patrocinadores 
            do clube, com um slider para exibição de seus logotipos.`,
            summary: 'O projeto consistiu no desenvolvimento de um website para comercialização do sistema de Sócio-Torcedor do clube. O site possui um sistema de integração com uma rede de pagamento que permite que seja comercializado diretamente pelo site com diversas formas de pagamento e total segurança nas transações, também possui um banco de dados para cadastro dos novos sócios que terão acesso a um painel onde é gerada uma carteirinha de sócio-torcedor, há todas as informações do plano, opção de upgrade e muito mais. Todo o site seguiu às riscas as diretrizes da LGPD.',
            members: ['Ramon Ribeiro', 'Leticia Bussinger', 'João Vitor Muniz'],            
        },
        {
            title: "Projeto TMF",
            image: [tmfImage],
            imageSize: '30vh',
            content: `O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibição 
            de produtos e serviços oferecidos pela empresa. O site conta com o catálogo de produtos, além da 
            possibilidade de agendamento de orçamento dos serviços oferecidos pela funcionalidade de 
            envio de e-mails. Também há páginas de informações sobre a empresa e um mapa integrado exibindo a 
            localização da mesma.`,
            summary: 'O projeto consistiu no desenvolvimento de um website para a TMF Usinagem, para exibição de produtos e serviços oferecidos pela empresa. O site conta com o catálogo de produtos, além da possibilidade de agendamento de orçamento dos serviços oferecidos pela funcionalidade de envio de e-mails. Também há páginas de informações sobre a empresa e um mapa integrado exibindo a localização da mesma.',
            acess: 'https://usinagemtmf.com.br/'
        },
    ],
}