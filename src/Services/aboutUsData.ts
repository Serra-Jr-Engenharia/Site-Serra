import membersImage1 from '../Assets/AboutUs/membros-1.png'

import missionIcon from '../Assets/AboutUs/missao-icon.svg'
import visionIcon from '../Assets/AboutUs/visao-icon.svg'
import valueIcon from '../Assets/AboutUs/valores-icon.svg'

export const aboutUsData = {
    // Adiciona novos dados no carrosel da página aboutUs
    members: [
        {
            title:"",
            image: membersImage1,
            content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore doloribus, soluta maxime pariatur asperiores velit nemo deleniti accusamus, totam cumque a deserunt, corporis iure. Vitae officia ullam quaerat animi cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sequi vitae quisquam. Optio quidem, quo reprehenderit eius fugiat voluptatem laborum quis modi illo at dolore perspiciatis itaque culpa, impedit ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam consequatur praesentium deleniti, a accusantium deserunt voluptates laboriosam cumque officia suscipit quibusdam minima neque excepturi sunt optio voluptas repellat velit error."
        },
        {
            title:"",
            image: membersImage1,
            content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore doloribus, soluta maxime pariatur asperiores velit nemo deleniti accusamus, totam cumque a deserunt, corporis iure. Vitae officia ullam quaerat animi cumque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sequi vitae quisquam. Optio quidem, quo reprehenderit eius fugiat voluptatem laborum quis modi illo at dolore perspiciatis itaque culpa, impedit ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam consequatur praesentium deleniti, a accusantium deserunt voluptates laboriosam cumque officia suscipit quibusdam minima neque excepturi sunt optio voluptas repellat velit error."
        },
    ],

    // Adiciona os ícones da pagina aboutUs
    icons: [
        {
            image: missionIcon,
            imageAlt: "Missão",
            titleText: "Missão",
            hasList: false,
            list: undefined,
            content: 'Promover o desenvolvimento e evolução dos acadêmicos para que sejam capazes de impactar e agregar valores às pessoas e empresas de Nova Friburgo e região, através de projetos mecânicos e de computação.'
        },
        {
            image: visionIcon,
            imageAlt: "Visão",
            titleText: "Visão",
            hasList: false,
            list: undefined,
            content: 'Idealizar nossa empresa como exemplo em inovação e qualidade de serviços.',
        },
        {
            image: valueIcon,
            imageAlt: "Valores",
            titleText: "Valores",
            hasList: true,
            list: ['Dedicação por excelência', 'Gestão segura', 'Impactar nossa era', 'Evolução constante', 'Responsabilidade com os clientes'],
            content: undefined,
        },
    ],
}