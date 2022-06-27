import { useCallback, useState } from "react";
import { Arquivo } from "../interfaces/arquivo";
import { ArquivoService } from "../service/arquivo";


export function Arquivo() {
  const [arquivos, setArquivos] = useState<Arquivo[]>([]);

  const getAll = useCallback(async () => {
    const { status, data } = await ArquivoService.getAll();

    if (status !== 200 && status !== 201 ) throw Error();

    setArquivos(data);

  }, [])

  return {
    arquivos,
    getAll,
    // createGrupoUsuarios,
    // alteraGrupoUsuarios,
}
}
