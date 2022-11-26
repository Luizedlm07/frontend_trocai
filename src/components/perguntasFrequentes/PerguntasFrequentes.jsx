import './PerguntasFrequentes.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'


function PerguntasFrequentes(props){
    return(
        <div>
            <div className='boxPerguntasFrequentes'>
                <div className='box'>
                    <div>
                    </div>
                    <h2 className='tituloPerguntas'> PERGUNTAS FREQUENTES </h2>
                </div>
            </div>
            <div> 
            <Accordion display={'flex'} flexDirection={'column'} justifyContent={'center'} w="1200px" marginLeft={'180px'} marginBottom={'80px'}>
                <AccordionItem>
                    <h2 className='perguntas' >
                    <AccordionButton>
                        <Box flex='1' textAlign='center' color='#451776' h="40px" m={4} fontSize="25px" fontFamily="Oswald">
                        Como funciona o pagamento?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={8} fontSize='20px' margin={"8px"} textAlign="center">
                    Você poderá efetuar o pagamento utilizando cartão de crédito ou débito, PIX ou boleto.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='center' color='#451776' h="40px" w="40px" fontSize="25px" fontFamily="Oswald">
                        Quais os riscos de utilizar o Rob3?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize='20px' margin={"8px"} textAlign="center">
                    O Rob3 não garante estabilidade no retorno adquirido pelo método, ele auxiliará o usuário na compra da ação PETR3 utilizando dados de eventos anteriores, o mesmo também indicará o melhor momento para venda, contudo, o usuário é o responsável pela ação da compra.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='center' color='#451776' h="40px" w="40px" fontSize="25px" fontFamily="Oswald">
                        Tem alguma taxa inicial para usar o Rob3?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize='20px' margin={"8px"} textAlign="center">
                    Não, contamos com a oferta de 7 dias grátis para o usuário testar a usabilidade e adaptação com o Rob3, após esse período será taxado o valor do plano escolhido.
                    </AccordionPanel>
                </AccordionItem>
                </Accordion>
                </div>
        </div>
    )
}

export default PerguntasFrequentes;