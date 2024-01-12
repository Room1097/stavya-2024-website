import './preloader.css'
import '../../assets/utils/utils.css'

const Preloader = () => {
  return (
    <div className='main'>
      <div className="clap-switch"></div>
      <div className="holder"></div>

      <div className="rest italic font-bold text-2xl">
        <div className="lower-switch"></div>
        <div className="heading"><h1 className='text-5xl pb-5 pt-2 pl-5'>Stavya 2024</h1></div>
        <div className="table">
            <div className="grid grid-cols-3 gap-0 h-20 row1">
                <div className="cell1 right-4 top-8 bottom-4 pl-5 pt-2"><span>scene</span></div>
                <div className="cell2 top-8 bottom-4 left-4 right-4 pl-5 pt-2"><span>take</span></div>
                <div className="cell3 left-4 top-8 bottom-4 pl-5 pt-2"><span>roll</span></div>
            </div>
            <div className="grid grid-cols-3 h-20 row2">
                <div className="cell1 col-span-2 bottom-4 top-4 right-4 pl-5 pt-2"><span>date</span></div>
                <div className="cell2 bottom-4 left-4 top-4 pl-5 pt-2"><span>sound</span></div>
            </div>
            <div className="row3 grid grid-cols-3 h-20">
                <div className="cell1 top-4 bottom-4 right-4 pt-2 pl-5"><span>prod.co.</span></div>
                <div className="cell2 col-span-2 top-4 left-4 bottom-4 text-xl pl-5 pt-2"><span>Literature and Cultural Committee</span></div>
            </div>
            
            <div className="row4 pb-6 pt-2 pl-5 top-4 bottom-4"><span>director</span></div>
            <div className="row5 pb-6 pt-2 pl-5 top-4 "><span>cameraman</span></div>
        </div>
            
      </div>
    </div>
  )
}

export default Preloader
