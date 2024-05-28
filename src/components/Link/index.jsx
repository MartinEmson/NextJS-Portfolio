import Link from 'next/link';

export default function LinkComp({data, isActive, setIsActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
  
    return (
      <div 
      onMouseEnter={() => {setSelectedIndicator(href)}} 
      className='link relative flex items-center'
      onClick={() => setIsActive(false)}
    >
       
       <Link href={href} className='link'>
      {title}
    </Link>
      </div>
    )
}