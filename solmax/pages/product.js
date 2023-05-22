import ProductCard from './components/productCard';
import * as contentful from 'contentful';
// import './components/productCard.module.css'


// const contentful = require('contentful')
// console.log(contentful+"contentful test")

let client =  contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN

}
);

export default function ProductPage({product}){

  // console.log(product)
    return <div>
      <div className='title'>
      <h1>Case Studies</h1>
        </div>
{product.map(item =>(
  <ProductCard key={item.sys.id} product={item}/>
  
    ))}
      </div>
}

export async function getStaticProps() {
    const prod = await client.getEntries({content_type:'products'})
    const item = await client.getEntry({content_type:'products'})

    
    // console.log(item.fields.body.content)

    return {
      props: {
        product: prod.items,
        
      
        // body: blog.fields.body
      }, // will be passed to the page component as props
    };
  }

  {/* {console.log(product)} */}

{/* <ProductCard product={product}></ProductCard> */}