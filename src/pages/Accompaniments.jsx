import { useState } from 'react'
import { useData } from "../hooks/useData";
import { Link } from "react-router-dom";
import { addToSale } from '../hooks/useSale'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import trashImg from "../assets/images/trashIcon.svg";
import pencilImg from "../assets/images/pencilIcon.svg";
import searchImg from '../assets/images/searchIcon.svg';
import addToSaleImg from '../assets/images/addSaleIcon.svg'

import { ButtonLink } from "../components/ButtonLink";

export function Accompaniments() {
  const baseUrl = "http://localhost:3001/accompaniments";

  const [search, setSearch] = useState('');
  
  const data = useData(baseUrl, 'name', search);

  const notify = () =>
    toast.success('Acompanhamento adicionada ao carrinho!', {
      position: 'bottom-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  
  const accompanimentsList = data.map((accompaniment) => {
    return (
      <tr className="border-t border-gray-400" key={accompaniment.id}>
        <td className="py-2 px-8 text-center">{accompaniment.name}</td>
        <td className="py-2 px-8 text-center">{accompaniment.description}</td>
        <td className="py-2 px-8 text-center">{accompaniment.price}</td>
        <td className="flex py-2 px-8 text-center">
          <Link to={`/accompaniments/update/${accompaniment.id}`} className="mr-2">
            <img src={pencilImg} alt="ícone de caneta" className="h-6" />
          </Link>
          <Link to={`/accompaniments/delete/${accompaniment.id}`} className="mr-2">
            <img src={trashImg} alt="ícone de lixeira" className="h-5" />
          </Link>
          <button onClick={e => addToSale(accompaniment.name, accompaniment.price, notify)}>
            <img src={addToSaleImg} alt="Ícone de carrinho com um sinal de adição" />
          </button>
          <ToastContainer />
        </td>
      </tr>
    );
  });

  return (
    <main className=" main flex flex-col items-center bg-projectGray-25">
      <div className="mt-6 border-2 border-red-700 bg-red-700 flex flex-row rounded-2xl overflow-hidden">
        <input
          id="search"
          name="search"
          value={search}
          type="text"
          className="rounded-2xl pl-2 outline-none w-52"
          placeholder="Insira o Nome"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={searchImg} alt="Ícone de lupa" className="p-1" />
      </div>
      <div className="mt-8 border border-gray-400 rounded-xl overflow-hidden shadow-md">
        <table className="table-fixed">
          <thead className="bg-gray-300">
            <tr>
              <th className="py-2 px-8 text-center">Nome</th>
              <th className="py-2 px-8 text-center">Descrição</th>
              <th className="py-2 px-8 text-center">Preço</th>
              <th className="py-2 px-8 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white">{accompanimentsList}</tbody>
        </table>
      </div>
      <ButtonLink to={`/accompaniments/add`} color="green">
        Novo acompanhamento
      </ButtonLink>
    </main>
  );
}
