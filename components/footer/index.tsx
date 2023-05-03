import {FaLinkedin, FaTwitter, FaInstagramSquare} from 'react-icons/fa'
export default function Footer(){
  return (
    <footer id="footer" className="footer_area bg-black relative z-10">
        <div className="shape absolute left-0 top-0 opacity-5 h-full overflow-hidden w-1/3">
            <img src="/images/footer-shape-left.png" alt=""/>
        </div>
       
        <div className="container">
            <div className="footer_widget pt-10 pb-9">
                <div className="row justify-center">
                    <div className="w-full md:w-1/2 lg:w-4/12">
                        <div className="footer_about mt-13 mx-3">
                            <div className="footer_logo">
                                <a href="#"><img src="/images/logo.png" alt=""/></a>
                            </div>
                            <div className="footer_content mt-8">
                                <p className="text-white">“A criação de algo novo é consumado pelo intelecto, mas despertado pelo instinto de uma necessidade pessoal. A mente criativa age sobre algo que ela ama.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-6/12">
                        <div className="footer_link_wrapper flex flex-wrap mx-3">
                            <div className="footer_link w-1/2 md:pl-13 mt-13">
                                <h2 className="footer_title text-xl font-semibold text-white">Contato</h2>
                                <ul className="link pt-4 text-white">
                                    <li>fagnersi@gmail.com</li>
                                    <li>(62) 9 98296-8747 </li>
                                    <li></li>
                                </ul>
                            </div>
                                                        <div className="footer_link w-1/2 md:pl-13 mt-13">
                                <h2 className="footer_title text-xl font-semibold text-white">Redes Sociais</h2>
                                <div className="footer_social pt-4 mx-3 text-center">
                                  <ul className="social flex justify-center sm:justify-start">
                                      <li className="mr-3"><a href="https://www.linkedin.com/in/fagnersi/"><FaLinkedin/></a></li>
                                      <li className="mr-3"><a href="https://twitter.com/fagnersi"><FaTwitter/></a></li>
                                      <li className="mr-3"><a href="https://instagram.com/fagnerao"><FaInstagramSquare/></a></li>
                                    
                                  </ul>
                </div> 
                            </div> 
                        </div> 
                    </div>
                    
                </div> 
            </div> 
            <div className="footer_copyright pt-3 pb-6 border-t-2 border-solid border-white border-opacity-10 sm:flex justify-between">
                <div className="footer_social pt-4 mx-2 text-center">
                   
                </div> 
                <div className="footer_copyright_content pt-4 text-center flex">
                    <p className="text-white">© Copyright @ Vector Zero | Todos os direitos reservados</p>
                </div> 
            </div> 
        </div> 
    </footer>
  )
}
