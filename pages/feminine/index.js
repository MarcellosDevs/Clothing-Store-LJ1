/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { ProdutosWomen } from "../../components/Produtoswomen";
import { ButtonComprar } from "../../components/Button";

export default function Femenine() {
  const [resposta, setResposta] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://clothing-store2022-default-rtdb.firebaseio.com/femininas.json"
      )
      .then(function (response) {
        setResposta(response?.data);
      });
  }, []);


  return (
    <S.Container>
        <S.TextBanner>Moda Feminina</S.TextBanner>
      <S.BannerDiv>
        <S.BannerF src="https://moikana.vteximg.com.br/arquivos/ids/155491/banner-moda.jpg?v=636371152658330000" alt=""/>
      </S.BannerDiv>
      <ProdutosWomen />
      <S.Card>
        {resposta &&
          Object.values(resposta).map((item) => {
            return (
              <>
                <S.Box>
                  <S.BoxCard>
                    <S.WidImg>
                      <S.Imag src={item.img} />
                    </S.WidImg>
                    <p>{item.roupa}</p>
                    <p>{item.valor}</p>
                    <p>{item.categoria}</p>
                    <ButtonComprar/>
                  </S.BoxCard>
                </S.Box>
              </>
            );
          })}
      </S.Card>
    </S.Container>
  );
}
