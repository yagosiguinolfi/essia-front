import api from './api';
import { Diretorio } from '../interfaces/diretorio';

const getAll = () => api.get<Diretorio[]>('/diretorio')

const getOne = (id: Number) => api.get<Diretorio>(`/diretorio/${id}`)

const createDiretorio = (diretorio: Pick<Diretorio, 'nome' | 'idPai'>) => api.post('/diretorio', diretorio)

const updateDiretorio = (diretorio: Diretorio) => api.put(`/diretorio/`, diretorio)

const deleteDiretorio = (id: number) => api.delete(`/diretorio/${id}`)

export const DiretorioService = {
    getAll,
    getOne,
    createDiretorio,
    updateDiretorio,
    deleteDiretorio,
}