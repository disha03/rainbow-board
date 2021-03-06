import { NavLink } from 'react-router-dom';
import { version } from '../../package.json';
import Download from './Download/Download';

function Main({toggleTheme, getTheme}) {
  return (
    <div id="main">
      <nav>
        <div className="nav-wrapper header">
          <span className="logo-text brand-logo center brand-text">Rainbow Board</span>
        </div>
      </nav>
      <div className="container center">
        <div className="row">
          <p>
            Open Source, Cross Platform Whiteboard software made with React JS, Electron and GPU.JS Real Renderer.
          </p>
        </div>

        <div className="row">
          <div className="col offset-s2 s4">
            <NavLink to="/pages" className="btn center brand-text">
              <i className="fa fa-paint-brush left" /> Start New
            </NavLink>
          </div>

          <div className="col s4">
            <NavLink to="/new" className="btn center brand-text">
              <i className="material-icons left">new_releases</i> What's New!
            </NavLink>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <Download />
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col s6">
              <div className="row">
                <h5 className="brand-text">Additional Links</h5>
              </div>
              <div className="row">
                <ul>
                  <li><a href="https://github.com/HarshKhandeparkar/rainbow-board/issues/new/choose" target="_blank" rel="noreferrer">Feedback or Questions</a></li>
                  <li><a href="https://github.com/HarshKhandeparkar/rainbow-board/" target="_blank" rel="noreferrer">Star on Github</a></li>
                  <li><a href="https://discord.gg/FEpMS43UwR" target="_blank" rel="noreferrer">Chat on Discord</a></li>
                </ul>
              </div>
              <div className="row">
                <div className="switch" title="Change Theme">
                  <label>
                    <i className="fa fa-sun-o brand-text" />
                    <input type="checkbox" onInput={e => toggleTheme()} defaultChecked={getTheme() === 'dark'} />
                    <span className="lever" />
                    <i className="fa fa-moon-o brand-text" />
                  </label>
                </div>
              </div>
            </div>
            <div className="col s6">
              <h5 className="brand-text">Made Using</h5>
              <ul>
                <li><a href="https://electronjs.org" target="_blank" rel="noreferrer">Electron</a></li>
                <li><a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a></li>
                <li><a href="https://gpu.rocks" target="_blank" rel="noreferrer">GPU.js</a></li>
                <li><a href="https://harshkhandeparkar.github.io/gpujs-real-renderer" target="_blank" rel="noreferrer">GPU.js Real Renderer</a></li>
                <li><NavLink to="/credits">Full Credits</NavLink></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright container-fluid center z-depth-2">
          <p className="center" style={{width: '100%'}}>
            v{version}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Main;
