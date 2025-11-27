const domain = import.meta.env.WP_DOMAIN
const apiUrl = `${domain}/wp-json/wp/v2`

export const getLastPosts = async ({perPage=10}:{perPage?:number}={})=>{
  const response = await fetch(`${apiUrl}/posts?per_page=${perPage}&_embed`)
  if (!response.ok) throw new Error("Failed to fetch latest posts")

  const results = await response.json()
  if (!results.length) throw new Error("No posts found")
  
  console.log(results)

  const posts = results.map((post:any)=>{
    // const {
    //   title: { rendered: title },
    //   excerpt: { rendered: excerpt },
    //   date,
    //   slug,
      
    // } = post

    const title = post.title.rendered
    const excerpt = post.excerpt.rendered
    const {date, slug} = post
    const image = post._embedded['wp:featuredmedia'][0].source_url

    return { title, excerpt, date, slug, image }
  })
  

  return posts
}

export const getAllPostSlugs = async ()=>{
  const response = await fetch(`${apiUrl}/posts?per_page=1000`)
  if(!response.ok) throw new Error("Failed to fetch post slugs")
  
  const results = await response.json()
  if (!results.length) throw new Error("No post slugs found")
  
  const slugs = results.map((post:any) => post.slug)
  return slugs
}

export const getPostInfo = async (slug: string)=>{
  const response = await fetch(`${apiUrl}/posts?slug=${slug}&_embed`)
  if (!response.ok) throw new Error("Failed to fetch post info")
  
  const [data] = await response.json()
  const {title: {rendered: title}, content: {rendered: content}, yoast_head_json: seo} = data
  return {title, content, seo}
}