import Head from 'next/head'
import { useState } from 'react'
// import { Link } from 'next/link'

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()


export default function Homepage({ data }) {
   const [people, setPeople] = useState(data.people)
   const [vehicles, setVehicles] = useState(data.vehicles)

   console.log(vehicles);

   return (
      <div>
         <Head>
            <title>Owners with Vehicles</title>
            <link rel="icon" href="/favicon.io" />
         </Head>
         <main>
            <h1 className="text-2xl">Welcome to the list of Owners with a Vehicle!</h1>
            <ol className='list-decimal'>
                {people.map(p => (
                    <li key={p.id}>
                        <p><strong>{p.name}</strong></p>
                        <p>{p.email}</p>
                    </li>
                ))}
            </ol>

            <h1 className="text-2xl">Here are some list of vehicles</h1>
            <ol className='list-decimal'>
                {vehicles.map(v => (
                    <li key={v.id}>
                        <p><strong>{v.brand}</strong></p>
                        <p>{v.model}</p>
                    </li>
                ))}
            </ol>
            
         </main>
      </div>
   )
}


export async function getServerSideProps() {

   const people = await prisma.person.findMany()
   const vehicles = await prisma.vehicle.findMany()

   return {
       props: {
           data: {
              people,
              vehicles
           }
       }
   }
}
