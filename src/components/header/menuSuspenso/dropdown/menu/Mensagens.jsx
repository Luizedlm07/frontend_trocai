import { useEffect, useState } from "react";
import { format } from 'date-fns';
import axios from "axios";
import './Mensagens.css'

function Mensagens() {
    const [mensagens, setMensagens] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const [email, setEmail] = useState('');
    const [destinatario, setDestinatario] = useState({});
    const [exibirUsuario, setExibirUsuario] = useState(false);
    const [exibirInputEmail, setExibirInputEmail] = useState(true);

    useEffect(() => {
        const exibirMensagens = async (destinatario) => {

            try {
                const url = `http://localhost:8000/plataforma/consultar_mensagem?id_remetente=1&id_destinatario=${encodeURIComponent(
                    destinatario.id
                )}`;

                const responsemsg = await axios.get(url)
                console.log(responsemsg.data)
                
                if (responsemsg.status === 200) {
                    setMensagens(responsemsg.data.reverse())
                }
            } catch (error) {
                console.error(error)
            }
        }
        exibirMensagens(destinatario);
    }, [destinatario]);



    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.get('http://localhost:8000/usuario/consultar_usuario', {
                params: {
                email: email,
            },
        });
            console.log(response.data);
            setDestinatario(response.data);

            if (response.status === 200) {
                setExibirInputEmail(false)
                setExibirUsuario(true)
            }
        } catch (error) {
            console.error(error);

        }
    };



    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };

    const handleSubmitMessages = async (e) => {
        e.preventDefault()
        try {
            const url = `https://trocai-api-gd42.onrender.com/plataforma/publicar_mensagem?conteudo=${encodeURIComponent(
                mensagem
            )}&id_remetente=1&id_destinatario=${encodeURIComponent(
                destinatario.id
            )}`;

            const response = await axios.post(url);

            if (response.status === 200) {
                console.log(response.data);
            }
        } catch (error) {
            console.error(error);

        }
    };

    const handleKeyDownMessages = (e) => {
        if (e.key === 'Enter') {
          handleSubmitMessages(e);
        }
    };

    return (
        <ul className='dropdown-menu'>    
            { exibirInputEmail && (           
                <form>
                    <label htmlFor="Email">Insira o email do usuário:</label>
                    <input type="email" className="email" name="email" placeholder="E-mail" onChange={(event) => setEmail(event.target.value)} onKeyDown={handleKeyDown}/>
                </form>
            )}
            { !exibirUsuario ? (<p><br/>Aguardando...</p>) : (
                <div>
                    <h3>{destinatario.nome_de_usuario}</h3>
                    <div className="conteinerMensagem">
                        
                        {mensagens.length === 0 ? (<p>Carregando...</p>) : (
                            mensagens.reverse().map((mensagem) =>
                                <div key={mensagem.id} className={`message ${mensagem.id_remetente === 1 ? 'sent' : 'received'}`}>
                                    <p className='mensagem'>{mensagem.conteudo}</p>
                                    <p className='horario'>{format(new Date(mensagem.data_envio), 'dd/MM/yyyy HH:mm')}</p>
                                </div>
                            )
                        )}
                    </div>
                    <form className="enviarMensagem">
                        <input type="text" className="enviarMensagemInput" name="mensagem" placeholder="Envie sua mensagem!" onChange={(event) => setMensagem(event.target.value)} onKeyDown={handleKeyDownMessages}/>
                        <ion-icon id="sendIcon" name="send-outline"></ion-icon>
                    </form>
                </div>
            )}
        </ul>
    )
};

export default Mensagens;