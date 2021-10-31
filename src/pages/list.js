import Link from 'next/link';



export default function List({ownersList}) {


   return (
      <div>
         {ownersList.map(e => (
            <div>
               <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
                  <a>Navigate to {e.ownerName}'s {e.vehicle}</a>
               </Link>
            </div>
         ))}

      </div>
   )
}

List.getInitialProps = async () => {
   const response = await fetch('http://localhost:4001/vehicles');
   const ownersList = await response.json();
   return {ownersList:ownersList}
}
