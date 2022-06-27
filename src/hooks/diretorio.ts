import { useCallback, useState } from "react";
import { Diretorio } from "../interfaces/diretorio";
import { DiretorioService } from "../service/diretorio";


export function Diretorio() {
  const [diretorios, setDiretorios] = useState<Diretorio[]>([]);

  const getAll = useCallback(async () => {
    const { status, data } = await DiretorioService.getAll();

    if (status !== 200 && status !== 201 ) throw Error();

    setDiretorios(data);

  }, [])

  return {
    diretorios,
    getAll,
    // createGrupoUsuarios,
    // alteraGrupoUsuarios,
}
}
