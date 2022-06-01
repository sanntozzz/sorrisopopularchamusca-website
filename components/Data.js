import * as SiIcons from "react-icons/si";
//
import SorrisoMais from "../public/images/AcordosParcerias/SorrisoMais.png";
import EasyHealth from "../public/images/AcordosParcerias/EasyHealth.png";
import Medicare from "../public/images/AcordosParcerias/Medicare.svg";
import DentalRede from "../public/images/AcordosParcerias/DentalRede.jpg";
import Multicare from "../public/images/AcordosParcerias/Multicare.png";

export const dataAcordos = [
  {
    id: 1,
    title: "Sorriso Mais / Agilcare",
    link: "https://www.sorrisomais.pt/",
    image: SorrisoMais,
    description: [
      "A SORRISO MAIS é um Plano de Saúde que tem 11 anos de experiência Nacional reconhecida e é uma referência na qualidade nos serviços prestados, com mais de 450.000 beneficiários.",
      "O PLANO DE SAÚDE SORRISO MAIS proporciona aos seus utentes os melhores cuidados ao nível da saúde dentária, tão importantes para o bem estar e qualidade de vida de todas as pessoas, assim como oferece outros serviços e cuidados de Saúde, num leque cada vez mais alargado e criterioso ao nível da qualidade, a preços bastante reduzidos.",
    ],
  },
  {
    id: 3,
    title: "Medicare",
    link: "https://www.medicare.pt/",
    image: Medicare,
    description: [
      "Com mais de 10 anos de experiência no mercado português, consolidamos a liderança na comercialização de Planos de Saúde com a excelência e diversidade das nossas soluções.",
      "A Medicare é uma empresa de capitais 100% portugueses que democratizou o acesso à saúde privada para milhões de famílias. É com orgulho que apostamos em soluções inovadoras que mudaram para sempre o dia-a-dia dos portugueses.",
    ],
  },
  {
    id: 4,
    title: "DentalRede",
    link: "http://www.dentalrede.pt/",
    image: DentalRede,
    description: [
      "A Dentalrede, é uma organização médica instalada a nível nacional, especializada na gestão e prestação de serviços médico-dentários a entidades seguradoras, empresas e grupos. Contando com uma rede de mais de 350 clínicas e 4000 médicos dentistas associados em Portugal, com extensão a Espanha, cumprindo com os mais altos requisitos de qualidade e competência.",
    ],
  },
  {
    id: 5,
    title: "Multicare",
    link: "https://www.multicare.pt/PT/particulares/Paginas/default.aspx",
    image: Multicare,
    description: [
      "​A Multicare começou por ser exclusivamente a marca do seguro de saúde do Grupo CGD. Dado o crescimento do setor e a importância estratégico do mesmo para o Grupo, foi constituída como seguradora Multicare - Seguros de Saúde, S.A. a 9 de março de 2007​",
    ],
  },
];

export const dataAbout = [
  {
    id: 1,
    title: "A nossa Missão",
    subtitle: "Garantir um serviço diferenciado pela qualidade e proximidade.",
    text: "Oferecer à sociedade uma resposta completa às necessidades de saúde e bem estar, através da disponibilização de um conjunto alargado de especialidades clínicas.",
  },
  {
    id: 2,
    title: "A nossa Visão",
    text: "Uma visão sustentada por fazer mais e melhor em qualidade de serviço e oferta ao cliente.",
  },
];

export const dataMedicos = [
  {
    id: 1,
    title: "Dra. Valéria Prudente",
    text: "Diretora Clínica",
  },
  {
    id: 2,
    title: "Dra. Diana",
    text: "Médica Dentista",
  },
  {
    id: 3,
    title: "Dr. Nuno Cruz",
    text: "Médico Dentista",
  },
  {
    id: 4,
    title: "Dr. João Pisco",
    text: "Implantologista",
  },
];

export const dataTestemunhos = [
  {
    id: 1,
    name: "Sr. Armando Jesus",
    text: "“Gostei muito do atendimento da Dra Ana Castro. O serviço prestado foi ótimo.”",
  },
  {
    id: 2,
    name: "Maria dos Anjos Nunes",
    text: "“Vim por recomendação do meu marido. Gosto de toda a equipa, mas em especial da Dra. Ana Castro“",
  },
  {
    id: 3,
    name: "Sónia Conceição",
    text: "“Atendimento bom, as Dras são ótimas, preços acessíveis. Recomendo”",
  },
];

export const navLinks = [
  {
    id: 1,
    href: "/",
    text: "Navbar.Home",
  },
  { id: 2, href: "/Especialidades", text: "Navbar.Especialidades" },
  { id: 3, href: "/CorpoClinico", text: "Navbar.CorpoClinico" },
  { id: 4, href: "/AcordosParcerias", text: "Navbar.AcordosParcerias" },
  { id: 5, href: "/OndeEstamos", text: "Navbar.OndeEstamos" },
];

export const footerLinks = [
  {
    id: 1,
    title: "Links",
    links: [
      { id: 1, href: "/Especialidades", text: "Navbar.Especialidades" },
      { id: 2, href: "/CorpoClinico", text: "Navbar.CorpoClinico" },
      { id: 3, href: "/AcordosParcerias", text: "Navbar.AcordosParcerias" },
      { id: 4, href: "/OndeEstamos", text: "Navbar.OndeEstamos" },
    ],
  },
  {
    id: 2,
    title: "RGPD",
    links: [
      {
        id: 1,
        href: "/",
        text: "Política de privacidade",
      },
      {
        id: 2,
        href: "/",
        text: "Política de cookies",
      },
    ],
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: <SiIcons.SiFacebook />,
    path: "https://www.facebook.com/SorrisoPopularChamusca/",
    text: "Facebook",
  },
  {
    id: 2,
    icon: <SiIcons.SiInstagram />,
    path: "https://www.instagram.com/sorrisopopularchamusca/",
    text: "Instagram",
  },
];

export const dataOndeEstamos = [
  {
    id: 1,
    title: "Morada",
    path: "https://www.google.com/maps?ll=39.357442,-8.478536&z=16&t=m&hl=en&gl=PT&mapclient=embed&cid=6989400154799883340",
    text: "Av. Almirante Gago Coutinho 25, 2140-053 Chamusca",
  },
  {
    id: 2,
    title: "Email",
    path: "mailto:clinchamusca25@gmail.com",
    text: "clinchamusca25@gmail.com",
  },
  { id: 3, title: "Telefone", path: "tel:249761128", text: "249 761 128" },
  {
    id: 4,
    title: "Whatsapp",
    path: "https://wa.me/969952234",
    text: "969 952 234",
  },
];
