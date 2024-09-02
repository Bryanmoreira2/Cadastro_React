import api from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import TrashCan from '../../assets/trash.svg'

import { Container, Title, ConteinerUsers, CardUsers, TrashIcon, AvatarUser } from './styles'

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }
    loadUsers();
  }, []);

  const navigate = useNavigate();

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    const newUsers = users.filter(user => user.id !== id)

    setUsers(newUsers)
  }

  return (
    <Container>
      <TopBackground />
      <Title>Lista de Usuários</Title>
      <ConteinerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
            <div >
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </div>
            <TrashIcon src={TrashCan} alt='icon-lixo' onClick={() => deleteUsers(user.id)} />
          </CardUsers>
        ))}
      </ConteinerUsers>
      <Button type='button' onClick={() => navigate('/')}>Voltar</Button>
    </Container>
  );
}

export default ListUsers;
