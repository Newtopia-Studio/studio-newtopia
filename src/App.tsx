import './App.css'
import BotonCtm from './components/BotonCtm'
import BoxInfo from './components/BoxInfo'

export default function App() {
  return (
    <div>
      <header style={{ width: '100%', padding: '1rem 2rem', backgroundColor: '#1a1a1a' }}>
        <img
          src='./NewtopiaStudioLogo.png'
          alt="Newtopia Studio"
          className='header-logo'
        />
      </header>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <main>
          <section id="estudio">
            <section className='descripcion'>
              <BoxInfo titulo='Descripcion'>
                <p>
                  <strong>Newtopia Studio</strong> es un estudio
                  que diseña, dibuja, compone y programa
                  novelas visuales
                </p>
              </BoxInfo>
            </section>

            <section id='integrantes'>
              <BoxInfo titulo='Integrantes'>
                <ul>
                  <li>BryLang-void</li>
                  <li>Damzelette</li>
                  <li>Fan</li>
                  <li>Hyuna</li>
                  <li>LenVainilla</li>
                  <li>Loki</li>
                  <li>Ness</li>
                  <li>Yam</li>
                  <li>Yuko</li>
                </ul>
              </BoxInfo>
            </section>
          </section>

          <br/>
          <section id='medievalock'>
              <h2>Medievalock</h2>
              <section className='descripcion'>
                <BoxInfo titulo='Descripcion'>
                  <p>
                    <strong>Medievalock</strong> es una 
                    novela visual sobre el anime <i>Blue Lock </i>
                    ambientada en la edad media 
                  </p>
                </BoxInfo>
              </section>

            <section id='imagenes-medievalock'>
            </section>

            <section id='descargas-medievalock'>
              <h3 className='descargas'>Descargas</h3>
              <BotonCtm 
                texto="Descargar en" 
                subtexto={<strong>itch.io</strong>} 
                url="https://newtopia-studio.itch.io/medievalock" 
              />
              <BotonCtm
                texto="Descargar en"
                subtexto={<strong>F-Droid</strong>}
                url="https://f-droid.org/packages/com.newtopia.medievalock"
              />  
            
              <br/>
              <BotonCtm
                texto="Ver codigo"
                url="https://github.com/Newtopia-Studio/medievalock" 
              />
            </section>
          </section>
        </main>

        <footer style={{ marginTop: '3rem', color: '#666' }}>
          <p>© 2026 Newtopia Studio / BryLang-void</p>
        </footer>
      </div>
    </div>
  )
}
