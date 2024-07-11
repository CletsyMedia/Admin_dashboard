import Rechart from './recharttemp'

const chart = () => {
  return (
    <div className='bg-bgSoft rounded-md shadow-sm'>
      <h2 className='my-4 ml-6 text-textSoft'>Weekly Recap</h2>
      <div className="h-[40vh]">
      <Rechart />
      </div>
    </div>
  )
}

export default chart