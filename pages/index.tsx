
import { createClient } from '../prismicio'

import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import About from '../components/about/index'
import Footer from '../components/footer/index'
import Header from '../components/header/index'
import Services from '../components/services/index'
import MenuTopo from '../components/menutopo'

import {FaArrowCircleRight} from 'react-icons/fa';



export const getStaticProps: GetStaticProps = async () => {
  // Client used to fetch CMS content.
  const client = createClient()

  // Colecting data from posts.
  const response = await client.getAllByType('post',{limit:3,})

  const page = response.map(post =>{
    return {
      slug:post.uid,
      title: post.data.Title[0].text,
      content:post.data.Content[0].text,
      image: post.data.image.url?post.data.image.url:'',
      updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
        day:'2-digit',
        month:'long',
        year:'numeric'
      }),
      
    }
  })

  // Colecting data from portfolio.
  const responsePortfolio = await client.getAllByType('porfifolio',{limit:8})

  const portifolio = responsePortfolio.map(porfifolio =>{
    return {
      id:porfifolio.uid,
      title: porfifolio.data.title,
      content:porfifolio.data.content[0].text,
      image: porfifolio.data.image.url?porfifolio.data.image.url:'',
      link: porfifolio.data.link.url,
    }
  })

  return {
    props: { 
      page,portifolio, 
    },
    redirect: 60 * 60, // 60 minutes
  }
}
    



interface pageProps{
  portifolio:{
  map(arg0: (port: any) => JSX.Element): import("react").ReactNode
  id:string,
  image:string,
  title:string,
  content:string,
  link:string},

  page:{
    map(arg0: (pg: any) => JSX.Element): import("react").ReactNode
    slug:string,
    image:string,
    title:string,
    content:string,
    updateAt:string}
}

const Home = ({ page,portifolio }:pageProps) => {
  //console.log(Array.isArray(portifolio)); 
   return (
    <>
    <Head>
      <title>Inicio | Vector Zero</title>
    </Head>
    <section className="header_area">
      <MenuTopo/>
      <Header/>
    </section>
    <About/>
    <Services/>
    {/* portfolio */}
    <section id="work" className="work_area bg-blue pt-120 pb-120">
    <div className="container">
        <div className="row justify-center">
            <div className="w-ull lg:w-1/2">
                <div className="section_title text-center pb-6">
                    <h5 className="sub_title">Nossos Trabalhos</h5>
                    <h4 className="main_title">Alguns Projetos Finalizados</h4>
                </div> 
            </div>
        </div> 
    </div> 
    <div className="container">
        <div className="work_wrapper relative">
            <div className="row work_active">
            {portifolio.map((port) => (
                <div className="w-full lg:w-4/12" key={port.id}>
                    <div className="single_item mx-auto">
                        <div className="single_work mx-3">
                            <div className="work_image">
                            <img src={port.image} className="w-full crop-portifolio"/>
                            </div>
                            <div className="work_content">
                                <a href={port.link} target="_blank" className="arrow" rel="noreferrer"><i className="lni "><FaArrowCircleRight/></i></a>
                                <h4 className="work_title text-xl md:text-2xl"><a href="#">{port.title}</a></h4>
                                <p className="mt-2">{port.content}</p>
                            </div>
                        </div>
                    </div> 
                </div>
            ))}
            </div> 
        </div>
    </div> 
</section>
{/* Blog */}
<section id="blog" className="blog_area pt-120">
        <div className="container">
            <div className="row justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="section_title text-center pb-6">
                        <h5 className="sub_title">Blog</h5>
                        <h4 className="main_title">Notícias e Informações</h4>
                    </div> 
                </div>
            </div> 
<div className="flex">
        <div className="row justify-center ">
          {page.map(pg => (
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12" key={pg.slug}>
              <div className="single_blog mx-3 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden hover:shadow-lg">
                <div className="blog_image">
                <img src={pg.image} className="w-full crop-blog"/>
                </div>
                <div className="blog_content p-4 md:p-5">
                  <ul className="blog_meta flex justify-between">
                    <li className="text-body-color text-sm md:text-base">
                      Por: Fagner A
                     </li>
                    <li className="text-body-color text-sm md:text-base">
                      {pg.updateAt}
                    </li>
                  </ul>
                  <h3 className="blog_title">
                    <Link href={`posts/${pg.slug}`}>{pg.title}</Link>
                  </h3>
                  <p>{pg.content.substring(0, 150)}</p>
                  <Link href={`posts/${pg.slug}`}>
                    <a className="btn-post">
                    Leia mais
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div> 
    </section>
    <Footer/>
    </>
  )
}

export default Home
