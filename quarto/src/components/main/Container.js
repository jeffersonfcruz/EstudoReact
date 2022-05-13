import Mensagem from "./Mensagem";
import Conteudo from "./Conteudo";

export default function Container() {
  return (
    <div className="container">
      <Mensagem />
      <Conteudo />
    </div>
  );
}
