// Server actions testing with nextjs
const Page = () => {
  const handleForm = async ()=>{
    "use server"
    console.log("Hello")
  }
  return (
    <div>
      <form action={handleForm}>
        <input type="text" className="input border-blue-800" />
        <button className="btn bg-green-500">Send</button>
      </form>
    </div>
  );
};

export default Page;
