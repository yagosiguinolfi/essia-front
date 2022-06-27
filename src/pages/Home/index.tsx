import { Key, useEffect } from "react";
import { Diretorio as DiretorioHook } from "../../hooks/diretorio";
import { Arquivo as ArquivoHook } from "../../hooks/arquivo";
import { Diretorio as DiretorioInterface } from "../../interfaces/diretorio";
import { Arquivo as ArquivoInterface } from "../../interfaces/arquivo";
import { Container, Card, View } from "./styles";
import logoEssia from '../../assets/essia-logo.png';

function Home() {
  const { getAll: getAllDir, diretorios } = DiretorioHook();
  const { getAll: getAllArq, arquivos } = ArquivoHook();

  useEffect(() => {
    getAllDir();
    getAllArq();
  }, [getAllDir, getAllArq])

   function getNome(id:Number){
    return diretorios.find(item=>item.id === id)
  }

  function renderLine(item: any, index: Key) {
    return <tr key={index}>
      <td>
        <p>{item.id}</p>
      </td>
      <td className="nome">
        <p>{item.nome}</p>
      </td>
      <td>
        <p>{item?.idPai ? getNome(item.idPai)?.nome : getNome(item.idDiretorio)?.nome}</p>
      </td>
    </tr>
  }

  function renderCard(array: any, title: string) {
    return <Card className="child" style={{ margin: 30, maxWidth: '90%' }}>
      <View style={{ width: '100%', borderRadius: '10px 10px 0 0', backgroundColor: '#51bb74' }}>
        <h1 style={{ display: 'flex', alignSelf: 'center', margin: 5 }}>{title}</h1>
      </View>
      <View style={{width: '100%'}}>
        <table style={{ maxWidth: '100%' }}>
          <tr>
            <th><p>ID</p></th>
            <th className="nome"><p>Nome</p></th>
            <th><p>Diretório</p></th>
          </tr>
          {array?.map((item: any, index: Key) => renderLine(item, index))}
        </table>
      </View>
    </Card>
  }

  return (
    <Container>
      <Card style={{ margin: 30, width: '90%' }}>
        <View style={{
          width: '100%',
          borderRadius: '10px 10px 0 0',
          borderColor: '#51bb74',
          borderStyle: "solid",
          position: 'relative'
        }}>
          <img src={logoEssia} alt="logo-essia" style={{ position: 'absolute', left: 20, top: 0, width: 100 }} />
          <div style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: 'center',
            marginBottom: 20
          }}>
            <h1>Essia Test</h1>
          </div>
        </View>
        <View className="viewcards">
          {renderCard(diretorios, 'Diretórios')}
          {renderCard(arquivos, 'Arquivos')}
        </View>
      </Card>
    </Container>
  );
}

export default Home;