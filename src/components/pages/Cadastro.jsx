import '../../styles/cadastro.css';
import Logo from '../images/logo.png';

export function Cadastro() {

  return(
    <main>
      <section className="cadastro">
        <div className="section__cadastro">
          <div className="wrapper__cadastro">
            <div className="cadastro__header">
              <img src={Logo} className='cadastro__logo' />
              <h1 className='cadastro__title'>Cadastro</h1>
            </div>

            <div className='cadastro__form'>
              <label className='input__label'>
                <span>Nome de Usuário</span>
                <input type="text" name='username' className='input'/>
              </label>

              <label className='input__label'>
                <span>Senha</span>
                <input type="password" name='password' className='input' />
              </label>
            </div>

            <div className='cadastro__button'>
              <button type='button' className='cadastro__button'>
                <span>Cadastrar</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}