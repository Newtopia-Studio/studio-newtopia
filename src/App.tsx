import './App.css';
import EnlaceCtm from './components/EnlaceCtm';
import BoxInfo from './components/BoxInfo';
import { Indice } from './components/Indice';

export default function App() {
  return (
    <div>
      <header style={{ width: '100%', padding: '1rem 2rem', backgroundColor: '#1a1a1a' }}>
        <img
          src='./NewtopiaStudioLogo.png'
          alt="Newtopia Studio"
          className='header-logo'
        />
        <Indice/>
      </header>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <main>
          <section id="estudio">
            <h2><u>Newtopia Studio</u></h2>
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

            <section id='redes'>
              <h3>Redes Sociales</h3>
              <EnlaceCtm
                texto='TikTok'
                url='https://tiktok.com/@studio.newtopia'
              />
              <EnlaceCtm
                texto='Instagram'
                url='https://instagram.com/studio.newtopia'
              />
              <EnlaceCtm
                texto='Youtube'
                url='https://youtube.com/channel/UCUxt4wFdDfTIlXvuhxqE4ww'
              />
              <br/>
              <EnlaceCtm
                texto='Github'
                url='https://github.com/Newtopia-Studio'
              />
              <EnlaceCtm
                texto='Correo'
                url='mailto:studio.newtopia@gmail.com'
              />
            </section>
          </section>

          <br/>
          <section id='proyectos'>
            <h2><u>Proyectos</u></h2>
            <section id='medievalock'>
                <h3>Medievalock</h3>
                <section id='medievalock-desc' className='descripcion'>
                  <BoxInfo titulo='Descripcion'>
                    <p>
                      <strong>Medievalock</strong> es una 
                      novela visual sobre el anime <i>Blue Lock </i>
                      ambientada en la edad media 
                    </p>
                  </BoxInfo>
                </section>
  
              <section id='medievalock-img' className='imagenes'>
                <h3>Imagenes</h3>
                <img
                  src='./main_menu.png'
                  alt='Menu Principal'
                  className='menu_principal'
                />
              </section>
  
              <section id='medievalock-dnlds' className='descargas'>
                <h3 className='descargas'>Descargas</h3>
                <EnlaceCtm 
                  texto="Descargar en" 
                  subtexto={<strong>itch.io</strong>} 
                  url="https://newtopia-studio.itch.io/medievalock" 
                />
                <EnlaceCtm
                  texto="Descargar en"
                  subtexto={<strong>F-Droid</strong>}
                  url="https://f-droid.org/packages/com.newtopia.medievalock"
                />  
            
                <br/>
                <EnlaceCtm
                  texto="Ver codigo"
                  url="https://github.com/Newtopia-Studio/medievalock" 
                />
              </section>
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
