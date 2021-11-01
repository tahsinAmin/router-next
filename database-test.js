import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function setup({ data }) {
    const [formData, setFormData] = useState({})
    const [people, setPeople] = useState(data)
    console.log('Every Person', JSON.stringify(people));
}

setup();

export async function getServerSideProps() {
    const people = await prisma.person.findMany()

    return {
        props: {
            data: people
        }
    }
}