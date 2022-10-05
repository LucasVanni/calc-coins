import "./App.css";
import { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";

function App() {
  const [valueSendByUser, setValueSendByUser] = useState(0);
  const [valueEASportsTaxa, setValueEASportsTaxa] = useState(0);
  const [howMuchProfit, setHowMuchProfit] = useState(0);
  const [valueToSell, setValueToSell] = useState(0);

  useEffect(() => {
    setValueEASportsTaxa(valueSendByUser * (5 / 100));
  }, [valueSendByUser]);

  useEffect(() => {
    setValueToSell(
      Number(valueSendByUser) +
        Number(valueEASportsTaxa) +
        Number(howMuchProfit)
    );
  }, [valueSendByUser, howMuchProfit]);

  return (
    <div className="App">
      <div
        style={{
          fontWeight: "bold",
          width: "40%",
        }}
      >
        <p>
          Essa calculadora foi criada com o objetivo de mostrar o valor que
          precisará vender seus jogadores para obter lucro efetivo no FIFA 23 em
          seus trades
        </p>
      </div>

      <div
        style={{
          background: "#4123b9",
          padding: "20px",
          margin: "2px",
          borderRadius: "20px",
          fontSize: "28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
          <p
            style={{
              marginTop: "5px",
              marginBottom: "7px",
              paddingBottom: "10px",
              textAlign: "center",
            }}
          >
            Por quanto você comprou o jogador:
          </p>
          <CurrencyInput
            style={{
              background: "transparent",
              color: "#e3f0f3",
              fontSize: "28px",
              border: "2px solid #e3f0f3",
              borderRadius: "20px",
              paddingLeft: "20px",
            }}
            defaultValue={valueSendByUser}
            onValueChange={(value) => setValueSendByUser(value)}
          />
        </div>

        <p style={{ marginTop: "20px" }}>
          Porcentagem da EA: <b>5%</b>
        </p>

        <p style={{ marginTop: "15px" }}>
          Calculo da Taxa da EA com base no valor digitado:{" "}
          {parseFloat(valueEASportsTaxa)} coins
        </p>

        <div
          style={{
            marginTop: "15px",
            display: "flex",
            flexDirection: "row",
            gap: "15px",
          }}
        >
          <p
            style={{
              marginTop: "5px",
              marginBottom: "7px",
              paddingBottom: "10px",
              textAlign: "center",
            }}
          >
            Quanto quero ganhar em cima?
          </p>
          <CurrencyInput
            style={{
              background: "transparent",
              color: "#e3f0f3",
              fontSize: "28px",
              border: "2px solid #e3f0f3",
              borderRadius: "20px",
              paddingLeft: "20px",
            }}
            defaultValue={howMuchProfit}
            onValueChange={(value) => setHowMuchProfit(value)}
          />
        </div>

        <div>
          <p style={{ marginTop: "20px" }}>
            Valor ideal de venda: {parseFloat(valueToSell)} coins.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
