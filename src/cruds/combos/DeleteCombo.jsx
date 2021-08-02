import { useHistory } from "react-router-dom";
import { deleteData } from "../../hooks/useCrud";
import { useDataDelete } from "../../hooks/useDataDelete";

import { Button } from "../../components/Button";
import { FormInput } from "../../components/FormInput";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function DeleteCombo(props) {
  const baseUrl = `http://localhost:3001/combos/${props.match.params.id}`;
  const backUrl = "/combos";
  const history = useHistory();

  const combo = useDataDelete(
    {
      name: "",
      products: "",
      price: "",
    },
    baseUrl
  );

  const notify = () =>
    toast.error("Combo excluído!", {
      position: "bottom-right",
      onClose: () => history.push(backUrl),
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  return (
    <main className="main bg-yellow-100 flex flex-col items-center">
      <div className="w-96 rounded-lg shadow-lg bg-white mt-8 border border-gray-400">
        <div className="p-8">
          <FormInput
            id="name"
            name="name"
            type="text"
            label="Nome"
            value={combo.name}
            disabled
          />
          <FormInput
            id="products"
            name="products"
            type="text"
            label="Produtos"
            value={combo.products}
            disabled
          />
          <FormInput
            id="price"
            name="price"
            type="text"
            label="Preço"
            value={combo.price}
            disabled
          />
          <div className="mt-4 flex justify-center">
            <Button color="red" onClick={() => deleteData(baseUrl, notify)}>
              Excluir
            </Button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </main>
  );
}
