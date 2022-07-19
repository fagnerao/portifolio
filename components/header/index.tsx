
export default function Header () {
  return (
    <>
      <div id="home" className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
        <div className="hero_shape shape_1">
          <img src="/images/shape/shape-1.svg" alt="shape"/>
          </div>
        <div className="hero_shape shape_2">
          <img src="/images/shape/shape-2.svg" alt="shape"/>
          </div>
        <div className="hero_shape shape_3">
          <img src="/images/shape/shape-3.svg" alt="shape"/>
          </div>
        <div className="hero_shape shape_4">
          <img src="/images/shape/shape-4.svg" alt="shape"/>
          </div>
        <div className="hero_shape shape_6">
          <img src="/images/shape/shape-1.svg" alt="shape"/>
          </div>
        <div className="hero_shape shape_7">
          <img src="/images/shape/shape-4.svg" alt="shape"/>
          </div>
        <div className="hero_shape shape_8">
          <img src="/images/shape/shape-3.svg" alt="shape"/>
          </div>
        <div className="hero_shape shape_9">
          <img src="/images/shape/shape-2.svg" alt="shape"/>
          </div>
        <div className="hero_shape shape_10">
          <img src="/images/shape/shape-4.svg" alt="shape"/>
          </div>
        <div className="hero_shape shape_11">
          <img src="/images/shape/shape-1.svg" alt="shape"/>
          </div>
        <div className="hero_shape shape_12">
          <img src="/images/shape/shape-2.svg" alt="shape"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="w-full lg:w-1/2">
              <div className="header_hero_content pt-150 lg:pt-0">
                <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">Você imagina, <span className="text-theme-color">nós Criamos</span></h2>
                <p className="mt-8 lg:mr-8">A primeira impressão é a que fica, deixe nos mostrar para seus clientes todo o seu potêncial e serviços oferecidos por sua empresa.</p>
                <div className="hero_btn mt-10">
                  <a className="main-btn" href="#work">Conheça nosso Portifólio</a>
                </div>
              </div> 
            </div>
          </div> 
        </div> 
        <div className="header_shape hidden lg:block"></div>

        <div className="header_image flex items-center">
          <div className="image 2xl:pl-25">
            <img src="/images/header-image.svg" alt="Header Image"/>
           </div>
        </div> 
      </div> 
    
    </>
    

  )
}




