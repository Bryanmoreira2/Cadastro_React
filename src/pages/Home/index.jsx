import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import {
  Container,
  Form,
  Title,
  ContainerInputs,
  Input,
  InputLabel,
} from "./styles"; // Ajuste o caminho conforme necessário
import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';

function Home() {

  const intupNeme = useRef()
  const intupAge = useRef()
  const intupEmail = useRef()

  const navigate = useNavigate();


  async function registerNewUser() {

    const data = await api.post('/usuarios', {
      email: intupEmail.current.value,
      age: parseInt(intupAge.current.value),
      name: intupNeme.current.value
    })
    console.log(data)

  }


  return (
    <>
      <Container>
        <TopBackground />

        <Form>
          <Title>Cadastrar Usuário</Title>
          <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do Usuário" ref={intupNeme} />
            </div>
            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do Usuário" ref={intupAge} />
            </div>
          </ContainerInputs>
          <div style={{ width: '100%' }}>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do Usuário" ref={intupEmail} />
          </div>
          <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar Usuário</Button>
          <Button type='button' onClick={() => navigate('/lista')}>Ver Lita de Usuário </Button>
        </Form >
      </Container >
    </>
  );
}

export default Home;
