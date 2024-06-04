import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LinkComp({data, isActive, setIsActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
    const router = useRouter();

    const handleClick = (e) => {
      e.preventDefault();
      setIsActive(false);
      setTimeout(() => {
        router.push(href);
      }, 500); // Adjust delay as needed
    };

    return (
      <div 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        className='link relative flex items-center'
        onClick={handleClick}
      >
        <Link href={href}>
        {title}
        </Link>
      </div>
    )
}