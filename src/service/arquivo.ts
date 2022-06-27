import api from './api';
import { Arquivo } from '../interfaces/arquivo';

const getAll = () => api.get<Arquivo[]>('/arquivo')

const getOne = (id: Number) => api.get<Arquivo>(`/arquivo/${id}`)

const createArquivo = (arquivo: Pick<Arquivo, 'nome' | 'idDiretorio'>) => api.post('/arquivo', arquivo)

const updateArquivo = (arquivo: Arquivo) => api.put(`/arquivo/`, arquivo)

const deleteArquivo = (id: number) => api.delete(`/arquivo/${id}`)

export const ArquivoService = {
    getAll,
    getOne,
    createArquivo,
    updateArquivo,
    deleteArquivo,
}