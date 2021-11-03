import Head from 'next/head'
import { useState } from 'react'

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()


export default function Homepage({ data }) {
   const [people, setPeople] = useState(data)
   console.log(people);
   return (
      <div>
         <Head>
            <title>Owners with Vehicles</title>
            <link rel="icon" href="/favicon.io" />
         </Head>
         <main>
            <h1 className="text-2xl">Welcome to the list of Owners with a Vehicle!</h1>

         </main>
      </div>
   )
}


export async function getServerSideProps() {

   const people = await prisma.person.findMany()

   return {
       props: {
           data: people
       }
   }
}