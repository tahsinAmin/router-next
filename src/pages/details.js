import Link from 'next/link';

export default function details() {
   const people = [
      {v:'car', name: 'bruno'},
      {v:'plane', name: 'John'},
      {v:'airplane', name: 'Mick'}
   ]
   return (
      <div>
         {people.map(e => (
            <div>
               <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
                  <a>Navigate to {e.name}'s {e.v}</a>
               </Link>
            </div>
         ))}

      </div>
   )
}
