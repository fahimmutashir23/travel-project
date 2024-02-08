const Pdf = () => {
  const date = '01/2/2024'
  return (
    <div className="border border-black p-10 ">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl text-green-600 font-semibold">Ours Travels</h1>
          <h3>Dhanmondi-27, Dhaka-1205</h3>
          <h3>Bangladesh</h3>
          <h3>Phone: +880 1581 868984</h3>
        </div>
        <div>
          <h1 className="text-4xl text-gray-500 font-semibold uppercase">Invoice</h1>
          <h4>
            Invoice: <span className="ml-10 text-gray-800">#123524</span>
          </h4>
          <h4>
            Issue date: <span className="ml-10 text-gray-800">{date}</span>
          </h4>
        </div>
      </div>

      <div className="mt-16">
        <h4>
          Name: <span></span>
        </h4>
        <h4>
          Email: <span></span>
        </h4>
        <h4>
          Phone: <span></span>
        </h4>
      </div>

      <div>
        <table border="4" className="w-full">
          <thead>
            <tr className="border bg-slate-400 text-white flex">
              <th className="text-left px-4 py-1 border w-12">Sl</th>
              <th className="border flex-1">Descriptions</th>
              <th className="border w-2/12">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border h-[100px] flex">
              <td className="px-4 py-2 border w-12 font-semibold text-xl">1.</td>
              <td className="border flex-1 px-4 py-2 text-xl font-semibold">Description 1</td>
              <td className="border w-2/12 px-4 py-2 text-xl font-semibold">$10.00</td>
            </tr>
            <tr className="h-[50px] flex">
              <td className="border flex-1 px-4 py-2 text-xl text-right italic">Thank you for your transition</td>
              <td className="border w-4/12 px-4 py-2 text-xl font-semibold flex justify-around"><span>Total:</span><span>$10.00</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center text-center mt-10">
        <p className="font-bold">If you Have any question about this Invoice, please contact us via this email. <br /> Must Included Your Name, Email and Phone number</p>
      </div>
    </div>
    
  );
};

export default Pdf;
