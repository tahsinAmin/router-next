export default function Vehicles({ list }) {
   return (
      <table className="border-collapse border border-green-800 ...">
         <thead>
            <tr>
               <th className="text-2xl border border-green-600 ...">BRAND</th>
               <th className="border border-green-600 ...">MODEL</th>
            </tr>
         </thead>
         <tbody>
         {list.map((v) => (
            <tr key={v.id}>
               <td className="border border-green-600 ...">{v.brand}</td>
               <td className="border border-green-600 ...">{v.model}</td>
            </tr>
         ))}
         </tbody>
      </table>
   )
}

Vehicles.getInitialProps = async () => {
   const response = await fetch('http://localhost:3000/api/vehicles');
   const json = await response.json();
   return { list: json };
};