import './App.scss'
import MainPage from '../Pages/Mainpage'
function App()
{
    return (
        <>
           <section className="container sec_cont" style={{'height': window.innerHeight }}>

              <MainPage/>

           </section>
        </>
    )
}
export default App