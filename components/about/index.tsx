import {FaStar} from 'react-icons/fa';

export default function About (){
  return(
    <>
<section id="about" className="about_area pt-120 relative">
    <div className="about_image flex items-end justify-end">
        <div className="image lg:pr-13">
            <img src="/images/about.svg" alt="about" />
        </div>
    </div> 
    <div className="container">
        <div className="row justify-end">
            <div className="w-full lg:w-1/2">
                <div className="about_content mx-4 pt-11 lg:pt-15 lg:pb-15">
                    <div className="section_title pb-9">
                        <h5 className="sub_title">Porque nos escolher</h5>
                        <h4 className="main_title">Crescemos com nossos clientes</h4>
                    </div>
                    <p> Com 15 anos de experiência no mercado web, somos uma empresa especializada em criação de projetos para pequenas, médias e grande empresas. Somos focados na divulgação de sua empresa e otimização de processos, afim de melhorar a forma como você e seus clientes se encontram.

Atuamos na construção de websites, blogs e lojas virtuais. Nossos sites possuem layout exclusivo e arquitetura de informação planejada. Contamos com um painel para gerenciamento de todo conteúdo do site, permitindo que você atualize seu site de forma simples e dinâmica. </p>
                    <ul className="about_list pt-3">
                        <li className="flex mt-5">
                            <div className="about_check">
                                <i className="lni lni-checkmark-circle"><FaStar/></i>
                            </div>
                            <div className="about_list_content pl-5 pr-2">
                                <p>Confiança</p>
                            </div>
                        </li>
                        <li className="flex mt-5">
                            <div className="about_check">
                                <i className="lni lni-checkmark-circle"><FaStar/></i>
                            </div>
                            <div className="about_list_content pl-5 pr-2">
                                <p>Prazo</p>
                            </div>
                        </li>
                        <li className="flex mt-5">
                            <div className="about_check">
                                <i className="lni lni-checkmark-circle"><FaStar/></i>
                            </div>
                            <div className="about_list_content pl-5 pr-2">
                                <p>Suporte Técnico</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>
</section>


    </>
  )
}