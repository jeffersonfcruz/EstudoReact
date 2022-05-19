export default function Conteudo(props) {
  const passardados = (pr) => {
    props.acao (pr)
  };
  return (
    <div className="conteudo">
      <h2>Produtos</h2>
      <div className="produtos">
        {
          props.dados.map((itens, ix)=>(
            <div key={ix} onClick={()=> passardados(itens.msg)}>
              <h3>{itens.nome}</h3>
              <p>{itens.descricao}</p>
              <p>{itens.categoria}</p>
              <p className="preco">R$ {itens.preco}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
