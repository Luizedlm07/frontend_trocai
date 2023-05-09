import '../../../globalColors.module.css'
import './Dashboard.css'
import DadosUsuario from './dadosUsuario/DadosUsuario'
import HistoricoUsuario from './historicoUsuario/HistoricoUsuario'


function Dashboard () {
    return (
            <div className='conteinerDashboard'>
                    <DadosUsuario />
                    <HistoricoUsuario />
            </div>
    )
};

export default Dashboard;