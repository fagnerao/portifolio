import { RichText } from "prismic-reactjs";
import { GetServerSideProps } from 'next';
import Footer from '../../components/footer';
import MenuTopo from '../../components/menutopo';
import { createClient } from '../../prismicio';
import Head from 'next/head';

interface pageProps{
  
  post:{
  slug:string,
  image:string,
  title:string,
  content:string,
  updateAt:string}
}

export default function Post({post}: pageProps){
  //console.log(params)
  return (
    <>
    <Head>
      <title>Blog | Vector Zero</title>
    </Head>
    <MenuTopo/>
   <section id="blog" className="blog_area pt-120">
        <div className="container">
            <div className="row justify-center">
                <div className="w-full lg:w-1/2">
                    <div className="section_title text-center pb-6">
                        <h5 className="sub_title">Blog</h5>
                        <h4 className="main_title">{post.title}</h4>
                    </div> 
                </div>
            </div> 
<div className="flex">
        <div className="row justify-center ">
          
            <div className="post" key={post.slug}>
              <div className="single_blog mx-3 mt-8 rounded-xl bg-white transition-all duration-300 overflow-hidden">
                <div className="blog_image">
                <ul className="blog_meta flex justify-between">
                    <li className="text-body-color text-sm md:text-base">
                      Por: Fagner A
                    </li>
                    <li className="text-body-color text-sm md:text-base">
                      {post.updateAt}
                    </li>
                  </ul>
                <img src={post.image} className="w-full crop-blog"/>
                </div>
                <div className="blog_content p-4 md:p-5">
                  <p>{post.content}</p>
                </div>
              </div>
            </div>
        
        </div>
      </div>
      </div> 
    </section>
    <Footer/>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({params}:any) => {
  
  const client = createClient();
  let {slug} = params;
   
  const res = await client.getByUID("post", slug);
  
  const post = {
    slug:res.uid,
    title: RichText.asText(res.data.Title),
    content:RichText.asText(res.data.Content),
    image: res.data.image.url?res.data.image.url:'',
    updateAt: new Date(res.last_publication_date).toLocaleDateString('pt-BR',{
      day:'2-digit',
      month:'long',
      year:'numeric'})
  };


  return {
    props: {
      post,
          },
  };
}