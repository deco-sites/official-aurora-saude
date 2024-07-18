import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import NewsCard from "site/components/Site/news-card.tsx";

export interface Banner {
    image: ImageWidget;
    width?: number;
    height?: number;
    alt: string;
    link: string;
}

export interface NewsPageProps {
    image: Banner;
}

export default function NewsPage({ image }: NewsPageProps) {
    return (
        <>
            <div className="flex justify-center bg-white lg:bg-gray4">
                <div className="lg:max-w-[1400px] w-full pt-12 lg:pb-16 lg:py-16 flex flex-col">
                    <div className="flex flex-col lg:flex-row gap-7 w-full">
                        <div className="lg:w-3/5 px-10 lg:px-0">
                            <div className="relative">
                                <span className="hidden lg:block font-bold text-orange4">
                                    Voltar
                                </span>
                                <hr className="hidden lg:flex absolute -bottom-6 left-0 h-0.5 bg-black opacity-10 w-full">
                                    <span className="hidden lg:flex hr-extend-left">
                                    </span>
                                </hr>
                            </div>

                            <div className="flex flex-col lg:mt-20">
                                <article>
                                    <header className="flex flex-col gap-[10px]">
                                        <span className="text-pink1">
                                            22 de Agosto
                                        </span>
                                        <h1 className="font-sora font-bold text-black text-opacity-50 text-2xl mb-5 lg:mb-11">
                                            Minas Gerais ganha operadora de
                                            saúde fundada por mulheres
                                        </h1>
                                    </header>
                                    <div className="flex lg:hidden flex-col gap-6 mb-8">
                                        <span className="text-gray10 font-semibold">
                                            Compartilhe:
                                        </span>
                                        <div className="flex gap-4">
                                            <Image
                                                src={"/Site/facebook-icon-news-page.svg"}
                                                alt={"Icon"}
                                            />
                                            <Image
                                                src={"/Site/linkedin-icon-news-page.svg"}
                                                alt={"Icon"}
                                            />
                                            <Image
                                                src={"/Site/whatsapp-icon-news-page.svg"}
                                                alt={"Icon"}
                                            />
                                            <Image
                                                src={"/Site/telegram-icon-news-page.svg"}
                                                alt={"Icon"}
                                            />
                                        </div>
                                    </div>
                                    <Image
                                        src={image.image}
                                        alt={image.alt}
                                        className="rounded-[20px] mb-8 lg:mb-16"
                                    />
                                    <section className="mb-12">
                                        <p>
                                            A força da natureza é avassaladora e
                                            transformadora. Assim como a aurora
                                            boreal milagrosamente reúne
                                            vestígios de partículas atmosféricas
                                            e encanta o mundo com sua
                                            luminosidade multicolorida, quando
                                            duas mulheres dão as mãos e
                                            vislumbram o horizonte, nada é
                                            impossível. Foi com o alinhamento de
                                            duas experientes profissionais, da
                                            enfermagem e da gestão, inspiradas
                                            na plenitude da aurora boreal, que
                                            nasceu a Aurora Saúde, a primeira
                                            operadora de planos de saúde no
                                            Brasil fundada por mulheres. A
                                            empresa surge entre as alterosas de
                                            Belo Horizonte com o objetivo de
                                            oferecer uma nova experiência ao
                                            cuidar da saúde e do bem-estar. Tudo
                                            começou quando Marcela Matos e
                                            Liliane Freitas se uniram em uma
                                            sociedade e projetaram um modelo que
                                            procura as melhores possibilidades
                                            de experiência para os clientes,
                                            através de coordenação
                                            multidisciplinar, abordagem
                                            centrada, métodos preventivos e o
                                            uso de bons recursos tecnológicos. A
                                            soma de expertises delas foi a chave
                                            para o resultado que está disponível
                                            no mercado. Marcela vem da gestão,
                                            atua no mercado de saúde suplementar
                                            há mais de 18 anos, geriu a área
                                            comercial da GNDI/Hapvida em Minas
                                            Gerais e ainda passou por grandes
                                            operadoras brasileiras. Já Liliane é
                                            a voz técnica, enfermeira de
                                            formação com extensa atuação,
                                            trabalhou em grandes hospitais de
                                            alta complexidade, tendo passagem
                                            pela Unimed-BH, Premium Saúde e,
                                            mais recentemente, pela SPDATA. A
                                            amizade de uma pela outra somada a
                                            uma visão humanizada foi o que
                                            rendeu a chave para abrir a porta da
                                            Aurora Saúde. “Para nós, saúde vai
                                            além de uma consulta médica, inclui
                                            acolhimento, parceria, compromisso
                                            com a qualidade de vida de cada
                                            cliente. Através de tecnologias
                                            avançadas de gestão de saúde,
                                            proporcionamos um cuidado integrado,
                                            com atendimento humanizado e diário,
                                            respeitando necessidades e
                                            oferecendo cuidado personalizado”,
                                            salienta Marcela. O primeiro passo
                                            foi procurar por uma rede
                                            credenciada eficaz e qualificada
                                            para atender as demandas das vidas
                                            guardadas. Entre as instituições
                                            hospitalares parceiras estão o
                                            Hospital Felício Rocho, Hospital da
                                            Baleia, Hospital Evangélico,
                                            Hospital São José, Hospital Semper,
                                            Hospital Belo Horizonte e Oculare.
                                            Ainda entra para a lista os
                                            laboratórios Lustosa, São Marcos,
                                            Hermes Pardini e Lab Class. A rede
                                            ainda conta com Fundação Hospitalar
                                            Nossa Senhora de Lourdes, Ecoar e
                                            Empremed. Neste primeiro momento a
                                            cobertura atinge a Região
                                            Metropolitana de Belo Horizonte, mas
                                            os planos de expansão são arrojados.
                                            O planejamento contempla a evolução
                                            da marca por praças, objetivando
                                            chegar em todo o estado de Minas
                                            Gerais. Ainda em 2023, a operadora
                                            almeja conseguir público no
                                            Triângulo Mineiro e no Sul de Minas.
                                            Já para 2024, outras regiões do
                                            estado, como Norte e Centro Oeste,
                                            devem entrar para o radar, provendo
                                            um alcance estadual. Hoje, a Aurora
                                            disponibiliza para o cliente três
                                            linhas de atendimento. A primeira é
                                            chamada de a100, que compreende a
                                            cobertura de consultas em número
                                            ilimitado, exames complementares e
                                            outros procedimentos realizados em
                                            ambulatórios, consultórios e
                                            clínicas. Cobre atendimentos e
                                            procedimentos de urgência e
                                            emergência até as primeiras 12
                                            horas. O a300 é um plano hospitalar
                                            que cobre todos os procedimentos
                                            ambulatoriais e hospitalares, como
                                            atendimentos de urgência,
                                            emergência, consultas eletivas,
                                            internações e exames ambulatoriais
                                            realizados no período da internação
                                            ou não. Quem procura uma ampla rede
                                            de atendimento e não abre mão de
                                            poder contar com vários médicos e
                                            hospitais, encontra no a500 mais
                                            acesso e comodidade. O plano dispõe
                                            de acomodações em enfermaria ou
                                            apartamento. “Nossas linhas de
                                            cuidado foram projetadas desde o
                                            início para colocar os pacientes no
                                            centro de suas próprias jornadas de
                                            saúde. Por isso, apresentamos
                                            primeiro o projeto para Belo
                                            Horizonte e região e vamos
                                            exportando o modelo para outros
                                            cantos de Minas Gerais. Para isso,
                                            investimos em tecnologia de ponta
                                            para cuidar de forma diferenciada,
                                            humanizada e única”, justifica
                                            Liliane. Com tudo alinhado, a
                                            palavra da vez tanto para Liliane
                                            quanto para Marcela é trabalhar.
                                            “Agora vamos trabalhar para que
                                            nossos beneficiários se sintam
                                            ouvidos, compreendidos e apoiados em
                                            todos os momentos. Somos mais do que
                                            uma operadora de saúde, somos um
                                            plano de cuidado integrado, que
                                            acompanha e se preocupa com a
                                            jornada e o bem-estar dos nossos
                                            beneficiários. Estamos comprometidos
                                            em transformar a maneira como você
                                            vê a saúde, fornecendo resultados
                                            tangíveis e mensuráveis que irão
                                            melhorar sua qualidade de vida”,
                                            garante Marcela. “Seguiremos numa
                                            abordagem preventiva e também focada
                                            na gestão de doenças crônicas. Isso
                                            não apenas melhora a qualidade de
                                            vida dos nossos beneficiários, mas
                                            também reduz a necessidade de
                                            intervenções médicas intensivas a
                                            longo prazo. Acreditamos que a saúde
                                            é um esforço colaborativo, por isso
                                            nossas linhas de cuidados integram
                                            uma equipe multidisciplinar de
                                            profissionais de saúde. Essa
                                            colaboração permite uma abordagem
                                            holística e abrangente para o
                                            tratamento, contemplando todas as
                                            dimensões da saúde física e mental
                                            dos pacientes”, finaliza Liliane.
                                        </p>
                                    </section>
                                    <div className="grid grid-cols-3 gap-3">
                                        <Image
                                            src={"/Site/Foto1.png"}
                                            alt={"Foto1"}
                                            className="rounded-[20px]"
                                        />
                                        <Image
                                            src={"/Site/Foto2.png"}
                                            alt={"Foto1"}
                                            className="rounded-[20px]"
                                        />
                                        <Image
                                            src={"/Site/Foto3.png"}
                                            alt={"Foto1"}
                                            className="rounded-[20px]"
                                        />
                                        <Image
                                            src={"/Site/Foto4.png"}
                                            alt={"Foto1"}
                                            className="rounded-[20px]"
                                        />
                                        <Image
                                            src={"/Site/Foto5.png"}
                                            alt={"Foto1"}
                                            className="rounded-[20px]"
                                        />
                                        <Image
                                            src={"/Site/Foto6.png"}
                                            alt={"Foto1"}
                                            className="rounded-[20px]"
                                        />
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="lg:w-2/5">
                            <div className="hidden lg:flex flex-col gap-6 mb-28">
                                <span className="text-gray10 font-semibold">
                                    Compartilhe:
                                </span>
                                <div className="flex gap-4">
                                    <Image
                                        src={"/Site/facebook-icon-news-page.svg"}
                                        alt={"Icon"}
                                    />
                                    <Image
                                        src={"/Site/linkedin-icon-news-page.svg"}
                                        alt={"Icon"}
                                    />
                                    <Image
                                        src={"/Site/whatsapp-icon-news-page.svg"}
                                        alt={"Icon"}
                                    />
                                    <Image
                                        src={"/Site/telegram-icon-news-page.svg"}
                                        alt={"Icon"}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col bg-gray4 px-10 lg:px-0 py-12 lg:py-0">
                                <span className="font-semibold text-gray10 mb-7">
                                    Notícias<br /> relacionadas:
                                </span>
                                <div className="flex flex-col gap-7">
                                    <NewsCard
                                        imageSrc={"/Site/LatestNews/newsphoto3.png"}
                                        alt={"Imagem 3"}
                                        date={"25 de setembro"}
                                        title={"Aurora Saúde fecha parceria com MV Sistemas"}
                                        link={"#"}
                                    />
                                    <NewsCard
                                        imageSrc={"/Site/casalbanner2.png"}
                                        alt={"Imagem 2"}
                                        date={"29 de setembro"}
                                        title={"Mineiras lançam operadora de saúde em BH"}
                                        link={"#"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
