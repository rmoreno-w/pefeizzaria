import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { changeHandler, addData } from '../../hooks/useCrud';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from '../../components/Button';
import { OutlinedButton } from '../../components/OutlinedButton';
import { FormInput } from '../../components/FormInput';

export function AddEmployee() {
  const baseUrl = 'http://localhost:3001/employees';
  let history = useHistory();

  const [employee, setEmployee] = useState({
    name: '',
    cpf: '',
    birth: '',
    admission: '',
  });

  function clearHandler() {
    setEmployee({
      name: '',
      cpf: '',
      birth: '',
      admission: '',
    });
  }

  const notify = () =>
    toast.success('Funcionário criado com sucesso!', {
      position: 'bottom-center',
      onClose: () => history.push('/employees'),
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  return (
    <main className="main bg-projectGray-25 flex flex-col items-center">
      <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
        <div className="p-8">
          <FormInput
            id="name"
            name="name"
            type="text"
            label="Nome"
            placeholder="Informe o nome"
            value={employee.name}
            onChange={(e) => setEmployee(changeHandler(e, employee))}
          />
          <FormInput
            id="cpf"
            name="cpf"
            type="text"
            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
            label="CPF"
            placeholder="Informe o CPF"
            value={employee.cpf}
            onChange={(e) => setEmployee(changeHandler(e, employee))}
          />
          <FormInput
            id="birth"
            name="birth"
            type="date"
            label="Nascimento"
            value={employee.birth}
            onChange={(e) => setEmployee(changeHandler(e, employee))}
          />
          <FormInput
            id="admission"
            name="admission"
            type="date"
            label="Admissão"
            value={employee.admission}
            onChange={(e) => setEmployee(changeHandler(e, employee))}
          />
          <div className="mt-4 flex justify-center space-x-5">
            <Button color="green" onClick={() => addData(baseUrl, employee, clearHandler, notify)}>
              Confirmar
            </Button>
            <OutlinedButton color="projectRed-default" onClick={() => clearHandler()}>
              Limpar
            </OutlinedButton>
            <ToastContainer />
          </div>
        </div>
      </div>
    </main>
  );
}
